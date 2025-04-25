import React from 'react';
import './AboutUs.scss';
import aboutImage from "/assets/about.png"; 

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__grid">
          <div className="about-us__image-container">
            <img 
              src={aboutImage} 
              alt="Our team working on ships" 
              className="about-us__image"
            />
          </div>
          
          <div className="about-us__content">   
            <p className="about-us__paragraph">
                ZippBay was founded with the sole intention of providing quality service to a ship owner.
            </p>
            <p className="about-us__paragraph">
              Our services are aimed at reducing downtime and providing solutions to complex problems. Our effort is towards bringing a radical change in supply chain logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;