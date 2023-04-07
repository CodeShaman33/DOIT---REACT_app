import React from "react";
import MainTemplate from "components/templates/MainTemplate";
import Tasks from "./Tasks";



const AuthenticatedApp = () => {
    return (
      <MainTemplate>
        <Tasks />
      </MainTemplate>
    );
  };

  export default AuthenticatedApp;
  