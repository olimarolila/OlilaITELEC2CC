import React from "react";
import "../AgentsSection.css";

const AgentSection = () => {
  return (
    <section className="agent-section">
      <div className="agent-content">
        <h1 className="agent-title">YOUR AGENTS</h1>
        <h2 className="agent-subtitle">CREATIVITY IS YOUR GREATEST WEAPON.</h2>
        <p className="agent-description">
          More than guns and bullets, you'll choose an Agent armed with adaptive,
          swift, and lethal abilities that create opportunities to let your gunplay
          shine. No two Agents play alike, just as no two highlight reels will look
          the same.
        </p>
        <button className="agent-btn">VIEW ALL AGENTS</button>
      </div>
    </section>
  );
};

export default AgentSection;