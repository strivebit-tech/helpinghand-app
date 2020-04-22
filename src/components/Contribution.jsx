import React from "react";
import { Row, Col } from "react-bootstrap";
import auth from "../lib/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const contributions = [];

export const Contribution = () => {
  React.useEffect(() => {
    auth.setAuthentication("7880329858");
  }, []);

  return auth.isAuthenticated() ? (
    <Row className="py-5">
      <Col md={9} className="mx-auto text-center">
        <h2 className="font-weight-bold">Your Contributions</h2>
        {contributions.length === 0 ? (
          <h6 className="text-accent">
            It looks like you don't have any contributions,{" "}
            <Link to="helpothers">Contribute Now</Link>
          </h6>
        ) : (
          <h6 className="text-accent">
            We are very blessed for your contribution. Please make your
            continous support.
          </h6>
        )}
      </Col>
    </Row>
  ) : (
    <Redirect to="/adduser" />
  );
};
