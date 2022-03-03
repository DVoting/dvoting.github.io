import React, { createContext, useState } from "react";

export const GlobalContext = createContext({
  user: null,
  walletId: null,
  isAuth: false,
  loading: false
});

export const GlobalProvider = (props) => {
  const [walletId, setWalletId] = useState("");
  const [chainId, setChainId] = useState(0x0)
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        user, setUser,
        walletId, setWalletId,
        isAuth, setIsAuth,
        loading, setLoading,
        chainId, setChainId
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

/*
{
  user:{
    _id, name, email, token
  },
  setUser,
  walletId:"",
  setWalletId
}

*/
