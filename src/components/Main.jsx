import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import image from "../assets/helpinghands.png";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Row className="py-5 mt-5">
        <Col sm={12} md={9} className="mx-auto text-center">
          <img
            src={image}
            width="200"
            className="img-fluid mb-3"
            alt={"Helping hands"}
          />
          <h1 className="text-accent">Join hands to fight the pandemic.</h1>
          <h4 className="font-weight-bold">#IndiaFirghtsCorona</h4>
        </Col>

        <Col
          sm={12}
          md={6}
          className="my-5 d-flex mx-auto text-center flex-md-row flex-column align-items-center justify-content-md-between justify-content-sm-center"
        >
          <div>
            <Link to="/askforhelp">
              <Button
                variant={"success"}
                size="lg"
                className="rounded-pill mb-2"
              >
                <strong> Ask for help</strong>
              </Button>
            </Link>
          </div>

          <div>
            <Link to="/helpothers">
              <Button
                type="button"
                variant={"warning"}
                size="lg"
                className="rounded-pill mb-2"
              >
                <strong>Help Others</strong>
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};
