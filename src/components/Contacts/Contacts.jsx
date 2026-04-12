import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

const Contacts = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMP_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setSubmitStatus("success");
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        () => {
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        },
      )
      .finally(() => setIsLoading(false));
  };

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

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 scroll-m-24"
    >
      {/* Background glow specific to contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary-dim blur-[150px] rounded-full -z-10 opacity-50" />

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 opacity-75">
          // get in touch
        </p>
        <h1 className="section-title">Let's Connect</h1>
        <p className="text-text-dim mt-4 text-sm leading-[1.85] max-w-2xl mx-auto font-normal tracking-wide">
          Have a question, a project idea, or just want to explore
          possibilities? Drop me a message and let's craft something amazing.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative"
      >
        <motion.div
          variants={itemVariants}
          className="glass p-8 md:p-12 rounded-3xl border border-dark-border shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-dim mb-2 uppercase tracking-wider">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-dark-bg/60 border border-dark-border text-text-main placeholder-text-dark-border px-5 py-4 rounded-xl focus:border-primary focus:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-text-dim mb-2 uppercase tracking-wider">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-dark-bg/60 border border-dark-border text-text-main placeholder-text-dark-border px-5 py-4 rounded-xl focus:border-primary focus:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner"
                />
              </motion.div>
            </div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-text-dim mb-2 uppercase tracking-wider">
                Subject
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="user_subject"
                placeholder="Project Inquiry"
                required
                className="w-full bg-dark-bg/60 border border-dark-border text-text-main placeholder-text-dark-border px-5 py-4 rounded-xl focus:border-primary focus:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-text-dim mb-2 uppercase tracking-wider">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="w-full bg-dark-bg/60 border border-dark-border text-text-main placeholder-text-dark-border px-5 py-4 rounded-xl focus:border-primary focus:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all duration-300 shadow-inner"
              />
            </motion.div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium"
              >
                <CheckCircle size={20} />
                <span>
                  Message soaring through the digital ether! I'll be in touch
                  soon.
                </span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 font-medium"
              >
                <AlertCircle size={20} />
                <span>Transmission failed. Please try again later.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-4 text-lg shadow-glow-primary hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-dark-bg border-t-transparent rounded-full"
                    />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contacts;
