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
              height: "70px", 
              cursor: "pointer",
              transition: "opacity 0.0s ease"
            }} 
          />
          <p>Call or Message Us for a detailed expression of our expertise!</p>
        </div>

        {/* Main Content - 3 Columns */}
        <div className="footer-grid">
          {/* Address Column - Left */}
          <div className="footer-column">
            <h3>ADDRESS</h3>
            <div className="address-section">
              <p>12, Demonte St, </p>
              <p>Santhome, Chennai,</p>
              <p>Tamil Nadu 60004, India</p>
            </div>
            <div className="contact-section">
              <p>info@zippbay.com</p>
              <p>+91-44-45488670</p>
              <p>+91-9790865554</p>
            </div>
          </div>

          {/* Quick Links Column - Center */}
          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            <ul className="links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              {/* <li><a href="/privacy-policy">Privacy Policy</a></li> */}
            </ul>
          </div>

          {/* Social Media Column - Right */}
          <div className="footer-column">
            <h3>FOLLOW US</h3>
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
          <p className="additional-copyright">
            ©2025  <a href="https://www.zippbay.com" target="_blank" rel="noopener noreferrer">ZippBay</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;