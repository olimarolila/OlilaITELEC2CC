import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import SeasonBanner from "./components/SeasonBanner";
import ValorantSection from "./components/ValorantSection";
import AgentsSection from "./components/AgentsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import React, { useState } from 'react';


function App() {
  return (
    <div>
      <Header />
        <HeroSection />
        <NewsSection />
        <SeasonBanner />
        <ValorantSection />
        <AgentsSection />
        <MapSection />
        <Footer />
    </div>
  );
}

export default App;