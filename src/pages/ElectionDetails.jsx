import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { getElectionDetails } from "../services/electionActions";
import { approveElection, getVoterById } from "../services/voterServices";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Message from "../utils/Message";
import web3 from "../utils/web3";
import { signMessage } from "../utils/wallet";

const ElectionDetails = () => {
  const { isAuth, loading, setLoading, user } = useContext(GlobalContext);
  const { walletId, setWalletId } = useContext(GlobalContext);
  const location = useLocation();

  let electionId = location.pathname.split("/")[2];
  const [redirect, setRedirect] = React.useState(null)
  const [election, setElection] = useState({})
  const [voter, setVoter] = useState(null)
  const [electionState, setElectionState] = useState(0)

  let currentTime = new Date().toISOString();

  React.useEffect(async () => {
    setLoading(true);

    try {
      setElection(await getElectionDetails(electionId));
      if (user)
        setVoter(await getVoterById(user.uniqueVoterId));
    }
    catch (err) {
      console.log(err)
    }
    setLoading(false);
  }, [user])


  React.useEffect(() => {
    if (user) {
      // already voted
      if (election?.appearedVoters?.includes(user.uniqueVoterId))
        setElectionState(5)

      // vote
      else if (voter?.signedElections?.includes(electionId))
        setElectionState(4)

      // sign wallet
      else if (election?.approvedVoters?.includes(user.uniqueVoterId))
        setElectionState(3)

      // wait for approval
      else if (election?.appliedVoters?.includes(user.uniqueVoterId))
        setElectionState(2)

      // apply
      else
        setElectionState(1)
    }
  }, [user, voter, election])

  const signElection = async () => {
    if (!walletId) {
      toast.error(Message('No wallet connected', null), {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        toastId: 'walletError',
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      return
    }

    let message = JSON.stringify({
      voter: voter._id,
      election: electionId
    })

    let signature = await signMessage(message)
    if (!signature) return

    let data = {
      address: web3.utils.toChecksumAddress(walletId),
      signature: signature
    }

    const res = await approveElection(electionId, data)
    if (res.error) {
      console.log(res)
      toast.error(Message(`error ${res.status}`, `${res.data || res.statusText}`), {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return
    }

    toast.success(Message('Signed for Election', `${election.title}`), {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setRedirect('/dashboard')
  }

  if (redirect) return <Navigate replace to={redirect} />
  if (loading) return <Loader />

  return (
    <React.Fragment>
      <h1>Election Details</h1>
      Election Title: {election.title}
      <br />
      OpenTimeStamp: {new Date(election.openTimestamp).toString().split('G')[0]}
      <br />
      Election CloseTimeStamp: {new Date(election.closeTimestamp).toString().split('G')[0]}
      <div>
        {isAuth &&
          <React.Fragment>
            {electionState === 1 &&
              <a href={`${election.registrationLink}`} className="btn btn-primary">
                Apply
              </a>
            }

            {electionState === 2 &&
              <button disabled={true} className="btn btn-primary">
                Wait for approval
              </button>
            }

            {electionState === 3 &&
              <Button variant='primary' onClick={async () => { await signElection() }}>
                Sign Wallet
              </Button>
            }

            {electionState === 4 &&
              <>
                <Button href={`/elections/${electionId}/vote`} className="btn btn-primary" disabled={
                  (currentTime > election.openTimestamp && currentTime > election.closeTimestamp) ||
                  (currentTime < election.openTimestamp && currentTime < election.closeTimestamp)
                }>
                  Vote
                </Button>
                {(currentTime > election.openTimestamp && currentTime > election.closeTimestamp) && <div style={{ color: 'red' }}>Election has finished</div>}
                {(currentTime < election.openTimestamp && currentTime < election.closeTimestamp) && <div style={{ color: 'red' }}>Election has not started yet</div>}
              </>
            }

            {electionState === 5 &&
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
