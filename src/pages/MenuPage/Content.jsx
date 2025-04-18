import React, { useState, useRef, useMemo } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/MainEngine.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
  const [filterPartName, setFilterPartName] = useState(null);
  const [filterCondition, setFilterCondition] = useState(null);
  const [filterCompany, setFilterCompany] = useState(null);
  const [filterAvailability, setFilterAvailability] = useState(null);

  const hoverTimeoutRef = useRef(null);

  const category = productsData[0] || {};
  const subcategories = category.subcategories || [];

  const handleSubCategoryClick = (sub) => {
    setSelectedSubCategory(sub);
    setHoveredSubCategory(null);
    setFilterPartName(null);
    setFilterCondition(null);
    setFilterCompany(null);
    setFilterAvailability(null);
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
                className={`sidebar-item ${selectedSubCategory?.id === sub.id ? "active" : ""}`}
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

          {/* Filter Dropdowns */}
          {allProducts.length > 0 && (
            <div className="bg-white shadow-sm border-bottom p-3">
              <div className="d-flex flex-wrap justify-content-start gap-4 align-items-center">

                {/* Part Name Filter */}
                <div className="filter-dropdown mb-3">
                  <select
                    className="form-select modern-dropdown"
                    value={filterPartName || ""}
                    onChange={(e) => setFilterPartName(e.target.value || null)}
                  >
                    <option value="" hidden>PartName</option>
                    {partNames.map((part, idx) => (
                      <option key={idx} value={part}>
                        {part}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company Filter */}
                <div className="filter-dropdown mb-3">
                  <select
                    className="form-select modern-dropdown"
                    value={filterCompany || ""}
                    onChange={(e) => setFilterCompany(e.target.value || null)}
                  >
                    <option value="" hidden>Companies</option>
                    {companies.map((company, idx) => (
                      <option key={idx} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Availability Filter */}
                <div className="filter-dropdown mb-3">
                  <select
                    className="form-select modern-dropdown"
                    value={filterAvailability || ""}
                    onChange={(e) => setFilterAvailability(e.target.value || null)}
                  >
                    <option value="" hidden>Availability</option>
                    {availabilities.map((availability, idx) => (
                      <option key={idx} value={availability}>
                        {availability}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Condition Filter */}
                <div className="filter-dropdown mb-3">
                  <select
                    className="form-select modern-dropdown"
                    value={filterCondition || ""}
                    onChange={(e) => setFilterCondition(e.target.value || null)}
                  >
                    <option value="" hidden>Conditions</option>
                    {conditions.map((cond, idx) => (
                      <option key={idx} value={cond}>
                        {cond}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear All Filters */}
                <div className="filter-dropdown mb-3">
                  <button
                    className="btn btn-danger btn-sm clear-btn"
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
                        <p className="small text-muted">{product.description}</p>
                        <p className="small mb-1">
                          <strong>Type:</strong> {product.type}
                        </p>
                        <p className="small mb-1">
                          <strong>Part:</strong> {product.partname}
                        </p>
                        <p className="small mb-1">
                          <strong>Company:</strong> {product.company}
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
                  No products match
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
