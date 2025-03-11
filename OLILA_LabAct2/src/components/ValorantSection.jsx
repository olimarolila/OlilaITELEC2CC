import React from "react";
import "../ValorantSection.css";

const ValorantSection = () => {
  return (
    <section className="valorant-section">
      <div className="valorant-content">
        <h1 className="valorant-title">WE ARE VALORANT</h1>
        <h2 className="valorant-subtitle">DEFY THE LIMITS</h2>
        <p className="valorant-description">
          Blend your style and experience on a global, competitive stage. You have 13 rounds to 
          attack and defend your side using sharp gunplay and tactical abilities. And, with one 
          life per round, you'll need to think faster than your opponent if you want to survive. 
          Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
        </p>
        <button className="valorant-btn">LEARN THE GAME</button>
      </div>
      
      <div className="valorant-video">
        <video autoPlay loop muted>
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ValorantSection;
