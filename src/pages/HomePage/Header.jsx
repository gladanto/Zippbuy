import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import { MdShoppingCart } from "react-icons/md"; // Unique Cart Icon

const Header = () => {
  const scrollToCustomerSupport = () => {
    document
      .getElementById("customer-support")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light px-4 w-100 shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="ZippBuy Logo" height="40" />
          </Link>

          {/* Search Bar
          <div className="d-flex flex-grow-1 mx-3 ${styles.searchContainer}">
            <input
              type="text"
              placeholder="Search for products, brands, and more"
              className={`form-control me-2 ${styles.searchInput}`}
            />
            <button className="btn btn-outline-primary">
              <i className="bi bi-search"></i>
            </button>
          </div> */}

          {/* Navbar Links */}
          <div className="navbar-nav ms-auto d-flex align-items-center">
            <button
              onClick={scrollToCustomerSupport}
              className={`btn btn-link nav-link ${styles.hoverEffect}`}
            >
              {/* Support 24x7* */}
            </button>

            {/* Cart Icon
            <Link to="/cart" className={`nav-link d-flex align-items-center ${styles.hoverEffect}`}>
              <MdShoppingCart size={24} className="me-1" />
              Cart
            </Link> */}

            {/* Login & Register Buttons */}
            <div className="d-flex">
              <Link to="/login" className={styles.loginBtn}>
                Login
              </Link>
              <Link to="/register" className={styles.registerBtn}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
