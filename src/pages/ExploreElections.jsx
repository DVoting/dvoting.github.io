import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Election from "../components/Election";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { getElections } from "../services/electionActions";

const ExploreElections = () => {
    const { loading, setLoading } = useContext(GlobalContext);
    const location = useLocation();

    const [elections, setElections] = useState([])
    const [activeElections, setActiveElections] = useState([])
    const [upcomingElections, setUpcomingElections] = useState([])
    const [pastElections, setPastElections] = useState([])


    useEffect(async () => {
        setLoading(true);
        let currentTime = new Date().toISOString();
        try {
            setElections(await getElections(""));
            setActiveElections(elections.filter(election => (currentTime >= election.openTimestamp && currentTime <= election.closeTimestamp)));
            setUpcomingElections(elections.filter(election => (election.openTimestamp > currentTime && election.closeTimestamp > currentTime)));
            setPastElections(elections.filter(election => (election.closeTimestamp < currentTime)));
        }
        catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [elections])

    if(loading) return <Loader />

    return (
        <>
            <Row>
                <h2>Active Elections</h2>
                {
                    activeElections.length > 0 ?
                      activeElections?.map((election) =>
                        <Col key={election._id} sm={12} md={6} lg={4} xl={3}>
                            <Election election={election}/>
                        </Col>
                      )
                      : <h4>No active elections!</h4>
                }
                <hr style={{border: '2px solid gray'}} className="my-3"/>
                <h2>Upcoming Elections</h2>
                {
                    upcomingElections.length > 0 ?
                      upcomingElections?.map((election) =>
                        <Col key={election._id} sm={12} md={6} lg={4} xl={3}>
                            <Election election={election}/>
                        </Col>)
                      : <h4>No upcoming elections!</h4>
                }
                <hr style={{border: '2px solid gray'}} className="my-3"/>
                <h2>Past Elections</h2>
                {
                    pastElections.length > 0 ?
                      pastElections?.map((election) =>
                        <Col key={election._id} sm={12} md={6} lg={4} xl={3}>
                            <Election election={election}/>
                        </Col>)
                      : <h4>No past elections!</h4>
                }
            </Row>
        </>
    );
};

export default ExploreElections;
