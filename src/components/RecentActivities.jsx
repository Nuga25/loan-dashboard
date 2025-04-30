import React from "react";
import RecentActivitiesListItem from "./RecentActivitiesListItem";

const RecentActivities = () => {
  return (
    <div className="p-4">
      <div className="text-ink-text flex justify-between my-4">
        <p className="text-[18px] font-bold">Recent Activities</p>
        <p className="text-[12px] font-semibold">
          <a href="#">View all</a>
        </p>
      </div>

      <div className="h-[100px] overflow-y-scroll custom-scrollbar">
        <RecentActivitiesListItem />
      </div>
    </div>
  );
};

export default RecentActivities;
