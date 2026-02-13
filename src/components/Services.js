import React from "react";
import "./Services.css";



function Services() {
 const services = [
  {
    title: "Fertility Treatment",
    desc: "Advanced fertility solutions with personalized care and modern reproductive technology.",
    image: "../assets/fertility.png",
  },
  {
    title: "Women’s Health",
    desc: "Comprehensive gynecological care focused on every stage of a woman’s life.",
    image: "../assets/womens-health.png",
  },
  {
    title: "Health Checkup",
    desc: "Complete preventive health packages for early detection and better wellness.",
    image: "../assets/health-checkup.png",
  },
];

  

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          We provide specialized medical services designed to support your
          health and well-being at every stage.
        </p>
      </div>

      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
