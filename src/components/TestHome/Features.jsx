import React from 'react';
import './Features.scss';
import VessaleImage from '../../../public/assets/_1.png';
import charteringImage from '../../../public/assets/_3.png';
import repairImage from '../../../public/assets/_4.png';
import IHMImage from '../../../public/assets/_2.png'
import smartShippingImage from '../../../public/assets/_5.png';
import sparesImage from '../../../public/assets/_6.png';

const Features = () => {
  return (
    <section className="features">
      <div className="container">

          {/* Vessel Inspection */}
          <div className="feature-section reverse">
          <div className="text-content">
            <h2 className="section-subtitle">Vessel Inspection</h2>
            <p className="section-description">
            Includes assessment of cargo gear, Navigation equipment, Certificate status,
            Vessel History based on Document analysis and Class Status review. Estimate future
            expenses based on present state of vessel. Experienced Master Mariners and Experienced 
            Vessel Superintendents with ample sea experience to ensure Vessel is ready in all
            aspects for any external inspection.
            </p>
          </div>
          <div className="image-content">
            <img 
              src={VessaleImage} 
              alt="Spares and Stores Portal" 
              className="section-image"
            />
          </div>
          </div>
        {/* Chartering Section */}
        <div className="feature-section">
          <div className="text-content">
            <h1 className="section-title">Chartering</h1>
            <p className="section-description">
              Experienced Master Mariners backed by able technical expertise and technology, 
              provide in-depth analysis to Ship Owners and Cargo Owners on Voyage optimisation 
              for an economically viable voyage and superior value for all stakeholders. With 
              our industry experience of over 20 years, we provide round the dock support for 
              our clients. Our post-fixture team:
            </p>
            <ul className="feature-list">
              <li>Provides support to Vessel's Master for safe execution of Voyage</li>
              <li>Manages every aspect of the Charter for smooth operations</li>
              <li>Optimisation of Cargo Operation</li>
              <li>Bunker Purchase and freight collection as per Charter Party</li>
            </ul>
          </div>
          <div className="image-content">
            <img 
              src={charteringImage} 
              alt="Chartering Services" 
              className="section-image"
            />
          </div>
        </div>

          {/* IHM */}
          <div className="feature-section reverse">
          <div className="text-content">
            <h2 className="section-subtitle">IHM</h2>
            <p className="section-description">
            Hazmat Experts trained to list and maintain Inventory of Hazardous materials onboard.
            </p>
          </div>
          <div className="image-content">
            <img 
              src={IHMImage} 
              alt="Spares and Stores Portal" 
              className="section-image"
            />
          </div>
          </div>
           {/* Spares and Stores Section */}
           <div className="feature-section ">
          <div className="text-content">
            <h2 className="section-subtitle">Spares and Stores</h2>
            <p className="section-description">
              Welcome to our portal and explore the fastest means of connecting spares and stores onboard. 
              We have technology enabled vendors to ensure supplies at reduced cost.
            </p>
          </div>
          <div className="image-content">
            <img 
              src={sparesImage} 
              alt="Spares and Stores Portal" 
              className="section-image"
            />
          </div>
          </div>
             

        {/* Repair and Maintenance Section */}
        <div className="feature-section reverse">
          <div className="text-content">
            <h2 className="section-subtitle">Repair and Maintenance</h2>
            <p className="section-description">
              Breakdown analysis of machinery during overhaul. Overhauls alone is not our forte, 
              we give a detailed analysis of the breakdown and recommend future usage and predict 
              future expenses on machinery with respect to spares.
            </p>
          </div>
          <div className="image-content">
            <img 
              src={repairImage} 
              alt="Repair and Maintenance" 
              className="section-image"
            />
          </div>
        </div>

        {/* Smart Shipping Section */}
        <div className="feature-section ">
          <div className="text-content">
            <h2 className="section-subtitle">Smart Shipping</h2>
            <p className="section-description">
              Technology driven Master Mariners and Chief Engineers who have a vision to steer 
              shipping into the digital era with cost effective solutions.
            </p>
            <div className="company-signature">
              <strong>Enoch Shipping Solutions Pvt. Ltd</strong>
            </div>
          </div>
          <div className="image-content">
            <img 
              src={smartShippingImage} 
              alt="Smart Shipping" 
              className="section-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;