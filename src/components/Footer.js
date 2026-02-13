import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blogs">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="social-icons">
        <span>🌐</span>
        <span>📘</span>
        <span>📸</span>
      </div>

      <p>© 2026 Roots Clinic. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
