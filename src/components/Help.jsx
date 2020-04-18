import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const getLocation = () => {
  const geo = navigator.geolocation;
  if (!geo) {
    console.error("Geolocation not available.");
  } else {
    geo.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.error(err);
      }
    );
  }
};

export const Help = () => {
  const findPeople = () => {
    alert("We need to access your location to find people");
    getLocation();
  };
  return (
    <>
      <Row className="py-5">
        <Col md={9} sm={12} className="mx-auto text-center">
          <h2>People looking for help</h2>
          <Button variant="outline-primary" onClick={findPeople}>
            Find people
          </Button>
        </Col>
        <Col md={9} sm={12} className="mx-auto">
          <h5>No results found.</h5>
        </Col>
      </Row>
    </>
  );
};
