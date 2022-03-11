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
  const [state, setState] = useState(electionStates[0].value)

  useEffect(async () => {
    setLoading(true);
    try {
      console.log('user', user)
      setElection(await getElectionDetails(electionId));
      if (user)
        setVoter(await getVoterById(user?.uniqueVoterId));

      //default -> Apply

      if (user) {
        if (!election?.appliedVoters?.includes(user.uniqueVoterId))
          setState('2') //Sign Wallet

        if (voter?.signedElections?.includes(electionId) && !election?.appearedVoters?.includes(user.uniqueVoterId))
          setState('3') //Vote

        if (election?.appearedVoters(user.uniqueVoterId))
          setState('4') //Already Voted
      }

    }
    catch (err) {
      console.log(err)
    }
    setLoading(false);
  }, [user])

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
          {
            isAuth &&
            <>
              {(() => {

                switch (state) {
                  case '1':
                    return (<a href={`${election.registrationLink}`} className="btn btn-primary">
                      Apply
                    </a>)
                  case '2':
                    return (<a href='#' className="btn btn-primary">
                      Sign Wallet
                    </a>)
                  case '3':
                    return (<a href={`/elections/${electionId}/vote`} className="btn btn-primary">
                      VOTE
                    </a>)
                  case '4':
                    return (<a className="btn btn-primary" disabled>
                      Already Voted!
                    </a>)
                }
              })()}

            </>
          }
          <br />
        </div>
      )
      }
    </>
  );
};

export default ElectionDetails;
