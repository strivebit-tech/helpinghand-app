import React, { useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { Main } from "./components/Main";
import { AskForHelp } from "./components/AskHelp";
import { BrowserRouter, Route } from "react-router-dom";
import { Help } from "./components/Help";
import { NavbarMenu } from "./components/NavbarMenu";
import { HelpingHeros } from "./components/HelpingHeros";
import { Gallery } from "./components/Gallery";
import { Adduser } from "./components/AddUser";
import { Contribution } from "./components/Contribution";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMenu />
        <Container>
          <Route path={"/"} exact>
            <Main />
            <HelpingHeros />
            {/* <Gallery /> */}
          </Route>
          <Route path={"/askforhelp"}>
            <AskForHelp />
          </Route>

          <Route path={"/helpothers"}>
            <Help />
          </Route>

          <Route path={"/adduser"}>
            <Adduser />
          </Route>

          <Route path={"/contributions"}>
            <Contribution />
          </Route>
        </Container>

        <div className="mt-5 py-5">
          <h5 className="text-center">
            Developed with <span className="text-danger">&#9829;</span> by a
            small team.
          </h5>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
