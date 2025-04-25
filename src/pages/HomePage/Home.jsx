import React from "react";
import './Home.scss';
import Header from "../../components/Header/Header";
import NavBar from "../../components/TopNavBar/NavBar";
import About from "../../components/TestHome/About";
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
      <About/>
      <Services/>
      <Features/>
      <Footer/>
    </div>
  );
};

export default Home;
