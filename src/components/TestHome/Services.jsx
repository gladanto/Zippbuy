
import React from 'react';
import './Services.scss';
import sideImage from '/assets/s7.png';
import s1 from '/assets/s1.png';
import s2 from '/assets/s2.png';
import s3 from '/assets/s3.png';
import s4 from '/assets/s4.png';
import s5 from '/assets/s5.png';
import s6 from '/assets/s6.png';

const Services = () => {
  const services = [
    {
      title: "Vessel Inspection",
      description: "Condition assessment from bow to stern",
      image: s1
    },
    {
      title: "HydroBlasting",
      description: "Surface preparation as per requirement",
      image: s2
    },
    {
      title: "Rope Access",
      description: " TRATA approved technicians",
      image: s3
    },
    {
      title: "Spares and Stores",
      description: "Tech Aided Swift and reliable Supply",
      image: s4
    },
    {
      title: "Fiting,Welding and Fabrication",
      description: " Experiance and Certified manpower",
      image: s5
    },
    {
      title: "Repair and Maintenance",
      description: "Breakdown Analysis of Machinery During Overhaul",
      image: s6
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <h1 className="services__title">Services</h1>
        </div>

        <div className="services__content">
          <div className="services__left">
            <img src={sideImage} alt="Decorative element" />
          </div>

          <div className="services__right">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
