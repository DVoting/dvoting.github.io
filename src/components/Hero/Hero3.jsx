import React from "react";
import { Card, CardGroup } from "react-bootstrap";

import { FaReact, FaNode } from "react-icons/fa";
import { SiSolidity, SiWeb3Dotjs, SiVisualstudio } from "react-icons/si";

// import Ganache from "../../assets/ganache.png";
// import Truffle from "../../assets/truffle.png";

import styles from "./Hero.module.css";

const techStack = [
  {
    Icon: FaReact,
    title: "React",
  },
  {
    Icon: FaNode,
    title: "Node.js",
  },
  {
    Icon: SiSolidity,
    title: "Solidity",
  },
  {
    Icon: SiWeb3Dotjs,
    title: "Web3",
  },
  {
    Icon: SiVisualstudio,
    title: "VS Code",
  },
];

const Hero3 = () => {
  return (
    <div className={styles.root3}>
      <h2 className='fw-bold'>Tech Stack</h2>

      <CardGroup>
        {techStack?.map((item, idx) => {
          const { Icon, title } = item;

          return (
            <Card
              key={idx}
              className='rounded-pill d-flex flex-direction-col justify-content-center align-items-center mx-4 my-5 shadow-sm'
            >
              {/* <img src={Truffle} size={50} /> */}
              <Icon size={50} className='m-3' />

              <Card.Body className=''>
                <Card.Title className='fw-bold'>{title}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
};

export default Hero3;
