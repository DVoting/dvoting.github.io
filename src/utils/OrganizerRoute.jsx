import React from "react";
import { Outlet } from "react-router-dom";

const OrganizerRoute = () => {
  console.log("Organizer route");

  // Organizer checks to be added
  return <Outlet />;
};

export default OrganizerRoute;
