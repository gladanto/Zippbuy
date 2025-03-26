import React, { useState } from "react";
import styles from "./CategoryDisplay.module.css";
import img from "/assets/carsole.jpg";

const CategoryDisplay = ({ categoryData }) => {
  // State to control sidebar expansion (for top-level subcategories)
  const [expanded, setExpanded] = useState(true); // Sidebar always starts expanded
  // State to control which subcategory (if any) is toggled open for nested items.
  const [expandedNested, setExpandedNested] = useState({});

  // Toggle nested subcategories for a given subcategory index
  const toggleNested = (index) => {
    setExpandedNested((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!categoryData || !categoryData.name) {
    return <p>No category selected.</p>;
  }

  return (
    <section className={`py-4 ${styles.categorySection}`}>
      <div className="container">
        <div className="row">
          {/* Sidebar Category */}
          <div className="col-lg-3">
            <div className={`border rounded shadow-sm bg-white ${styles.categoryContainer}`}>
              {/* Toggle button for top-level category */}
              <div
                className={`d-flex justify-content-between align-items-center p-3 bg-success text-white rounded-top ${styles.categoryHeader}`}
                onClick={() => setExpanded(!expanded)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <i className="fa fa-bars me-2"></i>
                  <span>{categoryData.name}</span>
                </div>
                <i className={`fa fa-chevron-${expanded ? "up" : "down"}`}></i>
              </div>
              {/* Top-level Subcategories */}
              <ul className={`list-unstyled px-3 ${expanded ? styles.show : styles.hide}`}>
                {categoryData.subCategories?.map((sub, index) => (
                  <li key={index} className="py-2 border-bottom">
                    <div
                      className={`d-flex justify-content-between align-items-center ${styles.subCategoryItem}`}
                      onClick={() => sub.subCategories && toggleNested(index)}
                      style={{ cursor: sub.subCategories ? "pointer" : "default" }}
                    >
                      <span>{sub.name}</span>
                      {sub.subCategories && (
                        <i className={`fa fa-chevron-${expandedNested[index] ? "up" : "down"}`}></i>
                      )}
                    </div>
                    {/* Nested Subcategories */}
                    {sub.subCategories && expandedNested[index] && (
                      <ul className="list-unstyled ms-3 mt-2">
                        {sub.subCategories.map((nestedSub, nestedIndex) => (
                          <li key={nestedIndex} className="py-1">
                            <a href={nestedSub.link} className="text-dark text-decoration-none d-block">
                              {nestedSub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carousel / Hero Image */}
          <div className="col-lg-9">
            <div className={`position-relative rounded overflow-hidden ${styles.heroContainer}`}>
              <img src={img} alt="Hero Banner" className="img-fluid rounded" />
              <div className={`position-absolute top-50 start-50 translate-middle text-center p-4 text-white ${styles.heroText}`}>
                <span className="text-uppercase fw-bold text-success">FRUIT FRESH</span>
                <h2 className="fw-bold mt-2">Vegetable <br /> 100% Organic</h2>
                <p>Free Pickup and Delivery Available</p>
                <a href="#" className="btn btn-warning fw-semibold">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDisplay;
