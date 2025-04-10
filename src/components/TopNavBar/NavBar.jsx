
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
import Spares from "../../data/Spares.json";
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

  const handleCategoryClick = (id) => {
    if (isMobile) {
      setActiveCategory((prev) => (prev === id ? null : id));
      setActiveSubcategory(null);
      setActiveChildSubcategory(null);
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
          <span className="navbar-toggler-icon"></span>
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
                  key={category.id}
                  className={`nav-item ${
                    activeCategory === category.id ? "active-category" : ""
                  }`}
                  onMouseEnter={() => !isMobile && setActiveCategory(category.id)}
                  onMouseLeave={() => !isMobile && setActiveCategory(null)}
                >
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
                        />
                      )}
                      <span className="dropdown-name">{category.name}</span>
                    </div>
                  </a>

                  {/* Desktop Mega Menu */}
                  {!isMobile && activeCategory === category.id && (
                    <div className="mega-menu">
                      {category.subcategories?.length > 0 ? (
                        category.subcategories.map((subcategory) => (
                          <div key={subcategory.id} className="mega-column">
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
                                  <li key={child.id}>
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
                  {isMobile &&
                    activeCategory === category.id &&
                    category.subcategories && (
                      <ul className="dropdown-menu show">
                        {category.subcategories.map((subcategory) => (
                          <li
                            key={subcategory.id}
                            className={`subcategory-item ${
                              activeSubcategory === subcategory.id
                                ? "active-subcategory"
                                : ""
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
                                  activeSubcategory === subcategory.id
                                    ? "show"
                                    : ""
                                }`}
                              >
                                {subcategory.childsubcategories.map((child) => (
                                  <li key={child.id}>
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
