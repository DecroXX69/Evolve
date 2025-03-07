import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'solutions', 'portfolio', 'partners', 'contact'];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Evolve Realty Logo" className="logo" />
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Desktop and Mobile Navigation */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map(item => (
              <li className="nav-item" key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`nav-link text-uppercase ${activeSection === item ? 'active' : ''}`}
                >
                  {item === 'home' ? 'Intro' : item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
