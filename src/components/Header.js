import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link'; 
import './Header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header>
      <div className="logo">Ape Softwares</div>
      <div className="hamburger-menu" onClick={toggleMenu} role="button" tabIndex={0} aria-label="Toggle Menu">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
