import React from "react";
import { Formik } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";
import { states } from "../lib/states";

export const AskHelpForm = ({ formSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          mobile_no: "",
          occupation: "",
          street: "",
          city: "",
          state: "",
          family_members: 0,
          pincode: ""
        }}
        onSubmit={formSubmit}
        validateOnChange={true}
        validateOnBlur={true}
        validate={values => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          } else if (!(values.name.length >= 3 && values.name.length <= 30)) {
            errors.name = "Minimum 3 characters, Maximum 30 characters";
          }
          if (!values.mobile_no) {
            errors.mobile_no = "Mobile is required.";
          } else if (values.mobile_no.length !== 10) {
            errors.mobile_no = "Mobile is invalid.";
          }

          if (!values.street) {
            errors.street = "Street Address is required.";
          } else if (values.street.length > 50) {
            errors.street =
              "Street Address should be less than or equal to 50 characters.";
          }

          if (!values.city) {
            errors.city = "City is required.";
          }

          if (!values.state) {
            errors.state = "Address is required.";
          }

          if (!values.occupation) {
            errors.occupation = "Occupation is required.";
          }
          if (!values.pincode) {
            errors.pincode = "Pincode is required.";
          } else if (values.pincode.length !== 6) {
            errors.pincode = "Pincode is invalid.";
          }

          return errors;
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          touched,
          errors,
          isSubmitting
        }) => (
          <>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={values.name}
                    onChange={e =>
                      e.target.value.match(/^([A-Za-z]\s?)*$/) &&
                      handleChange(e)
                    }
                    type="text"
                  ></Form.Control>
                  {touched.name && errors.name && (
                    <div className="text-sm text-danger">{errors.name}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    name="occupation"
                    value={values.occupation}
                    type="text"
                    onChange={e =>
                      e.target.value.match(/^[A-Za-z]*$/) && handleChange(e)
                    }
                  ></Form.Control>
                  {touched.occupation && errors.occupation && (
                    <div className="text-sm text-danger">
                      {errors.occupation}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    name="mobile_no"
                    value={values.mobile_no}
                    type="tel"
                    maxLength="10"
                    pattern="[0-9]*"
                    onChange={e =>
                      setFieldValue(
                        "mobile_no",
                        e.target.value.replace(/\D/, "")
                      )
                    }
                  ></Form.Control>

                  {touched.mobile_no && errors.mobile_no && (
                    <div className="text-sm text-danger">
                      {errors.mobile_no}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>
                    Family Members <small>(Optional)</small>
                  </Form.Label>
                  <Form.Control
                    name={"family_members"}
                    onChange={e =>
                      setFieldValue(
                        "family_members",
                        e.target.value.replace(/\D/, "")
                      )
                    }
                    type="text"
                    pattern={"[0-9]*"}
                    min={0}
                    max={9}
                    maxLength={1}
                    value={values.family_members}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="d-block w-100">
                    Street Address
                  </Form.Label>
                  <Form.Control
                    name="street"
                    value={values.street}
                    onChange={e =>
                      setFieldValue(
                        "street",
                        e.target.value.replace(/[^a-zA-Z0-9, ]/, "")
                      )
                    }
                    type="text"
                  ></Form.Control>
                  {touched.street && errors.street && (
                    <div className="text-sm text-danger">{errors.street}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="d-block w-100">City</Form.Label>
                  <Form.Control
                    name={"city"}
                    value={values.city}
                    onChange={e =>
                      e.target.value.match(/^([A-Za-z]\s?)*$/) &&
                      handleChange(e)
                    }
                    type="text"
                  ></Form.Control>
                  {touched.city && errors.city && (
                    <div className="text-sm text-danger">{errors.city}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="d-block w-100">State</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={""}
                    onChange={handleChange}
                    name="state"
                  >
                    <option value="">Select State</option>
                    {states.map((state, i) => (
                      <option key={i} value={state}>
                        {state}
                      </option>
                    ))}
                  </Form.Control>
                  {touched.state && errors.state && (
                    <div className="text-sm text-danger">{errors.state}</div>
                  )}
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="d-block w-100">Pincode</Form.Label>
                  <Form.Control
                    value={values.pincode}
                    onChange={e => {
                      setFieldValue(
                        "pincode",
                        e.target.value.replace(/\D/, "")
                      );
                    }}
                    name="pincode"
                    maxLength="6"
                    type="tel"
                  />
                  {touched.pincode && errors.pincode && (
                    <div className="text-sm text-danger">{errors.pincode}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Button
              disabled={isSubmitting}
              type="submit"
              onClick={handleSubmit}
              variant="primary"
            >
              <strong> Submit help</strong>
            </Button>
          </>
        )}
      </Formik>
    </>
  );
};
