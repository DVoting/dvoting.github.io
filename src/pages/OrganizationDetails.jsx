import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../containers";
import { getElections } from "../services/electionActions";

const OrganizationDetails = () => {
  const [elections, setElections] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  let orgId = location.pathname.split("/")[2];

  console.log(orgId);

  useEffect(() => {
    (async () => {
      const res = await getElections(`organiser=${orgId}`);

      if (res.error) return;

      setElections(res);
    })();
  }, []);

  if (!elections) {
    return (
      <div>
        <h1>Organization Details</h1>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h2>Organization Details</h2>
      Id - {orgId}
      <ListGroup as='ol' numbered className='my-4'>
        {elections?.map((item) => {
          const { title, _id } = item;

          return (
            <ListGroup.Item key={_id} as='li' className='d-flex flex-row'>
              <Link
                to={`/elections/${_id}`}
                style={{ textDecoration: "none" }}
                className='flex-grow-1 px-3'
              >
                {title}
                <p>ID: {_id}</p>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default OrganizationDetails;
