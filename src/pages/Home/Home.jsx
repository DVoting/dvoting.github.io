import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      Voting App - Client...
    </div>
  );
};

export default Home;
