import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Loader } from "../containers";
import {Link} from "react-router-dom"
import {CreateOrganiserModal} from "../modals";
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
import {getElections} from "../services/electionActions";

const Dashboard = () => {
  const { user, loading, setLoading } = React.useContext(GlobalContext);
  const [showModal, setShowModal] = React.useState(false)
  const [voter, setVoter] = React.useState(null)
  const [invitedElections, setInvitedElections] = React.useState([])
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
    if(voter && voter.invitations.length>0) {
      const query = `ids=${voter.invitations.join(',')}`
      setInvitedElections(await getElections(query))
    }
  },[voter])

  React.useEffect(async ()=>{
    if(user) {
      const query = `appliedVoter=${user.uniqueVoterId}`
      setAppliedElections(await getElections(query))
    }
  },[user])

  React.useEffect(async ()=>{
    if(user) {
      const query = `approvedVoter=${user.uniqueVoterId}`
      setApprovedElections(await getElections(query))
    }
  },[user])

  React.useEffect(async ()=>{
    if(user) {
      const query = `appearedVoter=${user.uniqueVoterId}`
      setAppearedElections(await getElections(query))
    }
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
                        </ListGroup>
                      </React.Fragment>
                    }
                  </Card>
                  <Card style={{marginTop:"5%", marginBottom:"5%"}}>
                    {user &&
                      <ListGroup variant="flush">
                        {user.userType === 'voter' &&
                            <React.Fragment>
                              <ListGroup.Item onClick={()=>setShowModal(true)} style={{cursor:"pointer"}}>
                                Register an Organisation
                              </ListGroup.Item>
                              <CreateOrganiserModal show={showModal} setShow={setShowModal}/>
                            </React.Fragment>
                        }
                        {user.userType === 'organiser' &&
                          <Link to="#">
                            <ListGroup.Item>Manage Organisations</ListGroup.Item>
                          </Link>
                        }
                      </ListGroup>
                    }
                  </Card>
                </Col>
                <Col md={12} lg={8}>
                  <Card>
                    <Card.Header>Elections</Card.Header>
                    <Card.Body>
                      {voter &&
                        <Tabs defaultActiveKey="invited" className="mb-3">
                          <Tab eventKey="invited" title="Invited">
                            {
                              invitedElections.length>0 ?
                                <ListGroup variant="flush">
                                  {invitedElections.map((election)=>
                                    <Link to="#" key={election._id}>
                                      <ListGroup.Item>
                                        {election.title}
                                      </ListGroup.Item>
                                    </Link>
                                  )}
                                </ListGroup>
                                :
                                <React.Fragment>Nothing here... </React.Fragment>
                            }
                          </Tab>
                          <Tab eventKey="approved" title="Approved">
                            {
                              approvedElections.length>0 ?
                                <ListGroup variant="flush">
                                  {approvedElections.map((election)=>
                                      <Link to="#" key={election._id}>
                                        <ListGroup.Item>
                                          {election.title}
                                        </ListGroup.Item>
                                      </Link>
                                  )}
                                </ListGroup>
                              :
                                <React.Fragment>Nothing here... </React.Fragment>
                            }
                          </Tab>
                          <Tab eventKey="applied" title="Applied">
                            {
                              appliedElections.length>0 ?
                                <ListGroup variant="flush">
                                  {appliedElections.map((election)=>
                                      <Link to="#" key={election._id}>
                                        <ListGroup.Item>
                                          {election.title}
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
                                      <Link to="#" key={election._id}>
                                        <ListGroup.Item>
                                          {election.title}
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
