import axios from "axios";
import { BASE_URL } from "../constants";

export const login = async (user) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`${BASE_URL}/users/login`, user, config);

    // storing only the token in localstorage
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// A util function to populate user details, by making an API call
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

    return { ...data, error: false };
  } catch (err) {
    console.log(err.response);

    return { ...err, error: true };
  }
};

export const signup = async (user) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`${BASE_URL}/users`, user, config);

    // storing only the token in localstorage
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserVerified = async (user) => {
  const token = localStorage.getItem("token");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.put(`${BASE_URL}/users/verify`, user, config);

    // storing only the token in localstorage
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updatePasword = async (emailAndPassword) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      `${BASE_URL}/users/profile`,
      emailAndPassword,
      config
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
