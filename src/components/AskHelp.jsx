import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Geocode from "../lib/Geocode";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Formik } from "formik";
import api from "../api";

export const AskForHelp = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("Position", position);

  const checkPermission = () => {
    navigator.permissions.query({ name: "geolocation" }).then(function(result) {
      if (result.state === "granted") {
        getPosition(setPosition, setError);
      } else if (result.state === "prompt") {
        getPosition(setPosition, setError);
      } else if (result.state === "denied") {
        setError("User permission denied");
      }
    });
  };

  const getPosition = (setPosition, setError) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setPosition(position);
        setLoading(true);
        api
          .getAddressfromLocation(
            position.coords.latitude,
            position.coords.longitude
          )
          .then(res => {
            if (res.error) {
              console.log("Error", res);
            } else {
              console.log(res.results);
            }
          });
      },
      error => setError(error.message)
    );
  };

  return (
    <Row className="py-5 mt-5" id="askforhelp">
      <Col md={6} sm={12} className="mx-auto">
        <h3 className="text-center text-dark py-4">
          Submit your details to get help
        </h3>
        <Formik
          initialValues={{
            name: "",
            mobile: "",
            occupation: "",
            address: "",
            member: 0
          }}
          onSubmit={values => {
            console.log(values);
          }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name is required";
            }
            if (!values.mobile) {
              errors.mobile = "Mobile is required.";
            } else if (values.mobile.length !== 10) {
            }
          }}
        >
          {({ values, handleChange, handleSubmit, touched, errors }) => (
            <>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  value={values.occupation}
                  type="text"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  value={values.mobile}
                  type="tel"
                  maxLength="10"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Address
                  <span className="ml-3" onClick={checkPermission}>
                    Use current location
                  </span>
                </Form.Label>
                <Form.Control
                  value={values.occupation}
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

              <Button disabled={loading} type="submit" variant="primary">
                <strong> Submit help</strong>
              </Button>
            </>
          )}
        </Formik>
      </Col>
    </Row>
  );
};
