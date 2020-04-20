import React from "react";
import { Row, Col } from "react-bootstrap";

export const Gallery = () => {
  return (
    <Row className="py-5">
      <Col md={9} className="mx-auto">
        <h2 className="text-center font-weight-bold">Image Gallery</h2>
      </Col>
      <Col md={12} className="mx-auto">
        <div className="d-flex flex-wrap justify-content-center">
          {[220, 300, 340, 400, 200].map((image, k) => (
            <img
              key={k}
              src={`https://picsum.photos/${image}`}
              alt={`Image ${k}`}
              width={Math.min(220, 300, 340, 400, 200)}
              className="img-fluid"
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};
