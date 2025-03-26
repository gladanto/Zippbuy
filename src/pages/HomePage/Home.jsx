import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/TopNavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Welcome from "./Welcome";
import Content from "./Content";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <Welcome />
      <Content />
      <Footer/>
    </div>
  );
};

export default Home;
