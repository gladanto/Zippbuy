
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
import Spares from "../../data/spares.json";
import Stores from "../../data/Stores.json";
import Provisions from "../../data/Provisions.json";
import Service from "../../data/Service.json";
import Freelance from "../../data/Freelancing.json";
import { ExpandMore } from "@mui/icons-material";

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeChildSubcategory, setActiveChildSubcategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const navigate = useNavigate();

  const combinedData = [
    ...Spares,
    ...Stores,
    ...Provisions,
    ...Service,
    ...Freelance,
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-item")) {
        setActiveCategory(null);
        setDropdownClicked(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCategoryClick = (id) => {
    if (isMobile) {
      setActiveCategory((prev) => (prev === id ? null : id));
      setActiveSubcategory(null);
      setActiveChildSubcategory(null);
    } else {
      const isSame = activeCategory === id;
      setActiveCategory(isSame ? null : id);
      setDropdownClicked(!isSame);
    }
  };

  const handleSubCategoryClick = (category, subCategory, event) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();

      if (subCategory.childsubcategories?.length) {
        setActiveSubcategory((prev) =>
          prev === subCategory.id ? null : subCategory.id
        );
        setActiveChildSubcategory(null);
      } else {
        navigate("/menu", { state: { category, subCategory } });
      }
    } else {
      navigate("/menu", { state: { category, subCategory } });
    }
  };

  const handleChildSubCategoryClick = (
    category,
    subCategory,
    childSubCategory,
    event
  ) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();
    }
    setActiveChildSubcategory(childSubCategory.id);
    navigate("/menu", { state: { category, subCategory, childSubCategory } });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="bi bi-menu-button-wide"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button-wide" viewBox="0 0 16 16">
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>

        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
          
<ul className="navbar-nav">
  {combinedData.map((category) => (
    <li
      key={`category-${category.id}`}
      className={`nav-item ${activeCategory === category.id ? "active-category" : ""}`}
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
          {!isMobile && category.img && (
            <img
              src={category.img}
              alt={category.alt || ""}
              className="icon"
              onMouseEnter={() => !isMobile && setActiveCategory(category.id)}
              onMouseLeave={() => !isMobile && !dropdownClicked && setActiveCategory(null)}
            />
          )}
          <span className="dropdown-name">{category.name}</span>
        </div>
      </a>

      {/* Desktop Mega Menu */}
      {!isMobile && activeCategory === category.id && (
        <div
          className="mega-menu"
          onMouseEnter={() => setActiveCategory(category.id)}
          onMouseLeave={() => !dropdownClicked && setActiveCategory(null)}
        >
          {category.subcategories?.length > 0 ? (
            category.subcategories.map((subcategory) => (
              <div
                key={`subcategory-${category.id}-${subcategory.id}`}
                className="mega-column"
              >
                <div
                  className="subcategory-title"
                  onClick={(e) =>
                    handleSubCategoryClick(category, subcategory, e)
                  }
                >
                  {subcategory.name}
                </div>
                {subcategory.childsubcategories?.length > 0 && (
                  <ul className="child-links">
                    {subcategory.childsubcategories.map((child) => (
                      <li key={`child-${category.id}-${subcategory.id}-${child.id}`}>
                        <a
                          href="#"
                          onClick={(e) =>
                            handleChildSubCategoryClick(
                              category,
                              subcategory,
                              child,
                              e
                            )
                          }
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <div className="mega-column">
              <p style={{ padding: "10px", color: "#666" }}>
                No subcategories available.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Mobile Dropdown */}
      {isMobile && activeCategory === category.id && category.subcategories && (
        <ul className="dropdown-menu show">
          {category.subcategories.map((subcategory) => (
            <li
              key={`mobile-subcategory-${category.id}-${subcategory.id}`}
              className={`subcategory-item ${
                activeSubcategory === subcategory.id ? "active-subcategory" : ""
              }`}
            >
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) =>
                  handleSubCategoryClick(category, subcategory, e)
                }
              >
                {subcategory.name}
                {subcategory.childsubcategories?.length > 0 && (
                  <ExpandMore className="expand-icon" />
                )}
              </a>

              {subcategory.childsubcategories?.length > 0 && (
                <ul
                  className={`child-dropdown ${
                    activeSubcategory === subcategory.id ? "show" : ""
                  }`}
                >
                  {subcategory.childsubcategories.map((child) => (
                    <li
                      key={`mobile-child-${category.id}-${subcategory.id}-${child.id}`}
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) =>
                          handleChildSubCategoryClick(
                            category,
                            subcategory,
                            child,
                            e
                          )
                        }
                      >
                        {child.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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

export default NavBar;
