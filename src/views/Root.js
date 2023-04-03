import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Wrapper, FormWrapper } from "./Root.style";
//components
import MainTemplate from "components/templates/MainTemplate";
import Tasks from "./Tasks";

//authenticated app
const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <MainTemplate>
        <Switch>
          <Route path="/" exact>
            <Tasks />
          </Route>
        </Switch>
      </MainTemplate>
    </Wrapper>
  );
};

//UnauthenticatedApp
const UnauthenticatedApp = () => {
  return (
    <FormWrapper>
      <form action="">
        <label htmlFor="login" name="login" id="loginLabel">
          Enter login:
        </label>
        <input type="text" id="login" />
        <label htmlFor="password" name="password" id="passwordLabel">
          Enter password:
        </label>
        <input type="password" id="password" />
        <button type="submit" id="formButton">Log In</button>
      </form>
    </FormWrapper>
  );
};

function Root() {
  const [user, setUser] = React.useState(null)

  const login = (data) => {
    
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ThemeProvider>
    </Router>
  );
}

export default Root;
