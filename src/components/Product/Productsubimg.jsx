import React from 'react';
import "./Productdes.css";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";
import img4 from "/assets/img4.png";

const Productsubimg = ({ setMainImage }) => { 
  return (
    <div className="subimg">
      <div className="img-1 imgsub" onMouseEnter={() => setMainImage(img2)}>
        <img className='subimgcontainer' src={img2} alt="" />
      </div>
      <div className="img-2 imgsub" onMouseEnter={() => setMainImage(img3)}>
        <img className='subimgcontainer' src={img3} alt="" />
      </div>
      <div className="img-3 imgsub" onMouseEnter={() => setMainImage(img4)}>
        <img className='subimgcontainer' src={img4} alt="" />
      </div>
      <div className="img-4 imgsub" onMouseEnter={() => setMainImage(img2)}>
        <img className='subimgcontainer' src={img2} alt="" />
      </div>
      <div className="img-4 imgsub" onMouseEnter={() => setMainImage(img2)}>
        <img className='subimgcontainer' src={img2} alt="" />
      </div>
      <div className="img-4 imgsub" onMouseEnter={() => setMainImage(img2)}>
        <img className='subimgcontainer' src={img2} alt="" />
      </div>
      
    </div>
  );
};

export default Productsubimg;





// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img2 from "../assets/img - 2.png";
// import img3 from "../assets/img - 3.png";
// import img4 from "../assets/img - 4.png";

// const Productsubimg = ({ setMainImage }) => {
//   return (
//     <div className="d-flex flex-md-column flex-row flex-wrap gap-3 justify-content-center">
//       <div
//         className="card"
//         style={{ width: "8rem", cursor: "pointer" }}
//         onMouseEnter={() => setMainImage(img2)}
//       >
//         <img
//           className="card-img-top"
//           style={{ height: "80px", objectFit: "cover" }}
//           src={img2}
//           alt="Product 2"
//         />
//       </div>
//       <div
//         className="card"
//         style={{ width: "8rem", cursor: "pointer" }}
//         onMouseEnter={() => setMainImage(img3)}
//       >
//         <img
//           className="card-img-top"
//           style={{ height: "80px", objectFit: "cover" }}
//           src={img3}
//           alt="Product 3"
//         />
//       </div>
//       <div
//         className="card"
//         style={{ width: "8rem", cursor: "pointer" }}
//         onMouseEnter={() => setMainImage(img4)}
//       >
//         <img
//           className="card-img-top"
//           style={{ height: "80px", objectFit: "cover" }}
//           src={img4}
//           alt="Product 4"
//         />
//       </div>
//       <div
//         className="card"
//         style={{ width: "8rem", cursor: "pointer" }}
//         onMouseEnter={() => setMainImage(img2)}
//       >
//         <img
//           className="card-img-top"
//           style={{ height: "80px", objectFit: "cover" }}
//           src={img2}
//           alt="Product 2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Productsubimg;
