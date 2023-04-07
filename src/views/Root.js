import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import { UnAuthenticatedApp } from "./UnAuthenticatedApp";
import { useAuth } from "hooks/useAuth";

function Root() {
  const auth = useAuth();
  return <>{auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</>;
}

export default Root;
