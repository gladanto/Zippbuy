import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/TopNavBar/NavBar";
import Content from "./Content";

const Menu = () => {
  const location = useLocation();
  const { subCategoryName, category } = location.state || {};

  return (
    <div className="menu-container">
      <Header />
      <NavBar />
      <Content subCategoryName={subCategoryName} category={category} />
      <Footer />
    </div>
  );
};

export default Menu;
