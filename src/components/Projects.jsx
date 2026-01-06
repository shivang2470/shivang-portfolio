import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects-wrapper">
      <h2 className="section-title">🌟 Projects</h2>

      {/* ========================= */}
      {/* REAL-TIME QUIZ & REWARDS */}
      {/* ========================= */}
      <div className="project-card">
        <div className="project-header">
          <h3>Real-Time Quiz & Rewards Platform</h3>
        </div>

        <p className="project-body">
          Developed an <strong>event-driven backend</strong> using Kafka and Redis to support 
          live quizzes, reward distribution, and dynamic leaderboards at scale. 
          Ensured real-time performance and high availability for thousands of concurrent users.
        </p>

        <div className="highlight-box">
          ⚙️ <strong>Tech:</strong> Python • Node.js • Kafka • Redis • WebSocket • PostgreSQL • Docker • AWS
        </div>

        <div className="project-points">
          <p>🎯 Implemented live quiz sessions with real-time scoring and instant feedback.</p>
          <p>🏆 Integrated a rewards engine that calculates points, leaderboards, and distributes virtual tokens.</p>
          <p>📊 Built dashboards to track engagement, performance, and user analytics in real-time.</p>
          <p>🔧 Optimized backend pipelines for low latency and high concurrency.</p>
        </div>

        <p className="project-conclusion">
          This project strengthened my skills in <strong>real-time systems, event-driven architecture</strong>, 
          and <strong>scalable backend design</strong>.
        </p>
      </div>

      {/* ========================= */}
      {/* STOCK MECHANICS */}
      {/* ========================= */}
      <div className="project-card">
        <div className="project-header">
          <h3>Stock Mechanics</h3>
        </div>

        <p className="project-body">
          Built an <strong>automated stock analytics and reporting engine</strong> that processes 
          financial data, generates insights, and displays them on interactive dashboards.
          Focused on accurate calculations, historical data analysis, and predictive analytics.
        </p>

        <div className="highlight-box">
          ⚙️ <strong>Tech:</strong> Python • Pandas • SQL • Dash/Plotly • Kafka • AWS • Docker
        </div>

        <div className="project-points">
          <p>📈 Automated ETL pipelines to fetch, clean, and process large-scale stock market data.</p>
          <p>📊 Created insightful dashboards for portfolio analytics, risk metrics, and trading signals.</p>
          <p>🤖 Developed alerting system for significant market events and anomalies.</p>
          <p>🔧 Ensured system reliability and efficiency using Kafka and optimized backend pipelines.</p>
        </div>

        <p className="project-conclusion">
          This project deepened my expertise in <strong>data pipelines, analytics dashboards</strong>, 
          and <strong>automated financial reporting</strong>.
        </p>
      </div>

    </section>
  );
}
