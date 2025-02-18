import React, { useState } from 'react';
import './App.css';
import { newsData as initialNewsData, mapsData } from './data';

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-container">
          <img src="/riotlogo.png" alt="Riot Games Logo" className="logo riot-logo" />
          <img src="/valogo.png" alt="Valorant Logo" className="logo valo-logo" />
          <nav className="nav-menu">
            <a href="#">GAME INFO</a>
            <a href="#">MEDIA</a>
            <a href="#">NEWS</a>
            <a href="#">SUPPORT</a>
            <a href="#">OUR SOCIALS</a>
            <a href="#">ESPORTS</a>
          </nav>
        </div>
      </div>
      <button className="play-now-btn">PLAY FOR FREE</button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>A 5v5 character-based tactical shooter</h1>
        <img src="/valohead.png" alt="Valorant Game" />
        <button className="play-for-free-btn">PLAY FOR FREE</button>
      </div>
    </section>
  );
}

function TheLatest() {
  const [newsData, setNewsData] = useState(initialNewsData);

  return (
    <section className="latest-section">
      <h2 className="section-title">
        <span>THE LATEST</span>
        <a href="#" className="news-link">GO TO NEWS PAGE</a>
      </h2>
      <div className="news-grid">
        {newsData.map(news => (
          <NewsCard 
            key={news.id}
            title={news.title}
            description={news.description}
            image={news.image}
            category={news.category}
            date={news.date}
          />
        ))}
      </div>
    </section>
  );
}

function NewsCard({ title, description, image, date, category }) {
  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <p className="news-date"><span className="news-category">{category}</span> | {date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function MapViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMap = { 
    ...mapsData[currentIndex], 
    details: currentIndex === 0 ? mapsData[currentIndex].details + " - Most Played!" : mapsData[currentIndex].details 
  };

  const nextMap = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mapsData.length);
  };

  const prevMap = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mapsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section">
      <div className="content">
        <h2 className="title">{currentMap.name}</h2>
        <p className="description"><strong>Description:</strong> {currentMap.description}</p>
        <p className="description"><strong>Details:</strong> {currentMap.details}</p>
        <p className="description"><strong>Release Date:</strong> {currentMap.releaseDate}</p>
      </div>
      <div className="imageContainer">
        <img src={currentMap.image} alt={currentMap.name} className="image" />
        <div className="navigation-buttons">
          <button className="previous" onClick={prevMap}>&laquo; Previous</button>
          <button className="next" onClick={nextMap}>Next &raquo;</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Riot Games. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TheLatest />
      <MapViewer />
      <Footer />
    </div>
  );
}

export default App;