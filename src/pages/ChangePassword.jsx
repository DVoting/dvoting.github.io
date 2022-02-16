import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavBar } from "../components";
import { FormContainer, Loader } from "../containers";
import { Link } from "react-router-dom"
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
import { getVoterById } from "../services/voterServices";
import { getAppearedElections, getAppliedElections, getApprovedElections } from "../services/electionActions";

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <FormContainer>
                <h1>Change Password</h1>
            </FormContainer>
        </div>
    );
};

export default ChangePassword;
