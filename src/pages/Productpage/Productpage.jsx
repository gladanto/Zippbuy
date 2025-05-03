
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import NavBar from "../../components/TopNavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/TestHome/Footer";
import data from "../../data/c.json";
import "./Productpage.css";

const Productpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id.toString() === id);
  const seriesId = product?.seriesId;
  const partId = product?.partId;

  const subproducts = data.filter(
    (item) =>
      item.seriesId === seriesId &&
      item.partId === partId &&
      item.id.toString() !== id
  );

  if (!product) return <div>Product not found</div>;

  const images = [product.image, ...(product.subImages || [])];
  const subImages = Array.isArray(product.subImages) ? product.subImages : [];

  const [rating, setRating] = useState(product.rating || 4);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedVariant, setSelectedVariant] = useState(null);

  const tabContent = {
    description: product.description || "No description available.",
    specifications: product.specifications || "No specifications available.",
    reviews: product.reviews_content || "No reviews available.",
    shipping: product.shipping || "Shipping info not available.",
    brand: product.brand || "Brand info not available.",
  };

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <Header />
      <NavBar />
      <br />
      <br />
      <section className="py-20 overflow-hidden mt-10">
        <div className="container">
          <div className="row mb-24">
            {/* Image Section */}
            <div className="col-12 col-md-6 mb-8 mb-md-0">
              <div className="row">
                <div className="col-3 d-flex flex-column align-items-center pe-2 sub-images mt-10">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      className="sub-images img-fluid mb-2 rounded"
                      style={{
                        width: "80px",
                        height: "80px",
                        cursor: "pointer",
                        objectFit: "cover",
                      }}
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setMainImageIndex(index)}
                    />
                  ))}
                </div>
                <div className="main-image-container col-9">
                  <div className="position-relative mb-10" style={{ height: "564px" }}>
                    <a
                      className="position-absolute top-50 start-0 ms-2 translate-middle-y"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePrevImage();
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </a>
                    <img
                      className="main-image-container img-fluid w-100 h-100"
                      style={{ objectFit: "cover" }}
                      src={images[mainImageIndex]}
                      alt="Main Product"
                    />
                    <div className="d-flex justify-content-center gap-2 mt-2 d-md-none">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setMainImageIndex(idx)}
                          className={`dot-button ${idx === mainImageIndex ? "active" : ""}`}
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: idx === mainImageIndex ? "#0d6efd" : "#ccc",
                            border: "none",
                          }}
                        />
                      ))}
                    </div>
                    <a
                      className="position-absolute top-50 end-0 me-2 translate-middle-y"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNextImage();
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-12 col-md-6">
              <div className="ps-lg-20">
                <div className="mb-10 pb-10 border-bottom">
                  <span className="text-secondary">{product.Make}</span>
                  <h1 className="mt-2 mb-2 mw-xl">{product.name}| {product.Products}</h1>
<p className="text-muted fw-medium mb-4" style={{ fontSize: "1rem" }}>
  {product.partname} | {product.make} | {product.seriesName}
</p>

                  <div className="mb-8 d-flex align-items-center">
                    <Rating
                      name="rating"
                      value={rating}
                      precision={0.5}
                      onChange={(event, newValue) => setRating(newValue)}
                    />
                    <span className="ms-2 text-secondary">({product.reviews || 0} reviews)</span>
                  </div>

                  {product.stock_by_condition?.length > 0 && (
                    <div className="mb-2">
                      {product.stock_by_condition.map((item, index) => (
                        <span
                          key={index}
                          className="badge bg-success text-white me-2 px-3 py-2"
                          style={{ fontSize: "0.9rem", fontWeight: "500" }}
                        >
                          {item.condition} – Qty: {item.quantity}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="d-inline-block mb-8 h5 text-info">${product.price}</p>
                  <p className="mw-md text-secondary">
                    {Array.isArray(product.description) ? product.description[0] : product.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-4 text-secondary ps-3">
                  {product.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Variants */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {subproducts?.map((subproduct, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(`/product/${subproduct.id}`)}
                      className="size-option-box border rounded-2 p-3 text-center position-relative"
                      style={{
                        width: "180px",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <div className="fw-bold text-secondary mb-1">Model: {subproduct.Products}</div>
                      <div className="price text-info mb-1">{subproduct.make}</div>
                    </div>
                  ))}
                </div>

                {/* Full Specifications */}
                <h2 className="mt-4 mb-3">Specifications</h2>
                <ul className="list-group mb-5">
                  {(selectedVariant?.specifications || product.specifications || "")
                    .split(",")
                    .map((spec, index) => (
                      <li key={index} className="list-group-item">
                        {spec.trim()}
                      </li>
                    ))}
                </ul>

                {/* Add to Cart */}
                <div className="row mb-14 mt-4">
                  <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                    <a className="btn w-100 btn-primary" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          {/* <div className="mt-16">
            <div className="row mb-16 border-bottom border-2 mt-16">
              {["description", "specifications", "reviews", "shipping", "brand"].map((tab) => (
                <div key={tab} className="col-6 col-md-auto">
                  <button
                    className={`btn ${activeTab === tab ? "bg-white text-secondary shadow" : "text-secondary"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>

            <h3 className="mb-8 text-info">{activeTab.toUpperCase()}</h3>
            <p className="mw-2xl text-secondary">
              {activeTab === "description" && selectedVariant?.description
                ? selectedVariant.description
                : activeTab === "specifications" && selectedVariant?.specifications
                ? selectedVariant.specifications
                : Array.isArray(tabContent[activeTab])
                ? tabContent[activeTab][0]
                : tabContent[activeTab]}
            </p>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productpage;
