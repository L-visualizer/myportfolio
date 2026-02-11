import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Hemamalini</div>
      <div className="navbar-links">
        <Link to="aboutme" smooth={true} duration={500} offset={-70}>
          About Me
        </Link>
        <Link to="profession" smooth={true} duration={500} offset={-70}>
          Profession
        </Link>
        <Link to="milestones" smooth={true} duration={500} offset={-70}>
          Milestones
        </Link>
        <Link to="myvideos" smooth={true} duration={500} offset={-70}>
          My Videos
        </Link>
        <Link to="social" smooth={true} duration={500} offset={-70}>
          Social
        </Link>
        <Link to="connect" smooth={true} duration={500} offset={-70}>
          Connect
        </Link>
      </div>
    </nav>
  );
}
