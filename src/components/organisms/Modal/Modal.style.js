import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 600px;
  background-color: aquamarine;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;