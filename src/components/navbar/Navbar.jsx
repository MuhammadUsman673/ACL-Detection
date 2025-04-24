import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? 'custom-active' : '';
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (!confirmLogout) return;

    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

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
          {!user ? (
            <li><Link to="/login" className={getActiveClass('/login')}>Login</Link></li>
          ) : (
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="custom-hamburger" onClick={toggleMenu}>
        <button>☰</button>
      </div>
    </nav>
  );
}

export default Navbar;
