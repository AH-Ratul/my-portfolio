import React from "react";

const Skills = () => {
  return (
    <div className="mt-12 pb-9 pr-9">
      <h1 className="mx-auto text-center text-3xl font-bold border-b-2 border-purple-800 w-[40%] md:w-[20%] pb-1">
        Skills
      </h1>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        <div className="w-[90%] md:w-[500px] border border-purple-800 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Front-End
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/html5.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">HTML5</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/css3.svg" alt="" className="w-5 mr-2" />
              <span className="text-xl md:text-base">CSS3</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/js.png" alt="" className="w-7 mr-2" />
              <span className="text-xl md:text-base">JavaScript</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/react.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">React JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/tailwindcss.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Tailwind CSS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/redux.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Redux</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[500px] border border-purple-800 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Backend
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/nodejs.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Node JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/express-js.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Express JS</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/mongodb.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">MongoDB</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/mongoose.png"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Mongoose</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/mysql.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">MySql</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/firebase.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Firebase</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[500px] border border-purple-800 rounded p-5">
          <h1 className="text-center mb-8 text-2xl font-semibold text-white/70">
            Others
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/vscode.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">VS Code</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img src="../../../img/git.svg" alt="" className="w-7 mr-2" />
              <span className="text-xl md:text-base">Git</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../public/img/github.png"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Github</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/postman.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Postman</span>
            </div>
            <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
              <img
                src="../../../img/netlify.svg"
                alt=""
                className="w-7 mr-2"
              />
              <span className="text-xl md:text-base">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
