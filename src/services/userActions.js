import axios from "axios";
import { BASE_URL } from "../constants";

export const login = async (user) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`${BASE_URL}/users/login`, user, config);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    localStorage.setItem(
      "error",
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
