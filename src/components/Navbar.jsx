import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-wrapper">

        <div className="nav-left">
          <div className="logo-circle">SS</div>
          <h1 className="brand">Shivang Srivastava</h1>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </div>

      </div>
    </nav>
  );
}
