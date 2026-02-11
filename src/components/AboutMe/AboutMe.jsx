import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section id="aboutme" className="aboutme-section">
      <div className="aboutme-container">
        <img
          src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="Profile"
          className="aboutme-image"
        />
        <div className="aboutme-text">
          <h2>About Me</h2>
          <p>
            I am a marketing professional with a passion for building
            brands and connecting with audiences through storytelling and
            strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
