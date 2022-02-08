import React, { createContext, useState } from "react";

export const Web3Context = createContext();

export const Web3Provider = (props) => {
  const [walletId, setWalletId] = useState("");

  return (
    <Web3Context.Provider value={{ walletId, setWalletId }}>
      {props.children}
    </Web3Context.Provider>
  );
};
