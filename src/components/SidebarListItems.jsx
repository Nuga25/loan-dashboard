import React from "react";
import SidebarList from "./SidebarList";

const SidebarListItems = ({ setActiveComponent, activeComponent }) => {
  const manageListData = [
    {
      image_src: "overview.svg",
      nav_item: "Overview",
    },
    {
      image_src: "records.svg",
      nav_item: "Records",
    },
    {
      image_src: "transactions.svg",
      nav_item: "Transactions",
    },
    {
      image_src: "users.svg",
      nav_item: "Users",
    },
    {
      image_src: "staff.svg",
      nav_item: "Staff",
    },
    {
      image_src: "analytics.svg",
      nav_item: "Analytics",
    },
  ];

  const preferenceListData = [
    {
      image_src: "Settings.svg",
      nav_item: "Settings",
    },
    {
      image_src: "security.svg",
      nav_item: "Security",
    },
  ];

  const lastListData = [
    {
      image_src: "switch-board.svg",
      nav_item: "Switch Board",
    },
    {
      image_src: "log-out.svg",
      nav_item: "Logout",
    },
  ];

  return (
    <div className="grid grid-rows-[2fr_1.2fr_.5fr] h-full text-white">
      <div>
        <p className="mb-3">MANAGE</p>
        {manageListData.map((item, index) => (
          <SidebarList
            key={index}
            image_src={item.image_src}
            nav_item={item.nav_item}
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        ))}
      </div>

      <div>
        <p className="mb-3">PREFERENCE</p>
        {preferenceListData.map((item, index) => (
          <SidebarList
            key={index}
            image_src={item.image_src}
            nav_item={item.nav_item}
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        ))}
      </div>

      <div>
        {lastListData.map((item, index) => (
          <SidebarList
            key={index}
            image_src={item.image_src}
            nav_item={item.nav_item}
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarListItems;
