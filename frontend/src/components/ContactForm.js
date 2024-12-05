// frontend/src/components/ContactForm.js

import React, { useState } from 'react';
import '../assets/styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            await response.json();
            if (response.ok) {
                setFormStatus('Your message has been sent successfully!');
            } else {
                setFormStatus('There was an error sending your message.');
            }

            // Clear the form
            setFormData({ name: '', email: '', message: '' });

        } catch (err) {
            setFormStatus('There was an error sending your message.');
        }
    };

    return (
        <section id="contact" className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                    value={formData.message}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>

            {formStatus && <p>{formStatus}</p>}
        </section>
    );
};

export default ContactForm;
