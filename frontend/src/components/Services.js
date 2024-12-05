import React, { useEffect, useState } from 'react';
import '../assets/styles/Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/api/services')  // Fetch from the backend services route
            .then(response => response.json())
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
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Services;
