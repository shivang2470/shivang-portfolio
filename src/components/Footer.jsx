import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-brand">
          <h3>Shivang Srivastava</h3>
        </div>

        <p className="footer-tagline">
          Building scalable systems with ❤️ and clean architecture.
        </p>
      </div>

      <div className="footer-links">
        <a href="mailto:shivang.sri32@gmail.com" target="_blank" rel="noreferrer">
          📫 shivang.sri32@gmail.com
        </a>
        <a href="https://linkedin.com/in/shivang-srm" target="_blank" rel="noreferrer">
          🔗 linkedin.com/in/shivang-srm
        </a>
        <a href="https://github.com/shivang2470" target="_blank" rel="noreferrer">
          💻 github.com/shivang2470
        </a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} — Crafted with care ✨
      </div>

    </footer>
  );
}
