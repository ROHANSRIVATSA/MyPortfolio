import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaAws, FaDocker } from "react-icons/fa";
import { SiTensorflow, SiPostgresql, SiTableau } from "react-icons/si";
import "../assets/styles/Skills.css";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Tableau", icon: <SiTableau /> },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="mt-3">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;