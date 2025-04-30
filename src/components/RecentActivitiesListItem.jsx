import React from "react";
import RecentActivitiesList from "./RecentActivitiesList";

const RecentActivitiesListItem = () => {
  const data = [
    {
      img_src: "./src/assets/red-notif.svg",
      first_name: "Sunday",
      last_name: "Godwin",
      amount: "N200,000",
      date: "Wed, Feb 15 2023",
      time: "10:45.20 AM",
      status: "Disbursed",
    },
    {
      img_src: "./src/assets/green-notif.svg",
      first_name: "Oluwadarasimi",
      last_name: "Mobolaji",
      amount: "N10,000",
      date: "Sun, Feb 12 2023",
      time: "01:15.16 PM",
      status: "Repayment",
    },
    {
      img_src: "./src/assets/green-notif.svg",
      first_name: "Chukuemeka",
      last_name: "Chikodi",
      amount: "N56,000",
      date: "Wed, Feb 08 2023",
      time: "01:15.16 PM",
      status: "Repayment",
    },
    {
      img_src: "./src/assets/red-notif.svg",
      first_name: "Sunday",
      last_name: "Godwin",
      amount: "N200,000",
      date: "Wed, Feb 15 2023",
      time: "10:45.20 AM",
      status: "Disbursed",
    },
    {
      img_src: "./src/assets/green-notif.svg",
      first_name: "Oluwadarasimi",
      last_name: "Mobolaji",
      amount: "N10,000",
      date: "Sun, Feb 12 2023",
      time: "01:15.16 PM",
      status: "Repayment",
    },
    {
      img_src: "./src/assets/green-notif.svg",
      first_name: "Chukuemeka",
      last_name: "Chikodi",
      amount: "N56,000",
      date: "Wed, Feb 08 2023",
      time: "01:15.16 PM",
      status: "Repayment",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <RecentActivitiesList
          key={index}
          img_src={item.img_src}
          first_name={item.first_name}
          last_name={item.last_name}
          amount={item.amount}
          date={item.date}
          time={item.time}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default RecentActivitiesListItem;
