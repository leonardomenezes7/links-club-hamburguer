import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`