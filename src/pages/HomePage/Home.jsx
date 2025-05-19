import React from "react";
import './Home.scss';
import Header from "../../components/Header/Header";
import NavBar from "../../components/TopNavBar/NavBar";
import AboutUs from "../../components/TestHome/AboutUs"
import Services from "../../components/TestHome/Services";
import Features from "../../components/TestHome/Features";
import Footer from "../../components/TestHome/Footer";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <NavBar />
      <Welcome />
      <AboutUs />
      <Services />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
