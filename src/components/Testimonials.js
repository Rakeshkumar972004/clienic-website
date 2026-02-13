import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-box">
        <p>"Excellent care and friendly doctors. Highly recommended!"</p>
        <h4>- Priya S.</h4>
      </div>

      <div className="testimonial-box">
        <p>"Professional treatment and great experience."</p>
        <h4>- Arjun K.</h4>
      </div>
    </section>
  );
}

export default Testimonials;
