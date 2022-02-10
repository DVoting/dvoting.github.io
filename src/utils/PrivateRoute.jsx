import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { fetchUserDetails } from "../services/userActions";

const PrivateRoute = () => {
  const { user,setUser, setIsAuth } = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  if(!user){
    useEffect(() => {
      (async () => {
        if (token) {
          const data = await fetchUserDetails();
          setUser(data);
          setIsAuth(true);
        }
      })();
    }, [token]);
  }
  console.log("via private route");

  return token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
