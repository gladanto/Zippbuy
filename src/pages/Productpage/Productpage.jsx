import React, { useState } from "react";
import ProductImage from "../../components/Product/ProductImage";
import "./Productpage.css";
import ProductDescription from "../../components/Product/Productdescription";
import NavBar from "../../components/TopNavBar/NavBar";
import Productsubimg from "../../../public/assets/img1.png";
import Productsubimg2 from "../../../public/assets/img2.png";
import Productsubimg3 from "../../../public/assets/img3.png";
import Productsubimg4 from "../../../public/assets/img4.png";
import Productsubimg5 from "../../../public/assets/img5.png";
import ProductSpecifications from "../../components/Product/ProductSpecifications";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Rating } from "@mui/material";
import { BsStarFill } from "react-icons/bs";
import { Star } from "@mui/icons-material";
import { WhatsApp, Instagram, Twitter } from "@mui/icons-material";

const productData = {
  title: "BITZER 2T.2Y COMPRESSORS",
  description:
    "The BITZER 2T.2Y is a two-cylinder, semi-hermetic reciprocating compressor designed for reliable and efficient operation in refrigeration and air conditioning applications.",
  price: 99.99,
  image: "",
  rating: 4.5,
  reviews: 1200,
  features: [
    "Make: Bitzer",
    "Model: 2T.2Y",
    "Displacement: 9.4-23.7 m3/h",
    "Sr No.: 1674602791,1674602792",
    "Speed: 700-1750 RPM",
    "LP/HP max.: 19/25 Bar",
  ],
};


const tabContent = {
  description:
    "I had interdum at ante porta, eleifend feugiat nunc. In semper euismod mi a accums lorem sad. Morbi at auctor nibh. Aliquam tincidunt placerat mollis. Lorem euismod dignissim, felis tortor ollis eros, non ultricies turpis.",
  reviews:
    "Customer reviews will be displayed here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  shipping:
    "Shipping and return policies will be displayed here. You can return within 30 days.",
  brand:
    "Brand information will be displayed here. Learn more about our product origins and quality.",
};

const Productpage = () => {
  const [rating, setRating] = useState(4);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const images = [Productsubimg, Productsubimg2, Productsubimg3, Productsubimg4, Productsubimg5];
  const [activeTab, setActiveTab] = useState("description");

  // Navigate to next image
  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to previous image
  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    
    <>
  <Header/>
     <NavBar />
      <section className="py-20 overflow-hidden mt-10">
        <div className="container">
          <div className="row mb-24">
            <div className="col-12 col-md-6 mb-8 mb-md-0">
              <div className="row">
                {/* Sub-images on the left */}
                <div className="col-3 d-flex flex-column align-items-center pe-2 sub-images mt-10">
                  {[Productsubimg2, Productsubimg3, Productsubimg4, Productsubimg5].map((img, index) => (
                    <img
                      key={index}
                      className="sub-images  img-fluid mb-2 rounded"
                      style={{ width: "80px", height: "80px", cursor: "pointer", objectFit: "cover" }}
                      src={img}
                      alt={`Product Thumbnail ${index + 1}`}
                      onClick={() => setMainImageIndex(index)}
                    />
                  ))}
                </div>

                <div className="main-image-container col-9">
                  <div className=" position-relative mb-10 " style={{ height: "564px" }}>
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
                      className="main-image-container img-fluid w-100 h-100 "
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
          border: "none",
          backgroundColor: idx === mainImageIndex ? "#0d6efd" : "#ccc",
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
                  <span className="text-secondary">Brille</span>
                  <h1 className="mt-2 mb-6 mw-xl">BRILE water filter carafe</h1>
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
                    <span>$29.99</span>
                    <span
                      className="fw-normal text-secondary text-decoration-line-through"
                      style={{ fontSize: "16px" }}
                    >
                      $33.69
                    </span>
                  </p>
                  <p className="mw-md text-secondary">
                    Maecenas commodo libero ut molestie dictum. Morbi placerat eros id porttitor sagittis.
                  </p>
                </div>

                {/* <div className="d-flex mb-12">
                  <div className="me-6">
                    <span className="d-block mb-4 fw-bold text-secondary tetx-uppercase">QTY</span>
                    <div className="d-inline-flex align-items-center px-4 fw-bold text-secondary border rounded-2">
                      <button className="btn px-0 py-2">-</button>
                      <input className="form-control m-0 px-2 py-4 text-center text-md-end border-0" style={{ width: "48px" }} type="number" placeholder="1" />
                      <button className="btn px-0 py-2">+</button>
                    </div>
                  </div>
                  <div>
                    <span className="d-block mb-4 fw-bold text-secondary text-uppercase">Size</span>
                    <select className="form-select border ps-6 pe-10 py-4 fw-bold text-secondary">
                      <option value="1">Medium</option>
                      <option value="2">Small</option>
                      <option value="3">Large</option>
                    </select>
                  </div>
                </div> */}
                <div className="d-flex flex-wrap gap-3 mb-12">
  {[
    { size: "20 inch", price: "$99", detail: "Ideal for home AC units" },
    { size: "25 inch", price: "$120", detail: "Perfect for commercial coolers" },
    { size: "30 inch", price: "$140", detail: "Best for large compressors" },
    { size: "35 inch", price: "$160", detail: "Heavy-duty industrial use" },
    { size: "40 inch", price: "$180", detail: "Max capacity compressor" },
  ].map((option, index) => (
    <div onMouseEnter={() => {setMainImageIndex(index);}}
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
        {option.detail } 
      </div>
    </div>
  ))}
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
          <div className="mt-16">
            <div className="row mb-16 border-bottom border-2 mt-16">
              {["description", "reviews", "shipping", "brand"].map((tab) => (
                <div key={tab} className="col-6 col-md-auto">
                  <button
                    className={`btn ${activeTab === tab ? "bg-white text-secondary shadow" : "text-secondary"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.replace("_", " ").toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
            <h3 className="mb-8 text-info">{activeTab.replace("_", " ").toUpperCase()}</h3>
            <p className="mw-2xl text-secondary">{tabContent[activeTab]}</p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Productpage;
