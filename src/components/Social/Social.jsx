import React from "react";
import "./Social.css";

export default function Social() {
  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Instagram", url: "#", icon: "📸" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "YouTube", url: "#", icon: "🎥" },
  ];

  return (
    <section id="social" className="social-section">
      <h2>Connect on Social Media</h2>
      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
