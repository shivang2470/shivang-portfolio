import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="content">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      <Footer />
    </div>
  );
}
