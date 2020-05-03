import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";

export const DetailsForm = ({ formSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", mobile: "" }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is required.";
        }

        if (!values.mobile) {
          errors.mobile = "Mobile is required.";
        } else if (values.mobile.length !== 10) {
          errors.mobile = "Invalid mobile.";
        }

        return errors;
      }}
      onSubmit={formSubmit}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        setFieldValue
      }) => (
        <>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={values.name}
              type="text"
              onChange={e =>
                e.target.value.match(/^([A-Za-z]\s?)*$/) && handleChange(e)
              }
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
              onChange={e =>
                setFieldValue("mobile", e.target.value.replace(/\D/, ""))
              }
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
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            <strong>GET OTP</strong>
          </Button>
        </>
      )}
    </Formik>
  );
};
