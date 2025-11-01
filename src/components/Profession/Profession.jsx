import React from "react";
import "./Profession.css";

export default function Profession() {
  const roles = [
    "Marketing Strategist",
    "Social Media Manager",
    "Brand Consultant",
    "Content Creator",
  ];

  return (
    <section id="profession" className="profession-section">
      <h2>My Profession</h2>
      <div className="profession-cards">
        {roles.map((role) => (
          <div key={role} className="profession-card">
            <h3>{role}</h3>
            <p>Expert in creating impactful strategies and campaigns.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
