import { createGlobalStyle } from 'styled-components';

const headings = [1, 2, 3, 4, 5, 6].map(number => `h${number}`).join(', ');

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    line-height: 150%;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

    ::selection {
      background: #8257e5;
      color: #fff;
    }
  }

  ${headings} {
    line-height: 133%;
    margin: 0;
  }

  body {
    background-color: #121214;
    color: #fff;
  }

  body, input, button, textarea {
    font-family: 400 1rem 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
