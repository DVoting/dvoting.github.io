import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { fetchUserDetails } from "../services/userActions";

const PrivateRoute = () => {
  const { user, setUser, setIsAuth, setLoading } = useContext(GlobalContext);
  const token = localStorage.getItem("token");

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      if (token && !user) {
        const data = await fetchUserDetails();

        if (!data.error) {
          setUser(data);
          setIsAuth(true);
        } else {
          setIsAuth(false);
          setLoading(false);
          setRedirect(true);
        }
      }
    })();
  }, [token]);

  if (redirect) {
    localStorage.removeItem("token");
    return <Navigate to='/' />;
  }

  console.log("via private route");

  return token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
