import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 1016px;
  }

  body {
    background: #647aa3;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #011627;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
