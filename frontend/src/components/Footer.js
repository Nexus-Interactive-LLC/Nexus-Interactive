import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assets/styles/Footer.css';

const Footer = () => (
    <footer className="footer">
        <p>
            &copy; {new Date().getFullYear()} Nexus Interactive LLC | All rights reserved. | Schedule Today | <Link to="/privacypolicy" className="footer-link"> Privacy Policy</Link>

        </p>
    </footer>
);

export default Footer;
