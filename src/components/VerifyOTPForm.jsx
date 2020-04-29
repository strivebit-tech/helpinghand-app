import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";

export const VerifyOTPForm = ({ formSubmit }) => {
  return (
    <Formik
      initialValues={{ otp: "" }}
      validate={values => {
        const errors = {};
        if (!values.otp) {
          errors.otp = "OTP can't be empty.";
        } else if (values.otp.length !== 4) {
          errors.otp = "OTP has 4 characters.";
        }

        return errors;
      }}
      onSubmit={formSubmit}
    >
      {({ values, touched, errors, handleSubmit, handleChange }) => (
        <>
          <Form.Group>
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              autoComplete="off"
              type="tel"
              maxLength={4}
              required
              defaultValue={""}
              name="otp"
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
  );
};
