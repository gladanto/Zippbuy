import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../../components/ReusableButton/ReusableButton";
import logo from "/assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";



const Header = () => {

  const navigate = useNavigate();
  const handleMobileMenu = () => {
    console.log("clicked test")
    navigate("/test", { state: { } });
  };

  

  return (
    <div className="header-container py-2 px-4 shadow-sm bg-white">
      <nav className="navbar d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" style={{ height: "40px" }} />
        </a>
        <div className="d-flex gap-2 flex-nowrap">
          <ReusableButton className="reusable-btn login btn-sm" label="Login" onClick={() => console.log("Login clicked")} />
          <ReusableButton className="reusable-btn register btn-sm" label="Register" onClick={() => handleMobileMenu()} />
        </div>
      </nav>
    </div>
  );
}; 

export default Header;
