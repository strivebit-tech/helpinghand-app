import React, { useState, useContext } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { ContributionItem } from "./ContributionItem";
import api from "../api";
import { Loader } from "./Loader";
import userContext from "../context/userContext";
import ReactPlaceholder from "react-placeholder/lib";

export const Contribution = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(userContext);

  const getHelpDone = () => {
    if (user) {
      setLoading(true);
      api
        .getHelpDone(user)
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
  };

  React.useEffect(() => {
    getHelpDone();
  }, [contributions.length, user]);

  return user ? (
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
        {error && <Alert variant="danger">{error}</Alert>}
        {/* <Loader loading={loading} /> */}
        <ReactPlaceholder
          type={"text"}
          ready={!loading}
          rows={3}
          showLoadingAnimation={true}
        >
          {contributions.length
            ? contributions.map((c, index) => (
                <ContributionItem data={c} key={index} />
              ))
            : ""}
        </ReactPlaceholder>
      </Col>
    </Row>
  ) : (
    <Redirect to="/adduser" />
  );
};
