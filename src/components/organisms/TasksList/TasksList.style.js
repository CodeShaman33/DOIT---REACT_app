import styled from "styled-components";
// import { TaskWrapper } from "components/atoms/TaskItem/TaskItem.style";


export const Wrapper = styled.div`
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
  margin-bottom: 20px;  
  padding: 30px;
  display: flex;
  flex-direction: column;

  & input {
    margin-bottom: 20px;
  }

  & select {
    margin-bottom: 20px;
  }
`
