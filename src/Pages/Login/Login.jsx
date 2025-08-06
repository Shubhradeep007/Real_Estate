import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  FaHome,
  FaProjectDiagram,
  FaDollarSign,
  FaServicestack,
} from "react-icons/fa";
import "./LoginModal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-center-wrapper">
        <div className="login-bg-overlay"></div>
        <div
          className="container login-container"
          style={{ position: "relative" }}
        >
          <center>
            <h4>Login</h4>
          </center>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            &nbsp;
            <Button
              variant="outline-success"
              className="signup-btn"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create an Account
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

export default Login;
