import React from 'react';
import "./Productdes.css";

import "bootstrap/dist/css/bootstrap.min.css";



const Productsubimg = ({ images = [], setMainImage }) => {
  return (
    <div className="subimg">
      {images.slice(1).map((img, index) => (
        <div key={index} className="imgsub" onMouseEnter={() => setMainImage(img)}>
          <img className="subimgcontainer" src={img} alt={`Subimage ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Productsubimg;



























// const Productsubimg = ({ setMainImage }) => { 
//   return (
//     <div className="subimg">
//       <div className="img-1 imgsub" onMouseEnter={() => setMainImage(img2)}>
//         <img className='subimgcontainer' src={img2} alt="" />
//       </div>
//       <div className="img-2 imgsub" onMouseEnter={() => setMainImage(img3)}>
//         <img className='subimgcontainer' src={img3} alt="" />
//       </div>
//       <div className="img-3 imgsub" onMouseEnter={() => setMainImage(img4)}>
//         <img className='subimgcontainer' src={img4} alt="" />
//       </div>
//       <div className="img-4 imgsub" onMouseEnter={() => setMainImage(img2)}>
//         <img className='subimgcontainer' src={img2} alt="" />
//       </div>
//       <div className="img-4 imgsub" onMouseEnter={() => setMainImage(img2)}>
//         <img className='subimgcontainer' src={img2} alt="" />
//       </div>
//       <div className="img-4 imgsub" onMouseEnter={() => setMainImage(img2)}>
//         <img className='subimgcontainer' src={img2} alt="" />
//       </div>
      
//     </div>
//   );
// };

// export default Productsubimg;




















