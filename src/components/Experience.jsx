import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience-wrapper">

      <h2 className="section-title">💼 Professional Experience</h2>

      {/* ========================= */}
      {/* OPEN FINANCIAL TECHNOLOGIES */}
      {/* ========================= */}
      <div className="exp-card">

        <div className="exp-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
            alt="fintech"
            className="exp-icon"
          />

          <div>
            <h3>Senior Software Engineer — Open Financial Technologies</h3>
            <p className="exp-duration">Sep 2022 — Present</p>
          </div>
        </div>

        <p className="exp-body">
          I work as part of the <strong>Core Banking & Risk Engineering team</strong> where
          reliability and correctness matter most. I build <strong>secure, high-throughput payment & risk detection systems</strong> for UPI, NEFT, IMPS, and RTGS flows.
        </p>

        <div className="highlight-box">
          ⚙️ <strong>Tech:</strong> Python • Node.js • Kafka • Elasticsearch • MySQL • AWS SQS • Docker • Kubernetes • GitHub Actions • ElastAlert
        </div>

        <div className="exp-points">
          <p>🛡 Built a real-time Risk Engine using Python & Elasticsearch that detects suspicious behavior and triggers instant alerts.</p>
          <p>⚡ Designed & developed a <strong>high-throughput payout system</strong> improving reliability and operational efficiency.</p>
          <p>🔌 Built a <strong>payment gateway module</strong> integrating multiple aggregators for secure, large-volume transaction processing.</p>
          <p>📜 Created a tool to generate <strong>Swagger & Postman docs</strong> directly from GitHub, reducing documentation effort.</p>
          <p>📡 Deployed & managed <strong>Kafka & ElastAlert</strong> on self-hosted infra powering real-time data pipelines.</p>
        </div>

        <p className="exp-conclusion">
          This role strengthened my expertise in <strong>distributed systems</strong>, <strong>event-driven architecture</strong>, and <strong>production-grade reliability</strong>.
        </p>
      </div>

      {/* ========================= */}
      {/* ADCURATIO */}
      {/* ========================= */}
      <div className="exp-card">
        <div className="exp-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            alt="rewards"
            className="exp-icon"
          />
          <div>
            <h3>Software Developer — Adcuratio Media Inc.</h3>
            <p className="exp-duration">May 2021 — Sep 2022</p>
          </div>
        </div>

        <p className="exp-body">
          Built <strong>reward-driven engagement platforms</strong> for large audiences, focusing on performance, analytics & stream processing.
        </p>

        <div className="highlight-box">
          ⚙️ <strong>Tech:</strong> Python • Node.js • PostgreSQL • Kafka
        </div>

        <div className="exp-points">
          <p>🎁 Built a <strong>token-based reward system</strong> boosting engagement, retention & monetization.</p>
          <p>💰 Designed earning & redemption flows including Amazon gift cards.</p>
          <p>📊 Developed backend services to track usage, prevent fraud & optimize reward logic.</p>
        </div>

        <p className="exp-conclusion">
          Learned how <strong>product thinking + backend engineering</strong> drive real business impact.
        </p>
      </div>

      {/* ========================= */}
      {/* MAGTAPP */}
      {/* ========================= */}
      <div className="exp-card">
        <div className="exp-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="web"
            className="exp-icon"
          />
          <div>
            <h3>Backend Developer — MagTapp Technologies</h3>
            <p className="exp-duration">Oct 2020 — May 2021</p>
          </div>
        </div>

        <p className="exp-body">
          Built backend systems supporting large-scale user growth & marketing operations.
        </p>

        <div className="exp-points">
          <p>🧠 Built a <strong>marketing CMS & workflow platform</strong> for tracking referrals & fund allocations.</p>
        </div>

        <p className="exp-conclusion">
          Gained foundational experience in <strong>scalable backend design</strong>.
        </p>
      </div>

      {/* ========================= */}
      {/* INTERN */}
      {/* ========================= */}
      <div className="exp-card">
        <div className="exp-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
            alt="learning"
            className="exp-icon"
          />
          <div>
            <h3>Software Engineer Intern — Grads IT Solutions</h3>
            <p className="exp-duration">Dec 2019 — Sep 2020</p>
          </div>
        </div>

        <p className="exp-body">
          Built an <strong>E-Learning platform</strong> connecting teachers & students through courses, tutorials & notes.
        </p>

        <p className="exp-conclusion">
          This is where I truly fell in love with backend engineering 💙
        </p>
      </div>

    </section>
  );
}
