import React, { useEffect, useState } from 'react';
import '../assets/styles/Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    // Deployed backend URL
    const API_BASE_URL = 'https://nexus-interactive.onrender.com';

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/services`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Services;
