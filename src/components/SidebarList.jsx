import React from "react";

const SidebarList = ({ image_src, nav_item }) => {
  return (
    <div className="flex mb-3 ml-2 cursor-pointer">
      <img className="mr-3" src={image_src} alt="nav item icon" />
      <p className="flex-grow text-[14px]">{nav_item}</p>
    </div>
  );
};

export default SidebarList;
