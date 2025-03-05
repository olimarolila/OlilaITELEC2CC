import React from "react";
import "../MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-content">
        <h1 className="map-title">YOUR MAPS</h1>
        <h2 className="map-subtitle">FIGHT AROUND THE WORLD</h2>
        <p className="map-description">
          Each map is a playground to showcase your creative thinking.
          Purpose-built for team strategies, spectacular plays, and clutch
          moments. Make the play others will imitate for years to come..
        </p>
        <button className="map-btn">VIEW ALL MAPS</button>
      </div>
    </section>
  );
};

export default MapSection;
