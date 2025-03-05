import React from "react";
import newsData from "../newsData";
import "../NewsSection.css";

const LatestNews = () => {
    return (
        <section className="latest-news">
            <div className="news-header">
                <h2>THE LATEST</h2>
                <a href="#" className="news-link">
                  GO TO NEWS PAGE <span>↗</span>
                </a>
            </div>

            <div className="news-container">
                {newsData.map((news) => (
                    <div key={news.id} className="news-card">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-content">
                            <p className="news-category">{news.category} | {news.date}</p>
                            <h3 className="news-title">{news.title}</h3>
                            <p className="news-description">{news.description}</p>
                          </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;