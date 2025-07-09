import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link'; 
import './Header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target) && menuActive) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuActive]);

  return (
    <header ref={headerRef}>
      <div className="logo-container">
        <img 
          src="/assets/IMG-20250129-WA0014.jpg" 
          alt="Company Logo" 
          className="logo-image"
          loading="lazy"
        />
        <span className="logo-text">Ape Softwares</span>
      </div>
      <div 
        className={`hamburger-menu ${menuActive ? 'active' : ''}`} 
        onClick={toggleMenu} 
        role="button" 
        tabIndex={0} 
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={menuActive ? "active" : ""}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <ScrollLink smooth to="/#services" onClick={closeMenu}>Services</ScrollLink>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <ScrollLink smooth to="/#skills" onClick={closeMenu}>Skills</ScrollLink>
          </li>
          <li>
            <ScrollLink smooth to="/#projects" onClick={closeMenu}>Projects</ScrollLink>
          </li>
          <li>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;