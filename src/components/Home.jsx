import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="section home-card">
      <h2 className="section-title">
        👋 Hey there — I’m <span>Shivang</span>
      </h2>

      <p className="about-intro">
        A <strong>Senior Backend Engineer</strong> obsessed with building
        <span className="highlight"> scalable </span>,
        <span className="highlight"> real-time </span>, and
        <span className="highlight"> high-performance </span>
        backend systems that don’t break — even when traffic does 😄
      </p>

      <p className="about-body">
        Over the last <strong>5+ years</strong>, I’ve designed and built systems
        powered by <strong>Kafka</strong>, <strong>Python</strong>,
        <strong> Node.js</strong>, and <strong>AWS</strong> — handling millions
        of events, real-time data flows, and payment processing pipelines.
      </p>

      <p className="about-body">
        I love creating architectures that are
        <strong> clean</strong>, <strong>efficient</strong>,
        and <strong>future-proof</strong>.  
        If it scales beautifully — I’m happy 🚀
      </p>

      <div className="about-tags">
        <span>Distributed Systems</span>
        <span>Event-Driven Design</span>
        <span>Payments & Fintech</span>
        <span>Microservices</span>
        <span>Cloud Engineering</span>
      </div>
    </section>
  );
}
