import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import c1 from "/assets/c1.png";
import c2 from "/assets/c2.mp4";
import c3 from "/assets/c3.png";

const Welcome = () => {
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators");
    if (!carousel) return;

    const bootstrapCarousel = new Carousel(carousel, {
      interval: false,
      ride: false,
    });

    const slides = carousel.querySelectorAll(".carousel-item");

    slides.forEach((slide) => {
      const video = slide.querySelector("video");
      if (video) {
        video.addEventListener("ended", () => {
          bootstrapCarousel.next();
        });
      } else {
        setTimeout(() => {
          bootstrapCarousel.next();
        }, 5000);
      }
    });
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide mx-auto w-100">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner position-relative w-100" style={{ paddingTop: "37.5%" }}>
      <div className="carousel-item active position-absolute top-0 start-0 w-100 h-100">
          <img src={c1} className="w-100 h-100 object-fit-cover position-absolute" alt="Carousel" />
        </div>
        <div className="carousel-item position-absolute top-0 start-0 w-100 h-100">
          <video className="w-100 h-100 object-fit-cover position-absolute" autoPlay muted>
            <source src={c2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="carousel-item position-absolute top-0 start-0 w-100 h-100">
          <img src={c3} className="w-100 h-100 object-fit-cover position-absolute" alt="Carousel" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Welcome;
