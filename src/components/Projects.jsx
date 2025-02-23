import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/Projects.css"; // Add a CSS file for styling

const Projects = () => {
  const projects = [
    {
      title: "Optical Coherence Tomography Using Federated Machine Learning",
      description:
        "Developed a Federated ML framework for analyzing OCT images, enabling collaborative training on distributed datasets while prioritizing privacy and security.",
      technologies: ["Python", "TensorFlow", "Federated Learning"],
      github: "#",
      demo: "#",
    },
    {
      title: "GSI-Sol-Support",
      description:
        "Analyzed and resolved customer issue tickets, ensuring minimal downtime and high client satisfaction.",
      technologies: ["Django", "Vue.js", "REST APIs"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="technologies">
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </p>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="btn btn-primary me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="btn btn-outline-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;