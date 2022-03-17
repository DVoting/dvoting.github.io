import React, { useContext, useEffect, useState } from "react";
import { Card, Col, ListGroup, Row, Button } from "react-bootstrap";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { getCandidates, getElectionDetails } from "../services/electionActions";
import ElectionContract from "../contracts/Election";
import {toast} from "react-toastify";
import Message from "../utils/Message";
import {getNetworkName, deployedChain} from "../utils/networks";

const ElectionVoting = () => {
    let electionId = location.pathname.split("/")[2];
    const { loading, setLoading } = useContext(GlobalContext);
    const { walletId, chainId } = useContext(GlobalContext);

    const [election, setElection] = useState({})
    const [electionContract, setElectionContract] = useState(null)
    const [candidates, setCandidates] = useState([])
    const [selectedCandidate, setSelectedCandidate] = useState(null)
    const [currentTime, setCurrentTime] = useState(new Date().toString())

    const handleVote = async (e) => {
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
        if (chainId !== deployedChain) {
            toast.error(Message('Invalid chain', `switch to ${getNetworkName(deployedChain)}`), {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000,
                toastId: 'chainError',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
            return
        }

        console.log(selectedCandidate)
        console.log(election.deploymentAddress)

        try {
            let candidates = await electionContract.methods.getCandidates().call()
            console.log(candidates)

            let candidateIdx = null
            candidates.forEach(candidate=>{
                if(candidate['name'] === selectedCandidate.name)
                    candidateIdx = parseInt(candidate['id'])
            })
            console.log(candidateIdx)

            const { transactionHash } = await electionContract.methods.addVote(candidateIdx).send({ from: walletId });
            console.log(transactionHash)

            //TODO: update votes, voter status and nonce on central server

        }
        catch (e) {
            console.log(e)
            toast.error(Message(e.message, null), {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000,
                toastId: 'voteError',
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        }
    }

    setTimeout(() => {
        setCurrentTime(new Date().toString())
    }, 1000)

    useEffect(async () => {
        setLoading(true);
        try {
            console.log(electionId)
            setElection(await getElectionDetails(electionId));
            setCandidates(await getCandidates(electionId));
        }
        catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [])

    React.useEffect(()=>{
        let address = election.deploymentAddress
        setElectionContract(ElectionContract(address))
    },[election])

    return (<>
        {loading ? <Loader /> : (
            <Row>
                <Col md={5}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            Current Time:
                            <Card.Text>
                                {currentTime}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{election.title}</Card.Title>
                            Opening Time:
                            <Card.Text style={{ color: 'green' }}>
                                {new Date(election.openTimestamp).toString()}
                            </Card.Text>
                            Closing Time:
                            <Card.Text style={{ color: 'red' }}>
                                {new Date(election.closeTimestamp).toString()}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    {selectedCandidate ? `Selected Candidate is ${selectedCandidate.name} ` : `Click on a candidate to VOTE`}
                    {selectedCandidate
                        &&
                        <Button variant="primary" onClick={async()=>{await handleVote()}} className='my-2'>
                            Vote
                        </Button>
                    }
                    <br />
                    <Card style={{ width: '36rem' }}>
                        <Card.Body>
                            <Card.Title>Candidates</Card.Title>
                            {candidates.map((item, idx) => (
                                <ListGroup.Item
                                    key={item._id}
                                    className='d-flex align-items-center btn btn-outline-dark'
                                    onClick={() => setSelectedCandidate(candidates[idx])}
                                >
                                    {item.name}
                                </ListGroup.Item>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )}
    </>);
};

export default ElectionVoting;
