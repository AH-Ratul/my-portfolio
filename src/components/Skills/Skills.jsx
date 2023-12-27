import React from "react";

const Skills = () => {
  return (
    <div className="mt-12 pb-9 ">
      <h1 className="mx-auto text-center text-3xl font-bold border-b-2 border-white/40 w-[40%] md:w-[20%] pb-1">
        Skills
      </h1>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        <div className="w-[90%] md:w-[500px] border border-white/70 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Front-End
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/html5.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70 ">HTML5</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/css3.svg" alt="" className="w-5 mr-2" />
              <span className="text-base text-white/70 ">CSS3</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/js.png" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70 ">JavaScript</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/react.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70 ">React JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/tailwindcss.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-base text-white/70 ">Tailwind CSS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/redux.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70 ">Redux</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[500px] border border-white/70 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Backend
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/nodejs.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70 ">Node JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/express-js.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-base text-white/70 ">Express JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/mongodb.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70 ">MongoDB</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/mongoose.png"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-base text-white/70">Mongoose</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/mysql.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">MySql</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/firebase.svg"
                alt=""
                className="w-7 mr-2"
              />
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
              <img src="../../../img/vscode.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">VS Code</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/git.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">Git</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/github.png" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">Github</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/postman.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">Postman</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/netlify.svg" alt="" className="w-7 mr-2" />
              <span className="text-base text-white/70">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
