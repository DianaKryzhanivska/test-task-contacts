import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`;
