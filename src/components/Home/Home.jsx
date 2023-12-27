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
          <p className="text-lg mt-7 pr-5 md:w-[80%]">
          Patient, innovative and pragmatic frontend developer. Adequate understanding of modern web technologies. I am dedicated to creating seamless, responsive and user-friendly interfaces.
          </p>
        </div>
        <div className="flex py-16 pl-5 md:pl-1">
          <button className="text-lg text-white/80 font-semibold border-2 border-teal-700 hover:border-teal-600 py-2 px-6 rounded-lg">
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
