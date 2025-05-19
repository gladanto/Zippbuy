import { Link } from 'react-router-dom';
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
          {/* Quick Links Column - Center */}
          <div className="footer-column">
            <h3>COMPANY</h3>
            <ul className="links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
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
              <a href="https://www.linkedin.com/company/enoch-shipping-solutions" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
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
          <div className="footer-column">
            <div style={{ marginBottom: "40px", marginTop: "20px" }}>
              <iframe
                title="ZippBay Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3932913660785!2d80.27148241482445!3d13.026657717179705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bf3c1fcdfd%3A0x60c4d20e5c3e5f9b!2sSanthome%2C%20Chennai%2C%20Tamil%20Nadu%20600004%2C%20India!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="footer-copyright">
          <p className="additional-copyright">
            ©2025  <a href="https://www.enochshipping.com" target="_blank" rel="noopener noreferrer">Enoch</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;