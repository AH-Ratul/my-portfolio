import React from "react";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className=" mt-24 text-gray-200 md:pl-20 md:pr-20">
      <div className="pl-5">
        <h1 className="font-bold text-3xl md:text-5xl">Azmol Hasan Ratul</h1>
        <h2 className="font-semibold text-xl md:text-2xl py-5 text-gray-400">
          Front-End Developer
        </h2>
        <p className="text-xl mt-6 pr-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          explicabo deleniti voluptas tenetur sit quae voluptates itaque labore
          eum aperiam. Rem laboriosam ea ad aut quas maxime doloremque vitae
          cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quibusdam libero voluptas sit error ipsum tenetur deserunt mollitia
          odio!
        </p>
      </div>
      <div className="flex py-16 pl-5">
        <button className="text-lg font-semibold bg-gradient-to-r from-purple-900 to-rose-800 py-2 px-6 rounded-lg">
          Resume
        </button>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
