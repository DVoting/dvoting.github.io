import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
                <div>
                    {elections.map((election) =>
                        <div>
                            <a href={`elections/${election._id}`}>{election.title}</a>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ExploreElections;
