import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Compassionate Care for a Healthier Tomorrow</h1>
        <p>
          Excellence in healthcare with a personal touch.
          Experienced specialists dedicated to your recovery.
          Advanced medical solutions tailored to your needs.
          Because your health deserves the very best.
        </p>

        <button
                className="cta-btn"
                onClick={() => {
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                }}
            >
                Book Appointment
            </button>
        
        
      </div>
    </section>
  );
}

export default Hero;
