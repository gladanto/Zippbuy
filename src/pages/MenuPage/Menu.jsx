import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/TopNavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.scss";
import products from "../../data/product.json"

const Menu = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]);


  return (
    <div className="menu-container">
      <Header />
      <NavBar />

      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <p className="card-description">{product.description}</p>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
