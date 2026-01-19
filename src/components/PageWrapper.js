import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import bgImage from "./bg3.png";

const PageWrapper = ({ children, title, description }) => {
  const location = useLocation();
  const siteTitle = "Quizzers Anonymous";
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription =
    description ||
    "Quizzers Anonymous - The ultimate platform for quiz enthusiasts.";

  // Primary domain set to quizzers-anonymous.vercel.app
  const primaryDomain = "https://quizzers-anonymous.vercel.app";
  const canonicalUrl = `${primaryDomain}${location.pathname}`;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />

        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
      </Helmet>

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageWrapper;
