import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[88px] p-4 shadow">
      <p className="font-bold text-[22px] text-ink-text">Loan Dashboard</p>
      <div className="relative">
        <img
          className="absolute top-2 left-1"
          src="./src/assets/search.svg"
          alt="search icon"
        />
        <input
          className="bg-input-bg p-2 rounded-lg w-[385px] border-none"
          type="search"
          placeholder="      Search"
        />
      </div>
      <div className="flex gap-2">
        <img src="./src/assets/Notification.svg" alt="notif icon" />
        <div className="flex gap-1 items-center text-right">
          <div>
            <p className="font-semibold text-[14px]">Bright Feranmi</p>
            <p className="text-[12px]">Admin</p>
          </div>
          <img src="./src/assets/user-profile.svg" alt="user profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
