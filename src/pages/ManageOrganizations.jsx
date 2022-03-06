import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { CreateOrganiserModal } from "../modals";
import {
  deleteOrganization,
  fetchMyOrganizations,
} from "../services/organiserActions";

const ManageOrganizations = () => {
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const [createOrgIsOpen, setCreateOrgIsOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { user } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (user) {
        const res = await fetchMyOrganizations(user);

        if (res.error) return;
        setData(res.docs);
      }
    })();
  }, [user, modalIsOpen, createOrgIsOpen]);

  if (!data) {
    return (
      <div>
        <h1>Manage My Organizations</h1>
        <Loader />
      </div>
    );
  }

  const handleBtnClick = (_id, organisationName) => {
    navigate(`/org/${_id}/create-election`, { state: organisationName });
  };

  const handleOpen = (_id) => {
    setToDelete(_id);
    setModalIsOpen(_id);
  };

  const handleDelete = async (orgId) => {
    setDeleting(true);
    const res = await deleteOrganization(orgId);

    setDeleting(false);
    if (res.error) {
      alert("Some error occured");
      return;
    }

    setModalIsOpen(false);
  };

  return (
    <div>
      <ModalComponent
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        _id={toDelete}
        handleDelete={() => handleDelete(toDelete)}
        deleting={deleting}
      />
      <CreateOrganiserModal
        show={createOrgIsOpen}
        setShow={setCreateOrgIsOpen}
        setRedirect={() => {}}
        // setRedirect={useNavigate}
      />
      <h2>Manage My Organizations</h2>
      <Button onClick={() => setCreateOrgIsOpen(true)}>
        Create Organization
      </Button>
      {data.length === 0 ? (
        <h3>No Organizations found!!</h3>
      ) : (
        <ListGroup as='ol' numbered className='my-4'>
          {data?.map((item) => {
            const { organisationName, _id } = item;
            return (
              <ListGroup.Item as='li' key={_id} className='d-flex flex-row'>
                <Link
                  to={`/org/${_id}`}
                  style={{ textDecoration: "none" }}
                  className='flex-grow-1 px-3'
                >
                  {organisationName}
                  <p>ID: {_id}</p>
                </Link>

                <Button
                  className='align-self-center'
                  onClick={() => handleBtnClick(_id, organisationName)}
                >
                  Create Election
                </Button>

                <p
                  className='align-self-center text-danger m-3'
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOpen(_id)}
                >
                  Delete
                </p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default ManageOrganizations;
