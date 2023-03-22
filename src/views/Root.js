import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
//components
import MainTemplate from "components/templates/MainTemplate";
import Tasks from "./Tasks";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <div>
          <Tasks />
        </div>
      </MainTemplate>
    </ThemeProvider>
  );
}

export default Root;
