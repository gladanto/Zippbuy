import React, { useState } from "react";
import ProductImage from "../../components/Product/ProductImage";
import "./Productpage.css";
import ProductDescription from "../../components/Product/Productdescription";
import NavBar from "../../components/TopNavBar/NavBar";
import ProductSpecifications from "../../components/Product/ProductSpecifications";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Rating } from "@mui/material";
import { BsStarFill } from "react-icons/bs";
import { Key, Star } from "@mui/icons-material";
import data from "../../data/productpage.json";




const Productpage = () => {
  const product = data[0]; 
  const images = [product.image, ...product.subImages || []];
  const [rating, setRating] = useState(product.rating || 4);
  const [mainImageIndex, setMainImageIndex] = useState([0]);
  const [activeTab, setActiveTab] = useState("description");

  // const images = [product.image] || [];

  const tabContent = {
    description: product.description || "No description available.",
    reviews: product.reviews_content || "No reviews available.",
    shipping: product.shipping || "Shipping info not available.",
    brand: product.brand || "Brand info not available.",
  };
  

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) );
  };

  const handlePrevImage = () => {
    setMainImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) 
      
    );
console.log("hey");


  };
  
  return (
    <>
      <Header />
      <NavBar />
      <br></br>
      <br></br>
      <section className="py-20 overflow-hidden mt-10">
        <div className="container">
          <div className="row mb-24">
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
                      onClick={() => {
                        setMainImageIndex(index );
                      }}
                      
                    />
                  ))}
                </div>

                <div className="main-image-container col-9">
                  <div
                    className="position-relative mb-10"
                    style={{ height: "564px" }}
                  >
                    <a
                      className="position-absolute top-50 start-0 ms-2 translate-middle-y"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePrevImage();
                      }}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left"
                      >
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
                          onClick={() => {
                            console.log({Key});
                            
                          } }
                          className={`dot-button ${
                            idx === mainImageIndex ? "active" : ""
                          }`}
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor:
                              idx === mainImageIndex ? "#0d6efd" : "#ccc",
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
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-right"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="ps-lg-20">
                <div className="mb-10 pb-10 border-bottom">
                  <span className="text-secondary">Bitzer</span>
                  <h1 className="mt-2 mb-6 mw-xl">{product.name}</h1>
                  <div className="mb-8 d-flex align-items-center">
                    <Rating
                      initialRating={rating}
                      emptySymbol={<Star className="text-secondary fs-3" />}
                      fullSymbol={<BsStarFill className="text-warning fs-3" />}
                      onChange={(rate) => setRating(rate)}
                    />
                    <span className="ms-2 text-secondary">({rating})</span>
                  </div>
                  <p className="d-inline-block mb-8 h5 text-info">
                    <span>${product.price}</span>
                  </p>
                  <p className="mw-md text-secondary">{product.description}</p>
                </div>

                <ul className="mb-4 text-secondary ps-3">
                  {product.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-3 mb-12">
  {[
    { size: "20 inch", price: "$99", detail: "Ideal for home AC units" },
    { size: "25 inch", price: "$120", detail: "Perfect for commercial coolers" },
    { size: "30 inch", price: "$140", detail: "Best for large compressors" },
    { size: "35 inch", price: "$160", detail: "Heavy-duty industrial use" },
    { size: "40 inch", price: "$180", detail: "Max capacity compressor" },
  ].map((option, index) => (
    <div
      onMouseEnter={() => setMainImageIndex(index)}
      key={index}
      className="size-option-box border rounded-2 p-3 text-center position-relative"
      style={{
        width: "150px",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="size-label fw-bold">{option.size}</div>
      <div className="price text-info">{option.price}</div>
      <div
        className="hover-detail position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-secondary fw-medium"
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      >
        {option.detail}
      </div>
    </div>
  ))}
</div>
{/* specifications */}
    <div className="container my-4">
      {/* Product name, image, price, etc. */}

      <h2 className="mt-4 mb-3">Specifications</h2>
      <ul className="list-group mb-5">
        {product.specifications.map((spec, index) => (
          <li key={index} className="list-group-item">
            {spec}
          </li>
        ))}
      </ul>

      {/* You can add Features section similarly */}
    </div>

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

          {/* Tabs */}
          <div className="mt-16">
            <div className="row mb-16 border-bottom border-2 mt-16">
              {["description", "reviews", "shipping", "brand"].map((tab) => (
                <div key={tab} className="col-6 col-md-auto">
                  <button
                    className={`btn ${
                      activeTab === tab
                        ? "bg-white text-secondary shadow"
                        : "text-secondary"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.replace("_", " ").toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
            <h3 className="mb-8 text-info">
              {activeTab.replace("_", " ").toUpperCase()}
            </h3>
            <p className="mw-2xl text-secondary">{tabContent[activeTab]}</p>
          </div>
        </div>
      </section>
  

    </>
  );
};

export default Productpage;












