import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      User Dashboard
      {JSON.stringify(user)}
    </div>
  );
};

export default Dashboard;
