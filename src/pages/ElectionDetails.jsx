import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import electionStates from "../data/electionStates";
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
  const [electionState, setElectionState] = useState(-1)

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


  useEffect(async () => {
    try {
      if (user) {
        if(election?.appearedVoters.includes(user.uniqueVoterId))
          setElectionState(4) // done
        else if(voter?.signedElections?.includes(electionId))
          setElectionState(3) // vote
        else if(election?.approvedVoters?.includes(user.uniqueVoterId))
          setElectionState(2) // sign wallet
        else if(election?.appliedVoters?.includes(user.uniqueVoterId))
          setElectionState(1) // wait for approval
        else
          setElectionState(0) // apply
      }
    }
    catch (err) {
      console.log(err)
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
          {electionState===0 &&
            <a href={`${election.registrationLink}`} className="btn btn-primary">
              Apply
            </a>
          }

          {electionState===1 &&
            <button disabled={true} className="btn btn-primary">
              Wait for approval
            </button>
          }

          {electionState===2 &&
            <a href='#' className="btn btn-primary">
              Sign Wallet
            </a>
          }

          {electionState===3 &&
            <a href={`/elections/${electionId}/vote`} className="btn btn-primary">
              VOTE
            </a>
          }

          {electionState===4 &&
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
