import { ViewWrapper } from "components/templates/ViewWrapper";
import { Button } from "../Button/Button";

import styled from "styled-components";

export const TaskWrapper = styled(ViewWrapper)`
  background-color: #28989c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  min-height: 100px;
  max-height: 200px;
  margin: 0;
  margin-bottom: 14px;
  border-radius: 13px;

  &:first-child {
    margin-right: 100px;
  }

  & *,
  *::after,
  *::before {
    /* border: ${({ theme }) => theme.uniBorder}; */
  }

  & > *:not(.check-box) {
    min-height: 80px;
    max-height: auto;
  }

 
`;

export const MainArea = styled.div`
  width: 67%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .content {
    width: 100%;
    height: auto;
  }

  & .add-ons {
    width: 100%;
    flex: 1;
  }
`;

export const Options = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TaskButton = styled(Button)`
  margin: 0;
  width: 100%;
  padding: 5px 0;
  border-radius: 10px;
`;

