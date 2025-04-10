import React, { useState, useEffect } from "react";
import "./Content.scss";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../../data/product.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Content = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subCategoryName: initialSubCategory, category } = location.state || {};

  // State variables for managing selections
  const [subCategoryName, setSubCategoryName] = useState(initialSubCategory);
  const [childSubCategoryName, setChildSubCategoryName] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  useEffect(() => {
    // Update the URL state when selections change
    navigate(location.pathname, { state: { subCategoryName, childSubCategoryName, category } });
  }, [subCategoryName, childSubCategoryName, category, navigate, location.pathname]);

  const toggleSubCategory = (index, subName) => {
    setOpenSubCategory(openSubCategory === index ? null : index);
    setSubCategoryName(subName);
    setChildSubCategoryName(subName); // Reset child selection
  };

  const selectChildCategory = (childName) => {
    setChildSubCategoryName(childName);
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        {/* Left Sidebar - Categories */}
        <div className="col-md-2 col-sm-12 p-4 sidebar border-end bg-white">
          <h1 className="text-center">Categories</h1>
          <ul className="list-group">
            {category?.subCategories?.map((sub, index) => {
              const hasChildren = sub.subCategories && sub.subCategories.length > 0;
              return (
                <li key={index} className="list-group-item border-0">
                  <div
                    className="category-btn w-100 text-start d-flex justify-content-between align-items-center"
                    onClick={() => toggleSubCategory(index, sub.name)}
                  >
                    {sub.name}
                    {hasChildren && (openSubCategory === index ? <ExpandLess /> : <ExpandMore />)}
                  </div>

                  {openSubCategory === index && hasChildren && (
                    <ul className="list-group mt-2 ps-3">
                      {sub.subCategories.map((child, idx) => (
                        <li
                          key={idx}
                          className="list-group-item border-0"
                          onClick={() => selectChildCategory(child.name)}
                          style={{ cursor: "pointer" }}
                        >
                          {child.name}
                          {child.subCategories && (
                            <ul className="list-group mt-1 ps-3">
                              {child.subCategories.map((nested, nIdx) => (
                                <li
                                  key={nIdx}
                                  className="list-group-item border-0"
                                  onClick={() => selectChildCategory(nested.name)}
                                  style={{ cursor: "pointer" }}
                                >
                                  {nested.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Content - Product Cards */}
        <div className="col-md-10 col-sm-12 py-3">
          <h4 className="mt-3 text-center">
            {category ? `Selected Category: ${category.name}` : "All Products"}
          </h4>
          <h4 className="mt-3 text-center">
            {subCategoryName ? `Selected Subcategory: ${subCategoryName}` : "All Products"}
          </h4>
          <h4 className="mt-3 text-center">
            {childSubCategoryName ? `Selected Child Subcategory: ${childSubCategoryName}` : "All Products"}
          </h4>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <button className="btn btn-primary btn-sm" onClick={() => navigate("/product")}>
                        View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
