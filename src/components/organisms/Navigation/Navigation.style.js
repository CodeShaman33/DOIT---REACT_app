import styled from "styled-components";
// import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.lightViolet};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;
// styled(NavLink).attrs({ activeClassName })`
// const activeClassName = 'active-link';
export const StyledLink = styled.div`
  border: ${({ theme }) => theme.uniBorder};
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &::after {
    opacity: 1;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: -17px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
