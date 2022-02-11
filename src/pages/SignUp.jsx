import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { FormContainer, Loader, Message } from "../containers";
import { NavBar } from "../components";
import { userTypes } from "../data";
import { signup } from "../services/userActions.js";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("voter");
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { isAuth, setIsAuth, loading, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    setIsAuth("token" in localStorage)
    if (isAuth) {
      setLoading(false);
      navigate("/dashboard", { replace: true });
    }
  }, [isAuth]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup({
        username,
        email,
        password,
        name,
        userType
      });
      setIsAuth("token" in localStorage)
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
      else setError(error.message);
    }
    setLoading(false);
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setUserType("voter");
  };

  return (
    <>
      {loading ? <Loader /> : <>
        <NavBar />
        <div>
          <FormContainer>
            <h1>SignUp</h1>
            {error && <Message variant='danger'>{error}</Message>}
            <Form onSubmit={submitHandler} onReset={resetHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter name'
                  value={name}
                  required
                  onChange={(e) => { setError(false); setName(e.target.value) }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                  value={username}
                  required
                  onChange={(e) => { setError(false); setUsername(e.target.value) }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  required
                  onChange={(e) => { setError(false); setEmail(e.target.value) }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  required
                  onChange={(e) => { setError(false); setPassword(e.target.value) }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='userType'>
                <Form.Label>User Type</Form.Label>
                <br />
                <ButtonGroup>
                  {userTypes.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="outline-dark"
                      name="radio"
                      value={radio.value}
                      checked={userType === radio.value}
                      onChange={(e) => setUserType(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Row className='py-3'>
                <Col>
                  <Button type='submit' variant='primary'>
                    Sign Up
                  </Button>
                </Col>
                <Col>
                  <Button type='reset' variant='primary'>
                    Reset
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  Already registered?{" "}
                  <Link to={redirect ? `/login?redirect=${redirect}` : "/signup"}>
                    Login Here
                  </Link>
                </Col>
              </Row>
            </Form>
          </FormContainer>
        </div>
      </>}
    </>
  );
};

export default Login;
