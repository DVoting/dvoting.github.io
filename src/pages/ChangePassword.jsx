import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FormContainer, Loader, Message } from "../containers";
import { useNavigate } from "react-router-dom"
import {
    Button,
    Col,
    Row,
    Form
} from "react-bootstrap";
import { updatePasword } from "../services/userActions";

const ChangePassword = () => {
    const [email, setEmail] = useState("fetching...");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const { loading, user, setLoading } = useContext(GlobalContext)

    useEffect(() => {
        setLoading(true);
        if (user) {
            setEmail(user.email);
            setLoading(false);
        }
    }, [user])

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }
        try {
            setLoading(true);
            await updatePasword({
                email,
                password
            });
            setLoading(false);
            setSuccess("Password changed.. Redirecting to dashboard");
            setTimeout(() => {
                navigate("/dashboard", { replace: true });
            }, [1000])
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message)
                setError(error.response.data.message);
            else setError(error.message);
        }
    }

    const resetHandler = async (e) => {
        e.preventDefault();
        setPassword("");
        setConfirmPassword("");
        setError(false);
        setSuccess(false);
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <FormContainer>
                        <h1>Change Password</h1>
                        {success && <Message variant='success'>{success}</Message>}
                        {error && <Message variant='danger'>{error}</Message>}
                        <Form onSubmit={submitHandler} onReset={resetHandler}>
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
                            <Row className='py-3'>
                                <Col>
                                    <Button type='submit' variant='primary'>
                                        Change Password
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type='reset' variant='primary'>
                                        Reset
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </FormContainer>
                </div>
            )}
        </>
    );
};

export default ChangePassword;
