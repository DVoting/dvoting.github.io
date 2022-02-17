import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = (props) => {
  const { isOpen, setIsOpen, handleDelete, _id } = props;

  const handleClose = () => setIsOpen(false);

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete ?</p>
        <h4>{_id}</h4>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
