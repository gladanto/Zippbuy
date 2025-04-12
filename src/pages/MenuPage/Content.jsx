import React, { useState, useRef } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/MainEngine.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  const hoverTimeoutRef = useRef(null);

  const category = productsData[0];
  const subcategories = category.subcategories || [];

  const handleSubCategoryClick = (sub) => {
    setSelectedSubCategory(sub);
    setHoveredSubCategory(null);
  };

  const handleMouseEnter = (sub) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredSubCategory(sub);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSubCategory(null);
    }, 200);
  };

  const childToDisplay =
    hoveredSubCategory?.childsubcategories ||
    selectedSubCategory?.childsubcategories;

  const filteredSubcategories = selectedSubCategory
    ? [selectedSubCategory]
    : subcategories;

  return (
    <div className="container-fluid bg-light">
      <div
        className="row"
        onMouseEnter={() => {
          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sidebar */}
        <div className="col-md-2 col-sm-12 modern-sidebar">
          <div className="sidebar-category">
            <span className="sidebar-title">
              <strong>{category.name}</strong>
            </span>
          </div>

          <nav className="sidebar-nav">
            {subcategories.map((sub, i) => (
              <button
                key={i}
                className={`sidebar-item ${
                  selectedSubCategory?.id === sub.id ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(sub)}
                onClick={() => handleSubCategoryClick(sub)}
              >
                {sub.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-sm-12 p-0">
          {/* Child Category Navbar Section */}
          {childToDisplay && (
            <div className="bg-white shadow-sm py-2 px-3 border-bottom">
              <div className="d-flex flex-wrap align-items-center gap-3">
                {childToDisplay.map((child, index) => (
                  <button
                    key={index}
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => alert(`Child clicked: ${child.name}`)}
                  >
                    {child.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product List */}
          <div className="py-3 px-3">
            <div className="row">
              {filteredSubcategories.map((product, idx) => (
                <div key={idx} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image || "/assets/default.jpg"}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        ${product.price?.toFixed(2) || "N/A"}
                      </p>
                      <p className="small text-muted">{product.description}</p>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate("/product")}
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredSubcategories.length === 0 && (
                <div className="text-center text-muted mt-5">
                  No products found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
