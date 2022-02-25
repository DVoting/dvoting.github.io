import React from "react";
import { Card, CardGroup } from "react-bootstrap";

import { AiFillLock } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

import styles from "./Hero.module.css";

const features = [
  {
    Icon: AiFillLock,
    title: "Safe and Secure",
    description:
      "The casted votes are safely and securely stored in the blockchain database, which mitigates any form of manipulation / tampering like the deletion of legitimate votes or the addition of illegitimate votes.",
  },
  {
    Icon: BsFillLightningChargeFill,
    title: "Accuracy with Transparency",
    description:
      "The casting of votes and tallying of the votes would be a lot quicker while also providing better transparency and accuracy.",
  },
  {
    Icon: MdOutlinePrivacyTip,
    title: "Privacy OP :)",
    description:
      "We do not link your Wallet address and your profile identity, thereby keeping your vote anonymous. Also, you can verify that your vote has been recorded or not using the Transaction Id.",
  },
];

const Hero2 = () => {
  return (
    <div className={styles.root2}>
      <h1 className='fw-bold'>Notable Features</h1>

      <CardGroup>
        {features?.map((item, idx) => {
          const { Icon, title, description } = item;

          return (
            <Card
              key={idx}
              className='rounded-3 d-flex flex-direction-col justify-content-center align-items-center px-3 py-4 mx-4 my-5'
            >
              <Icon size={50} className='m-3' />

              <Card.Body className='px-4'>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
};

export default Hero2;
