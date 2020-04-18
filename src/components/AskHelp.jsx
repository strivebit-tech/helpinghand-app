import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const AskForHelp = () => {
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    address: "",
    member: 0
  });
  const submitForm = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const v = { ...values, [e.target.name]: e.target.value };
    setValues(v);
  };
  return (
    <Row className="py-5 mt-5" id="askforhelp">
      <Col md={6} sm={12} className="mx-auto">
        <h3 className="text-center text-dark py-4">
          Submit your details to get help
        </h3>

        <Form onSubmit={submitForm} method="POST" action="">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name={"name"}
              onChange={handleChange}
              type="text"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              name={"mobile"}
              type="tel"
              maxLength="10"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              name={"address"}
              onChange={handleChange}
              type="text"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Family Members <small>(Optional)</small>
            </Form.Label>
            <Form.Control
              name={"member"}
              onChange={handleChange}
              type="number"
              min={0}
              value={values.member}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            <strong> Submit help</strong>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
