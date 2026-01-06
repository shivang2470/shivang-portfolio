import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills-wrapper">
      <h2 className="section-title">🛠 Skills</h2>

      <div className="skills-card">
        <p className="skills-intro">
          Here are the technologies and tools I work with regularly to build 
          robust and scalable applications:
        </p>

        <div className="skill-tags">
          <span>Python</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>React.js</span>
          <span>Django</span>
          <span>FastAPI</span>
          <span>Kafka</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Redis</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>AWS</span>
          <span>Elasticsearch</span>
        </div>
      </div>
    </section>
  );
}
