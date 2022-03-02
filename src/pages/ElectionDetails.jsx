import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ElectionDetails = () => {
  const location = useLocation();

  let electionId = location.pathname.split("/")[2];

  console.log(electionId);

  return (
    <div>
      <h1>Election Details</h1>
      {electionId}
      {/* <h1>{electionId}</h1> */}
    </div>
  );
};

export default ElectionDetails;
