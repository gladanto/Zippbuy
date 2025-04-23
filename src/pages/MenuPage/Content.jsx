import React, { useState, useMemo } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom"

import  productsData from "../../data/r.json";


const Content = () => {
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterPartName, setFilterPartName] = useState(null);
  const [filterCondition, setFilterCondition] = useState(null);
  const [filterMake, setFilterMake] = useState(null);
  const [filterAvailability, setFilterAvailability] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = productsData.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  const handleCategoryClick = (category) => {
    if (category === "Main Engine") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setFilterPartName(null);
    setFilterCondition(null);
    setFilterMake(null);
    setFilterAvailability(null);
    setMobileMenuOpen(false);
  };

  const allProducts = useMemo(() => {
    return productsData.filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    );
  }, [selectedCategory]);

  const partNames = [...new Set(allProducts.map((p) => p.partname))];
  const companies = [...new Set(allProducts.map((p) => p.Make))];
  const availabilities = [...new Set(allProducts.map((p) => p.stock).filter(Boolean))];
  const conditions = ["New", "Republished"];

  const normalizeCondition = (condition) => {
  const conditions = ["New", "Republished"];
    return condition?.toLowerCase() === "used" ? "Republished" : condition;
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchPart = filterPartName ? product.partname === filterPartName : true;
      const matchMake = filterMake ? product.Make === filterMake : true;
      const matchAvailability = filterAvailability ? product.stock === filterAvailability : true;
      const matchCondition = filterCondition ? normalizeCondition(product.condition) === filterCondition : true;
      return matchPart && matchMake && matchAvailability && matchCondition;
    });
  }, [allProducts, filterPartName, filterCondition, filterMake, filterAvailability]);

  return (
    <div className="fixed-layout-container">
      <div className="layout-wrapper">

        {/* Sidebar Section */}
        <div className={`modern-sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="sidebar-category">
            <span
              className="sidebar-title clickable"
              onClick={() => handleCategoryClick("Main Engine")}
            >
              Main Engine
            </span>
          </div>

          <nav className="sidebar-nav">
            {uniqueCategories.map((category, i) => (
              <button
                key={i}
                className={`sidebar-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="main-content-area">

          {/* Partnames Section - Show horizontally */}
          {selectedCategory && partNames.length > 0 && (
            <div className="partname-section">
              {partNames.map((part, idx) => (
                <button
                  key={idx}
                  className={`partname-button ${filterPartName === part ? "selected" : ""}`}
                  onClick={() => setFilterPartName(part)}
                >
                  {part}
                </button>
              ))}
              <button
                className="partname-clear-btn"
                onClick={() => setFilterPartName(null)}
              >
                All Parts
              </button>
            </div>
          )}

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-container">

              {/* Partname Dropdown */}
              <select
                className="filter-dropdown"
                value={filterPartName || ""}
                onChange={(e) => setFilterPartName(e.target.value || null)}
              >
                <option value="" hidden>Partname</option>
                {partNames.map((part, idx) => (
                  <option key={idx} value={part}>{part}</option>
                ))}
              </select>

              {/* Make Dropdown */}
              <select
                className="filter-dropdown"
                value={filterMake || ""}
                onChange={(e) => setFilterMake(e.target.value || null)}
              >
                <option value="" hidden>Make</option>
                {companies.map((Make, idx) => (
                  <option key={idx} value={Make}>{Make}</option>
                ))}
              </select>

              {/* Availability (Stock) Dropdown */}
              <select
                className="filter-dropdown"
                value={filterAvailability || ""}
                onChange={(e) => setFilterAvailability(e.target.value || null)}
              >
                <option value="" hidden>Stock</option>
                {availabilities.map((availability, idx) => (
                  <option key={idx} value={availability}>{availability}</option>
                ))}
              </select>

              {/* Condition Dropdown */}
              <select
                className="filter-dropdown"
                value={filterCondition || ""}
                onChange={(e) => setFilterCondition(e.target.value || null)}
              >
                <option value="" hidden>Condition</option>
                {conditions.map((cond, idx) => (
                  <option key={idx} value={cond}>{cond}</option>
                ))}
              </select>

              {/* Clear Filters Button */}
              <button
                className="clear-btn"
                onClick={() => {
                  setFilterPartName(null);
                  setFilterCondition(null);
                  setFilterMake(null);
                  setFilterAvailability(null);
                }}
              >
                Clear All
              </button>

            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <div key={idx} className="product-card">
                  <img
                    src={product.image || "/assets/default.jpg"}
                    className="product-image"
                    alt={product.name}
                    onError={(e) => (e.target.src = "/assets/default.jpg")}
                  />
                  <div className="product-details">
                    <h5>{product.name}</h5>
                    <p className="product-price">${product.price?.toFixed(2) || "N/A"}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-info">
                      <p><strong>Part:</strong> {product.partname}</p>
                      <p><strong>Make:</strong> {product.Make}</p>
                      <p><strong>Model:</strong> {product.Model}</p>
                      <p><strong>Condition:</strong> {normalizeCondition(product.condition)}</p>
                    </div>
                    <button
                      className="view-product-btn"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">No products match your filters</div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Content;
