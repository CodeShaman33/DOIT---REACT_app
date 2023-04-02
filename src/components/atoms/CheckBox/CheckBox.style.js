import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  appearance: radio;
  border: none;
  background-color: ${props =>
  {
   switch(props.priority) {
    case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "yellow";
      default:
        return "gray";
   }
   
  } };
  border-radius: 22%;
`;
