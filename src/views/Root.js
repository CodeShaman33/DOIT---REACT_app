import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import MainTemplate from "components/templates/MainTemplate";
import Tasks from "./Tasks";
function Root() {
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/" exact>
              <Tasks />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
