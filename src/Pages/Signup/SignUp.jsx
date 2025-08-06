import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  FaHome,
  FaProjectDiagram,
  FaDollarSign,
  FaServicestack,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-center-wrapper">
        <div className="login-bg-overlay "></div>
        <div
          className="container login-container lbo"
          style={{ position: "relative" }}
        >
          <center>
            <h4>Sign Up</h4>
          </center>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter mobile number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button variant="success" type="submit">
              Sign Up
            </Button>
            &nbsp;
            <Button
              variant="outline-primary"
              className="signup-btn"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </Button>
          </Form>
          <div className="vertical-icon-bar inside-modal-bar">
            <div
              className="icon-item"
              title="Home"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <FaHome size={28} />
            </div>
            <div
              className="icon-item"
              title="Project"
              onClick={() => navigate("/projects")}
              style={{ cursor: "pointer" }}
            >
              <FaProjectDiagram size={28} />
            </div>
            <div
              className="icon-item"
              title="Price"
              onClick={() => navigate("/price")}
              style={{ cursor: "pointer" }}
            >
              <FaDollarSign size={28} />
            </div>
            <div
              className="icon-item"
              title="Services"
              onClick={() => navigate("/services")}
              style={{ cursor: "pointer" }}
            >
              <FaServicestack size={28} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
