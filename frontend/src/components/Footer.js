import React from 'react';
import '../assets/styles/Footer.css';

const Footer = ({ setCurrentPage }) => (
    <footer className="footer">
        <p>
            &copy; {new Date().getFullYear()} Nexus Interactive LLC | All rights reserved. |

            <span
                className="footer-link"
                onClick={() => setCurrentPage('privacy')}
            > Privacy Policy
            </span>
        </p>
    </footer>
);

export default Footer;