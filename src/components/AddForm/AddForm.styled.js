import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & label {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  & span {
    color: red;
    font-size: 14px;
  }

  & input.error {
    border: 1px solid red;
  }
`;

export const SubmitBtn = styled.button`
  padding: 5px 25px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.lightBlue};
`;
