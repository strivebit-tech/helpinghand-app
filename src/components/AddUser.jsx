import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";

export const Adduser = () => {
  const [values, setValues] = useState({ name: "", mobile: "", otp: "" });
  const [validated, setValidated] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form");
  };

  const sendOTP = () => {
    setOtpSent(true);
    const v = { ...values, otp: "1111" };
    setValues(v);
  };

  //   const handleChange = e => {
  //     const v = { ...values, [e.target.name]: e.target.value };
  //     setValues(v);
  //   };
  return (
    <>
      <Row className="py-5">
        <Col md="9" sm="12" className="mx-auto">
          <h2 className="text-center">Please fill the details to continue</h2>
        </Col>

        <Col md="4" sm="12" className="mx-auto mt-5">
          {!otpSent ? (
            <Formik
              initialValues={{ name: "", mobile: "" }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Name can't be empty.";
                }

                if (!values.mobile) {
                  errors.mobile = "Mobile can't be empty.";
                } else if (values.mobile.length != 10) {
                  errors.mobile = "Invalid mobile.";
                }

                return errors;
              }}
              onSubmit={values => console.log(values)}
            >
              {({
                values,
                touched,
                errors,
                setSubmitting,
                handleChange,
                handleSubmit
              }) => (
                <>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      value={values.name}
                      type="text"
                      onChange={handleChange}
                      required
                    ></Form.Control>
                    {touched.name && errors.name && (
                      <div className="text-sm text-danger">{errors.name}</div>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      name="mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      type="tel"
                      maxLength={10}
                      required
                    ></Form.Control>
                    {touched.mobile && errors.mobile && (
                      <div className="text-sm text-danger">{errors.mobile}</div>
                    )}
                  </Form.Group>

                  <Button
                    type="button"
                    variant="accent"
                    className="w-100"
                    onClick={handleSubmit}
                  >
                    <strong>GET OTP</strong>
                  </Button>
                </>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{ otp: "" }}
              validate={values => {
                const errors = {};
                if (!values.otp) {
                  errors.otp = "OTP can't be empty.";
                } else if (values.otp.length != 4) {
                  errors.otp = "Invalid OTP.";
                }

                return errors;
              }}
              onSubmit={values => console.log(values)}
            >
              {({ values, touched, errors, handleSubmit, handleChange }) => (
                <>
                  <Form.Group>
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      name="otp"
                      value={values.otp}
                      type="tel"
                      maxLength={4}
                      required
                      onChange={handleChange}
                    ></Form.Control>
                    {touched.otp && errors.otp && (
                      <div className="text-sm text-danger">{errors.otp}</div>
                    )}
                  </Form.Group>

                  <Button
                    type="button"
                    variant="primary"
                    className="w-100"
                    onClick={handleSubmit}
                  >
                    <strong>Verify and Continue</strong>
                  </Button>
                </>
              )}
            </Formik>
          )}
        </Col>
      </Row>
    </>
  );
};
