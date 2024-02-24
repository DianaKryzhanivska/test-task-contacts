import { ContactData } from 'components/Contacts/Contacts.styled';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const Contact = styled(ContactData)`
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DeleteBtn = styled.button`
  padding: 5px 25px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: #fff;
  font-size: 16px;
`;

export const CancelBtn = styled.button`
  padding: 5px 25px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue};
  color: #fff;
  font-size: 16px;
`;
