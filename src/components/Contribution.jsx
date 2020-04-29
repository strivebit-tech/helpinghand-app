import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import auth from "../lib/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { ContributionItem } from "./ContributionItem";
import api from "../api";

export const Contribution = () => {
  const [contributions, setContributions] = useState([]);

  React.useEffect(() => {
    const id = auth.isAuthenticated();
    if (id) {
      api.getHelpDone(id).then(res => {
        if (res.status === "Success") {
          setContributions(res.data.to);
        }
      });
    }
  }, [contributions.length]);

  console.log(contributions);

  return auth.isAuthenticated() ? (
    <Row className="py-5">
      <Col md={9} className="mx-auto text-center">
        <h2 className="font-weight-bold">Your Contributions</h2>
        {contributions.length === 0 ? (
          <h6 className="text-accent">
            It looks like you don't have any contributions,{" "}
            <Link to="helpothers">Contribute Now by Helping others</Link>
          </h6>
        ) : (
          <h6 className="text-accent">
            We are very blessed for your contribution. Please make your
            continous support.
          </h6>
        )}
      </Col>
      <Col md={6} className="mx-auto mt-4">
        {contributions.length
          ? contributions.map((c, index) => (
              <ContributionItem data={c} key={index} />
            ))
          : ""}
      </Col>
    </Row>
  ) : (
    <Redirect to="/adduser" />
  );
};
