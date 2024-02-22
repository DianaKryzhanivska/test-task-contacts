import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const ContactsContainer = styled(Container)`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;

  & input {
    width: 300px;
    height: 20px;
    border-radius: 0 10px 10px 0;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    border-left: none;
  }
`;

export const SearchBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 18px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
`;

export const ContactData = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
