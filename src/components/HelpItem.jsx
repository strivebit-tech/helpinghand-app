import React, { createRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
export const HelpItem = ({ data, onHelpPress }) => {
  const { name, occupation, street, city, state } = data;
  return (
    <Col className="mb-3">
      <Row className={"bg-white border border rounded align-items-center py-2"}>
        <Col sm={9}>
          <div className="">
            <h5 className="font-weight-bold mb-0">{name}</h5>
            <div className="text-accent text-sm">{occupation}</div>
            <div className="d-flex justify-content-between">
              <div className="text-muted">{street + " " + city}</div>
              <div>
                <strong>5km</strong>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className="text-right">
            <Button
              variant={"outline-success"}
              size="sm"
              onClick={() => {
                onHelpPress(data);
              }}
              className="w-100"
            >
              <strong>Help</strong>
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
