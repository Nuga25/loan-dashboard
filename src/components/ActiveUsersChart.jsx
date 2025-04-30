import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActiveUsersChart = () => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#3F83F8", "#A3C0FF"], // Blue + Light Blue
        borderWidth: 0,
        cutout: "70%", // Makes it a donut
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "%";
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="rounded-2xl p-4 w-full max-w-sm">
      <div className="flex justify-between items-start mb-7">
        <p className="text-[14px] text-ink-dark mb-4">Active users Ratio</p>
        <img src="more.svg" alt="options icon" />
      </div>
      <div className="relative h-40 w-40 mx-auto">
        <Doughnut data={data} options={options} />
        {/* Labels */}
        <div className="absolute top-0 right-0 text-xs bg-white px-2 py-1 rounded-lg rounded-bl-none shadow">
          60%
        </div>
        <div className="absolute bottom-8 left-0 text-xs bg-white px-2 py-1 rounded-lg rounded-tr-none shadow">
          40%
        </div>
      </div>

      {/* Legend */}
      <div className="mt-[50px] text-[12px] text-ink-dark flex justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#3F83F8] rounded"></span>
          <span>Male</span>
        </div>
        <span>6,472</span>
      </div>
      <div className="text-[12px] text-ink-dark flex justify-between mt-1 px-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#A3C0FF] rounded"></span>
          <span>Female</span>
        </div>
        <span>4,314</span>
      </div>
    </div>
  );
};

export default ActiveUsersChart;
