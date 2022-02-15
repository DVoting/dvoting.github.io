import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { convertToUnixTimeStamp } from "../utils";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { createElection } from "../services/electionActions";
import { Navigate } from "react-router-dom";
import { Message } from "../containers";

/*
    Title

    Storing the time as Unix time (also known as Epoch time)
    Refer this for time conversion - https://www.epochconverter.com/
    Start time
    End time

    2 buttons - 
    Discard - redirect to dashboard
    save - Save the details, API POST hit to -> /api/election and redirect to /election/:id page
*/

const CreateElection = () => {
  const [details, setDetails] = useState({
    title: "",
    openTimestamp: new Date(),
    closeTimestamp: new Date(),
  });

  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useContext(GlobalContext);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const res = await createElection(details, user._id);

      // console.log(res);

      const { _id } = res;
      setRedirect(`/elections/${_id}`);
    } catch (err) {
      console.log(err.response);

      setError(err.response.data);
    }
  };

  const handleDiscard = (e) => {
    e.preventDefault();

    setRedirect("/dashboard");
  };

  if (redirect) {
    return <Navigate to={redirect} replace={true} />;
  }

  return (
    <div>
      <Form onSubmit={handleSave} onReset={handleDiscard}>
        <Form.Group className='mb-3' controlId='electionTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter election title'
            value={details.title}
            onChange={(e) => {
              setDetails((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
          />
        </Form.Group>

        <div>
          <label>Election Start Time</label>
          <br />
          <DateTimePicker
            onChange={(newValue) => {
              setDetails((prev) => {
                return { ...prev, openTimestamp: newValue };
              });
            }}
            value={details.openTimestamp}
            minDate={new Date()}
          />
        </div>

        <div>
          <label>Election End Time</label>
          <br />
          <DateTimePicker
            onChange={(newValue) => {
              setDetails((prev) => {
                return { ...prev, closeTimestamp: newValue };
              });
            }}
            value={details.closeTimestamp}
            minDate={details.openTimestamp}
          />
        </div>

        <br />

        <Button variant='primary' type='reset'>
          Discard
        </Button>

        <Button variant='primary' type='submit'>
          Save
        </Button>
      </Form>

      {error && <Message variant='danger'>{error}</Message>}
    </div>
  );
};

export default CreateElection;
