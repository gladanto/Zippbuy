
import React, { useState, useMemo } from "react";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/c.json";

const Content = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Cylinder Liner");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMake, setSelectedMake] = useState("");
  const [filterHeader, setFilterHeader] = useState(null);

  const categories = [...new Set(productsData.map((product) => product.category?.trim()))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedMake("");
    setFilterHeader(null);
    setMobileMenuOpen(false);
  };

  // Get all unique makes for the selected category
  const makes = useMemo(() => {
    const categoryProducts = productsData.filter(
      (product) => product.category?.trim() === selectedCategory
    );
    return [...new Set(categoryProducts.map((p) => p.make?.trim()).filter(Boolean))];
  }, [selectedCategory]);

  // Get all unique headers for the selected category
  const headerFilters = useMemo(() => {
    const categoryProducts = productsData.filter(
      (product) => product.category?.trim() === selectedCategory
    );
    return [...new Set(categoryProducts.map((p) => p.Header?.trim()).filter(Boolean))];
  }, [selectedCategory]);

  // Group products by series for the selected category, make and header
  const seriesGroups = useMemo(() => {
    let categoryProducts = productsData.filter(
      (product) => product.category?.trim() === selectedCategory
    );

    // Apply make filter if selected
    if (selectedMake) {
      categoryProducts = categoryProducts.filter(
        (product) => product.make?.trim() === selectedMake
      );
    }

    // Apply header filter if selected
    if (filterHeader) {
      categoryProducts = categoryProducts.filter(
        (product) => product.Header?.trim() === filterHeader
      );
    }
    
    const groups = {};
    categoryProducts.forEach((product) => {
      const series = product.seriesName?.trim();
      if (series) {
        if (!groups[series]) {
          groups[series] = [];
        }
        groups[series].push(product);
      }
    });
    
    return groups;
  }, [selectedCategory, selectedMake, filterHeader]);

  const handleSeriesClick = (series, firstProduct) => {
    navigate(`/product/${firstProduct.id}`);
  };

  return (
    <div className="content-container">
      {/* Sidebar */}
      <div className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
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
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
          </svg>
        </button>

        {/* Series Display Section */}
        <div className="series-display-section">
          <div className="filter-header">
            <h2 className="category-title">{selectedCategory}</h2>
            
            {/* Make Filter Dropdown */}
            <div className="make-filter">
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                <option value="">All Makes</option>
                {makes.map((make, index) => (
                  <option key={index} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Part Filter Section */}
          {selectedCategory && headerFilters.length > 0 && (
            <div className="part-filter-section">
              <div className="part-buttons">
                {headerFilters.map((header, idx) => (
                  <button
                    key={idx}
                    className={`part-button ${filterHeader === header ? "selected" : ""}`}
                    onClick={() => setFilterHeader(header)}
                  >
                    {header}
                  </button>
                ))}
              </div>
              {filterHeader && (
                <button 
                  className="clear-parts" 
                  onClick={() => setFilterHeader(null)}
                >
                  Clear
                </button>
              )}
            </div>
          )}
          
          <div className="series-grid">
            {Object.keys(seriesGroups).length > 0 ? (
              Object.entries(seriesGroups).map(([series, products]) => {
                const firstProduct = products[0];
                return (
                  <div 
                    key={series} 
                    className="series-card"
                    onClick={() => handleSeriesClick(series, firstProduct)}
                  >
                    <div className="series-image-container">
                      <img
                        src={firstProduct.image || "/assets/default.jpg"}
                        alt={series}
                        onError={(e) => {
                          e.target.src = "/assets/default.jpg";
                        }}
                      />
                    </div>
                    <div className="series-info">
                     <h2 className="product-name">{firstProduct.partname || firstProduct.name || "Product"}</h2>
                      <h3 className="make-name">{firstProduct.make || "N/A"}</h3>
                       <h3>{series}</h3>

                      <p className="models-available">{products.length} models available</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-series">
                <p>No series found for {selectedCategory}</p>
                {(selectedMake || filterHeader) && (
                  <button
                    className="reset-button"
                    onClick={() => {
                      setSelectedMake("");
                      setFilterHeader(null);
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;