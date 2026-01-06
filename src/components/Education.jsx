import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education-wrapper">
      <h2 className="section-title">🎓 Education</h2>

      <div className="edu-card">
        <div className="edu-header">
          <h3>B.Tech — Computer Science & Engineering</h3>
          <p className="edu-institute">Dr. A.P.J. Abdul Kalam Technical University</p>
        </div>

        <div className="highlight-box">
          🎓 <strong>GPA:</strong> 8.29
        </div>

        <p className="edu-conclusion">
          Studied core computer science subjects including Data Structures, Algorithms, Databases, 
          Networking, and Software Engineering, building a strong foundation for backend and system design.
        </p>
      </div>
    </section>
  );
}
