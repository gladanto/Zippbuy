
import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import NavBar from "../../components/TopNavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/TestHome/Footer";
import data from "../../data/c.json";
import StarIcon from "@mui/icons-material/Star";
import "./Productpage.css";

const Productpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [key, setKey] = useState(0); // Key to force re-render

  // Reset states when product changes
  useEffect(() => {
    setMainImageIndex(0);
    setIsZoomed(false);
    setActiveTab("description");
    setKey(prev => prev + 1); // Force re-render
  }, [id]);

  const product = useMemo(() => {
    return data.find((item) => item.id.toString() === id);
  }, [id, data]);

  const seriesId = product?.seriesId;
  const partId = product?.partId;

  const subproducts = useMemo(() => {
    if (!product) return [];
    return data.filter(
      (item) =>
        item.seriesId === seriesId &&
        item.partId === partId &&
        item.id.toString() !== id
    );
  }, [data, seriesId, partId, id, product]);

  const [rating, setRating] = useState(product?.rating || 4);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const images = useMemo(() => {
    return product ? [product.image, ...(product.subImages || [])] : [];
  }, [product]);

  const tabContent = useMemo(() => ({
    description: product?.description || "No description available.",
    specifications: product?.specifications || "No specifications available.",
    reviews: product?.reviews_content || "No reviews available.",
    shipping: product?.shipping || "Shipping info not available.",
    brand: product?.brand || "Brand info not available.",
  }), [product]);

  const handleNextImage = useCallback(() => {
    setMainImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevImage = useCallback(() => {
    setMainImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleMouseMove = useCallback((e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const y = Math.min(Math.max(0, e.clientY - rect.top), rect.height);
    setZoomPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }, []);

  if (!product) {
    return (
      <div className="product-not-found">
        <Header />
        <NavBar />
        <div className="container">
          <h2>Product not found</h2>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <NavBar />

      <div className="product-page-container" key={key}>
        <section className="product-section">
          <div className="product-container">
            {/* Image Gallery */}
            <div className="product-image-section">
              <div className="thumbnail-container">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail-wrapper ${mainImageIndex === index ? "active" : ""}`}
                    onClick={() => setMainImageIndex(index)}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => e.key === "Enter" && setMainImageIndex(index)}
                    aria-label={`Thumbnail ${index + 1}`}
                  >
                    <img
                      className="thumbnail-image"
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      loading="lazy"
                      onError={(e) => (e.target.src = "/placeholder.png")}
                    />
                  </div>
                ))}
              </div>

              <div className="main-image-container">
                <div
                  className="image-zoom-wrapper"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                  onMouseMove={handleMouseMove}
                  ref={imageRef}
                >
                  <img
                    className="main-product-image"
                    src={images[mainImageIndex]}
                    alt={product.name}
                    loading="eager"
                  />
                  {isZoomed && (
                    <div
                      className="zoom-lens"
                      style={{
                        left: `calc(${zoomPosition.x}% - 50px)`,
                        top: `calc(${zoomPosition.y}% - 50px)`
                      }}
                    />
                  )}
                </div>

                {isZoomed && (
                  <div className="zoom-result">
                    <div
                      className="zoomed-image"
                      style={{
                        backgroundImage: `url(${images[mainImageIndex]})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
                      }}
                    />
                  </div>
                )}

                <div className="image-navigation">
                  <button className="nav-button prev" onClick={handlePrevImage} aria-label="Previous image">
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button className="nav-button next" onClick={handleNextImage} aria-label="Next image">
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                <div className="image-indicators">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImageIndex(idx)}
                      className={`indicator ${idx === mainImageIndex ? "active" : ""}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <div className="product-info-content">
                <div className="product-header">
                  <span className="product-make">{product.Make}</span>
                  <h1 className="product-title">{product.name} | {product.Products}</h1>
                  <p className="product-subtitle">
                    {product.partname} | {product.make} | {product.seriesName}
                  </p>
                </div>

                <div className="rating-container">
                  <div className="circle-rating">
                    {rating.toFixed(1)} <StarIcon className="star-icon" fontSize="small" />
                  </div>
                  <span className="review-count">({product.reviews || 0} reviews)</span>
                </div>

                {product.stock_by_condition?.length > 0 && (
                  <div className="stock-container">
                    {product.stock_by_condition.map((item, index) => (
                      <span
                        key={index}
                        className={`stock-badge ${item.quantity > 0 ? "in-stock" : "out-of-stock"}`}
                      >
                        {item.condition} – {item.quantity > 0 ? `Qty: ${item.quantity}` : "Out of Stock"}
                      </span>
                    ))}
                  </div>
                )}

                <div className="price-container">
                  <span className="product-price">${product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>

                <div className="tabs-container">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      className={`tab-button ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="tab-content">
                  {typeof tabContent[activeTab] === "string" ? (
                    <p>{tabContent[activeTab]}</p>
                  ) : Array.isArray(tabContent[activeTab]) ? (
                    <ul>
                      {tabContent[activeTab].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <div>{tabContent[activeTab]}</div>
                  )}
                </div>

                {product.features?.length > 0 && (
                  <div className="features-container">
                    <h3>Key Features</h3>
                    <ul className="features-list">
                      {product.features.map((feature, i) => (
                        <li key={i}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {subproducts?.length > 0 && (
                  <div className="variants-container">
                    <h3>Available Variants</h3>
                    <div className="variants-grid">
                      {subproducts.map((subproduct) => (
                        <div
                          key={subproduct.id}
                          className="variant-card"
                          onClick={() => navigate(`/product/${subproduct.id}`)}
                          role="button"
                          tabIndex="0"
                          aria-label={`View ${subproduct.Products} variant`}
                          onKeyDown={(e) => e.key === "Enter" && navigate(`/product/${subproduct.id}`)}
                        >
                          <div className="variant-model">{subproduct.Products}</div>
                          <div className="variant-price">${subproduct.price}</div>
                          <div className="variant-make">{subproduct.make}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="action-container">
                  <button className="add-to-cart-button">Add to cart</button>
                  <button className="wishlist-button" aria-label="Save to wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Save to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Productpage;