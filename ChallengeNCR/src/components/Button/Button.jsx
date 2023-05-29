import React from "react";

const Button = ({ handleClick, buttonText }) => {
  return (
    <div className="w-1/6 text-sm">
      <button
        className="bg-[#7ccc72] justify-center flex-col hover:bg-[#82db76] text-white font-bold py-4 px-12 rounded"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
