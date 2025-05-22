import React, { useState } from "react";
import "./Productdes.scss";
import Productsubimg from "./Productsubimg";
import ProductSpecifications from "./ProductSpecifications";


const ProductDescription = ({
  title,
  description,
  price,
  features,
  rating,
  reviews,
  images = []
}) => {
  const [mainImage, setMainImage] = useState(images[0] || fallbackImg);

  return (
    <div className="product-container">
      <Productsubimg images={images} setMainImage={setMainImage} />
      <div className="product-image">
        <img
          src={mainImage}
          alt={title}
          onError={(e) => (e.target.src = fallbackImg)}
        />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>

        <div className="product-rating">
          ⭐ {rating} ({reviews} reviews)
        </div>

        <ul className="product-features">
          {features?.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>

        {/* Specifications Section */}
        <ProductSpecifications />
      </div>
    </div>
  );
};

export default ProductDescription;
