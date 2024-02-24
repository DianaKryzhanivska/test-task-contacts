import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const HeaderContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.lightBlue};
  &.active {
    color: ${({ theme }) => theme.colors.darkBlue};
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const AddBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    fill: #fff;
    font-size: 24px;

    @media only screen and (min-width: 1440px) {
      font-size: 34px;
    }
  }
`;
