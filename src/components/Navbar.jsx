import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80; // Adjust for Navbar height
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setActiveLink(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => scrollToSection("hero")}>
          Rohan A
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "hero" ? "active" : ""}`}
                to="/"
                onClick={() => scrollToSection("hero")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                to="/about"
                onClick={() => scrollToSection("about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "skills" ? "active" : ""}`}
                to="/skills"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "experience" ? "active" : ""}`}
                to="/experience"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
                to="/projects"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                to="/contact"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;