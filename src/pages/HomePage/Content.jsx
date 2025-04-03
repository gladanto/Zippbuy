import React, { useEffect, useRef, useState } from "react";
import "./Content.scss";
import groupImg from "/assets/group.png";
import bitmapImg from "/assets/bitmap.png";
import loginImg2 from "/assets/loginimg2.png";
import bitmap1Img from "/assets/bitmap-1.png";
import checkFormImg from "/assets/check-form.png";

const Content = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid">
      {/* Section 1 */}
      <section className="row align-items-center justify-content-center bg-info text-white banner-section section-spacing">
        <div className="col-lg-4 col-md-5 col-sm-6 text-center">
          <figure>
            <img src={groupImg} alt="Group" className="img-fluid responsive-image" />
          </figure>
        </div>

        <div className="col-lg-8 col-md-7 col-sm-6">
          <p className="blinking-text">
            ZippBuy is a specialized eCommerce platform designed for the maritime industry, offering an online marketplace to buy ship parts and essential maritime equipment.
          </p>
        </div>
      </section>

      {/* Section 2 - Fixed Image Size & Text/Image Proportions */}
      <section className="container-fluid bg-custom text-white py-4 ps-4 m-0 me-0 section-spacing">
        <div className="row align-items-center text-center text-md-start mt-4 mb-4 section-2">
          <div className="col-md-4 text-container">
            <p className="fw-bold fs-4 blinking-text">
              Zippbuy is a portal designed to reduce complexity and monitoring in Maritime Purchase.
            </p>
          </div>

          <div className="col-md-4 image-container">
            <img src={bitmapImg} alt="Bitmap" className="img-fluid same-size-img" />
          </div>

          <div className="col-md-4 image-container">
            <img src={loginImg2} alt="Login" className="img-fluid same-size-img" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="row align-items-center justify-content-center bg-info text-white banner-section section-spacing">
        <div className="col-lg-4 col-md-5 col-sm-6 text-center">
          <figure>
            <img src={groupImg} alt="Group" className="img-fluid responsive-image" />
          </figure>
        </div>

        <div className="col-lg-8 col-md-7 col-sm-6">
          <p className="blinking-text">
            Zippbuy brings all vendors together in one platform, so no more wasting the day tracking orders.
          </p>
        </div>
      </section>

      {/* Section 4 - Portal Background Effect */}
      <section className="d-flex justify-content-center align-items-center section-spacing" style={{ minHeight: "50vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 position-relative d-flex justify-content-center align-items-center">
              <div className="portal-bg-square"></div>
              <figure className="position-relative image-wrapper m-0">
                <img src={bitmap1Img} alt="Bitmap 1" className="img-fluid" />
              </figure>
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center align-items-start ps-md-5">
              <h3 className="text-primary mb-4 fw-bold">With the use of this portal, be free from:</h3>
              <ul className="list-unstyled">
                {[
                  "Complex and costly Ship Manager Purchase portals.",
                  "Being tied up to one Ship Manager.",
                  "Reminders for payments.",
                  "Undesired variance in the new financial year.",
                ].map((text, index) => (
                  <li key={index} className="d-flex align-items-center mb-3 fs-5 text-dark opacity-75">
                    <img src={checkFormImg} alt="Check Form" className="me-2" width="25" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;


// import React, { useEffect, useRef, useState } from "react";
// import "./Content.scss";
// import groupImg from "/assets/group.png";
// import bitmapImg from "/assets/bitmap.png";
// import loginImg2 from "/assets/loginimg2.png";
// import bitmap1Img from "/assets/bitmap-1.png";
// import checkFormImg from "/assets/check-form.png";

// const Content = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="container-fluid content-wrapper">
//       {/* Section 1 - Hero with Floating Elements */}
//       <section className="row align-items-center justify-content-center hero-section section-spacing">
//         <div className="col-lg-5 col-md-6 col-sm-8 text-center">
//           <div className="floating-element floating-element-1"></div>
//           <div className="floating-element floating-element-2"></div>
//           <figure className="hero-image-container">
//             <img src={groupImg} alt="Group" className="img-fluid hero-image" />
//           </figure>
//         </div>

//         <div className="col-lg-7 col-md-6 col-sm-10">
//           <div className="speech-bubble p-4">
//             <p className="hero-text">
//               ZippBuy is a specialized eCommerce platform designed for the maritime industry, offering an online marketplace to buy ship parts and essential maritime equipment.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Section 2 - Card Grid Layout */}
//       <section className="container-fluid features-section section-spacing">
//         <div className="row justify-content-center">
//           <div className="col-12 text-center mb-5">
//             <h2 className="section-title">Why Choose ZippBuy?</h2>
//           </div>
          
//           <div className="col-md-4 mb-4">
//             <div className="feature-card card-1">
//               <div className="card-icon">🚢</div>
//               <p className="card-text">
//                 Zippbuy is a portal designed to reduce complexity and monitoring in Maritime Purchase.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="feature-card card-2">
//               <img src={bitmapImg} alt="Bitmap" className="card-image" />
//             </div>
//           </div>

          
// <div className="zippbuy-logo-container">
//   <div className="zippbuy-logo">Z</div>
//   <span className="zippbuy-text">ippBuy</span>
// </div>



//           <div className="col-md-4 mb-4">
//             <div className="feature-card card-3">
//               <img src={loginImg2} alt="Login" className="card-image" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3 - Animated Banner */}
//       <section className="row align-items-center justify-content-center animated-banner section-spacing">
//         <div className="col-lg-6 col-md-8 col-sm-10 text-center">
//           <div className="banner-content">
//             <div className="bubble-animation">
//               <div className="bubble"></div>
//               <div className="bubble"></div>
//               <div className="bubble"></div>
//             </div>
//             <p className="banner-text">
//               Zippbuy brings all vendors together in one platform, so no more wasting the day tracking orders.
//             </p>
//             <img src={groupImg} alt="Group" className="img-fluid banner-image" />
//           </div>
//         </div>
//       </section>

//       {/* Section 4 - Benefits with Styled List */}
//       <section className="d-flex justify-content-center align-items-center benefits-section section-spacing">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-5 col-md-6 position-relative d-flex justify-content-center align-items-center">
//               <div className="decorative-shape decorative-shape-1"></div>
//               <div className="decorative-shape decorative-shape-2"></div>
//               <figure className="position-relative image-wrapper">
//                 <img src={bitmap1Img} alt="Bitmap 1" className="img-fluid benefit-image" />
//               </figure>
//             </div>
//             <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center align-items-start ps-md-5">
//               <h3 className="section-subtitle mb-4">With the use of this portal, be free from:</h3>
//               <ul className="benefits-list">
//                 {[
//                   "Complex and costly Ship Manager Purchase portals.",
//                   "Being tied up to one Ship Manager.",
//                   "Reminders for payments.",
//                   "Undesired variance in the new financial year.",
//                 ].map((text, index) => (
//                   <li key={index} className="benefit-item">
//                     <img src={checkFormImg} alt="Check Form" className="check-icon" />
//                     <span>{text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Content;