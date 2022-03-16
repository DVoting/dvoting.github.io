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

    useEffect(async () => {
        setLoading(true);
        try {
            setElections(await getElections(""));
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
                <Row>
                    {elections.map((election) =>
                        <Col key={election._id} sm={12} md={6} lg={4} xl={3}>
                            <Election election={election} />
                        </Col>
                    )}
                </Row>
            )}
        </>
    );
};

export default ExploreElections;
