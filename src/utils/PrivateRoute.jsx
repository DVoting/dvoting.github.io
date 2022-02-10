import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { fetchUserDetails } from "../services/userActions";

const PrivateRoute = () => {
  const { setUser, setIsAuth } = useContext(UserContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      if (token) {
        const data = await fetchUserDetails();

        setUser(data);
        setIsAuth(true);
      }
    })();
  }, [token]);

  console.log("via private route");

  return token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
