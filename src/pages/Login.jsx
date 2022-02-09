import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FormContainer, Loader, Message } from "../containers";
import { login } from "../services/userActions.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if ("userInfo" in localStorage) {
      navigate("/homepage", { replace: true });
    }
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if ("error" in localStorage) {
      localStorage.removeItem("error");
      setError(false);
    }
    await login({
      email,
      password,
    });
    setLoading(false);
    if ("error" in localStorage) setError(localStorage.getItem("error"));
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <FormContainer>
        <h1>Login</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <></>
        )}
        <Form onSubmit={submitHandler} onReset={resetHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form.Group>
          <Row className="py-3">
            <Col>
              <Button type="submit" variant="primary">
                Sign In
              </Button>
            </Col>
            <Col>
              <Button type="reset" variant="primary">
                Reset
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              New User?{" "}
              <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
                Register Here
              </Link>
            </Col>
            <Col>
              Forgot Password?{" "}
              <Link
                to={
                  redirect
                    ? `/forgotpassword?redirect=${redirect}`
                    : "/forgotpassword"
                }
              >
                Click here
              </Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Login;