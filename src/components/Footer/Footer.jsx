import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white text-center bg-black py-20 mt-12  ">
      <h1 className="text-2xl font-bold text-white/70 mb-3">
        Azmol Hasan Ratul
      </h1>
      <div className="flex justify-center py-5">
        <a
          href="https://github.com/AH-Ratul"
          target="blank"
          className="mr-5 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-azmol-hasan-ratul-339000247/"
          target="blank"
          className="mr-5 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://web.facebook.com/ah.ratul.7/"
          target="blank"
          className=" text-3xl"
        >
          <FaFacebookSquare />
        </a>
      </div>
      <p className="text-xs text-white/70">
        &copy; All Right Reserved. Azmol Hasan Ratul
      </p>
    </div>
  );
};

export default Footer;
