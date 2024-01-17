import React from "react";

const SocialLink = () => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-6">
      <div className="flex items-center gap-1">
        <i className="bx bxl-reddit text-3xl text-gray-500"></i>
        <p className="text-[12px] font-semibold text-gray-500">reddit</p>
      </div>
      <div className="flex items-center gap-1">
        <i className="bx bxl-discord-alt text-3xl text-gray-500"></i>
        <p className="text-[12px] font-semibold text-gray-500">DISCORD</p>
      </div>
      <div className="flex items-center gap-1">
        <i className="bx bxl-steam text-3xl text-gray-500"></i>
        <p className="text-[12px] font-semibold text-gray-500">STEAM</p>
      </div>
      <div className="flex items-center gap-1">
        <i className="bx bxl-twitch text-3xl text-gray-500"></i>
        <p className="text-[12px] font-semibold text-gray-500">twitch</p>
      </div>
    </div>
  );
};

export default SocialLink;
