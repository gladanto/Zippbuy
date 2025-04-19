import React, { useState, useRef, useMemo } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/MainEngine.json";

const Content = () => {
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
  const [filterPartName, setFilterPartName] = useState(null);
  const [filterCondition, setFilterCondition] = useState(null);
  const [filterCompany, setFilterCompany] = useState(null);
  const [filterAvailability, setFilterAvailability] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hoverTimeoutRef = useRef(null);

  const category = productsData[0] || {};
  const subcategories = category.subcategories || [];

  const handleMainCategoryClick = () => {
    // ✅ When Main Engine clicked, clear selection
    setSelectedSubCategory(null);
    setHoveredSubCategory(null);
    setFilterPartName(null);
    setFilterCondition(null);
    setFilterCompany(null);
    setFilterAvailability(null);
    setMobileMenuOpen(false);
  };

  const handleSubCategoryClick = (sub) => {
    setSelectedSubCategory(sub);
    setHoveredSubCategory(null);
    setFilterPartName(null);
    setFilterCondition(null);
    setFilterCompany(null);
    setFilterAvailability(null);
    setMobileMenuOpen(false);
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

  const childToDisplay = selectedSubCategory?.childsubcategories
    || (!selectedSubCategory && hoveredSubCategory?.childsubcategories);

  const allProducts = useMemo(() => {
    return selectedSubCategory
      ? selectedSubCategory.childsubcategories || []
      : subcategories.flatMap((sub) => sub.childsubcategories || []);
  }, [selectedSubCategory, subcategories]);

  const partNames = [...new Set(allProducts.map((p) => p.partname))];
  const companies = [...new Set(allProducts.map((p) => p.company))];
  const availabilities = [...new Set(
    allProducts.map((p) => p["Available/on demand"]).filter(Boolean)
  )];
  const conditions = ["New", "Old"];

  const normalizeCondition = (condition) => {
    return condition?.toLowerCase() === "used" ? "Old" : condition;
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchPart = filterPartName ? product.partname === filterPartName : true;
      const matchCompany = filterCompany ? product.company === filterCompany : true;
      const matchAvailability = filterAvailability
        ? product["Available/on demand"] === filterAvailability
        : true;
      const matchCondition = filterCondition
        ? normalizeCondition(product.condition) === filterCondition
        : true;

      return matchPart && matchCompany && matchAvailability && matchCondition;
    });
  }, [allProducts, filterPartName, filterCondition, filterCompany, filterAvailability]);

  return (
    <div className="fixed-layout-container">
      <div className="layout-wrapper">
        {/* Sidebar */}
        <div className={`modern-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-category">
            {/* ✅ Make Main Category clickable */}
            <span
              className="sidebar-title clickable"
              onClick={handleMainCategoryClick}
            >
              <strong>{category.name}</strong>
            </span>
          </div>

          <nav className="sidebar-nav">
            {subcategories.map((sub, i) => (
              <button
                key={i}
                className={`sidebar-item ${selectedSubCategory?.id === sub.id ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(sub)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSubCategoryClick(sub)}
              >
                {sub.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content-area">
          {/* Child Category Navigation */}
          {childToDisplay && (
            <div className="child-category-nav">
              <div className="nav-scroll-container">
                {childToDisplay.map((child, index) => (
                  <button
                    key={index}
                    className="nav-item"
                    onClick={() => alert(`Child clicked: ${child.name}`)}
                  >
                    {child.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filter Section */}
          {allProducts.length > 0 && (
            <div className="filter-section">
              <div className="filter-container">
                {/* Part Name Filter */}
                <select
                  className="filter-dropdown"
                  value={filterPartName || ""}
                  onChange={(e) => setFilterPartName(e.target.value || null)}
                >
                  <option value="" hidden>Part Name</option>
                  {partNames.map((part, idx) => (
                    <option key={idx} value={part}>{part}</option>
                  ))}
                </select>

                {/* Company Filter */}
                <select
                  className="filter-dropdown"
                  value={filterCompany || ""}
                  onChange={(e) => setFilterCompany(e.target.value || null)}
                >
                  <option value="" hidden>Company</option>
                  {companies.map((company, idx) => (
                    <option key={idx} value={company}>{company}</option>
                  ))}
                </select>

                {/* Availability Filter */}
                <select
                  className="filter-dropdown"
                  value={filterAvailability || ""}
                  onChange={(e) => setFilterAvailability(e.target.value || null)}
                >
                  <option value="" hidden>Availability</option>
                  {availabilities.map((availability, idx) => (
                    <option key={idx} value={availability}>{availability}</option>
                  ))}
                </select>

                {/* Condition Filter */}
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

                {/* Clear All Filters */}
                <button
                  className="clear-btn"
                  onClick={() => {
                    setFilterPartName(null);
                    setFilterCondition(null);
                    setFilterCompany(null);
                    setFilterAvailability(null);
                  }}
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <div key={idx} className="product-card">
                  <img
                    src={product.image || "/assets/default.jpg"}
                    className="product-image"
                    alt={product.name}
                  />
                  <div className="product-details">
                    <h5>{product.name}</h5>
                    <p className="product-price">${product.price?.toFixed(2) || "N/A"}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-info">
                      <p><strong>Type:</strong> {product.type}</p>
                      <p><strong>Part:</strong> {product.partname}</p>
                      <p><strong>Company:</strong> {product.company}</p>
                      <p><strong>Condition:</strong> {normalizeCondition(product.condition)}</p>
                    </div>
                    <button
                      className="view-product-btn"
                      onClick={() => navigate("/product")}
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                No products match your filters
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

