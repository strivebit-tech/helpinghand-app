import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/helpinghands.png";

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
            <span className="m-0 ml-3 h3 text-accent2 font-weight-medium">
              Helping Hands
            </span>
          </div>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="ml-auto mr-4" id="basic-navbar-nav">
        <Nav className={"ml-auto"}>
          <strong>
            {time.toDateString() + " " + time.toLocaleTimeString()}
          </strong>
          {/* <Nav.Item>
              <Button variant="success" className="rounded-pill shadow-none">
                Ask for help
              </Button>
            </Nav.Item>

            <Nav.Item className="ml-md-3">
              <Button variant="warning" className="rounded-pill  shadow-none">
                Help Others
              </Button>
            </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
