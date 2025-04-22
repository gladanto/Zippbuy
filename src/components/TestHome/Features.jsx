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
        {/*HydroBlasting */}
        <div className="feature-section">
          <div className="text-content">
            <h1 className="section-title">HydroBlasting</h1>
            <p className="section-description">
            Zippbay provides comprehensive hydro-blasting solutions
            to suit client requirement. Rust removal, Paint layer
            removal, surface preparation to bare metal- we have it
            all with various machines to bring the desired surface on
            hull or deck.
            Low Pressure machines for onboard maintenance,
            High Pressure machines with operators for Offshore units,
            dry docks and ship repair units. We have your surface
            prepared to last long
            </p>
           
          </div>
          <div className="image-content">
            <img 
              src={charteringImage} 
              alt="Chartering Services" 
              className="section-image"
            />
          </div>
        </div>

          {/* Rope Access */}
          <div className="feature-section reverse">
          <div className="text-content">
            <h2 className="section-subtitle">Rope Access</h2>
            <p className="section-description">
            Akrivis offers advanced rope access techniques, to reach
            even the most challenging areas of your vessel,
            eliminating the need for expensive scaffolding or dry
            docking. From inspections to repairs, our team delivers
            swift and reliable solutions, minimizing downtime and
            maximizing your vessel's operational efficiency.
            Our highly trained and certified rope access technicians
            can access confined spaces, elevated surfaces, and
            other chalylenging locations with precision and
            proficiency
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
              We have technology enabled vendors to ensure supplies at reduced cost.Zippbay offers advanced rope access techniques, to reach
              even the most challenging areas of your vessel,
              eliminating the need for expensive scaffolding or dry
              docking. From inspections to repairs, our team delivers
              swift and reliable solutions, minimizing downtime and
              maximizing your vessel's operational efficiency.
              Our highly trained and certified rope access technicians
              can access confined spaces, elevated surfaces, and
              other challenging locations with precision and
              proficiency.We employ state-of-the-art
              inspection equipment and methodologies to ensure
              accurate and reliable data collection. 
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

        {/* Ship Block Fabrication */}
        <div className="feature-section ">
          <div className="text-content">
            <h2 className="section-subtitle">Ship Block Fabrication</h2>
            <p className="section-description">
            Zippbay delivers quality and effective solutions for Dry
            Docks and ocean-going vessels, Zippbay has a workshop
            area of 8,000 square feet which offers a wide range of
            maritime services.
            Zippbay has a training facility which constantly
            endeavours to provide quality labour for trouble free
            and smooth flow of work. The technicians and skilled
            labour are trainied for a global market and will easily fit
            into any enterprise with ease
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