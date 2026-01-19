const crypto = require("node:crypto");
const path = require("node:path");

const teamData = require(
  path.join(__dirname, "..", "src", "data", "team.json"),
);

const SIGNING_SECRET = process.env.TEAM_IMAGE_SIGNING_SECRET;
const URL_TTL_SECONDS = Number(process.env.TEAM_IMAGE_URL_TTL_SECONDS || 300);

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

function buildPhotoUrl(key) {
  if (!key) {
    return null;
  }

  const expires = Math.floor(Date.now() / 1000) + URL_TTL_SECONDS;
  const signature = signKey(key, expires);
  const encodedKey = encodeURIComponent(key);

  return `/api/team-photo?key=${encodedKey}&expires=${expires}&signature=${signature}`;
}

function withSignedPhoto(member) {
  if (!member.photoKey) {
    return member;
  }

  const { photoKey, ...rest } = member;
  return {
    ...rest,
    photo: buildPhotoUrl(photoKey),
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    ensureEnv(SIGNING_SECRET, "TEAM_IMAGE_SIGNING_SECRET");
    ensureEnv(process.env.TEAM_IMAGE_BLOB_BASE_URL, "TEAM_IMAGE_BLOB_BASE_URL");
  } catch (error) {
    console.error("[team-api] configuration error", error);
    return res.status(500).json({ error: "Team API is not configured yet." });
  }

  const body = {
    heads: teamData.heads.map(withSignedPhoto),
    associateHeads: (teamData.associateHeads || []).map(withSignedPhoto),
    seniorCoordinators: teamData.seniorCoordinators.map(withSignedPhoto),
    juniorCoordinators: teamData.juniorCoordinators.map(withSignedPhoto),
    generatedAt: new Date().toISOString(),
    ttlSeconds: URL_TTL_SECONDS,
  };

  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
  );
  return res.status(200).json(body);
};
