import { Button } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      Navbar Component
      <Button variant='solid' backgroundColor='primary' size='sm'>
        Testing
      </Button>
    </div>
  );
};

export default Navbar;
