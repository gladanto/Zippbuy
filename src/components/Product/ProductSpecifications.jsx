import React from "react";
import "./Productdes.css";

const ProductSpecifications = () => {
  const specifications = [
 
  ""
  ];

  return (
    <div className="product-specifications">
      <h2>About this item</h2>
      <ul>
        {specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSpecifications;




