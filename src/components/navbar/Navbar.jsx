import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? 'custom-active' : '';
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-logo">
        <img src="/src/assets/zain.png" alt="Logo" />
      </div>
      <div className={`custom-menu ${menuOpen ? 'custom-menu-active' : ''}`}>
        <ul>
          <li><Link to="/" className={getActiveClass('/')}>Home</Link></li>
          <li><Link to="/about" className={getActiveClass('/about')}>About</Link></li>
          <li><Link to="/upload" className={getActiveClass('/upload')}>Upload MRI</Link></li>
          <li><Link to="/results" className={getActiveClass('/results')}>Detection Results</Link></li>
          <li><Link to="/contact" className={getActiveClass('/contact')}>Contact Us</Link></li>
          <li><Link to="/login" className={getActiveClass('/login')}>Login</Link></li>
        </ul>
      </div>
      <div className="custom-hamburger" onClick={toggleMenu}>
        <button>☰</button>
      </div>
    </nav>
  );
}

export default Navbar;
