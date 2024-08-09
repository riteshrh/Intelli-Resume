// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #f5f5f5; /* Light cream background */
    color: #1f1f1f; /* Soft black text color */
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
