import React from 'react';
import '../assets/styles/Portfolio.css'; // Optional CSS for styling
import iconSite1 from '../assets/styles/media/iconsite1.png';

// Portfolio data
const portfolioItems = [
    {
        title: "Personal Website",
        description: "A modern, responsive website for showcasing their work.",
        image: iconSite1, // Replace with real image URLs
        link: "https://aad3m.com",
    }
];

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>Our Portfolio</h2>
            <p>Check out some of our latest work below.</p>
            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
