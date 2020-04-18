import React, { useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { Main } from "./components/Main";
import { AskForHelp } from "./components/AskHelp";
import { BrowserRouter, Route } from "react-router-dom";
import { Help } from "./components/Help";
import { NavbarMenu } from "./components/NavbarMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMenu />
        <Container fluid>
          <Route path={"/"} exact>
            <Main />
          </Route>
          <Route path={"/askforhelp"}>
            <AskForHelp />
          </Route>

          <Route path={"/helpothers"}>
            <Help />
          </Route>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
