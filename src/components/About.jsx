import React, { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../assets/styles/About.css";

const About = () => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      id="about"
      className="py-5"
    >
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <p className="lead">
              I'm a data-focused Software Developer with 1 year of experience in full-stack development and expertise in data handling, analysis, and visualization. I'm currently transitioning into AI/ML through coursework and projects, aiming to build data-driven solutions for impactful decision-making. Proficient in Python, SQL, and cloud technologies, I'm pursuing a Master’s in Computer Science at Northeastern University, focusing on AI/ML and data science.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;