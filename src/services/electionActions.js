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
  };

  try {
    const { data } = await axios.post(`${BASE_URL}/elections`, body, config);

    return data;
  } catch (err) {
    throw err;
  }
};

export async function getElections(query) {
  try {
    const { data } = await axios.get(`${BASE_URL}/elections?${query}`);
    return data.docs;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function updateElection(id, details) {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.put(
      `${BASE_URL}/elections/${id}`,
      details,
      config
    );

    return data;
  } catch (e) {
    throw e;
  }
}

export async function getElectionDetails(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/elections/${id}`);

    const {
      closeTimestamp,
      openTimestamp,
      organiser,
      title,
      registrationLink,
      deploymentAddress,
    } = data;

    const details = {
      closeTimestamp,
      openTimestamp,
      organiser,
      title,
      registrationLink,
      deploymentAddress,
    };

    return details;
  } catch (e) {
    return { ...e, error: true };
  }
}

export async function getCandidates(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/elections/${id}/candidates`);

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function addCandidate(id, details) {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}/elections/${id}/candidates`,
      details,
      config
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function deleteCandidate(electionId, candidateId) {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.delete(
      `${BASE_URL}/elections/${electionId}/candidates/${candidateId}`,
      config
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function deployElection(electionId) {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.patch(
      `${BASE_URL}/elections/${electionId}/deploy`,
      {},
      config
    );

    return data;
  } catch (err) {
    throw err;
  }
}
