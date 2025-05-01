import React from "react";
import LoanCards from "./LoanCards";
import UsersAndRateListItem from "./UsersAndRateListItem";
import ActiveUsersChart from "./ActiveUsersChart";
import DisbursedLoansChart from "./DisbursedLoansChart";

const Overview = () => {
  const data = [
    {
      img_src: "disbursed.svg",
      text: "Disbursed Loans",
      amount: "N10,001,168",
      unit_number: "1,000",
      bg_color: "bg-light-blue",
    },
    {
      img_src: "closed.svg",
      text: "Closed Loans",
      amount: "N5,028,480",
      unit_number: "520",
      bg_color: "bg-light-green",
    },
    {
      img_src: "overdue.svg",
      text: "Overdue Loans",
      amount: "N1,520,790",
      unit_number: "152",
      bg_color: "bg-light-red",
    },
    {
      img_src: "running.svg",
      text: "Running Loans (Paid)",
      amount: "N2,668,726",
      unit_number: "266",
      bg_color: "bg-light-yellow",
    },
    {
      img_src: "running.svg",
      text: "Running Loans Unpaid)",
      amount: "N918,204",
      unit_number: "198",
      bg_color: "bg-light-yellow",
    },
  ];

  return (
    <div className="p-4">
      <p className="text-[20px] font-semibold">Overview</p>
      <div className=" float-right flex bg-gray-bg rounded gap-1 items-center px-2 cursor-pointer">
        <p>Overall</p>
        <img src="arrow-down.svg" alt="aroow icon" />
      </div>

      <div className="mt-10 flex justify-between w-[100%]">
        {data.map((data, index) => (
          <LoanCards
            key={index}
            img_src={data.img_src}
            text={data.text}
            amount={data.amount}
            unit_number={data.unit_number}
            bg_color={data.bg_color}
          />
        ))}
      </div>

      <div className="flex mt-10 justify-between h-[360px]">
        <DisbursedLoansChart />
        <div>
          <UsersAndRateListItem />
        </div>
        <div className="w-[200px] h-[359px] bg-card-gray-bg rounded-lg">
          <ActiveUsersChart />
        </div>
      </div>
    </div>
  );
};

export default Overview;
