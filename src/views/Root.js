import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import {theme} from "assets/styles/theme";
//components
import MainTemplate from "components/templates/MainTemplate";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        asdaff
      </MainTemplate>
    </ThemeProvider>
  );
}

export default Root;
