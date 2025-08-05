import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./LoginModal.css"

const LoginModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}  className="animated-modal">
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body >
      <Form>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Login
      </Button>
    </Modal.Footer>
  </Modal>
);

export default LoginModal;
