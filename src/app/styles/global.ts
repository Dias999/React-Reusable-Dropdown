import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  body {
    background-color: #1a1c23;
    min-height: 100vh;
    font-family: "Open Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  #root {
    position: relative;
  }

  .App {
    min-height: 100vh;
    color: white;
  }
`;
