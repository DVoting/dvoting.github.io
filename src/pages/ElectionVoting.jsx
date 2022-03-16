import React, { useContext, useEffect, useState } from "react";
import { Card, Col, ListGroup, Row, Button } from "react-bootstrap";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { getCandidates, getElectionDetails } from "../services/electionActions";

const ElectionVoting = () => {
    let electionId = location.pathname.split("/")[2];
    const { loading, setLoading } = useContext(GlobalContext);
    const [election, setElection] = useState({})
    const [candidates, setCandidates] = useState([])
    const [selectedCandidate, setSelectedCandidate] = useState(null)
    const [currentTime, setCurrentTime] = useState(new Date().toString())

    const handleVote = ((e) => {
        e.preventDefault();
        //TODO: addVote to selectedCandidate
    })

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
                    <br />
                    {selectedCandidate ? `Selected Candidate is ${selectedCandidate.name} ` : `Click on a candidate to VOTE`}
                    {selectedCandidate
                        &&
                        <Button variant="primary" onClick={() => handleVote}>
                            Vote
                        </Button>
                    }
                </Col>
            </Row>
        )}
    </>);
};

export default ElectionVoting;
