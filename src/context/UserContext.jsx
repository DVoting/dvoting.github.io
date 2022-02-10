import React, { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  walletId: null,
  isAuth: false,
});

export const UserProvider = (props) => {
  const [walletId, setWalletId] = useState("");
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, walletId, setWalletId, isAuth, setIsAuth }}
    >
      {props.children}
    </UserContext.Provider>
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
