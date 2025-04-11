
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/TestHome/Footer";
import NavBar from "../../components/TopNavBar/NavBar";
import Content from "./Content";

const Menu = () => {
  const location = useLocation();
  const { category, subCategory, childSubCategory } = location.state || {};

  // Optional: Log props once on first load (only when sub or child exists)
  useEffect(() => {
    if (subCategory || childSubCategory) {
      console.log("Props passed to Content:", {
        category,
        subCategory,
        childSubCategory,
      });
    }
  }, [category, subCategory, childSubCategory]);

  return (
    <div className="menu-container">
      <Header />
      <NavBar />
      <Content
        category={category}
        subCategory={subCategory}
        childSubCategory={childSubCategory}
      />
      <Footer />
    </div>
  );
};

export default Menu;
