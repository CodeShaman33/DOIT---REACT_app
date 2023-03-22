import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom:${({ theme }) => theme.uniBorder};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  `;

export const SearchButton = styled(Button)`
    margin-left: 10px;
`