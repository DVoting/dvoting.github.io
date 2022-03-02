import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrganizationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let orgId = location.pathname.split("/")[2];

  console.log(orgId);

  return (
    <div>
      <h2>Organization Details</h2>
      Id - {orgId}
    </div>
  );
};

export default OrganizationDetails;
