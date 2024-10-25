import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-logo">NEXUS</h4>
          <p>Your ultimate gaming destination.</p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#games">Games</a></li>
            <li><a href="#tournaments">Tournaments</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Support</h5>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Connect</h5>
          <div className="social-links">
            <a href="#discord">Discord</a>
            <a href="#twitter">Twitter</a>
            <a href="#twitch">Twitch</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nexus Gaming. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;