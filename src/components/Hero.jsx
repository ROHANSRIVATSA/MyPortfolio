import React, { useCallback } from "react";
import { motion } from "framer-motion";
import "../assets/styles/Hero.css";

// Blob Component for Reusability
const AnimatedBlob = () => (
  <div className="blob-container">
    <motion.svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="blob-svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      aria-hidden="true"
    >
      <path
        fill="#007bff"
        d="M45.2,-58.3C58.1,-49.3,67.5,-34.1,70.7,-18.2C73.9,-2.3,70.9,14.3,63.8,29.1C56.7,43.9,45.5,57,30.7,65.1C15.9,73.2,-2.5,76.3,-19.1,72.1C-35.7,67.9,-50.5,56.5,-59.2,42.6C-67.9,28.7,-70.5,12.4,-70.1,-3.4C-69.7,-19.2,-66.3,-38.4,-56.5,-52.2C-46.7,-66,-30.5,-74.4,-14.2,-70.7C2.1,-67,18.5,-51.2,45.2,-58.3Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  </div>
);

const Hero = () => {
  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Animated Blob */}
      <AnimatedBlob />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1>Hi, I'm Rohan A</h1>
        <p className="lead">Data-focused Software Developer transitioning into AI/ML</p>
        <div className="cta-buttons">
          <motion.button
            className="btn btn-primary me-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToProjects}
            aria-label="View My Work"
          >
            View My Work
          </motion.button>
          <motion.a
            href="/resume.pdf"
            className="btn btn-outline-light"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Download Resume"
            rel="noopener noreferrer"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;