import React from "react";
import ProductImage from "../../components/Product/ProductImage";
import "./Productpage.css";
import ProductDescription from "../../components/Product/Productdescription";
import NavBar from "../../components/TopNavBar/NavBar";
import Productsubimg from "../../components/Product/Productsubimg";
import ProductSpecifications from "../../components/Product/ProductSpecifications";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



const productData = {
  title: " BITZER 2T.2Y COMPRESSORS",
  description: "The BITZER 2T.2Y is a two-cylinder, semi-hermetic reciprocating compressor designed for reliable and efficient operation in refrigeration and air conditioning applications.",
  price: 99.99,
  image: "", 
  rating: 4.5,
  reviews: 1200,
  features: [
    "Make: Bitzer",
    "Model: 2T.2Y",
    "Displacement: 9.4-23.7 m3/h",
    "Sr No.: 1674602791,1674602792",
    "Speed: 700-1750 RPM",
    "LP/HP max.: 19/25 Bar"
  ],
};

const Productpage = () => {
  return (
    <>
     {<Header/>}
    { <NavBar/> }
  
   
    
   
    <div className="product-page">
      
      <div className="product-des">
      
        { <ProductDescription {...productData} /> }
       
      </div>
    
    </div>
    <Footer/>
    </>
  );
};


export default Productpage;
