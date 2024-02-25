import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const ContactsContainer = styled(Container)`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  & input {
    width: 300px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    border-left: none;
    border-right: none;

    @media only screen and (min-width: 768px) {
      height: 25px;
    }

    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 35px;
    }
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.darkBlue};

    @media only screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const SearchBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px 0 0 10px;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 18px;

    @media only screen and (min-width: 1440px) {
      font-size: 24px;
    }
  }
`;

export const ResetFilterBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 0 10px 10px 0;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 20px;

    @media only screen and (min-width: 1440px) {
      font-size: 26px;
    }
  }
`;

export const ContactsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1200px;
  }
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 30px;
`;

export const ContactList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  & img {
    width: 40px;
    height: 40px;
  }

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 70px;
    padding: 10px 15px;

    & img {
      width: 60px;
      height: 60px;
    }
  }

  @media only screen and (min-width: 1440px) {
    width: 350px;
  }
`;

export const ContactData = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & h3 {
    font-weight: bold;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    font-size: 26px;

    @media only screen and (min-width: 1440px) {
      font-size: 32px;
    }
  }
`;
