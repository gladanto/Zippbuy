import React from "react";
import styles from "./Footer.module.css"; // Importing module.css
import logoW from "../../assets/logo-w.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`text-white py-4 ${styles.footerAnimated}`} style={{ backgroundColor: "#162e79" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          
          {/* Logo & Contact Information */}
          <div className={`col-md-3 mb-4 ${styles.fadeIn}`}>
            <img src={logoW} alt="ZippBuy Logo" className="mb-3" style={{ width: "160px" }} />
            <p className="small mb-1">No: 45, Santhome High road, Santhome,</p>
            <p className="small mb-1">Chennai, Tamil Nadu 60004, India</p>
            <p className="small mb-1">Phone: +91 9176 016 916</p>
            <p className="small">Email: zippbuy@enochshipping.com</p>
          </div>

          {/* Quick Links */}
          <div className={`col-md-3 mb-4 ${styles.fadeIn}`}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>About Us</a></li>
              <li><a href="/help" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Help Center</a></li>
              <li><a href="/contact" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Contact Us</a></li>
              <li><a href="/terms" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Terms & Conditions</a></li>
              <li><a href="/privacy" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={`col-md-3 mb-4 ${styles.fadeIn}`}>
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="/shipping" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Shipping & Logistics</a></li>
              <li><a href="/tracking" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Order Tracking</a></li>
              <li><a href="/returns" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>Returns & Refunds</a></li>
              <li><a href="/support" className={`text-white text-decoration-none d-block ${styles.linkHover}`}>24/7 Support</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className={`col-md-3 mb-4 ${styles.fadeIn}`}>
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`text-white fs-4 ${styles.socialHover}`}>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-white fs-4 ${styles.socialHover}`}>
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-white fs-4 ${styles.socialHover}`}>
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`text-white fs-4 ${styles.socialHover}`}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className={`text-center border-top pt-3 mt-3 small ${styles.fadeIn}`}>
          <p className="mb-0">©2025 ZippBuy, Enoch Shipping Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
