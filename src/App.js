import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Main } from "./components/Main";
import { AskForHelp } from "./components/AskHelp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Help } from "./components/Help";
import { NavbarMenu } from "./components/NavbarMenu";
import { HelpingHeros } from "./components/HelpingHeros";
import { Adduser } from "./components/AddUser";
import { Contribution } from "./components/Contribution";
import { NotFound } from "./components/NotFound";
import userContext from "./context/userContext";
import auth from "./lib/auth";
import "react-placeholder/lib/reactPlaceholder.css";

function App() {
  const [user, setUser] = useState(auth.isAuthenticated());

  const updateUser = () => {
    setUser(auth.isAuthenticated());
  };
  return (
    <>
      <userContext.Provider value={{ user, setUser: updateUser }}>
        <BrowserRouter>
          <NavbarMenu />
          <Container>
            <Switch>
              <Route path={"/"} exact>
                <Main />
                <HelpingHeros />
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

              <Route path={"/"}>
                <NotFound />
              </Route>
            </Switch>
          </Container>

          <div className="mt-5 py-5">
            <h5 className="text-center">
              Developed with <span className="text-danger">&#9829;</span> by a
              small team.
            </h5>
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
