import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryHover = (index) => {
    setActiveCategory(index);
    setActiveSubCategory(null);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
    setActiveSubCategory(null);
  };

  const handleSubCategoryHover = (index) => {
    setActiveSubCategory(index);
  };

  const handleSubCategoryLeave = () => {
    setActiveSubCategory(null);
  };

  const handleSubCategoryClick = (category, subCategoryName) => {
    console.log("Selected Subcategory:", subCategoryName);
    console.log("Whole Category Data:", category);

    navigate("/menu", { state: { subCategoryName, category } });
  };

  return (
    <nav className="navbar-container d-flex justify-content-center">
      {data.map((category, index) => (
        <div
          key={index}
          className="category-item text-center flex-fill"
          onMouseEnter={() => handleCategoryHover(index)}
          onMouseLeave={handleCategoryLeave}
        >
          <img src={category.imgSrc} alt={category.alt} className="category-img" />
          <div className="category-name">{category.name}</div>
          {activeCategory === index && (
            <div className="dropdown-menu show position-absolute">
              {category.subCategories.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  onMouseEnter={() => handleSubCategoryHover(subIndex)}
                  onMouseLeave={handleSubCategoryLeave}
                  onClick={() => handleSubCategoryClick(category, sub.name)}
                >
                  {sub.name}
                  {sub.subCategories && <MdKeyboardArrowRight />}
                  {activeSubCategory === subIndex && sub.subCategories && (
                    <div className="nested-dropdown position-relative">
                      {sub.subCategories.map((nestedSub, nestedIndex) => (
                        <div key={nestedIndex} className="dropdown-item">
                          {nestedSub.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
