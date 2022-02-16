import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import web3 from "../utils/web3";
import { NavBar } from "../components";
import { Loader } from "../containers";

const Home = () => {
  const { loading } = useContext(GlobalContext);

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
