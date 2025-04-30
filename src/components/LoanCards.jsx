import React from "react";

const LoanCards = ({ img_src, text, amount, unit_number, bg_color }) => {
  return (
    <div className={`${bg_color} w-[200px] h-[169px] rounded-xl p-4`}>
      <div className="flex justify-between items-center">
        <img
          className="bg-black p-2 rounded-full"
          src={img_src}
          alt="loan icon"
        />
        <img className="w-5 cursor-pointer" src="more.svg" alt="options icon" />
      </div>
      <p className="text-ink-dark mt-3 text-[15px]">{text}</p>
      <p className="text-ink-text font-bold text-[24px] my-2">{amount}</p>
      <p className="text-ink-darker text-[10px]">
        Unit Number: <span className="font-semibold">{unit_number}</span>
      </p>
    </div>
  );
};

export default LoanCards;
