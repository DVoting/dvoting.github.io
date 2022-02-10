import axios from "axios";
import { useContext } from "react";
import { BASE_URL } from "../constants";
import { UserContext } from "../context/UserContext";

export const login = async (user) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`${BASE_URL}/users/login`, user, config);

    console.log("Res", res);
    localStorage.setItem("token", res.data.token);
    return res.data;
    // console.log(res);
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response);
    console.log("now returning");
    throw error;
    // localStorage.setItem(
    //   "error",
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message
    // );
  }
};

export const fetchUserDetails = async () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(`${BASE_URL}/users/profile`, config);

    return data;
  } catch (err) {
    console.log(err);

    return err;
  }
};
