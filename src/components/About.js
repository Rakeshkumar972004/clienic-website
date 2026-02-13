import React from "react";
import "./About.css";
import { FaUserMd, FaHeartbeat, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Roots Clinic</h2>
          <p>
            At Roots Clinic, we believe healthcare is not just about treatment —
            it’s about trust, compassion, and long-term wellness.
          </p>
        </div>

        <div className="about-box">
          <div className="about-card">
            <FaUserMd className="about-icon" />
            <h3>Who We Are</h3>
            <p>
              A team of experienced and certified medical professionals
              dedicated to providing safe, personalized, and patient-centered
              care.
            </p>
          </div>

          <div className="about-card">
            <FaHeartbeat className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              To deliver compassionate and affordable healthcare using modern
              medical technology and evidence-based practices.
            </p>
          </div>

          <div className="about-card">
            <FaAward className="about-icon" />
            <h3>Why Choose Us?</h3>
            <p>
              Trusted by hundreds of patients, we focus on accurate diagnosis,
              advanced treatment, and long-term wellness outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
