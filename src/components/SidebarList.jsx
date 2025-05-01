import React from "react";

const SidebarList = ({
  image_src,
  nav_item,
  setActiveComponent,
  activeComponent,
}) => {
  const isActive = activeComponent === nav_item;

  return (
    <div
      onClick={() => setActiveComponent(nav_item)}
      className={`flex mb-2 items-center gap-3 p-2 rounded-lg cursor-pointer transition 
        ${isActive ? "bg-white text-ink-text" : "hover:bg-blue-800"}`}
    >
      <img className="mr-3" src={image_src} alt="nav item icon" />
      <p className="flex-grow text-[14px]">{nav_item}</p>
    </div>
  );
};

export default SidebarList;
