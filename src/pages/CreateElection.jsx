import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import { Navigate, useLocation } from "react-router-dom";
import { Message } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { createElection } from "../services/electionActions";

const CreateElection = () => {
  const location = useLocation();

  let orgId = location.pathname.split("/")[2];
  let orgName = location.state;

  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get(`${BASE_URL}/organisers/${orgId}`);

  //     console.log(res);
  //   })();
  // }, []);

  const [details, setDetails] = useState({
    title: "",
    openTimestamp: new Date().addHours(0.5),
    closeTimestamp: new Date().addHours(1),
  });

  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(null);

  const [saving, setSaving] = useState(false);

  const { user } = useContext(GlobalContext);

  const handleSave = async (e) => {
    e.preventDefault();

    setSaving(true);
    try {
      const res = await createElection(details, orgId);

      const { _id } = res;
      setRedirect(`/elections/${_id}/manage`);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
    }
    setSaving(false);
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setRedirect(`/org/${orgId}`);
  };

  if (redirect) {
    return <Navigate to={redirect} replace={true} />;
  }

  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ height: "70vh" }}
    >
      <h2 className='my-5'>Create an Election</h2>
      <Form
        onSubmit={handleSave}
        onReset={handleDiscard}
        className='bg-light rounded px-4 py-4'
        style={{ background: "pink", minWidth: "40%" }}
      >
        <Form.Group className='my-4' controlId='electionTitle'>
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

        <Form.Group className='my-4' controlId='organizer'>
          <Form.Label>Organization Name</Form.Label>
          <Form.Control type='text' value={orgName} disabled={true} />
        </Form.Group>

        <div className='my-4'>
          <label>Election Start Time</label>
          <br />
          <DateTimePicker
            className='w-100'
            onChange={(newValue) => {
              setDetails((prev) => ({ ...prev, openTimestamp: newValue }));
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
              setDetails((prev) => {
                return { ...prev, closeTimestamp: newValue };
              });
            }}
            value={details.closeTimestamp}
            minDate={new Date()}
          />
        </div>

        <br />

        <div className='d-flex justify-content-center'>
          <Button variant='secondary' type='reset' className='mx-4 px-3'>
            Discard
          </Button>

          <Button
            variant='success'
            type='submit'
            className='mx-4 px-4'
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </Form>

      {error && <Message variant='danger'>{error}</Message>}
    </div>
  );
};

export default CreateElection;
