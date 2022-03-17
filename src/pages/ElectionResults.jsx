import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getElectionDetails } from "../services/electionActions";

const ElectionResults = () => {
  const [election, setElection] = useState({});
  const location = useLocation();

  let electionId = location.pathname.split("/")[2];

  useEffect(() => {
    (async () => {
      const res = await getElectionDetails(electionId);

      if (res.error) return;

      setElection(res);
    })();
  }, []);

  console.log(election);

  let hasBeenDeployed = election?.deploymentAddress;
  let hasStarted = new Date(election?.openTimestamp) <= new Date();
  let hasEnded = new Date(election?.closeTimestamp) < new Date();

  // console.log(hasStarted, hasEnded);

  if (!hasBeenDeployed || !hasStarted) {
    return (
      <div>
        <h2>Election Result Page</h2>
        Election hasn't started yet. Please check after sometime.
      </div>
    );
  } else if (!hasEnded) {
    return (
      <div>
        <h2>Election Result Page</h2>
        Election is in progress. Please check after sometime.
      </div>
    );
  }

  return <div>Election Result Page</div>;
};

export default ElectionResults;
