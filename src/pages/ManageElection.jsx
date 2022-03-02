import React, { useEffect, useRef, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CandidateList from "../components/CandidateList";

import { Loader, Message } from "../containers";
import {
  addCandidate,
  deleteCandidate,
  deployElection,
  getCandidates,
  getElectionDetails,
  updateElection,
} from "../services/electionActions";

const ManageElection = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  const candidate = useRef("");
  const saved = useRef(true);

  const [candidates, setCandidates] = useState([]);

  const [details, setDetails] = useState({
    closeTimestamp: "",
    openTimestamp: "",
    organiser: "",
    title: "",
    registrationLink: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  let electionId = location.pathname.split("/")[2];

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await getElectionDetails(electionId);

      if (res.error) {
        setError("Invalid Election Id");
        setLoading(false);
        return;
      }

      if (res.deploymentAddress) {
        alert("Election has already been deployed");
        navigate(`/elections/${electionId}`, { replace: true });
      }

      setDetails({
        ...res,
        openTimestamp: new Date(res.openTimestamp),
        closeTimestamp: new Date(res.closeTimestamp),
      });

      setError(false);
      setLoading(false);
    })();

    return () => {
      setError(false);
      setLoading(false);
    };
  }, [flag]);

  useEffect(() => {
    (async () => {
      const res = await getCandidates(electionId);

      setCandidates(res);
    })();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const res = await updateElection(electionId, details);

      setFlag((prev) => !prev);
      saved.current = true;
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
    }
  };

  const handleDiscard = (e) => {
    e.preventDefault();

    saved.current = true;
    setFlag((prev) => !prev);
  };

  const handleAddCandidate = async () => {
    const cand = candidate.current.value;

    if (cand == "") return;

    try {
      const res = await addCandidate(electionId, { name: cand });
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
      return;
    }

    const res2 = await getCandidates(electionId);
    setCandidates(res2);
  };

  const handleDeleteCandidate = async (id) => {
    try {
      const res = await deleteCandidate(electionId, id);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
      return;
    }

    const res2 = await getCandidates(electionId);
    setCandidates(res2);
  };

  const handleDeploy = async () => {
    try {
      saved.current = false;
      const res = await deployElection(electionId);
      console.log(res);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
      saved.current = true;
      return;
    }
    toast("Election has been deployed !!", {
      position,
      autoClose: 5000,
      closeOnClick: true,
    });
  };

  return (
    <div className='d-flex flex-column'>
      <h1>Manage Election</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className='d-flex justify-content-around '>
          <Form
            onSubmit={handleSave}
            onReset={handleDiscard}
            className='bg-light rounded px-4 py-4'
            style={{ background: "pink", width: "40%" }}
          >
            <Form.Group className='my-4' controlId='electionTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter election title'
                value={details.title}
                onChange={(e) => {
                  saved.current = false;
                  setDetails((prev) => {
                    return { ...prev, title: e.target.value };
                  });
                }}
              />
            </Form.Group>

            <Form.Group className='my-4' controlId='electionId'>
              <Form.Label>Election Id</Form.Label>
              <Form.Control type='text' value={electionId} disabled={true} />
            </Form.Group>

            <Form.Group className='my-4' controlId='organizer'>
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type='text'
                value={details.organiser}
                disabled={true}
              />
            </Form.Group>

            <div className='my-4'>
              <label>Election Start Time</label>
              <br />
              <DateTimePicker
                className='w-100'
                onChange={(newValue) => {
                  saved.current = false;
                  setDetails((prev) => {
                    return { ...prev, openTimestamp: newValue };
                  });
                }}
                value={details.openTimestamp}
                minDate={new Date()}
                required={true}
              />
            </div>

            <div className='my-4'>
              <label>Election End Time</label>
              <br />
              <DateTimePicker
                className='w-100'
                onChange={(newValue) => {
                  saved.current = false;
                  setDetails((prev) => {
                    return { ...prev, closeTimestamp: newValue };
                  });
                }}
                value={details.closeTimestamp}
                minDate={details.openTimestamp}
              />
            </div>

            <br />

            <div className='d-flex justify-content-center'>
              <Button variant='secondary' type='reset' className='mx-4 px-3'>
                Discard
              </Button>

              <Button variant='success' type='submit' className='mx-4 px-4'>
                Save
              </Button>
            </div>
          </Form>

          <div
            className='text-center bg-light px-3 py-2 rounded'
            style={{ width: "40%", overflowY: "scroll", maxHeight: "70vh" }}
          >
            <h3>Candidates</h3>
            <div>
              <input
                type='text'
                ref={candidate}
                placeholder='Candidate Name'
                className='rounded px-3 py-2 shadow-sm mx-2'
                style={{ outline: "none", border: "none", width: "60%" }}
              />
              <Button className='my-3' onClick={handleAddCandidate}>
                Add Candidate
              </Button>
            </div>

            <CandidateList
              candidates={candidates}
              handleDeleteCandidate={handleDeleteCandidate}
            />
          </div>
        </div>
      )}
      <Button
        className='align-self-center my-4'
        disabled={!saved.current}
        onClick={() => {
          const choice = window.confirm(
            "An Election once deployed cannot be modified. \nAre you sure you want to continue?"
          );

          if (choice) handleDeploy();
        }}
      >
        Deploy Election
      </Button>
      {error && <Message variant='danger'>{error}</Message>}
    </div>
  );
};

export default ManageElection;
