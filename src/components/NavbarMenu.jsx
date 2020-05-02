import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/helpinghands.png";
import auth from "../lib/auth";

export const NavbarMenu = () => {
  const [time, setTime] = useState(new Date());

  React.useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);
  return (
    <Navbar
      expand="md"
      variant="light"
      bg="white"
      className="border-bottom border-light"
    >
      <Link to="/">
        <Navbar.Brand>
          <div className="d-flex align-items-center">
            <img src={logo} width="50" alt={"Helping Hands "} />
            <strong className="m-0 ml-3 text-danger font-weight-bold">
              Helping Hands
            </strong>
          </div>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className={"ml-auto mr-2 align-items-center"}>
          <Link to="/askforhelp" className="nav-link">
            <Nav.Item className="text-accent">
              <strong>Ask for help</strong>
            </Nav.Item>
          </Link>
          <Link to="/helpothers" className="nav-link">
            <Nav.Item className="text-success">
              <strong>Help Others</strong>
            </Nav.Item>
          </Link>
          {auth.isAuthenticated() ? (
            <Link to="/contributions" className="nav-link">
              <Nav.Item>
                <Button variant="light" className="rounded-pill shadow-none">
                  <strong>Your Contributions</strong>
                </Button>
              </Nav.Item>
            </Link>
          ) : (
            ""
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
