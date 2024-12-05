import React, { useEffect, useState } from 'react';
import '../assets/styles/Partners.css';

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('/api/partners') // Replace with your backend API URL
            .then(response => response.json())
            .then(data => setPartners(data));
    }, []);

    return (
        <section id="partners" className="partners">
            <h2>Our Partners</h2>
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <div key={index} className="partners-item">
                        <h3>{partner.title}</h3>
                        <p>{partner.description}</p>
                        <a href={partner.link} target="_blank" rel="noopener noreferrer">View Partners</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
