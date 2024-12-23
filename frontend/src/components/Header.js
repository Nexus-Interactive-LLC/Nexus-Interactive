import React from 'react';
import '../assets/styles/Header.css';
import {Link, useNavigate} from "react-router-dom";
import logo from '../assets/styles/media/nexus-logo.png';

const Header = ({ currentPage, setCurrentPage }) => {
    const navigate = useNavigate();
    const isHomePage = window.location.pathname === "/";
    const isPortfolioPage = window.location.pathname === "/Portfolio";

    const handleNavClick = (e, targetPage) => {
        if (isPortfolioPage) {
            navigate('/');
        } else {
            if (targetPage === 'privacy') {
                setCurrentPage('home');
            }
        }
    };

    return (
        <header className="header">
            <a href="/" onClick={handleNavClick}>
                <img src={logo} alt="Nexus Interactive LLC" className="logo" />
            </a>
            {isHomePage && (
                <nav>
                    <a href="#whoweare" onClick={handleNavClick}>About</a>
                    {/*<a href="#services" onClick={handleNavClick}>Services</a>*/}
                    {/*<a href="#partners" onClick={handleNavClick}>Partners</a>*/}
                    <a href="#schedulecall" onClick={handleNavClick}>Schedule Appointment</a>
                    <Link to="/Portfolio">Portfolio</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;