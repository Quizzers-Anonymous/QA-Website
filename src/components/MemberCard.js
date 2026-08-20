import React from "react";

const MemberCard = ({ member, role }) => {
  let roleHover = "hover:border-accent-yellow";

  if (role === "head") {
    roleHover =
      "hover:border-accent-yellow hover:shadow-[0_0_20px_#FFD700]";
  } else if (role === "associate") {
    roleHover =
      "hover:border-rose-300 hover:shadow-[0_0_20px_#fda4af]";
  } else if (role === "senior") {
    roleHover =
      "hover:border-accent-blue hover:shadow-[0_0_20px_#3B82F6]";
  } else if (role === "junior") {
    roleHover =
      "hover:border-accent-green hover:shadow-[0_0_20px_#10B981]";
  }

  return (
    <div
      className={`
        bg-dark-card rounded-lg shadow-md overflow-hidden border border-dark-border
        transform transition-all duration-300
        hover:scale-105 hover:-translate-y-2
        ${roleHover}
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-dark-text mb-1">
          {member.name}
        </h3>

        <p className="text-accent-blue font-medium mb-2">
          {member.role}
        </p>

        {member.team && (
          <p className="text-sm text-dark-text-secondary mb-4">
            {member.team}
          </p>
        )}

        {/* Social Links */}
        {(member.instagram || member.linkedin) && (
          <div className="flex justify-center space-x-3">
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                IG
              </a>
            )}

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                IN
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;