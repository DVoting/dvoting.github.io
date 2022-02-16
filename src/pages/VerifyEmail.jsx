import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FormContainer, Loader, Message } from "../containers";
import {
    Button,
    Col,
    Row,
    Form,
} from "react-bootstrap";
import { verifyEmailStates } from "../data";
import { sendOTP, verifyOTP } from "../services/otpActions";
import { updateUserVerified } from "../services/userActions";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {

    const { user, loading, setLoading, setUser } = useContext(GlobalContext);

    const [email, setEmail] = useState("fetching...");
    const [otp, setOtp] = useState("");
    const [state, setState] = useState(verifyEmailStates[0].value);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        if (user) {
            setEmail(user.email)
            setLoading(false)
            if (user.emailVerified) {
                navigate("/dashboard", { replace: true });
            }
        }
    }, [user])

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        switch (state) {
            case "1":
                setLoading(true);
                const purpose = "OTP for e-mail Verification";
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
                    const updatedUser = await updateUserVerified({
                        email
                    });
                    setSuccess("Email has been verified");
                    setUser(updatedUser);
                    navigate("/dashboard", { replace: true });
                } catch (error) {
                    console.log(error);
                    if (error.response && error.response.data.message)
                        setError(error.response.data.message);
                    else setError(error.message);
                }
                setLoading(false);
                break;
        }
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <FormContainer>
                        <h1>Verify Email</h1>
                        {success && <Message variant='success'>{success}</Message>}
                        {error && <Message variant='danger'>{error}</Message>}
                        <Form onSubmit={submitHandler}>
                            <Row className='py-3'>
                                <Col>
                                    <Form.Group controlId='email'>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your email'
                                            value={email}
                                            disabled
                                            required
                                        ></Form.Control>
                                    </Form.Group>
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
                                    <Row className='py-3'>
                                        <Col>

                                            <Button type='submit' variant='primary'>
                                                {state == "1"
                                                    ? "Send OTP"
                                                    : "Verify Email"}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </FormContainer>
                </div>
            )}
        </>
    );
};

export default VerifyEmail;
