import React from "react";
import {Button, FloatingLabel, Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import Message from "../utils/Message";

const CreateOrganiserModal = (props) => {
  const {show, setShow} = props
  const [inputs, setInputs] = React.useState({
    organisationName: ''
  })

  const handleInput = (event)=>{
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event)=> {
    event.preventDefault()
    if(validInputs())
      console.log(inputs)
  }

  const validInputs = ()=>{
    if (inputs.organisationName.length < 4) {
      toast.error(Message("Organiser Name", "must be at least 4 characters long"), {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return false
    }
    return true
  }

  return (
      <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="createOrganiserModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="createOrganiserModal">
            Create Organiser
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <FloatingLabel label="Organiser name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="organisationName"
                    value={inputs.organisationName}
                    onChange={handleInput}
                    required
                  />
              </FloatingLabel>
              <Button className="text-center" variant="primary" type="submit" onClick={handleSubmit}>
                  Create
              </Button>
          </Form>
        </Modal.Body>
      </Modal>
  );
};

export default CreateOrganiserModal;
