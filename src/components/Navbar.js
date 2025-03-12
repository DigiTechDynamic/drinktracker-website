import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">
            <i className="fa-solid fa-droplet"></i>
          </span>
          <span className="logo-text">DrinkSmart</span>
        </div>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a></li>
            <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          </ul>
          <a href="#download" className="btn btn-primary navbar-btn">Download</a>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
