import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>upcycler studios</h3>
            <p>Where fashion meets infinite loop.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop</h4>
              <a href="#">Vintage</a>
              <a href="#">Upcycled</a>
              <a href="#">Limited Edition</a>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <Link to="/about">Our Story</Link>
              <a href="#">Sustainability</a>
              <a href="#">Process</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <Link to="/contact">Get in Touch</Link>
              <a href="#">Visit Studio</a>
              <a href="#">Collaborate</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Upcycler Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;