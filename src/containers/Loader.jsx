import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "4vh",
        height: "4vh",
        margin: "25vh auto",
        display: "block",
        color: "black",
      }}
    ></Spinner>
  );
};

export default Loader;
