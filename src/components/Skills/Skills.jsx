import React from "react";
import html5 from "../../../img/html5.svg";
import css3 from "../../../img/css3.svg";
import js from "../../../img/js.png";
import reactjs from "../../../img/react.svg";
import tailwind from "../../../img/tailwindcss.svg";
import redux from "../../../img/redux.svg";
import nodejs from "../../../img/nodejs.svg";
import expressjs from "../../../img/express-js.svg";
import mongodb from "../../../img/mongodb.svg";
import mongoose from "../../../img/mongoose.png";
import mysql from "../../../img/mysql.svg";
import firebase from "../../../img/firebase.svg";
import vscode from "../../../img/vscode.svg";
import git from "../../../img/git.svg";
import github from "../../../img/github.png";
import postman from "../../../img/postman.svg";
import netlify from "../../../img/netlify.svg";

const Skills = () => {
  return (
    <div className="mt-12 pb-9 ">
      <h1 className="mx-auto text-center text-3xl font-bold border-b-2 border-teal-700 w-[60%] md:w-[30%] pb-1">
        Skills
      </h1>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        <div className="w-[90%] md:w-[500px] border border-white/70 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Front-End
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={html5} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">HTML5</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={css3} alt="" className="w-4 mr-2" />
              <span className="text-base text-white/70 ">CSS3</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={js} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">JavaScript</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={reactjs} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">React JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={tailwind} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">Tailwind CSS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={redux} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">Redux</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[500px] border border-white/70 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Back-End
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={nodejs} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">Node JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={expressjs} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">Express JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={mongodb} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70 ">MongoDB</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={mongoose} alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">Mongoose</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={mysql} alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">MySql</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={firebase} alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">Firebase</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[500px] border border-white/70 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Others
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={vscode} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70">VS Code</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={git} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70">Git</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={github} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70">Github</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={postman} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70">Postman</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src={netlify} alt="" className="w-6 mr-2" />
              <span className="text-base text-white/70">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
