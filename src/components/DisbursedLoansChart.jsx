import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const DisbursedLoansChart = () => {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [
          400000, 200000, 600000, 500000, 450000, 300000, 350000, 500000,
          550000,
        ],
        backgroundColor: "rgba(63, 131, 248, 0.1)",
        borderColor: "#3F83F8",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#3F83F8",
        pointRadius: 0,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `₦${tooltipItem.raw.toLocaleString()} ${tooltipItem.label} 2022`,
        },
        backgroundColor: "#0F172A",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        displayColors: false,
      },
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 200000,
          callback: (val) => val.toLocaleString(),
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 w-[600px] max-w-4xl">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <h2 className="text-[18px] text-ink-text font-semibold">
            Disbursed Loans
          </h2>
          <img src="arrow-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 px-2 py-1 border border-gray-border rounded-lg">
            <span className="text-sm text-gray-500">2022</span>
            <img src="icon-placeholder.svg" alt="" />
          </div>
          <img
            className="cursor-pointer hover:opacity-80"
            src="share.svg"
            alt=""
          />
          <img
            className="cursor-pointer hover:opacity-80"
            src="download.svg"
            alt=""
          />
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4">Total: ₦8,063,000</p>

      {/* Chart Area */}
      <div className="h-64">
        <Line data={data} options={options} />
      </div>

      {/* Slider (scroll) */}
      <div className="flex gap-4 items-center mt-4 bg-gray-bg px-3 py-1 rounded-lg">
        <p className="text-ink-dark text-[12px]">
          Apr-Dec <span className="mx-4">|</span>
        </p>
        <div className=" flex-grow">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full appearance-none bg-gray-200 h-1 rounded-full
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-3
                     [&::-webkit-slider-thumb]:h-3
                     [&::-webkit-slider-thumb]:bg-blue-500
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DisbursedLoansChart;
