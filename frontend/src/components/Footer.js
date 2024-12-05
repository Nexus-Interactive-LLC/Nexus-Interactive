import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Agency Name. All rights reserved.</p>
    </footer>
);

export default Footer;
