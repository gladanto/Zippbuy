import React, { useState } from "react";
import { Rating } from "@mui/material";
import NavBar from "../../components/TopNavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import data from "../../data/demoProduct.json";
import "./Productpage.css";

const Productpage = () => {
  const product = data[0];
  const images = [product.image, ...product.subImages || []];

  // Handle image array
  const subImages = Array.isArray(product.subImages) ? product.subImages : [];
  // const images = [product.image, ...subImages.filter(Boolean)];

  const [rating, setRating] = useState(product.rating || 4);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedVariant, setSelectedVariant] = useState(null);

  const tabContent = {
    description: product.description || "No description available.",
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

  const specifications = product["model rta"]?.[0]?.specifications
    ?.split(",")
    .map((s) => s.trim()) || [];

  return (
    <>
      <Header />
      <NavBar /> 
      <br />
      <br />
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
                      style={{ width: "80px", height: "80px", cursor: "pointer", objectFit: "cover" }}
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

            <div className="col-12 col-md-6">
              <div className="ps-lg-20">
                <div className="mb-10 pb-10 border-bottom">
                  <span className="text-secondary">{product.Make}</span>
                  <h1 className="mt-2 mb-6 mw-xl">{product.name}</h1>
                  <div className="mb-8 d-flex align-items-center">
                    <Rating
                      name="rating"
                      value={rating}
                      precision={0.5}
                      onChange={(event, newValue) => setRating(newValue)}
                    />
                    <span className="ms-2 text-secondary">({product.reviews || 0} reviews)</span>
                  </div>
                  <p className="d-inline-block mb-8 h5 text-info">${product.price}</p>
                  <p className="mw-md text-secondary">{product.description}</p>
                </div>

                <ul className="mb-4 text-secondary ps-3">
                  {product.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Variant Boxes */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {product.variants?.map((variant, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedVariant(variant)}
                      onMouseEnter={() => setMainImageIndex(index)}
                      className="size-option-box border rounded-2 p-3 text-center position-relative"
                      style={{
                        width: "180px",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <div className="fw-bold text-secondary mb-1">Model: {variant.model}</div>
                      <div className="price text-info mb-1">{variant.price}</div>
                    </div>
                  ))}
                </div>

                {/* Variant Description Below */}
                {selectedVariant && (
                  <div className="variant-description bg-light border rounded p-3 mb-4">
                    <h5 className="text-info">Details for Model: {selectedVariant.model}</h5>
                    <p className="text-secondary small mb-0">{selectedVariant.specifications}</p>
                  </div>
                )}

                <h2 className="mt-4 mb-3">Specifications</h2>
                <ul className="list-group mb-5">
                  {specifications.map((spec, index) => (
                    <li key={index} className="list-group-item">
                      {spec}
                    </li>
                  ))}
                </ul>

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
                    className={`btn ${activeTab === tab ? "bg-white text-secondary shadow" : "text-secondary"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
            <h3 className="mb-8 text-info">{activeTab.toUpperCase()}</h3>
            <p className="mw-2xl text-secondary">{tabContent[activeTab]}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productpage;
// import React, { useState } from "react";
// import { Rating } from "@mui/material";
// import NavBar from "../../components/TopNavBar/NavBar";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import data from "../../data/demoProduct.json";
// import "./Productpage.css";

// const Productpage = () => {
//   const product = data[0];

//   const [rating, setRating] = useState(product.rating || 4);
//   const [mainImageIndex, setMainImageIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState("description");
//   const [selectedVariant, setSelectedVariant] = useState(null);

//   const defaultImages = [product.image, ...(product.subImages || []).filter(Boolean)];
//   const variantImages = selectedVariant
//     ? [
//         selectedVariant.image || product.image,
//         ...(Array.isArray(selectedVariant.subImages)
//           ? selectedVariant.subImages
//           : [selectedVariant.subImages]
//         ).filter(Boolean),
//       ]
//     : [];

//   const currentImages = selectedVariant ? variantImages : defaultImages;

//   const tabContent = {
//     description: product.description?.join(" ") || "No description available.",
//     reviews: product.reviews_content || "No reviews available.",
//     shipping: product.shipping || "Shipping info not available.",
//     brand: product.brand || "Brand info not available.",
//   };

//   const specifications =
//     (selectedVariant?.specifications || product["model rta"]?.[0]?.specifications || "")
//       .split(",")
//       .map((s) => s.trim())
//       .filter(Boolean);

//   const features = selectedVariant?.features || product.features || [];

//   const handleNextImage = () => {
//     setMainImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
//   };

//   const handlePrevImage = () => {
//     setMainImageIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
//   };

//   return (
//     <>
//       <Header />
//       <NavBar />
//       <br />
//       <br />
//       <section className="py-20 overflow-hidden mt-10">
//         <div className="container">
//           <div className="row mb-24">
//             {/* IMAGE SECTION */}
//             <div className="col-12 col-md-6 mb-8 mb-md-0">
//               <div className="row">
//                 <div className="col-3 d-flex flex-column align-items-center pe-2 sub-images mt-10">
//                   {currentImages.map((img, index) => (
//                     <img
//                       key={index}
//                       className="sub-images img-fluid mb-2 rounded"
//                       style={{ width: "80px", height: "80px", cursor: "pointer", objectFit: "cover" }}
//                       src={img}
//                       alt={`Thumbnail ${index}`}
//                       onClick={() => setMainImageIndex(index)}
//                     />
//                   ))}
//                 </div>
//                 <div className="main-image-container col-9">
//                   <div className="position-relative mb-10" style={{ height: "564px" }}>
//                     <a
//                       className="position-absolute top-50 start-0 ms-2 translate-middle-y"
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handlePrevImage();
//                       }}
//                     >
//                       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M15 18l-6-6 6-6" />
//                       </svg>
//                     </a>

//                     <img
//                       className="main-image-container img-fluid w-100 h-100"
//                       style={{ objectFit: "cover" }}
//                       src={currentImages[mainImageIndex]}
//                       alt="Main Product"
//                     />

//                     <div className="d-flex justify-content-center gap-2 mt-2 d-md-none">
//                       {currentImages.map((_, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => setMainImageIndex(idx)}
//                           className={`dot-button ${idx === mainImageIndex ? "active" : ""}`}
//                           style={{
//                             width: "10px",
//                             height: "10px",
//                             borderRadius: "50%",
//                             backgroundColor: idx === mainImageIndex ? "#0d6efd" : "#ccc",
//                             border: "none",
//                           }}
//                         />
//                       ))}
//                     </div>

//                     <a
//                       className="position-absolute top-50 end-0 me-2 translate-middle-y"
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleNextImage();
//                       }}
//                     >
//                       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M9 18l6-6-6-6" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* PRODUCT DETAILS */}
//             <div className="col-12 col-md-6">
//               <div className="ps-lg-20">
//                 <div className="mb-10 pb-10 border-bottom">
//                   <span className="text-secondary">{product.Make}</span>
//                   <h1 className="mt-2 mb-6 mw-xl">{product.name}</h1>
//                   <div className="mb-8 d-flex align-items-center">
//                     <Rating
//                       name="rating"
//                       value={rating}
//                       precision={0.5}
//                       onChange={(event, newValue) => setRating(newValue)}
//                     />
//                     <span className="ms-2 text-secondary">({product.reviews || 0} reviews)</span>
//                   </div>
//                   <p className="d-inline-block mb-8 h5 text-info">${product.price}</p>
//                   <p className="mw-md text-secondary">{product.description?.[0]}</p>
//                 </div>

//                 <ul className="mb-4 text-secondary ps-3">
//                   {features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>

//                 {/* VARIANT SELECTOR */}
//                 <div className="d-flex flex-wrap gap-3 mb-4">
//                   {product.variants?.map((variant, index) => (
//                     <div
//                       key={index}
//                       onClick={() => {
//                         setSelectedVariant(variant);
//                         setMainImageIndex(0); // Reset image index on variant change
//                       }}
//                       className="size-option-box border rounded-2 p-3 text-center position-relative"
//                       style={{
//                         width: "180px",
//                         cursor: "pointer",
//                         transition: "all 0.3s ease-in-out",
//                         backgroundColor: "#f8f9fa",
//                       }}
//                     >
//                       <div className="fw-bold text-secondary mb-1">Model: {variant.model}</div>
//                       <div className="price text-info mb-1">{variant.price}</div>
//                     </div>
//                   ))}
//                 </div>

//                 {selectedVariant && (
//                   <div className="variant-description bg-light border rounded p-3 mb-4">
//                     <h5 className="text-info">Details for Model: {selectedVariant.model}</h5>
//                     <p className="text-secondary small mb-0">{selectedVariant.specifications}</p>
//                   </div>
//                 )}

//                 {/* SPECIFICATIONS */}
//                 <h2 className="mt-4 mb-3">Specifications</h2>
//                 <ul className="list-group mb-5">
//                   {specifications.map((spec, index) => (
//                     <li key={index} className="list-group-item">
//                       {spec}
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="row mb-14 mt-4">
//                   <div className="col-12 col-xl-8 mb-4 mb-xl-0">
//                     <a className="btn w-100 btn-primary" href="#">
//                       Add to cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* TABS */}
//           <div className="mt-16">
//             <div className="row mb-16 border-bottom border-2 mt-16">
//               {["description", "reviews", "shipping", "brand"].map((tab) => (
//                 <div key={tab} className="col-6 col-md-auto">
//                   <button
//                     className={`btn ${activeTab === tab ? "bg-white text-secondary shadow" : "text-secondary"}`}
//                     onClick={() => setActiveTab(tab)}
//                   >
//                     {tab.toUpperCase()}
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <h3 className="mb-8 text-info">{activeTab.toUpperCase()}</h3>
//             <p className="mw-2xl text-secondary">{tabContent[activeTab]}</p>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Productpage;
