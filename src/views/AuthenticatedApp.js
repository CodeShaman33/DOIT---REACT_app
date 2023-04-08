import React from "react";
import MainTemplate from "components/templates/MainTemplate";
import Tasks from "./Tasks";
import Notes from "./Notes";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route path="/" exact>
            <Tasks />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>

        {/* <Tasks /> */}
      </MainTemplate>
    </BrowserRouter>
  );
};

export default AuthenticatedApp;
