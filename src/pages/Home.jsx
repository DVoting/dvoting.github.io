import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import web3 from "../utils/web3";
import { NavBar } from "../components";
import { Loader } from "../containers";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuth, setIsAuth, loading,setLoading } = useContext(GlobalContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    setIsAuth("token" in localStorage);
    if (isAuth) {
      navigate("/dashboard", { replace: true });
    }
    setLoading(false);
  }, [isAuth]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>Voting App - Client...</div>
        </>
      )}
    </>
  );
};

export default Home;
