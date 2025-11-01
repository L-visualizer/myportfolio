import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Hemamalini</div>
      <div className="navbar-links">
        <a href="#aboutme">About Me</a>
        <a href="#profession">Profession</a>
        <a href="#milestones">Milestones</a>
        <a href="#myvideos">My Videos</a>
        <a href="#social">Social</a>
        <a href="#connect">Connect</a>
      </div>
    </nav>
  );
}
