import React from "react";

const RecentActivitiesList = ({
  img_src,
  first_name,
  last_name,
  amount,
  date,
  time,
  status,
}) => {
  return (
    <div className="flex items-center mb-2 text-[13px] text-ink-dark">
      <img className="mr-10" src={img_src} alt="icon" />
      <div className="flex justify-between flex-grow items-center">
        <p className="w-1/6">{first_name}</p>
        <p className="w-1/6">{last_name}</p>
        <p className="w-1/6">{amount}</p>
        <p className="w-1/4">{date}</p>
        <p className="w-1/6">{time}</p>
        <p className="w-1/6">{status}</p>
      </div>
    </div>
  );
};

export default RecentActivitiesList;
