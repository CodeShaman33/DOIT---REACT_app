import { ViewWrapper } from "components/templates/ViewWrapper";
import { Button } from "../Button/Button";

import styled from "styled-components";

export const TaskWrapper = styled(ViewWrapper)`
  background-color: ${(props) => {
    if(props.checked) {
      return 'green';
    }
    else {
      switch(props.priority) {
        case 1: return 'red';
        case 2: return 'orange';
        case 3: return 'violet';
        case 4: return 'grey';
        default: return 'white';
      }
    }
  }};
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  min-height: 100px;
  max-height: 200px;
  margin: 0;
  margin-bottom: 14px;
  border-radius: 13px;
  position: relative;

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
  margin-left: 30px;

  & .content {
    width: 100%;
    height: auto;
  }

  & .add-ons {
    position: absolute;
    right: 10px;
    bottom: 10px;

    & select {
      margin-right: 20px;
    }
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

export const TaskText = styled.div`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
