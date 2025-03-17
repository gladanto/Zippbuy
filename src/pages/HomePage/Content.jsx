import styles from "./Content.module.css";
import groupImg from "../../assets/group.png";
import bitmapImg from "../../assets/bitmap.png";
import loginImg2 from "../../assets/loginimg2.png";
import bitmap1Img from "../../assets/bitmap-1.png";
import checkFormImg from "../../assets/check-form.png";
import React, { useEffect, useRef, useState } from "react";

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
    <div className="containerfluid">
      
      <section className={`row align-items-center justify-content-center bg-info text-white ${styles.bannerSection} ${styles.sectionSpacing}`}>
        <div className="col-lg-4 col-md-5 col-sm-6 text-center">
          <figure>
            <img src={groupImg} alt="Group" className={`img-fluid ${styles.responsiveImage}`} />
          </figure>
        </div>

        <div className="col-lg-8 col-md-7 col-sm-6">
          <p className={`${styles.blinkingText}`}>
            ZippBuy is a specialized eCommerce platform designed for the maritime industry, offering an online marketplace to buy ship parts, and essential maritime equipment.
          </p>
        </div>
      </section>

      <section className={`container-fluid ${styles.bgCustom} text-white py-4 ps-4 m-0 me-0 ${styles.sectionSpacing}`}>
        <div className="row align-items-center text-center text-md-start mt-4 mb-4">
          <div className="col-md-4">
            <p className={`fw-bold fs-4 ${styles.blinkingText}`}>
              Zippbuy is a portal designed to reduce complexity and monitoring in Maritime Purchase. Keep everything under the Management Scanner without disturbing your existing work pattern.
            </p>
          </div>

          <div className="col-md-4">
            <img src={bitmapImg} alt="Bitmap" className="img-fluid" />
          </div>

          <div className="col-md-4">
            <img src={loginImg2} alt="Login" className="img-fluid" />
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className={`container-fluid d-flex align-items-center justify-content-center py-5 
          ${styles.zbLogoBannerSec} ${styles.sectionSpacing}`}
      >
        <div className="row align-items-center w-100">
          <div className="col-md-3 text-center">
            <figure className="mb-0">
              <img src={groupImg} alt="Group" className="img-fluid" />
            </figure>
          </div>

          <div className="col-md-9 text-md-start text-center">
            <p className={`fw-bold mb-0 ${styles.blinkingText} ${styles.thirdSectionText}`}>
              Zippbuy brings all vendors together in one platform, so no more wasting the day tracking orders.
            </p>
          </div>
        </div>
      </section>

      <section className={`d-flex justify-content-center align-items-center ${styles.sectionSpacing}`} style={{ minHeight: "50vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 position-relative d-flex justify-content-center align-items-center">
                <div className={styles.portalBgSquare}></div>
                <figure className={`position-relative ${styles.imageWrapper} m-0`}>
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
