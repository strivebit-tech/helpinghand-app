import React, { createRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const MyModal = ({ showModal, handleClose, item, onSave }) => {
  const [copied, setCopied] = useState(false);

  const textRef = createRef();
  const {
    name,
    mobile_no,
    family_members,
    occupation,
    street,
    city,
    state,
    id
  } = item || {};

  const copyDetailsAction = () => {
    let text = textRef.current.innerText;
    navigator.clipboard.writeText(text).then(v => {
      setCopied(true);
      onSave(id);
    });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Person Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="" ref={textRef}>
          <h5 className="font-weight-bold mb-0">{name}</h5>
          <div className="text-accent text-sm">{occupation}</div>
          <div className="text-dark font-weight-bold">{mobile_no}</div>
          <div className="d-flex justify-content-between">
            <div className="text-muted">{street + " " + city}</div>
            <div>{/* <strong>5km</strong> */}</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <strong>Close</strong>
        </Button>
        <Button variant="primary" onClick={copyDetailsAction}>
          <strong>{copied ? "Copied" : "Copy Details"}</strong>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
