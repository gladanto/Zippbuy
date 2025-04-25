import React, { useState, useMemo } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import productsData from "../../data/r.json";
import { FaBars, FaTimes } from "react-icons/fa";
=======
import productsData from "../../data/u.json";
>>>>>>> d5a400cbed3534afe480a0460d23f0ac1b893771

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
  const conditions = ["New", "Old"];

  const normalizeCondition = (condition) => {
    return condition?.toLowerCase() === "used" ? "Old" : condition;
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchPart = filterPartName ? product.partname === filterPartName : true;
      const matchMake = filterMake ? product.Make === filterMake : true;
      const matchAvailability = filterAvailability
        ? product.stock === filterAvailability
        : true;
      const matchCondition = filterCondition
        ? normalizeCondition(product.condition) === filterCondition
        : true;

      return matchPart && matchMake && matchAvailability && matchCondition;
    });
  }, [allProducts, filterPartName, filterCondition, filterMake, filterAvailability]);

  return (
    <div className="content-container">
      

      {/* Sidebar */}
      <div className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-category">
          <span
            className="sidebar-title"
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

      {/* Main Content */}
      <div className="main-content">
        {/* Part Filter Section */}
        {selectedCategory && partNames.length > 0 && (
          <div className="part-filter-section">
            <div className="part-buttons">
              {partNames.map((part, idx) => (
                <button
                  key={idx}
                  className={`part-button ${filterPartName === part ? "selected" : ""}`}
                  onClick={() => setFilterPartName(part)}
                >
                  {part}
                </button>
              ))}
            </div>
            <button
              className="clear-parts"
              onClick={() => setFilterPartName(null)}
            >
              Clear
            </button>
          </div>
          
        )}
        {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
       <i class="bi bi-boxes"></i>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
</svg>
      </button>

        {/* Filter Controls */}
        <div className="filter-controls">
          <select
            className="filter-select"
            value={filterMake || ""}
            onChange={(e) => setFilterMake(e.target.value || null)}
          >
            <option value="">All Makes</option>
            {companies.map((make, idx) => (
              <option key={idx} value={make}>{make}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={filterAvailability || ""}
            onChange={(e) => setFilterAvailability(e.target.value || null)}
          >
            <option value="">All Stock</option>
            {availabilities.map((availability, idx) => (
              <option key={idx} value={availability}>{availability}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={filterCondition || ""}
            onChange={(e) => setFilterCondition(e.target.value || null)}
          >
            <option value="">All Conditions</option>
            {conditions.map((cond, idx) => (
              <option key={idx} value={cond}>{cond}</option>
            ))}
          </select>

          <button
            className="clear-filters"
            onClick={() => {
              setFilterPartName(null);
              setFilterCondition(null);
              setFilterMake(null);
              setFilterAvailability(null);
            }}
          >
            
            Reset All
          </button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="image-container">
                  <img
                    src={product.image || "/assets/default.jpg"}
                    alt={product.name}
                    onError={(e) => (e.target.src = "/assets/default.jpg")}
                  />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price?.toFixed(2) || "N/A"}</p>
                  <div className="details">
                    <p><span>Part:</span> {product.partname}</p>
                    <p><span>Make:</span> {product.company}</p>
                    <p><span>Model:</span> {product.Model}</p>
                    <p><span>Condition:</span> {normalizeCondition(product.condition)}</p>
                  </div>
                  <button
                    className="view-button"
                    onClick={() => navigate(`/product`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products match your filters</p>
              <button
                className="reset-button"
                onClick={() => {
                  setFilterPartName(null);
                  setFilterCondition(null);
                  setFilterMake(null);
                  setFilterAvailability(null);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;