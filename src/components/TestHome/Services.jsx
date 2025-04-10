import React from 'react';
import './Services.scss';
import { 
  FaShip, 
  FaChartLine, 
  FaRobot, 
  FaFlask, 
  FaBoxes, 
  FaTools 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Vessel Inspection",
      description: "Condition assessment from bow to stern",
      icon: <FaShip className="service-icon" />
    },
    {
      title: "Chartering",
      description: "Ensuring cost saving in all aspects",
      icon: <FaChartLine className="service-icon" />
    },
    {
      title: "Smart Shipping",
      description: "Towards a Digital Shipping Era",
      icon: <FaRobot className="service-icon" />
    },
    {
      title: "IHM",
      description: "Inventory of Hazardous Materials Onboard",
      icon: <FaFlask className="service-icon" />
    },
    {
      title: "Spares and Stores",
      description: "Tech Aided Swift Supply",
      icon: <FaBoxes className="service-icon" />
    },
    {
      title: "Repair and Maintenance",
      description: "Breakdown Analysis of Machinery During Overhaul",
      icon: <FaTools className="service-icon" />
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h1 className="services__title">Services</h1>
        
        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card__icon">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;