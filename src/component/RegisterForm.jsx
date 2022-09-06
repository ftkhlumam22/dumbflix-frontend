import React from "react";
import { Modal, Button, Form, CloseButton } from "react-bootstrap";

function RegisterForm({ register, closeRegister, openLogin }) {
  const gotoLogin = () => {
    closeRegister();
    openLogin();
  };
  return (
    <Modal
      show={register}
      onHide={closeRegister}
      animation={true}
      centered
      size="sm">
      <div className="text-white rounded" style={{ background: "#141414" }}>
        <Modal.Header className="border-0" style={{ marginBottom: "-10px" }}>
          <Modal.Title className="fs-5 fw-semibold">Register</Modal.Title>
          <CloseButton variant="white" onClick={closeRegister} />
        </Modal.Header>
        <Modal.Body className="mx-2">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Gender"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Phone"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                className="bg-dark text-white"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}>
          <Button
            size="md"
            className="px-4 py-2 fw-bold bg-white text-danger"
            style={{ width: "250px" }}
            onClick={closeRegister}>
            Register
          </Button>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Don't have an account ? Klik{" "}
            <a
              onClick={gotoLogin}
              style={{
                textDecoration: "none",
                color: "gray",
                cursor: "pointer",
              }}
              className="fw-semibold">
              Here
            </a>
          </p>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default RegisterForm;
