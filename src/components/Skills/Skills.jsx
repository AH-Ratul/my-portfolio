import React from "react";
import { motion } from "framer-motion";
import html5 from "../../../public/img/html5.svg";
import css3 from "../../../public/img/css3.svg";
import js from "../../../public/img/js.png";
import reactjs from "../../../public/img/react.svg";
import tailwind from "../../../public/img/tailwindcss.svg";
import redux from "../../../public/img/redux.svg";
import nodejs from "../../../public/img/nodejs.svg";
import expressjs from "../../../public/img/express.svg";
import mongodb from "../../../public/img/mongodb.svg";
import mongoose from "../../../public/img/mongoose.png";
import mysql from "../../../public/img/mysql.svg";
import firebase from "../../../public/img/firebase.svg";
import vscode from "../../../public/img/vscode.svg";
import git from "../../../public/img/git.svg";
import github from "../../../public/img/github.png";
import postman from "../../../public/img/postman.svg";
import netlify from "../../../public/img/netlify.svg";
import nextjs from "../../../public/img/nextjs.svg";
import ts from "../../../public/img/ts.svg";
import psql from "../../../public/img/psql.svg";
import prisma from "../../../public/img/prisma.svg";
import vercel from "../../../public/img/vercel.svg";
import antigravity from "../../../public/img/antigravity.svg";
import tan from "../../../public/img/tan.png";
import zod from "../../../public/img/zod.svg";
import passport from "../../../public/img/passport.svg";
import java from "../../../public/img/java.svg";
import python from "../../../public/img/python.svg";
import nestjs from "../../../public/img/nestjs.svg";
import copilot from "../../../public/img/copilot.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React JS", icon: reactjs },
        { name: "Next JS", icon: nextjs },
        { name: "HTML5", icon: html5 },
        { name: "CSS3", icon: css3 },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Redux Toolkit", icon: redux },
        { name: "TanStack Query", icon: tan },
        { name: "Firebase", icon: firebase },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node JS", icon: nodejs },
        { name: "Express JS", icon: expressjs },
        { name: "Nest JS", icon: nestjs },
        { name: "MongoDB", icon: mongodb },
        { name: "Mongoose", icon: mongoose },
        { name: "PostgreSQL", icon: psql },
        { name: "Prisma", icon: prisma },
        { name: "MySql", icon: mysql },
        { name: "Passport.js", icon: passport },
        { name: "Zod", icon: zod },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "VS Code", icon: vscode },
        { name: "Antigravity", icon: antigravity },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Copilot", icon: copilot },
        { name: "Postman", icon: postman },
        { name: "Netlify", icon: netlify },
        { name: "Vercel", icon: vercel },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: js },
        { name: "TypeScript", icon: ts },
        { name: "Java (basic)", icon: java },
        { name: "Python (basic)", icon: python },
      ],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 scroll-m-24"
    >
      {/* Heading */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 opacity-75">// my toolkit</p>
        <h1 className="section-title">Skills & Expertise</h1>
        <p className="text-text-dim mt-3 text-sm tracking-wide">The tech stack I use to build digital solutions</p>
      </motion.div>

      {/* Skills Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="glass p-8 rounded-3xl flex flex-col h-full border border-dark-border hover:border-primary/50 transition-colors duration-500"
          >
            {/* Category Title */}
            <motion.h2
              variants={itemVariants}
              className="text-sm font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center mb-8"
            >
              {category.title}
            </motion.h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl border border-dark-border bg-dark-bg/40 hover:bg-primary-dim hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 mb-3 object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
                  />
                  <span className="text-xs font-semibold text-text-main text-center tracking-wide group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
