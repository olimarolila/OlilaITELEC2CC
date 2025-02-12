import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>DEFY THE LIMITS</h1>
        <p>Valorant is a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.</p>
        <button className="play-btn">Play Free</button>
      </div>
    </section>
  );
};

export default Hero;
