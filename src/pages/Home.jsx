import React, { useContext, useEffect } from "react";
import { Web3Context } from "../context/Web3Context";
import { getWeb3 } from "../utils/web3";

const Home = () => {
  const { walletId, setWalletId } = useContext(Web3Context);
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
    <div>
      Voting App - Client...
    </div>
  );
};

export default Home;
