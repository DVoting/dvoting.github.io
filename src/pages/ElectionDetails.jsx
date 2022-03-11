import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { getElectionDetails } from "../services/electionActions";
import { getVoterById } from "../services/voterServices";

const ElectionDetails = () => {
  const { isAuth, loading, setLoading, user } = useContext(GlobalContext);
  const location = useLocation();

  const signWallet = () => {
    //TODO
  }

  let electionId = location.pathname.split("/")[2];
  const [election, setElection] = useState({})
  const [voter, setVoter] = useState('')
  const [electionState, setElectionState] = useState(0)

  React.useEffect(async ()=>{
    setLoading(true);

    try{
      setElection(await getElectionDetails(electionId));
      if(user)
        setVoter(await getVoterById(user.uniqueVoterId));
    }
    catch (err) {
      console.log(err)
    }
    setLoading(false);
  },[user])


  useEffect(()=>{
    if (user) {
      // already voted
      if(election?.appearedVoters.includes(user.uniqueVoterId))
        setElectionState(5)

      // vote
      else if(voter?.signedElections?.includes(electionId))
        setElectionState(4)

      // sign wallet
      else if(election?.approvedVoters?.includes(user.uniqueVoterId))
        setElectionState(3)

      // wait for approval
      else if(election?.appliedVoters?.includes(user.uniqueVoterId))
        setElectionState(2)

      // apply
      else
        setElectionState(1)
    }
  }, [user, voter, election])

  if(loading) return <Loader/>

  return (
    <React.Fragment>
      <h1>Election Details</h1>
      Election Title: {election.title}
      <br />
      OpenTimeStamp: {election.openTimestamp}
      <br />
      Election CloseTimeStamp: {election.closeTimestamp}
      <div>
      {isAuth &&
        <React.Fragment>
          {electionState===1 &&
            <a href={`${election.registrationLink}`} className="btn btn-primary">
              Apply
            </a>
          }

          {electionState===2 &&
            <button disabled={true} className="btn btn-primary">
              Wait for approval
            </button>
          }

          {electionState===3 &&
            <a href='#' className="btn btn-primary">
              Sign Wallet
            </a>
          }

          {electionState===4 &&
            <a href={`/elections/${electionId}/vote`} className="btn btn-primary">
              VOTE
            </a>
          }

          {electionState===5 &&
            <button className="btn btn-primary" disabled={true}>
              Already Voted!
            </button>
          }
        </React.Fragment>
      }
      </div>
    </React.Fragment>
  );
};

export default ElectionDetails;
