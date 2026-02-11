import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Hi, I’m Hemamalini 👋</h1>
          <h2>Marketing Professional & Brand Strategist</h2>
          <p>
            I help brands tell compelling stories, increase engagement, and
            grow their audiences with smart strategies.
          </p>
        </div>
        <div className="intro-image">
          <img
            src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Marketing Professional"
          />
        </div>
      </div>
    </section>
  );
}
