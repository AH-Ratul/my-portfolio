import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import profile from "../../../public/profile.png";

const Home = () => {
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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Background glowing blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-dark-bg">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-5 md:px-20 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 relative z-10"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-primary text-sm font-semibold tracking-[0.25em] uppercase mb-4 opacity-80"
              >
                &lt;/&gt; Hello, World!
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-text-main mb-3 tracking-tighter leading-[1.05]"
              >
                Hi, I am <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Azmol Hasan Ratul
                </span>
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-xl md:text-2xl font-medium text-text-dim mb-4 tracking-wide"
              >
                Full-Stack Developer
              </motion.h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-base text-text-dim leading-[1.85] max-w-xl font-normal"
            >
              Passionate full-stack developer dedicated to building innovative
              and efficient web solutions. With a keen eye for detail and love
              for coding, I create immersive digital experiences that blend
              creativity with flawless functionality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center text-center shadow-glow-primary"
              >
                Begin the Journey
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 glass"
              >
                <Download
                  size={20}
                  className="text-secondary hover:text-white"
                />
                <a
                  href="https://drive.google.com/file/d/1JG0yJcin8Hi6PCyEDBS-8WxO-JpgOHdR/view?usp=sharing"
                  target="_blank"
                  className="text-text-main"
                >
                  Resume
                </a>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image/Graphic */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center justify-center relative z-10"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-80 h-80 glass rounded-3xl flex items-center justify-center border border-dark-border shadow-[0_0_60px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-700"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden bg-primary/10">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-20"
        >
          <div className="text-primary opacity-60">
            <ChevronDown size={36} />
          </div>
        </motion.div>
      </div>

      {/* Sections Wrapper with proper spacing */}
      <div className="max-w-6xl mx-auto px-5 md:px-20 space-y-32 pb-24 relative z-10">
        <Skills />
        <Projects />
        <Contacts />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
