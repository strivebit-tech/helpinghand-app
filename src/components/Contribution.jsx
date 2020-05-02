import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import auth from "../lib/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { ContributionItem } from "./ContributionItem";
import api from "../api";
import { Loader } from "./Loader";

export const Contribution = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const id = auth.isAuthenticated();
    if (id) {
      setLoading(true);
      api
        .getHelpDone(id)
        .then(res => {
          if (res.status === "Success") {
            setContributions(res.data.to);
          } else {
            setError("Unable to get contributions");
          }
        })
        .catch(err => {
          setError("Unable to get contributions");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [contributions.length]);

  return auth.isAuthenticated() ? (
    <Row className="py-5">
      <Col md={9} className="mx-auto text-center">
        <h2 className="font-weight-bold">Your Contributions</h2>
        {!loading && contributions.length === 0 ? (
          <h6 className="text-muted">
            It looks like you don't have any contributions,{" "}
            <Link to="helpothers">Contribute Now by Helping others</Link>
          </h6>
        ) : (
          <h6 className="text-muted">
            We are very blessed for your contribution. Please make your
            continous support.
          </h6>
        )}
      </Col>
      <Col md={6} className="mx-auto mt-4">
        <Loader loading={loading} />
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
