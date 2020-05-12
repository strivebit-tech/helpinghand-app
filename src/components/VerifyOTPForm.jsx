import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";

export const VerifyOTPForm = ({ formSubmit, resendOtp, resending }) => {
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
      {({
        values,
        touched,
        errors,
        handleSubmit,
        handleChange,
        setFieldValue,
        isSubmitting
      }) => (
        <>
          <Form.Group>
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              name="otp"
              autoComplete="off"
              type="tel"
              value={values.otp}
              maxLength={4}
              onChange={e =>
                setFieldValue("otp", e.target.value.replace(/[^0-9]/, ""))
              }
              required
            ></Form.Control>
            {touched.otp && errors.otp && (
              <div className="text-sm text-danger">{errors.otp}</div>
            )}
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="w-100"
            onClick={handleSubmit}
            disabled={resending || isSubmitting}
          >
            <strong>Verify and Continue</strong>
          </Button>

          <Button
            type="submit"
            variant="secondary"
            className="w-100 mt-3"
            onClick={resendOtp}
            disabled={resending || isSubmitting}
          >
            <strong>Resend OTP</strong>
          </Button>
        </>
      )}
    </Formik>
  );
};
