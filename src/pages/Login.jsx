import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FormContainer, Loader, Message } from "../containers";
import { login } from "../services/userActions.js";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { isAuth, setIsAuth, loading, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    setIsAuth("token" in localStorage);
    if (isAuth) {
      setLoading(false);
      navigate("/dashboard", { replace: true });
    }
  }, [isAuth]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({
        email,
        password,
      });
      setIsAuth("token" in localStorage);
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
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <NavBar /> */}
          <div>
            <FormContainer>
              <h1>Login</h1>
              {error && <Message variant='danger'>{error}</Message>}
              <Form onSubmit={submitHandler} onReset={resetHandler}>
                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    required
                    onChange={(e) => {
                      setError(false);
                      setEmail(e.target.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    required
                    onChange={(e) => {
                      setError(false);
                      setPassword(e.target.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <Row className='py-3'>
                  <Col>
                    <Button type='submit' variant='primary'>
                      Sign In
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
                    New User?{" "}
                    <Link
                      to={redirect ? `/signup?redirect=${redirect}` : "/signup"}
                    >
                      Register Here
                    </Link>
                  </Col>
                  <Col>
                    
                    <Link
                      to={
                        redirect
                          ? `/forgotpassword?redirect=${redirect}`
                          : "/forgotpassword"
                      }
                    >
                      Forgot Password?
                    </Link>
                  </Col>
                </Row>
              </Form>
            </FormContainer>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
