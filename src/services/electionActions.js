import axios from "axios";
import { BASE_URL } from "../constants";

export const createElection = async (details, organiser) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    ...details,
    organiser,
    registrationLink: "https://dvoting.github.io",
  };

  console.log(body);
  try {
    const { data } = await axios.post(`${BASE_URL}/elections`, body, config);

    return data;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export async function getElections(query) {
  try {
    const {data} = await axios.get(`${BASE_URL}/elections?${query}`);
    console.log(query, data)
    return data.docs
  } catch (e) {
    console.log(e)
    return null
  }
}