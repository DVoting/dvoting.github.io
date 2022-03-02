import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const CandidateList = (props) => {
  const { candidates, handleDeleteCandidate } = props;

  return (
    <>
      {candidates?.length ? (
        <ListGroup as='ol' numbered>
          {candidates.map((item, idx) => (
            <ListGroup.Item
              key={item._id}
              as='li'
              className='d-flex align-items-center'
            >
              {item.name}

              <Button
                variant='outline-danger'
                className='ms-auto'
                onClick={() => handleDeleteCandidate(item._id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        "No candidates"
      )}
    </>
  );
};

export default CandidateList;
