import React from 'react';
import "./Productdes.css";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";
import img4 from "/assets/img4.png";
import "bootstrap/dist/css/bootstrap.min.css";

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


// import React from 'react';
// import "./Productdes.css";
// import img2 from "/assets/img2.png";
// import img3 from "/assets/img3.png";
// import img4 from "/assets/img4.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination } from 'swiper/modules';

// const Productsubimg = ({ setMainImage }) => {
//   return (
//     <div className="subimg-container">
//       {/* Desktop View - Static Images */}
//       <div className="subimg desktop-view">
//         <div className="imgsub" onMouseEnter={() => setMainImage(img2)}>
//           <img className="subimgcontainer" src={img2} alt="" />
//         </div>
//         <div className="imgsub" onMouseEnter={() => setMainImage(img3)}>
//           <img className="subimgcontainer" src={img3} alt="" />
//         </div>
//         <div className="imgsub" onMouseEnter={() => setMainImage(img4)}>
//           <img className="subimgcontainer" src={img4} alt="" />
//         </div>
//       </div>

//       {/* Mobile View - Swiper Carousel */}
//       <div className="subimg mobile-view">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={10}
//           pagination={{ clickable: true }}
//           modules={[Pagination]}
//           className="swiper-container"
//         >
//           <SwiperSlide onClick={() => setMainImage(img2)}>
//             <img className="subimgcontainer" src={img2} alt="" />
//           </SwiperSlide>
//           <SwiperSlide onClick={() => setMainImage(img3)}>
//             <img className="subimgcontainer" src={img3} alt="" />
//           </SwiperSlide>
//           <SwiperSlide onClick={() => setMainImage(img4)}>
//             <img className="subimgcontainer" src={img4} alt="" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Productsubimg;


















