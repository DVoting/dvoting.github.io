import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { getWeb3 } from "../utils/web3";
import { NavBar } from "../components";
import { Loader } from "../containers";

const Home = () => {
  const { walletId, setWalletId, loading } = useContext(GlobalContext);
  useEffect(() => {
    (async () => {
      const web3 = getWeb3();

      if (web3) {
        let acc = await web3.eth.getAccounts();

        setWalletId(acc[0]);
      }
    })();
  }, [walletId]);

  return (
    <>
      {loading ? <Loader /> :
        <>
          <NavBar />
          <div>
            Voting App - Client...
          </div>
        </>
      }
    </>
  );
};

export default Home;
