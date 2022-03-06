import React from "react";
import { useLocation } from "react-router-dom";

const ElectionResults = () => {
  const location = useLocation();

  let electionId = location.pathname.split("/")[2];

  console.log(electionId);

  return <div>Election Result Page</div>;
};

export default ElectionResults;
