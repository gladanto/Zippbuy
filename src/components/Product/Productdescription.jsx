import React, { useState } from "react";
import "./Productdes.css";
import proone from "/assets/img2.png";
import Productsubimg from "./Productsubimg";
import ProductSpecifications from "./ProductSpecifications";

const ProductDescription = ({ title, description, price, features, image, rating, reviews }) => {
  const [mainImage, setMainImage] = useState(proone); 
  return (
    <>
    <div className="product-container">
      <Productsubimg mainImage={mainImage} setMainImage={setMainImage} />
      <div className="product-image">
        <img src={mainImage} alt={title} /> 
      </div>
      <div className="product-details">
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <div className="product-rating">
          ⭐ {rating} ({reviews} reviews)
        </div>
        <ul className="product-features">
          {features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>
        <ProductSpecifications/>
      </div>

    </div>
  
    </>
  );
};

export default ProductDescription;







// import React, { useState } from "react";
// import "../Styles/Productdes.css";
// import proone from "../assets/img - 2.png";
// import Productsubimg from "./Productsubimg";
// import ProductSpecifications from "./ProductSpecifications";

// const ProductDescription = ({ title, description, price, features, image, rating, reviews }) => {
//   const [mainImage, setMainImage] = useState(proone); 

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {/* Left Section - Images */}
//         <div className="col-md-4 col-12 d-flex flex-column align-items-center">
//           <Productsubimg mainImage={mainImage} setMainImage={setMainImage} />
//           <div className="product-image mt-3">
//             <img src={mainImage} alt={title} className="img-fluid rounded shadow-sm" />
//           </div>
//         </div>

//         {/* Right Section - Product Details */}
//         <div className="col-md-8 col-12 mt-3 mt-md-0">
//           <div className="card p-3 shadow-sm">
//             <h1 className="fw-bold h4">{title}</h1>
//             <p className="text-muted small">{description}</p>
//             <h3 className="text-primary h5">${price}</h3>

//             {/* Rating & Reviews */}
//             <div className="mb-2">
//               <span className="badge bg-warning text-dark">⭐ {rating}</span>
//               <span className="ms-2 small">({reviews} reviews)</span>
//             </div>

//             {/* Features List */}
//             <ul className="list-group mb-3 small">
//               {features.map((feature, index) => (
//                 <li key={index} className="list-group-item">✔ {feature}</li>
//               ))}
//             </ul>

//             <ProductSpecifications />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDescription;
