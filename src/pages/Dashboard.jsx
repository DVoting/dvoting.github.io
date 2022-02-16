import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavBar } from "../components";
import { Loader } from "../containers";
import {Link} from "react-router-dom"
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Form,
  FloatingLabel,
  InputGroup,
  ListGroup
} from "react-bootstrap";
import {getVoterById} from "../services/voterServices";
import {getAppearedElections, getAppliedElections, getApprovedElections} from "../services/electionActions";

const Dashboard = () => {
  const { user, loading, setLoading } = React.useContext(GlobalContext);
  const [voter, setVoter] = React.useState(null)
  const [appliedElections, setAppliedElections] = React.useState([])
  const [approvedElections, setApprovedElections] = React.useState([])
  const [appearedElections, setAppearedElections] = React.useState([])

  React.useEffect(() => {
    if (user === null) setLoading(true);
    else setLoading(false);
    console.log(user)
  }, [user]);

  React.useEffect(async ()=>{
    if(user)
      setVoter(await getVoterById(user.uniqueVoterId))
  },[user])

  React.useEffect(async ()=>{
    if(user)
      setAppliedElections(await getAppliedElections(user.uniqueVoterId))
  },[user])

  React.useEffect(async ()=>{
    if(user)
      setApprovedElections(await getApprovedElections(user.uniqueVoterId))
  },[user])

  React.useEffect(async ()=>{
    if(user)
      setAppearedElections(await getAppearedElections(user.uniqueVoterId))
  },[user])

  return (
    <React.Fragment>
      {
        loading ?
          <Loader />
        :
          <React.Fragment>
            <Container>
              <Row>
                <Col md={12} lg={4}>
                  <Card>
                    {user &&
                      <React.Fragment>
                        <Card.Header>User Profile</Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                          <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                          <ListGroup.Item>
                            E-mail: {user.email}
                            {' '}
                            {
                              user.emailVerified ?
                                <span className="text-success">verified</span>
                              :
                                <Link to="#">verify</Link>
                            }
                          </ListGroup.Item>
                          <ListGroup.Item>UVID: {user.uniqueVoterId}</ListGroup.Item>
                        </ListGroup>
                        {voter &&
                          <ListGroup.Item>
                            Wallet:
                            {' '}
                            {
                              voter.hasWallet ?
                                <span className="text-success">assigned</span>
                              :
                                <Link to="#">generate</Link>
                            }
                          </ListGroup.Item>
                        }
                        <ListGroup.Item>
                          <Link to="#">Change Password</Link>
                        </ListGroup.Item>
                      </React.Fragment>
                    }
                  </Card>
                </Col>
                <Col md={12} lg={8}>
                  <Card>
                    <Card.Header>Elections</Card.Header>
                    <Card.Body>
                      {voter &&
                        <Tabs defaultActiveKey="approved" className="mb-3">
                          <Tab eventKey="approved" title="Appeared">
                            {
                              approvedElections.length>0 ?
                                <ListGroup variant="flush">
                                  {approvedElections.map((election)=>
                                      <Link to="#" key={election}>
                                        <ListGroup.Item>
                                          {election}
                                        </ListGroup.Item>
                                      </Link>
                                  )}
                                </ListGroup>
                              :
                                <React.Fragment>Nothing here... </React.Fragment>
                            }
                          </Tab>
                          <Tab eventKey="invited" title="Invited">
                            {
                              voter.invitations && voter.invitations.length>0 ?
                                <ListGroup variant="flush">
                                  {voter.invitations.map((election)=>
                                      <Link to="#" key={election}>
                                        <ListGroup.Item>
                                          {election}
                                        </ListGroup.Item>
                                      </Link>
                                  )}
                                </ListGroup>
                              :
                                <React.Fragment>Nothing here... </React.Fragment>
                            }
                          </Tab>
                          <Tab eventKey="applies" title="Applied">
                            {
                              appliedElections.length>0 ?
                                <ListGroup variant="flush">
                                  {appliedElections.map((election)=>
                                      <Link to="#" key={election}>
                                        <ListGroup.Item>
                                          {election}
                                        </ListGroup.Item>
                                      </Link>
                                  )}
                                </ListGroup>
                              :
                                <React.Fragment>Nothing here... </React.Fragment>
                            }
                          </Tab>
                          <Tab eventKey="appeared" title="Appeared">
                            {
                              appearedElections.length>0 ?
                                <ListGroup variant="flush">
                                  {appearedElections.map((election)=>
                                      <Link to="#" key={election}>
                                        <ListGroup.Item>
                                          {election}
                                        </ListGroup.Item>
                                      </Link>
                                  )}
                                </ListGroup>
                              :
                                <React.Fragment>Nothing here... </React.Fragment>
                            }
                          </Tab>
                        </Tabs>
                      }
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
