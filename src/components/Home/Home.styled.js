import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const HomeContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 60px;
  text-align: center;

  & span {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: bold;
    font-style: italic;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 600px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 900px;
  }
`;

export const ActionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 60px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  background: ${({ theme }) => theme.colors.lightBlue};

  & svg {
    font-size: 20px;
  }

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 10px 15px;
    width: 400px;
    height: 50px;

    & svg {
      font-size: 28px;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  color: #fff;
  display: inline-flex;
  transition: transform 0.2s ease 0s, background-color 0.2s ease 0s;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};
    transform: scale(1.1);
  }
`;
