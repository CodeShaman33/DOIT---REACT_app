import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          DOIT
          <br />
          brotha
        </h1>
      </Logo>
      <StyledLink to="/group">Dashasdasboard</StyledLink>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/group">Dashasdsboard</StyledLink>
    </Wrapper>
  );
};

export default Navigation;