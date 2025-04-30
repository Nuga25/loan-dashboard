import React from "react";

const UsersAndRateList = ({ title, number }) => {
  return (
    <div className="bg-card-gray-bg p-3 rounded-lg w-[200px] h-[98px] mb-8">
      <div className="flex justify-between">
        <p className="text-[14px] text-ink-dark">{title}</p>
        <img src="more.svg" alt="options icon" />
      </div>
      <p className="font-bold text-ink-text text-[32px] mt-2">{number}</p>
    </div>
  );
};

export default UsersAndRateList;
