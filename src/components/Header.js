import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo"></div>

            <nav className="nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#blogs">Blog</a>
                <a href="#contact">Contact</a>
            </nav>

            <button
                className="cta-btn"
                onClick={() => {
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                }}
            >
                Book Appointment
            </button>

        </header>
    );
}

export default Header;
