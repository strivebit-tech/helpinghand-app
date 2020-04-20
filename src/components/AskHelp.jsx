import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Geocode from "../lib/Geocode";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

export const AskForHelp = () => {
  console.log("GEOCODE", Geocode);
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    address: "",
    member: 0
  });
  const submitForm = e => {
    e.preventDefault();
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
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
            {/* <Form.Control
              name={"address"}
              onChange={handleChange}
              type="text"
            ></Form.Control> */}

            <PlacesAutocomplete
              value={values.address}
              onChange={address => {
                const v = { ...values, address };
                setValues(v);
              }}
              className="form-control"
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Start typing your address ...",
                      className: "form-control"
                    })}
                  />
                  <div className="bg-white shadow-sm">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? "px-3 py-2 bg-light"
                        : "px-3 py-2";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
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
