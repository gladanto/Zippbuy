import React from 'react';
import './Features.scss';
import VessaleImage from '/assets/_1.png';
import charteringImage from '/assets/Hydroblasting.jpeg.jpg';
import repairImage from '/assets/_4.png';
import IHMImage from '/assets/rope-access.jpg'
import smartShippingImage from '/assets/ship_block_fab.jpg';
import sparesImage from '/assets/_6.png';

const Features = () => {
  return (
    <section className="features">
      <div className="container">

        {/* Vessel Inspection */}
        <div className="feature-section reverse">
          <div className="text-content">
            <h2 className="section-subtitle">Vessel Inspection</h2>
            <p className="section-description">
              Vessel Inspection Includes assessment of cargo gear, Navigation equipment, Certificate status,
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
            <h1 className="section-title">Hydro-Blasting</h1>
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
              ZippBay offers advanced rope access techniques, to reach
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
              Ship's spares and stores are essential for the smooth running of vessel.
              To provide such spares and stores on time without any hiccup is our mission.
              We leave no stone unturned to find the simplest cost effective method of delivery basis vessel trading route.
              For this we have experienced professionals who have been doing this for the past 15 years.
              We not only supply the spare and store but also work towards quick deliveries when port changes happen at the last minute.
              Partner with us for smooth delivery at all times.
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
            <h2 className="section-subtitle">Fitting,Welding and Fabrication</h2>
            <p className="section-description">
              Ship repair cannot be complete without a competent team of Fitters. We have a host
              of Certified manpower to carry out any type of fitting, welding and Fabrication work.
              Our manpower are not only certified but also hold documents to sail onboard to carry out
              repairs while sailing along with the ship.
            </p>

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