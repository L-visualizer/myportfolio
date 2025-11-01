import React from "react";
import "./Connect.css";

export default function Connect() {
  return (
    <section id="connect" className="connect-section">
      <h2>Connect With Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
