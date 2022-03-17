import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getElectionDetails } from "../services/electionActions";
import Table from "react-bootstrap/Table";
import { PieChart } from "react-minimal-pie-chart";

import { transformDataForPie } from "../utils";
import ElectionContract from "../contracts/Election.js";

const getElectionResultFromContract = async (address) => {
  const election = ElectionContract(address);

  const status = await election.methods.getCurrentStatus().call();

  return status[0];
};

const ElectionResults = () => {
  const [election, setElection] = useState({});
  const [results, setResults] = useState([]);

  const location = useLocation();

  let electionId = location.pathname.split("/")[2];

  useEffect(() => {
    (async () => {
      const res = await getElectionDetails(electionId);

      if (res.error) return;

      setElection(res);
    })();
  }, []);

  let hasBeenDeployed = election?.deploymentAddress;
  let hasStarted = new Date(election?.openTimestamp) <= new Date();
  let hasEnded = new Date(election?.closeTimestamp) < new Date();

  useEffect(() => {
    (async () => {
      if (hasEnded && election?.deploymentAddress) {
        const res = await getElectionResultFromContract(
          election.deploymentAddress
        );

        setResults(transformDataForPie(res));
        console.log(res);
      }
    })();
  }, [election]);

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

  return (
    <div>
      <h2>Election Result Page</h2>
      <p>Election Id: {electionId}</p>
      <p>Election Name: {election.title}</p>
      <div className='d-flex flex-column align-items-center'>
        <div className='py-5' style={{ maxWidth: "60%" }}>
          <PieChart
            data={results}
            label={(props) => {
              const { dataEntry } = props;
              console.log(props);

              // return `
              //     ${dataEntry.title}
              //     ${Math.round(dataEntry.percentage)}%
              //   `;
              return `${Math.round(dataEntry.percentage)} %`;
            }}
            labelStyle={(index) => ({
              fontSize: "5px",
              textAlign: "center",
              cursor: "pointer",
            })}
            startAngle={-90}
            // segmentsShift={(index) => (index === selected ? 2 : 0)}
            // onClick={(event, index) => {
            //   setSelected(index === selected ? undefined : index);
            // }}
            animate
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Candidate Name</th>
              <th>Votes Received</th>
            </tr>
          </thead>
          <tbody>
            {results?.map((item) => {
              const { id, title, value } = item;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ElectionResults;
