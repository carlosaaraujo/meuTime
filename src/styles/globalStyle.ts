import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  outline: none;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #fff;
}

body,
input,
textarea,
button {
  font-family: 'Lato', sans-serif;
}

button, a {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
