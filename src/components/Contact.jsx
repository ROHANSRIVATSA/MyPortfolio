import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="contact"
    >
      <div className="container">
        <h2>Contact Me</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="contact-button"
        >
          Send Message
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Contact;