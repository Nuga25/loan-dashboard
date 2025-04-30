import React from "react";
import UsersAndRateList from "./UsersAndRateList";

const UsersAndRateListItem = () => {
  const data = [
    {
      title: "Active Users",
      number: "10,786",
    },
    {
      title: "Total Users",
      number: "20,587",
    },
    {
      title: "Repayment rate",
      number: "80%",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <UsersAndRateList key={index} title={item.title} number={item.number} />
      ))}
    </div>
  );
};

export default UsersAndRateListItem;
