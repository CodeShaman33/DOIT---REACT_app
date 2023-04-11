import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "hooks/useAuth";
import { store } from "store";
import { Provider } from "react-redux";

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyle />
            <Switch>{children}</Switch>
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
