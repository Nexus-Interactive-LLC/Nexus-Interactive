import React from 'react';
import '../assets/styles/Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
    const isHomePage = window.location.pathname === "/";

    const handleNavClick = () => {
        if (currentPage === 'privacy') {
            setCurrentPage('home');
        }
    };

    return (
        <header className="header">
            <a href="/" onClick={handleNavClick}>
                <h1>Nexus Interactive</h1>
            </a>
            {isHomePage && (
                <nav>
                    <a href="#whoweare" onClick={handleNavClick}>About</a>
                    <a href="#services" onClick={handleNavClick}>Services</a>
                    <a href="#partners" onClick={handleNavClick}>Partners</a>
                    <a href="#schedulecall" onClick={handleNavClick}>Schedule Appointment</a>
                </nav>
            )}
        </header>
    );
};

export default Header;