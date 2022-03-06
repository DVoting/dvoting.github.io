import axios from "axios";
import { BASE_URL } from "../constants";

// A util function to populate user details, by making an API call
export const fetchMyOrganizations = async (user) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const id = user._id;

  try {
    const { data } = await axios.get(
      `${BASE_URL}/organisers?user=${id}`,
      config
    );

    return { ...data, error: false };
  } catch (err) {
    console.log(err);

    return { ...err, error: true };
  }
};

export const deleteOrganization = async (orgId) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.delete(
      `${BASE_URL}/organisers/${orgId}`,
      config
    );

    return { ...data, error: false };
  } catch (error) {
    console.log(error);
    return { ...error, error: true };
  }
};

export async function createOrganisation(payload) {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${BASE_URL}/organisers`,
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
