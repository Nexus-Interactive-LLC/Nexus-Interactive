import React, { useEffect, useState } from 'react';
import '../assets/styles/Partners.css';

const Partners = () => {
    const [partners, setPartners] = useState([]);

    // Deployed backend URL
    const API_BASE_URL = 'https://nexus-interactive.onrender.com';

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/partners`) // Full URL for the backend API
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setPartners(data))
            .catch(error => console.error('Error fetching partners:', error));
    }, []);

    return (
        <section id="partners" className="partners">
            <h2>Our Partners</h2>
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <div key={index} className="partners-item">
                        <h3>{partner.title}</h3>
                        <p>{partner.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
