import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavBar } from "../components";
import { Loader } from "../containers";
import {Link} from "react-router-dom"
import {Button, Card, Col, Container, Row, Tab, Tabs} from "react-bootstrap";

const Dashboard = () => {
  const { user, loading, setLoading } = useContext(GlobalContext);
  const {walletId} = useContext(GlobalContext)

  React.useEffect(() => {
    if (user === null) setLoading(true);
    else setLoading(false);
    console.log(user)
  }, [user]);

  return (
    <React.Fragment>
      {
        loading ?
          <Loader />
        :
          <React.Fragment>
            <NavBar />
            <Container>
              <Row>
                <Col md={12} lg={4}>
                  <Card>
                    {user &&
                      <Card.Body>
                        <Card.Title>Welcome, {user.username}</Card.Title>
                        <Card.Text>Name: {user.name}</Card.Text>
                        <Card.Text>
                          E-mail: {user.email}
                          {' '}
                          {!user.emailVerified && <Link to="#">verify</Link>}
                        </Card.Text>
                        <Card.Text>UVID: temp</Card.Text>
                        <Card.Text>
                          Wallet:
                          {' '}
                          <Link to="#">generate</Link>
                        </Card.Text>
                        <Link to="#">Change Password</Link>
                      </Card.Body>
                    }
                  </Card>
                </Col>
                <Col md={12} lg={8}>
                  <Card>
                    <Card.Header>Elections</Card.Header>
                    <Card.Body>
                      <Tabs defaultActiveKey="signed" className="mb-3">
                        <Tab eventKey="signed" title="Signed">
                          Signed
                        </Tab>
                        <Tab eventKey="applies" title="Applied">
                          Applied
                        </Tab>
                        <Tab eventKey="invited" title="Invited">
                          Invited
                        </Tab>
                        <Tab eventKey="appeared" title="Appeared">
                          Appeared
                        </Tab>
                      </Tabs>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </React.Fragment>
      }
    </React.Fragment>
  );
};

export default Dashboard;
