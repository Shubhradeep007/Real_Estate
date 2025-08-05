
import { Modal, Button, Form } from "react-bootstrap";
import "./SignupModal.css"

const SignupModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} className="animated-modal">
    <Modal.Header closeButton>
      <Modal.Title>Sign Up</Modal.Title>
    </Modal.Header>
    <Modal.Body >
      <Form>
        <Form.Group className="mb-3" controlId="signupEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signupConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      <Button variant="primary" onClick={handleClose}>Sign Up</Button>
    </Modal.Footer>
  </Modal>
);

export default SignupModal;
