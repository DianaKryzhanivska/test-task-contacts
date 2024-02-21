import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const HeaderContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
