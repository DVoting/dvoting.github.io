import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";
import { fetchMyOrganizations } from "../services/organiserActions";

const ManageOrganizations = () => {
  const [data, setData] = useState(null);

  const { user } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      if (user) {
        const res = await fetchMyOrganizations(user);

        if (res.error) return;
        setData(res.docs);
      }
    })();
  }, [user]);

  if (!data) {
    return (
      <div>
        <h1>Manage My Organizations</h1>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1>Manage My Organizations</h1>
      {data.length === 0 ? (
        <h3>No Organizations found!!</h3>
      ) : (
        <ListGroup as='ol' numbered>
          {data?.map((item) => {
            const { organisationName, _id } = item;
            return (
              <ListGroup.Item as='li' key={_id}>
                <Link to={`/org/${_id}`}>
                  {organisationName}
                  <span> - </span> {_id}
                </Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default ManageOrganizations;
