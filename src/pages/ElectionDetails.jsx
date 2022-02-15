import React from "react";
import { useLocation } from "react-router-dom";

const ElectionDetails = () => {
  const location = useLocation();

  console.log(location);

  return <div>Election Details Page</div>;
};

export default ElectionDetails;
