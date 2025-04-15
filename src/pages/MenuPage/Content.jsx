// filterproduct category

import React, { useState, useRef, useMemo, useEffect } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/MainEngine.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [filterPartName, setFilterPartName] = useState(null);
  const [filterCondition, setFilterCondition] = useState(null);

  const hoverTimeoutRef = useRef(null);

  const category = productsData[0];
  const subcategories = category.subcategories || [];

  // Select first subcategory by default
  useEffect(() => {
    if (!selectedSubCategory && subcategories.length > 0) {
      setSelectedSubCategory(subcategories[0]);
    }
  }, [selectedSubCategory, subcategories]);

  const handleSubCategoryClick = (sub) => {
    setSelectedSubCategory(sub);
    setHoveredSubCategory(null);
    setFilterType(null);
    setFilterPartName(null);
    setFilterCondition(null);
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

  // All filtered products from selected subcategory
  const allProducts = selectedSubCategory?.childsubcategories || [];

  // Unique filter values
  const types = [...new Set(allProducts.map((p) => p.type))];
  const partNames = [...new Set(allProducts.map((p) => p.partname))];
  const conditions = ["New", "Old"]; 

  const normalizeCondition = (condition) => {
    return condition === "Used" ? "Old" : condition;
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchType = filterType ? product.type === filterType : true;
      const matchPart = filterPartName ? product.partname === filterPartName : true;
      const matchCondition = filterCondition
        ? normalizeCondition(product.condition) === filterCondition
        : true;
      return matchType && matchPart && matchCondition;
    });
  }, [allProducts, filterType, filterPartName, filterCondition]);

  return (
    <div className="container-fluid bg-light">
      <div
        className="row"
        onMouseEnter={() => clearTimeout(hoverTimeoutRef.current)}
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
              <div className="d-flex flex-wrap align-items-center gap-2">
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

          {/* Filter Buttons */}
          {selectedSubCategory && (
            <div className="bg-white shadow-sm border-bottom p-3">
              <div className="mb-2">
                <strong>Type:</strong>{" "}
                {types
  .filter((type) => type && type.trim() !== "")
  .map((type, idx) => (
    <button
      key={idx}
      className={`btn btn-sm mx-1 ${
        filterType === type ? "btn-primary" : "btn-outline-primary"
      }`}
      onClick={() =>
        setFilterType(filterType === type ? null : type)
      }
    >
      {type}
    </button>
))}
              </div>
              <div className="mb-2">
  <strong>Part Name:</strong>{" "}
  {partNames
    .filter((part) => part && part.trim() !== "")
    .map((part, idx) => (
      <button
        key={idx}
        className={`btn btn-sm mx-1 ${
          filterPartName === part
            ? "btn-success"
            : "btn-outline-success"
        }`}
        onClick={() =>
          setFilterPartName(filterPartName === part ? null : part)
        }
      >
        {part}
      </button>
  ))}
</div>

              <div className="mb-2">
                <strong>Condition:</strong>{" "}
                {conditions.map((cond, idx) => (
                  <button
                    key={idx}
                    className={`btn btn-sm mx-1 ${
                      filterCondition === cond
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    onClick={() =>
                      setFilterCondition(
                        filterCondition === cond ? null : cond
                      )
                    }
                  >
                    {cond}
                  </button>
                ))}
              </div>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  setFilterType(null);
                  setFilterPartName(null);
                  setFilterCondition(null);
                }}
              >
                Clear All
              </button>
            </div>
          )}

          {/* Product List */}
          <div className="py-3 px-3">
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
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
                        <p className="small text-muted">
                          {product.description}
                        </p>
                        <p className="small mb-1">
                          <strong>Type:</strong> {product.type}
                        </p>
                        <p className="small mb-1">
                          <strong>Part:</strong> {product.partname}
                        </p>
                        <p className="small mb-2">
                          <strong>Condition:</strong>{" "}
                          {normalizeCondition(product.condition)}
                        </p>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => navigate("/product")}
                        >
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted mt-5">
                  No products match the filters.
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
