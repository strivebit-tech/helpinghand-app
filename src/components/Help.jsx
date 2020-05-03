import React, { useState, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { HelpItem } from "./HelpItem";
import { MyModal } from "./Modal";
import api from "../api";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";

export const Help = () => {
  //Get user from context
  const { user } = useContext(userContext);

  const [initial, setInitial] = useState(true);
  const [finding, setFinding] = useState(false);
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const handleClose = () => {
    setShowModal(false);
  };

  const findPeople = () => {
    setError(null);
    setSuccess(null);
    const { latitude, longitude } = position.coords || {};
    api
      .getNearbyPerson({ latitude, longitude })
      .then(res => {
        if (res.status === "Success") {
          setData(res.data);
          if (!res.data.length) {
            setError("No people found.");
          }
        } else {
          setError("Error finding persons.");
        }
      })
      .catch(err => setError("Error finding persons."))
      .finally(() => {
        setFinding(false);
      });
  };

  React.useEffect(() => {
    if (position.coords) {
      findPeople();
    }
  }, [position.coords]);

  const doHelp = needy_id => {
    api
      .doHelp(needy_id, user)
      .then(res => {
        if (res.status === "Success") {
          setSuccess("Wonderful, you can now contact person to help him.");
        } else {
          setError("Oops, There is problem somewhere.");
        }
      })
      .catch(error => setError("Some error has occured."));
  };

  const findnearByPeople = () => {
    setFinding(true);
    setInitial(false);
    navigator &&
      navigator.permissions &&
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function(result) {
          if (result.state === "granted") {
            getPosition(setPosition, setError);
          } else if (result.state === "prompt") {
            getPosition(setPosition, setError);
          } else if (result.state === "denied") {
            setError("Please enable location access in site setting.");
            setFinding(false);
          }
        });
  };

  const getPosition = (setPosition, setError) => {
    console.log("GET POSTITON");
    if (!navigator.geolocation) {
      setError("Location not available");
    }
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(setPosition, error => {
        setError(error.message);
        setFinding(false);
      });
  };

  const helpPress = helpitem => {
    if (!user) {
      window.location.href = "adduser?c=helpothers";
      return;
    }
    setShowModal(true);
    setModalItem(helpitem);
  };

  return (
    <>
      {showModal && (
        <MyModal
          showModal={showModal}
          handleClose={handleClose}
          onSave={doHelp}
          item={modalItem}
        />
      )}
      <Row className="py-5">
        <Col md={9} sm={12} className="text-center  mx-auto ">
          <h4>People looking for help</h4>
          {user ? (
            !finding && (
              <Button
                className="mt-3"
                variant="primary"
                onClick={findnearByPeople}
              >
                <strong>{data.length ? "Refresh" : "Find people"}</strong>
              </Button>
            )
          ) : (
            <Link to="/adduser?c=helpothers">
              <Button variant="accent">
                <strong>Login to Help</strong>
              </Button>
            </Link>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={9} sm={12} className="mx-auto">
          <div className="text-center">
            {error && <h6 className="text-danger">{error}</h6>}
            {success && <h6 className="text-success">{success}</h6>}
          </div>

          {/* <h5>No results found.</h5> */}
        </Col>
        <Col md={9} className={"mt-4 mx-auto"}>
          <Loader loading={finding} />
          {!finding
            ? data.length
              ? data.map((i, k) => (
                  <HelpItem
                    data={i}
                    key={k}
                    onHelpPress={() => {
                      helpPress(i);
                    }}
                  />
                ))
              : !initial && "No people found"
            : ""}
        </Col>
      </Row>
    </>
  );
};
