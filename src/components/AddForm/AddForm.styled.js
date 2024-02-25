import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;

  @media only screen and (min-width: 1440px) {
    font-size: 26px;
  }
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

  & input {
    font-size: 18px;
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
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  transition: transform 0.2s ease 0s, background-color 0.2s ease 0s;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    transform: scale(1.1);
  }

  @media only screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
