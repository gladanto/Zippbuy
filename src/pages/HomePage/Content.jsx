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
