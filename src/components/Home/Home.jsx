import React from "react";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className=" mt-24 text-gray-200 md:pl-20 md:pr-20">
        <div className="pl-5 md:pl-1">
          <h1 className="font-bold text-3xl md:text-5xl">Azmol Hasan Ratul</h1>
          <h2 className="font-semibold text-xl md:text-2xl py-5 text-teal-600">
            Front-End Developer
          </h2>
          <p className="text-xl mt-6 pr-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            explicabo deleniti voluptas tenetur sit quae voluptates itaque
            labore eum aperiam. Rem laboriosam ea ad aut quas maxime doloremque
            vitae cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam libero voluptas sit error ipsum tenetur deserunt mollitia
            odio!
          </p>
        </div>
        <div className="flex py-16 pl-5 md:pl-1">
          <button className="text-lg text-white/80 font-semibold border-2 border-teal-800 py-2 px-6 rounded-lg">
            Resume
          </button>
        </div>
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
