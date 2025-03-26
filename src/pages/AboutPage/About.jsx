import React from "react";
import "./About.scss";
import ReusableButton from "../../components/ReusableButton/ReusableButton";

const products = [
  {
    name: "Qualstra",
    logo: "/assets/p.q.png",
    website: "https://qualstra.enochshipping.com/",
  },
  {
    name: "Mexa",
    logo: "/assets/p.m.png",
    website: "https://mexain.com/",
  },
  {
    name: "ZippBuy",
    logo: "/assets/p.z.png",
    website: "https://zippbuy.enochshipping.com/",
  },
];

const About = () => {
  return (
    <div className="container py-5 text-center">
      {/* Company Logo */}
      <div className="company-logo mb-3">
        <img
          src="/assets/enoch.png"
          alt="Enoch Shipping Solutions"
          className="img-fluid product-logo"
        />
      </div>

      {/* Company Info Section */}
      <section className="mb-5">
        <h1 className="fw-bold">Welcome to Enoch Shipping Solutions Pvt Ltd.</h1>
        <p className="fs-5 text-muted">Embark into a Digital Shipping World.</p>
        <ReusableButton
          className="mt-3"
          label="Visit Our Website"
          onClick={() => window.open("https://www.enochshipping.com/", "_blank")}
        />
      </section>

      {/* Products Section */}
      <section>
        <h2 className="fw-bold">Our Products</h2>
        <div className="row mt-4">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm p-3 border-0 text-center product-card">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="img-fluid product-logo"
                />
                <h5 className="mt-3 fw-bold">{product.name}</h5>
                <ReusableButton
                  className="mt-2"
                  label="Visit Product Website"
                  onClick={() => window.open(product.website, "_blank")}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
