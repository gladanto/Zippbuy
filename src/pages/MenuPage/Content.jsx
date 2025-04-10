
import React, { useState, useRef } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/MainEngine.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Content = () => {
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  const hoverTimeoutRef = useRef(null);

  const category = productsData[0];
  const subcategories = category.subcategories || [];

  const toggleCategory = () => {
    setOpenCategory(!openCategory);
    setSelectedSubCategory(null);
    setHoveredSubCategory(null);
  };

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
    }, 200); // delay to avoid flicker
  };

  const childToDisplay =
    hoveredSubCategory?.childsubcategories ||
    selectedSubCategory?.childsubcategories;

  const filteredSubcategories = selectedSubCategory
    ? [selectedSubCategory]
    : subcategories;

  return (
    <div className="container-fluid bg-light">
      {/* Child Category Navbar Section */}
      {childToDisplay && (
        <div
          className="bg-white shadow-sm py-2 px-3 border-bottom"
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="d-flex flex-wrap align-items-center gap-3">
            {/* <strong>Child Categories:</strong> */}
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

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 col-sm-12 p-4 sidebar border-end bg-white">
          <ul className="list-group">
            <li className="list-group-item border-0">
              <div
                className="category-btn w-100 text-start d-flex justify-content-between align-items-center"
                onClick={toggleCategory}
                style={{ cursor: "pointer" }}
              >
                {category.name}
                {openCategory ? <ExpandLess /> : <ExpandMore />}
              </div>

              {openCategory && (
                <ul className="list-group mt-2 ps-3">
                  {subcategories.map((sub, i) => (
                    <li
                      key={i}
                      className={`list-group-item border-0 ${
                        selectedSubCategory?.id === sub.id ? "fw-bold" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => handleMouseEnter(sub)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSubCategoryClick(sub)}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Product List */}
        <div className="col-md-10 col-sm-12 py-3">
          <h4 className="mt-3 text-center">
            {selectedSubCategory
              ? `Subcategory: ${selectedSubCategory.name}`
              : "All Subcategories"}
          </h4>

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
                    <p className="card-text">${product.price?.toFixed(2)}</p>
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
  );
};

export default Content;












