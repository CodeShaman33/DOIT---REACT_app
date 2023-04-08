import React from "react";
import { useAuth } from "hooks/useAuth";
import { StyledLink, Logo } from "./Navigation.style";
import { Wrapper } from "./Navigation.style";
import { Link } from "react-router-dom";
const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          DOIT
          <br />
          brotha
        </h1>
      </Logo>
      <StyledLink >
        <Link to='/' >Dashboard</Link>
      </StyledLink>
      <StyledLink >
        <Link to='/notes' >Notes</Link>
      </StyledLink>
      {/* <StyledLink to="/group">Dashasdsboard</StyledLink> */}
      <StyledLink as="a" onClick={auth.signOut}>
        Log out
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
