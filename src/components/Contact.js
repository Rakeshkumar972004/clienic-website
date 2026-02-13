import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Book Appointment</h2>
      

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className="clinic-info">
        <p>📍 Chennai, Tamil Nadu</p>
        <p>📞 +91 9876543210</p>
        <p>✉ info@rootsclinic.com</p>
      </div>
    </section>
  );
}

export default Contact;
