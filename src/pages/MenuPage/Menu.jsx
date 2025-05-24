
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/TestHome/Footer";
import NavBar from "../../components/TopNavBar/NavBar";
import Content from "./Content";

const Menu = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [childSubCategory, setChildSubCategory] = useState(null);

  useEffect(() => {
    const storedCategory = sessionStorage.getItem("category");
    const storedSubCategory = sessionStorage.getItem("subCategory");
    const storedChildSubCategory = sessionStorage.getItem("childSubCategory");

    setCategory(storedCategory ? JSON.parse(storedCategory) : null);
    setSubCategory(storedSubCategory ? JSON.parse(storedSubCategory) : null);
    setChildSubCategory(storedChildSubCategory ? JSON.parse(storedChildSubCategory) : null);
  }, []);

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
