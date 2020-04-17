import React from "react";
import { Container, Navbar, NavbarBrand, Button, Nav } from "react-bootstrap";
import logo from "./assets/helpinghands.png";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

function App() {
  return (
    <>
      <Navbar variant="light" bg="white" className="shadow-sm">
        <NavbarBrand>
          <div className="d-flex align-items-center">
            <img src={logo} width="50" />
            <span className="m-0 ml-3 h3 text-danger font-weight-medium">
              Helping Hands
            </span>
          </div>
        </NavbarBrand>

        <NavbarCollapse className="ml-auto mr-4">
          <Nav className={"ml-auto"}>
            <Button variant="success" className="rounded-pill shadow-none">
              Ask for help
            </Button>

            <Button variant="warning" className="rounded-pill ml-3 shadow-none">
              Help Others
            </Button>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default App;
