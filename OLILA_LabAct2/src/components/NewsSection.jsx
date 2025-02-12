import React from "react";
import "./NewsSection.scss";
import newsData from "../data.js"; 

const NewsSection = () => {
  return (
    <section className="news">
      <h2>Latest News</h2>
      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
