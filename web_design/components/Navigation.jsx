import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/logo-white.png" alt="Upcycler Studios Logo" className="logo-image" />
            <span className="logo-text">upcycler studios</span>
          </Link>
        </div>
        <div className="nav-menu">
          <Link to="/" className={isActive('/')}>home</Link>
          <Link to="/about" className={isActive('/about')}>about</Link>
          <Link to="/contact" className={isActive('/contact')}>contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;