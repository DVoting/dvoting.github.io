import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FormContainer, Loader, Message } from "../containers";
import { NavBar } from "../components";
import { forgotPasswordStates } from "../data";
import { GlobalContext } from "../context/GlobalContext";
import { sendOTP, verifyOTP } from "../services/otpActions";
import { updatePasword } from "../services/userActions";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState(forgotPasswordStates[0].value);
  const navigate = useNavigate();
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
    setError(false);
    setSuccess(false);
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    switch (state) {
      case "1":
        setLoading(true);
        const purpose = "OTP for Forgot Password";
        try {
          await sendOTP({
            email,
            purpose
          });
          setState("2");
        } catch (error) {
          console.log(error);
          if (error.response && error.response.data.message)
            setError(error.response.data.message);
          else setError(error.message);
        }
        setLoading(false);
        break;
      case "2":
        setLoading(true);
        try {
          await verifyOTP({
            email,
            otp,
          });
          setState("3");
        } catch (error) {
          console.log(error);
          if (error.response && error.response.data.message)
            setError(error.response.data.message);
          else setError(error.message);
        }
        setLoading(false);
        break;
      case "3":
        setLoading(true);
        try {
          await updatePasword({
            email,
            password,
          });
          setSuccess("Password has been changed");
        } catch (error) {
          console.log(error);
          if (error.response && error.response.data.message)
            setError(error.response.data.message);
          else setError(error.message);
        }
        setLoading(false);
        break;
    }
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
              <h1>Forgot Password</h1>
              {success && <Message variant='success'>{success}</Message>}
              {error && <Message variant='danger'>{error}</Message>}
              <Form onSubmit={submitHandler}>
                {(state === "1" || state === "2") && (
                  <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter your email'
                      value={email}
                      required
                      onChange={(e) => {
                        setError(false);
                        setEmail(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                )}
                {state === "2" && (
                  <Form.Group controlId='otp'>
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter OTP received on email'
                      value={otp}
                      required
                      onChange={(e) => {
                        setError(false);
                        setOtp(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                )}
                {state === "3" && (
                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter new Password'
                      value={password}
                      required
                      onChange={(e) => {
                        setError(false);
                        setPassword(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                )}
                {state === "3" && (
                  <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Confirm your new Password'
                      value={confirmPassword}
                      required
                      onChange={(e) => {
                        setError(false);
                        setConfirmPassword(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                )}
                <Row className='py-3'>
                  <Col>
                    <Button type='submit' variant='primary'>
                      {state == "1"
                        ? "Send OTP"
                        : state == "2"
                        ? "Confirm OTP"
                        : "Change Password"}
                    </Button>
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

export default ForgotPassword;
