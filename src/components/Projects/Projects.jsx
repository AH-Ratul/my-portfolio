import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import tripnix from "../../../public/tripnix-img.png";
import nanopos from "../../../public/nanopos.png";
import carrental from "../../../public/carrental.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tripnix - Tour Booking Platform",
      description:
        "A modern, responsive travel and tour booking web application built with React, TypeScript, and Vite. This platform allows users to browse tours, make bookings, and manage their travel experiences while providing admin functionalities for tour management.",
      tags: [
        "React",
        "Shadcn UI",
        "Tailwind CSS",
        "RTK Query",
        "Express.js",
        "MongoDB",
        "SSLCommerz",
      ],
      image: tripnix,
      liveUrl: "https://tripnix.vercel.app/",
      githubUrl: "https://github.com/AH-Ratul/tripnix_client",
      serverUrl: "https://github.com/AH-Ratul/tripnix_server",
    },
    {
      id: 2,
      title: "NanoPOS - Point of Sale System",
      description:
        "NanoPOS is a small-scale Point of Sale system designed to demonstrate production-level code quality using a modern tech stack. The system includes user authentication, product management, and sales processing with automated stock deduction.",
      tags: [
        "React",
        "Ant Design",
        "TanStack Query",
        "Nest JS",
        "PostgreSQL",
        "Prisma",
      ],
      image: nanopos,
      liveUrl: "https://nanoposclient.vercel.app/",
      githubUrl: "https://github.com/AH-Ratul/NanoPOS",
    },
    {
      id: 3,
      title: "Dhaka Car Rental",
      description:
        "Dhaka Car Rental is a car rental platform built with React, TypeScript, and Vite. This platform allows users to browse cars, make bookings, and manage their rental experiences while providing admin functionalities for car management.",
      tags: [
        "Next JS",
        "Shadcn UI",
        "Tailwind CSS",
        "RTK Query",
        "Express.js",
        "PostgreSQL",
        "Prisma",
      ],
      image: carrental,
      liveUrl: "",
      githubUrl: "",
      message: "Work in Progress",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="projects"
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
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 opacity-75">
          // featured work
        </p>
        <h1 className="section-title">Featured Projects</h1>
        <p className="text-text-dim mt-3 text-sm tracking-wide">
          Explore some of my recent work
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="glass p-6 rounded-3xl flex flex-col h-full group border border-dark-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500"
          >
            {/* Project Image Placeholder */}
            <div className="w-full h-full bg-dark-bg/80 rounded-2xl mb-6 flex items-center justify-center border border-dark-border group-hover:border-primary/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center text-text-dim relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
              {project.message && (
                <span className="text-secondary text-xs font-semibold tracking-[0.3em] uppercase mb-3 opacity-75 ml-10">
                  {project.message}
                </span>
              )}
            </h3>
            <p className="text-text-dim text-sm leading-[1.85] mb-6 flex-grow font-normal">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end  pt-4 border-t border-dark-border/50">
              <div className="flex flex-wrap gap-4 w-full lg:w-1/2">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-primary text-dark-bg hover:bg-text-accent rounded-xl transition-all text-sm font-bold shadow-glow-primary hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                >
                  <ExternalLink size={18} />
                  Live
                </motion.a>

                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 border border-dark-border hover:border-text-main text-text-main rounded-xl transition-all text-sm font-bold bg-dark-bg/50 hover:bg-dark-bg"
                >
                  <FaGithub size={18} />
                  Source
                </motion.a>

                {project.serverUrl && (
                  <motion.a
                    href={project.serverUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 border border-dark-border hover:border-text-main text-text-main rounded-xl transition-all text-sm font-bold bg-dark-bg/50 hover:bg-dark-bg"
                  >
                    <FaGithub size={18} />
                    Server
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
