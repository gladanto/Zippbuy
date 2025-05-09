import React, { useState, useMemo } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/c.json";

const Content = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Cylinder Liner");
  const [filterHeader, setFilterHeader] = useState(null);
  const [filterMake, setFilterMake] = useState(null);
  const [filterModel, setFilterModel] = useState(null);
  const [filterSeries, setFilterSeries] = useState(null);
  const [filterPartName, setFilterPartName] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const categories = [...new Set(productsData.map((product) => product.category?.trim()))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Main Engine" ? null : category);
    setFilterHeader(null);
    setFilterMake(null);
    setFilterModel(null);
    setFilterSeries(null);
    setFilterPartName(null);
    setMobileMenuOpen(false);
  };

  const allProducts = useMemo(() => {
    return productsData.filter((product) =>
      selectedCategory ? product.category?.trim() === selectedCategory : true
    );
  }, [selectedCategory]);

  const headerFilters = useMemo(() => {
    const headers = [...new Set(allProducts.map((p) => p.Header?.trim()).filter(Boolean))];
    return headers;
  }, [allProducts]);

  const partNames = useMemo(() => {
    const parts = [...new Set(allProducts.map((p) => p.partname?.trim()).filter(Boolean))];
    return parts;
  }, [allProducts]);

  const companies = useMemo(() => {
    const makes = [...new Set(allProducts.map((p) => p.make?.trim()).filter(Boolean))];
    return makes;
  }, [allProducts]);

  const models = useMemo(() => {
    const modelList = [...new Set(allProducts.map((p) => p.Model?.trim()).filter(Boolean))];
    return modelList;
  }, [allProducts]);

  const seriesNames = useMemo(() => {
    const series = [...new Set(allProducts.map((p) => p.seriesName?.trim()).filter(Boolean))];
    return series;
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      const matchHeader = filterHeader ? product.Header?.trim() === filterHeader : true;
      const matchMake = filterMake ? product.make?.trim() === filterMake : true;
      const matchModel = filterModel ? product.Model?.trim() === filterModel : true;
      const matchSeries = filterSeries ? product.seriesName?.trim() === filterSeries : true;
      const matchPartName = filterPartName ? product.partname?.trim() === filterPartName : true;
      return matchHeader && matchMake && matchModel && matchSeries && matchPartName;
    });
    return filtered;
  }, [allProducts, filterHeader, filterMake, filterModel, filterSeries, filterPartName]);

  const handleProductClick = (product) => {
    console.group("Product Click Details");
    console.log("Product ID:", product.id);
    console.log("Product Name:", product.partname || "N/A");
    console.log("Make:", product.make || "N/A");
    console.log("Model:", product.Products || "N/A");
    console.log("Category:", product.category || "N/A");
    console.groupEnd();
    
    navigate(`/product/${product.id}`);
  };

  const handleResetFilters = () => {
    console.log("Resetting all filters");
    setFilterHeader(null);
    setFilterMake(null);
    setFilterModel(null);
    setFilterSeries(null);
    setFilterPartName(null);
  };

  return (
    <div className="content-container">
      {/* Sidebar */}
      <div className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-category">
          <span className="sidebar-title" onClick={() => handleCategoryClick("Main Engine")}>
            Main Engine
          </span>
        </div>
        <nav className="sidebar-nav">
          {categories.map((category, i) => (
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
        {selectedCategory && headerFilters.length > 0 && (
          <div className="part-filter-section">
            <div className="part-buttons">
              {headerFilters.map((header, idx) => (
                <button
                  key={idx}
                  className={`part-button ${filterHeader === header ? "selected" : ""}`}
                  onClick={() => {
                    console.log("Header filter selected:", header);
                    setFilterHeader(header);
                  }}
                >
                  {header}
                </button>
              ))}
            </div>
            <button 
              className="clear-parts" 
              onClick={() => {
                console.log("Clearing header filter");
                setFilterHeader(null);
              }}
            >
              Clear
            </button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => {
            console.log("Mobile menu toggled:", !mobileMenuOpen);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
          </svg>
        </button>

        {/* Filters */}
        <div className="filter-controls">
          <select
            className="filter-select"
            value={filterPartName || ""}
            onChange={(e) => {
              console.log("Part name filter changed:", e.target.value || "All");
              setFilterPartName(e.target.value || null);
            }}
          >
            <option value="" hidden>All Parts</option>
            {partNames.map((part, idx) => (
              <option key={idx} value={part}>{part}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={filterMake || ""}
            onChange={(e) => {
              console.log("Make filter changed:", e.target.value || "All");
              setFilterMake(e.target.value || null);
            }}
          >
            <option value="" hidden>All Makes</option>
            {companies.map((make, idx) => (
              <option key={idx} value={make}>{make}</option>
            ))}
          </select>

          <button
            className="clear-filters"
            onClick={handleResetFilters}
          >
            Reset All
          </button>
        </div>

        {/* Products */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="image-container">
                  <img
                    src={product.image || "/assets/default.jpg"}
                    alt={product.partname || "Product"}
                    onError={(e) => {
                      console.warn("Image failed to load, using fallback:", product.image);
                      e.target.src = "/assets/default.jpg";
                    }}
                  />
                </div>
                <div className="product-info">
                  <div className="details">
                    <p><span>Part:</span> {product.partname || "N/A"}</p>
                    <p><span>Make:</span> {product.make || "N/A"}</p>
                    <p><span>Products:</span> {product.Products || "N/A"}</p>
                  </div>
                  <button 
                    className="view-button" 
                    onClick={() => handleProductClick(product)}
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
                onClick={handleResetFilters}
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