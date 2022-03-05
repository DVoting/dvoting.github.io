import axios from "axios";
import { BASE_URL } from "../constants";

export async function getVoterById(_id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/voters/${_id}`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function initWallet(payload) {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.patch(
      `${BASE_URL}/voters/wallet`,
      payload,
      config
    );
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return { ...e.response, error: true };
  }
}
