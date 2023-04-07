import React from "react";
// import { Switch, Route } from "react-router-dom";
//components
import AuthenticatedApp from "./AuthenticatedApp";
// import { async } from "q";
import {
  UnAuthenticatedApp,
  handleSignIn,
  logInWithCookies,
} from "./UnAuthenticatedApp";
import AppProviders from "providers/AppProviders";
// import { AuthProvider, useAuth } from "hooks/useAuth";

function Root() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    logInWithCookies(setUser, setError);
  }, []);

  return (
    <AppProviders>
       
          {user ? (
            <AuthenticatedApp />
          ) : (
            <UnAuthenticatedApp
              loginError={error}
              setUser={setUser}
              setError={setError}
              handleSignIn={handleSignIn}
            />
          )}
        

    </AppProviders>
  );
}

export default Root;
