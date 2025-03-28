import React from "react";
import './Home.scss';
import Header from "../../components/Header/Header";
import NavBar from "../../components/TopNavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Welcome from "./Welcome";
import Content from "./Content";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <NavBar />
      <Welcome />
      <Content />
      <Footer/>
    </div>
  );
};

export default Home;
