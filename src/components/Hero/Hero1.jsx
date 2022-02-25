import React from "react";
import { Button } from "react-bootstrap";
import VoteImg from "../../assets/vote.png";
import styles from "./Hero.module.css";

const Hero1 = () => {
  return (
    <div
      className={`${styles.root1} d-flex justify-content-evenly align-items-center py-5`}
      style={{ minHeight: "85vh" }}
    >
      <div className='' style={{ maxWidth: "45%" }}>
        <div className='display-4 fw-bold'>
          Empowering India
          <p className='text-info'>Through Blockchain</p>
        </div>
        <div className='py-5'>
          <p>
            A De-centralized Voting App which addresses the issue of maintaining
            anonymity of voters on a public blockchain network, achieving lower
            latency and affordability in the existing models.
          </p>
          <Button variant='outline-primary' className='px-4 py-2' href='/login'>
            Login
          </Button>
          <Button variant='info' className='px-4 py-2 mx-5' href='/signup'>
            Get Started
          </Button>
        </div>
      </div>
      <div className='' style={{ maxWidth: "30%" }}>
        <img src={VoteImg} style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default Hero1;
