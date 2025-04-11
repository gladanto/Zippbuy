import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "/assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-enoch">
      <div className="footer-container">
        {/* Header Section */}
        <div className="footer-header">
           <img 
                      src={logo} 
                      alt="Company Logo" 
                      className="logo hover-opacity" 
                      style={{ 
                        height: "40px", 
                        cursor: "pointer",
                        transition: "opacity 0.0s ease"
                      }} 
         />
          <p>Call or Message Us for a detailed expression of our expertise!</p>
        </div>

        {/* Main Content - 3 Columns */}
        <div className="footer-grid">
          {/* Address Column */}
          <div className="footer-column">
            <div className="address-section">
              <h3>ADDRESS</h3>
              <p>2/2 Lalitha Nagar, 2nd Street,</p>
              <p>Papanasam Sivan Salai,</p>
              <p>Santhome, Chennai,</p>
              <p>Tamil Nadu,</p>
              <p>India 6000 04</p>
            </div>
            <div className="contact-section">
              <p>info@enoch.co.in</p>
              <p>+91-44-2446 0444</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="links-list">
            <li>
                <a href="/"> Home</a>
              </li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>© Copyright Enoch</p>
          <p>All Rights Reserved</p>
          <p className="additional-copyright">
            ©2025 ZippBuy, <a href="https://www.enochshipping.com" target="_blank" rel="noopener noreferrer">Enoch Shipping Solutions</a>. All rights reserved.
          </p>
        </div>

        {/* Bottom Links */}
        
      </div>
    </footer>
  );
};

export default Footer;