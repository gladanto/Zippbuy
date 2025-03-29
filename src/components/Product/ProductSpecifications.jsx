import React from "react";
import "./Productdes.css";

const ProductSpecifications = () => {
  const specifications = [
  "The BITZER 2T.2Y is a high-performance two-cylinder, semi-hermetic reciprocating compressor, designed for various refrigeration and air conditioning applications. It ensures efficient cooling, durability, and reliability with advanced engineering and optimized components.",
  "Semi-Hermetic Design – Allows for easy maintenance and long service life.",
  "Two-Cylinder Configuration – Enhances performance and efficiency.",
  "Versatile Applications – Ideal for supermarkets, cold storage, industrial refrigeration, and air conditioning systems.",
  "Semi-Hermetic Design – Allows for easy maintenance and long service life.",
  "Two-Cylinder Configuration – Enhances performance and efficiency.",
  "Versatile Applications – Ideal for supermarkets, cold storage, industrial refrigeration, and air conditioning systems."
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


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ProductSpecifications = () => {
//   const specifications = [
//     "The BITZER 2T.2Y is a high-performance two-cylinder, semi-hermetic reciprocating compressor, designed for various refrigeration and air conditioning applications. It ensures efficient cooling, durability, and reliability with advanced engineering and optimized components.",
//     "Semi-Hermetic Design – Allows for easy maintenance and long service life.",
//     "Two-Cylinder Configuration – Enhances performance and efficiency.",
//     "Versatile Applications – Ideal for supermarkets, cold storage, industrial refrigeration, and air conditioning systems."
//   ];

//   return (
//     <div className="container mt-4">
//       <div className="card shadow-sm p-4">
//         <h2 className="mb-3">About this item</h2>
//         <ul className="list-group list-group-flush">
//           {specifications.map((spec, index) => (
//             <li key={index} className="list-group-item">{spec}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProductSpecifications;

