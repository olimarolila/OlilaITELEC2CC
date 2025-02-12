import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/valorant-logo.png" alt="Valorant Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/agents">Agents</Link></li>
      </ul>
      <button className="play-btn">Play Now</button>
    </nav>
  );
};

export default Navbar;
