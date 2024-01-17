import React from "react";

const Button = () => {
  return (
    <div className="flex gap-2 w-full">
      <button className="w-1/2 sm:w-24 h-10 bg-blue-700 text-white text-[12px] p-2 rounded shadow-md">
        Learn More
      </button>
      <button className="w-1/2 sm:w-24 h-10 p-2 border-[1.5px] border-blue-700 rounded text-[12px] text-blue-700 shadow-md">
        Contact
      </button>
    </div>
  );
};

export default Button;
