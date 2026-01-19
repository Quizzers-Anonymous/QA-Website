const crypto = require("node:crypto");
const { Readable } = require("node:stream");

const SIGNING_SECRET = process.env.TEAM_IMAGE_SIGNING_SECRET;
const BLOB_BASE_URL = process.env.TEAM_IMAGE_BLOB_BASE_URL;
const BLOB_READ_TOKEN = process.env.TEAM_IMAGE_BLOB_READ_TOKEN;
const REFERER_HOSTS = (process.env.TEAM_IMAGE_REFERER || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function ensureEnv(value, name) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function createSignaturePayload(key, expires) {
  return `${key}:${expires}`;
}

function signKey(key, expires) {
  const secret = ensureEnv(SIGNING_SECRET, "TEAM_IMAGE_SIGNING_SECRET");
  return crypto
    .createHmac("sha256", secret)
    .update(createSignaturePayload(key, expires))
    .digest("hex");
}

function timingSafeCompare(expected, provided) {
  const expectedBuffer = Buffer.from(expected, "hex");
  const providedBuffer = Buffer.from(provided, "hex");

  if (expectedBuffer.length !== providedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, providedBuffer);
}

function normalizeKey(key) {
  if (!key || typeof key !== "string") {
    return null;
  }

  if (key.includes("..") || key.startsWith("/") || key.includes("\\")) {
    return null;
  }

  return key;
}

function buildBlobUrl(key) {
  const base = ensureEnv(BLOB_BASE_URL, "TEAM_IMAGE_BLOB_BASE_URL").replace(
    /\/$/,
    "",
  );
  return `${base}/${key}`;
}

function validateQueryParams(query) {
  const { key, expires, signature } = query;

  if (!key || !expires || !signature) {
    throw new HttpError(400, "Missing required query parameters.");
  }

  let decodedKey;
  try {
    decodedKey = decodeURIComponent(key);
  } catch {
    throw new HttpError(400, "Invalid key encoding supplied.");
  }

  const normalizedKey = normalizeKey(decodedKey);
  if (!normalizedKey) {
    throw new HttpError(400, "Invalid key supplied.");
  }

  const expiresInt = Number(expires);
  if (!Number.isFinite(expiresInt)) {
    throw new HttpError(400, "Invalid expires value.");
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  if (expiresInt <= nowSeconds) {
    throw new HttpError(410, "Link has expired. Please refresh the page.");
  }

  return { normalizedKey, expiresInt, signature };
}

async function streamBlob(url, res) {
  const headers = {};
  if (BLOB_READ_TOKEN) {
    headers.Authorization = `Bearer ${BLOB_READ_TOKEN}`;
  }

  const upstream = await fetch(url, { headers });

  if (!upstream.ok) {
    return { ok: false, status: upstream.status, message: upstream.statusText };
  }

  const contentType =
    upstream.headers.get("content-type") || "application/octet-stream";
  const contentLength = upstream.headers.get("content-length");

  res.setHeader("Content-Type", contentType);
  if (contentLength) {
    res.setHeader("Content-Length", contentLength);
  }

  const nodeStream = Readable.fromWeb(upstream.body);
  nodeStream.pipe(res);

  return { ok: true };
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    ensureEnv(SIGNING_SECRET, "TEAM_IMAGE_SIGNING_SECRET");
    ensureEnv(BLOB_BASE_URL, "TEAM_IMAGE_BLOB_BASE_URL");
  } catch (error) {
    console.error("[team-photo-api] configuration error", error);
    return res
      .status(500)
      .json({ error: "Team photo proxy is not configured yet." });
  }

  let params;
  try {
    params = validateQueryParams(req.query);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.status).json({ error: error.message });
    }
    throw error;
  }

  const { normalizedKey, expiresInt, signature } = params;

  const expectedSignature = signKey(normalizedKey, expiresInt);
  const isSignatureValid = timingSafeCompare(expectedSignature, signature);

  if (!isSignatureValid) {
    return res.status(403).json({ error: "Invalid signature supplied." });
  }

  if (REFERER_HOSTS.length > 0) {
    const refererHeader = (req.headers.referer || "").toLowerCase();
    const isRefererAllowed = REFERER_HOSTS.some((host) =>
      refererHeader.includes(host),
    );
    if (!isRefererAllowed) {
      return res.status(403).json({ error: "Invalid referer." });
    }
  }

  const blobUrl = buildBlobUrl(normalizedKey);

  res.statusCode = 200;
  res.setHeader(
    "Cache-Control",
    "public, max-age=60, s-maxage=600, stale-while-revalidate=86400",
  );
  res.setHeader("CDN-Cache-Control", "public, max-age=60, s-maxage=600");

  try {
    const result = await streamBlob(blobUrl, res);

    if (!result.ok) {
      if (!res.headersSent) {
        return res
          .status(result.status)
          .json({
            error: result.message || "Unable to fetch team member photo.",
          });
      }
      return undefined;
    }

    return undefined;
  } catch (error) {
    console.error("[team-photo-api] upstream fetch failed", error);
    if (!res.headersSent) {
      return res
        .status(502)
        .json({ error: "Unable to retrieve photo at this time." });
    }
    return undefined;
  }
};
