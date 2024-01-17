import React from "react";

const Footer = () => {
  return (
    <div className="bg-lime-900 w-full">
      <div className="w-11/12 m-auto flex justify-center text-white py-4">
        <p className="text-sm font-extralight">{new Date().getFullYear()}@ Jyoti.dahal, All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
