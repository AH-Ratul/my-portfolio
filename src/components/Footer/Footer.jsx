import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/AH-Ratul",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/azmol-hasan-ratul-909927308/",
      label: "LinkedIn",
    },
    {
      icon: FaFacebookSquare,
      url: "https://web.facebook.com/ah.ratul.7/",
      label: "Facebook",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-dark-bg border-t border-dark-border pt-16 pb-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3 inline-block">
              AHR.
            </h3>
            <p className="text-text-main font-medium text-lg mb-1">
              Full-Stack Developer
            </p>
            <p className="text-text-dim text-sm">
              Architecting modern web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-center"
          >
            <h4 className="text-sm font-bold text-text-dim uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-3 font-medium text-text-main">
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#skills")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Skills & Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Let's Connect
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-right flex flex-col items-center md:items-end justify-start"
          >
            <h4 className="text-sm font-bold text-text-dim uppercase tracking-widest mb-6">
              Socials
            </h4>
            <div className="flex justify-center md:justify-end gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl text-text-dim hover:text-primary transition-colors drop-shadow-md"
                  title={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-dark-border to-transparent my-8 opacity-50"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-dim text-sm text-center md:text-left font-medium"
          >
            &copy; {new Date().getFullYear()} Azmol Hasan Ratul. All rights
            reserved.
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-dark-bg/50 border border-dark-border rounded-full text-text-main hover:text-primary hover:border-primary/50 transition-all text-sm font-semibold shadow-inner"
          >
            Back to Top
            <ArrowUp size={16} className="text-primary" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
