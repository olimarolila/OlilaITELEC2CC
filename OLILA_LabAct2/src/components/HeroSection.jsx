import React from "react";
import "../HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="/public/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h2 className="hero-subtitle">A 5v5 character-based tactical shooter</h2>
        <a href="#">
        <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?" alt="Valorant Logo" className="hero-title"/>
        </a>
        <a href="#" className="play-button">PLAY FOR FREE</a>
      </div>
    </section>
  );
};

export default HeroSection;