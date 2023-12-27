import React from "react";

const Header = () => {
  return (
    <div className="md:flex md:justify-between md:items-center text-gray-100 pl-5 md:pl-20 md:pr-20 md:py-2 py-3 ">
      <div>
        <h1 className="font-bold text-3xl text-white font-Singleday">Portfolio</h1>
      </div>
      <div className="hidden md:block md:flex ">
        <h2 className="text-lg font-semibold mr-20 cursor-pointer hover:text-teal-500">Skills</h2>
        <h2 className="text-lg font-semibold mr-20 cursor-pointer hover:text-teal-500">Projects</h2>
        <h2 className="text-lg font-semibold cursor-pointer hover:text-teal-500">Contact</h2>
      </div>
    </div>
  );
};

export default Header;
