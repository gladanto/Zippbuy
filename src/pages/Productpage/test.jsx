
import React, { useState, useEffect } from "react";
import "./test.scss";
import data from "../../data/newdata.json";
import { ExpandMore } from "@mui/icons-material";

const Test = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Detect window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (id) => {
    if (isMobile) {
      setActiveCategory((prev) => (prev === id ? null : id));
      setActiveSubcategory(null); // Reset subcategory selection
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    if (isMobile) {
      setActiveSubcategory((prev) => (prev === subcategory.id ? null : subcategory.id));
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav">
              {data.map((category) => (
                <li
                  key={category.id}
                  className={`nav-item ${activeCategory === category.id ? "active-category" : ""}`}
                  onMouseEnter={() => !isMobile && setActiveCategory(category.id)}
                  onMouseLeave={() => !isMobile && setActiveCategory(null)}
                >
                  {/* Category Link */}
                  <a
                    className="nav-link category-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category.id);
                    }}
                  >
                    <div className="icon-wrapper">
                      {!isMobile && <img src={category.img} alt={category.alt} className="icon" />}
                      <span className="dropdown-name">{category.name}</span>
                    </div>
                  </a>

                  {/* Subcategories Dropdown */}
                  {activeCategory === category.id && category.subcategories && (
                    <ul className="dropdown-menu show">
                      {category.subcategories.map((subcategory) => (
                        <li
                          key={subcategory.id}
                          className={`subcategory-item ${activeSubcategory === subcategory.id ? "active-subcategory" : ""}`}
                          onMouseEnter={() => !isMobile && setActiveSubcategory(subcategory.id)}
                          onMouseLeave={() => !isMobile && setActiveSubcategory(null)}
                        >
                          {/* Subcategory Link */}
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubcategoryClick(subcategory);
                            }}
                          >
                            {subcategory.name}
                            {subcategory.childsubcategories && <ExpandMore className="expand-icon" />}
                          </a>

                          {/* Child Subcategories */}
                          <ul className={`child-dropdown ${activeSubcategory === subcategory.id ? "show" : ""}`}>
                            {subcategory.childsubcategories &&
                              subcategory.childsubcategories.map((child) => (
                                <li key={child.id}>
                                  <a className="dropdown-item" href="#">
                                    {child.name}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Test;
