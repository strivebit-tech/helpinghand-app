import React, { useState } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import api from "../api";
import { AskHelpForm } from "./AskHelpForm";

export const AskForHelp = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const submitHelpForm = (values, { setSubmitting }) => {
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    api
      .addPerson(values)
      .then(res => {
        console.log(res);
        if (res.status === "Success") {
          setSuccess("Help submitted succesfully.");
          setShowForm(false);
        } else if (res.status === "Failed") {
          let error = "";
          for (let [value] of Object.entries(res.errors)) {
            error += `${value}, `;
          }

          setError(error);
        }
      })
      .catch(err => {
        setError("Error Processing request, try again later.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Row className="py-5" id="askforhelp">
      <Col md={9} sm={12} className="mx-auto">
        <h4 className="text-center font-weight-bold text-dark py-4">
          Submit your details to get help
        </h4>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        {showForm ? (
          <AskHelpForm formSubmit={submitHelpForm} />
        ) : (
          <div className="text-center">
            <Button
              variant={"primary"}
              onClick={() => {
                setShowForm(true);
                setError(null);
                setSuccess(null);
              }}
            >
              <strong>Submit another help</strong>
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
};
