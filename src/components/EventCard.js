import React, { useRef } from "react";

const EventCard = ({ event }) => {
  const videoRef = useRef(null);

  // Check if the media is a video based on file extension
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const mediaUrl = event.poster || "/media/pictures/events/wip.png";
  const isVideoContent = isVideo(mediaUrl);

  const handleMouseEnter = () => {
    if (videoRef.current && isVideoContent) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Autoplay prevented");
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && isVideoContent) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (videoRef.current && isVideoContent) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg overflow-hidden 
                    transform transition-all duration-300 hover:-translate-y-2 hover:border-accent-white hover:shadow-[0_0_20px_#FFD700]"
    >
      <div className="relative">
        {isVideoContent ? (
          <video
            ref={videoRef}
            src={mediaUrl}
            alt={event.title}
            className="w-full aspect-[4/5] object-cover cursor-pointer"
            controls={false}
            muted
            loop
            playsInline
            preload="metadata"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <img
            src={mediaUrl}
            alt={event.title}
            className="w-full aspect-[4/5] object-cover"
          />
        )}

        {/* Video Indicator */}
        {isVideoContent && (
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white/20 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
          {event.date}
        </div>

        {/* Status Badge */}
        {event.eventStatus && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide ${
              event.eventStatus === "upcoming"
                ? "bg-gray-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {event.eventStatus}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>

        <div className="space-y-2 mb-4 text-gray-300">
          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {event.date} {event.time && `at ${event.time}`}
          </div>
          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.venue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
