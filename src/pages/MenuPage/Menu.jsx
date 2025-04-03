import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/TopNavBar/NavBar";
import Content from "./Content";

const Menu = () => {
  const location = useLocation();
  const { category, subCategory, childSubCategory } = location.state || {};

  return (
    <div className="menu-container">
      <Header />
      <NavBar />
      <Content category={category} subCategory={subCategory} childSubCategory={childSubCategory} />
      <Footer />
    </div>
  );
};

export default Menu;