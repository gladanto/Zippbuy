
import React from 'react';
import './Services.scss';
import sideImage from '../../../public/assets/s7.png'; 
import s1 from '../../../public/assets/s1.png';
import s2 from '../../../public/assets/s2.png';
import s3 from '../../../public/assets/s3.png';
import s4 from '../../../public/assets/s4.png';
import s5 from '../../../public/assets/s5.png';
import s6 from '../../../public/assets/s6.png';

const Services = () => {
  const services = [
    {
      title: "Vessel Inspection",
      description: "Condition assessment from bow to stern",
      image: s1
    },
    {
      title: "IHM",
      description: "Inventory of Hazardous Materials Onboard",
      image: s2
    },
    {
      title: "Chartering",
      description: "Ensuring cost saving in all aspects",
      image: s3
    },
    {
      title: "Spares and Stores",
      description: "Tech Aided Swift Supply",
      image: s4
    },
    {
      title: "Smart Shipping",
      description: "Towards a Digital Shipping Era",
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
