import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
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
