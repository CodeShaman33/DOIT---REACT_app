import styled from "styled-components";
import { Button } from "components/atoms/Button/Button";

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: ${({ theme }) => theme.uniBorder};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
`;

export const SearchButton = styled(Button)`
width: 24%;
height: 40%;
border-radius: 6px;
  margin-left: 60px;
`;


export const Input = styled.input`
width: 70%;
height: 30%;
background-color: grey;
outline: none;
border: none;
border-radius: 10px;
cursor: pointer;
  /* padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  font-size: ${({ theme }) => theme.fontSize.l};
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  } */
`;