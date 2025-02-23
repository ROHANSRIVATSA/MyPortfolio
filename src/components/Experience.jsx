import React from "react";
import "../assets/styles/Experience.css"; // Ensure this path is correct

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="experience-item mb-4">
              <h3>Associate Software Engineer</h3>
              <h4>X Labs (formerly MapleLabs) | Nov 2023 – Dec 2024</h4>
              <ul>
                <li>Analyzed and resolved customer issue tickets, ensuring minimal downtime and high client satisfaction.</li>
                <li>Led the onboarding and mentoring of new team members, facilitating knowledge transfer and contributing to team growth and productivity.</li>
                <li>Collaborated with cross-functional teams to troubleshoot and implement long-term solutions.</li>
              </ul>
            </div>
            <div className="experience-item mb-4">
              <h3>Full Stack Web Development Intern</h3>
              <h4>Varcons | March 2023 – April 2023</h4>
              <ul>
                <li>Designed functional web pages and used databases to collect and manage data based on client specifications.</li>
                <li>Facilitated knowledge sharing by creating internal project guidelines.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;