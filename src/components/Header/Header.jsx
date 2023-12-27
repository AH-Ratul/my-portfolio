import React from "react";

const Header = () => {
  return (
    <div className="md:flex md:justify-between md:items-center text-gray-100 pl-5 md:pl-20 md:pr-20 py-5">
      <div>
        <h1 className="font-bold text-3xl font-Singleday">Portfolio</h1>
      </div>
      <div className="hidden md:block md:flex">
        <h2 className="text-lg font-semibold mr-20">Skills</h2>
        <h2 className="text-lg font-semibold mr-20">Projects</h2>
        <h2 className="text-lg font-semibold">Contact</h2>
      </div>
    </div>
  );
};

export default Header;
