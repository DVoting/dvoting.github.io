import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FormContainer, Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { getElectionDetails } from "../services/electionActions";

const ElectionDetails = () => {
  const { loading, setLoading } = useContext(GlobalContext);
  const location = useLocation();

  let electionId = location.pathname.split("/")[2];
  const [election, setElection] = useState({})

  useEffect(async () => {
    setLoading(true);
    try {
      setElection(await getElectionDetails(electionId));
    }
    catch (err) {
      console.log(err)
    }
    setLoading(false);
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Election Details</h1>
          Election Title: {election.title}
          <br />
          OpenTimeStamp: {election.openTimestamp}
          <br />
          Election CloseTimeStamp: {election.closeTimestamp}
          <br />
          <a className="btn btn-primary" href={election.registrationLink}>Apply</a>
          <br />
        </div>
      )}
    </>
  );
};

export default ElectionDetails;
