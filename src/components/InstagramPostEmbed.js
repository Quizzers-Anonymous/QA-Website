import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const InstagramPostEmbed = ({
  url = "https://www.instagram.com/p/DMAe-fcSvCb/",
}) => {
  const [EmbedComponent, setEmbedComponent] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import the heavy embed component only when this component is mounted
    import("react-social-media-embed")
      .then((mod) => {
        if (mounted) setEmbedComponent(() => mod.InstagramEmbed);
      })
      .catch(() => {
        // ignore, we will show fallback
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!EmbedComponent) {
    // lightweight placeholder to avoid network/work on initial render
    return (
      <div className="instagram-post-container w-full max-w-[328px] aspect-[41/60] bg-neutral-900 rounded-lg flex items-center justify-center text-gray-400">
        <div>Loading preview...</div>
      </div>
    );
  }

  return (
    <div className="instagram-post-container w-full max-w-[328px]">
      <EmbedComponent
        url={url}
        width="100%"
        height={480}
        hideCaption={false}
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

InstagramPostEmbed.propTypes = {
  url: PropTypes.string,
};

export default InstagramPostEmbed;
