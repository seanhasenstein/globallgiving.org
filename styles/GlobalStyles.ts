import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  background-color: #F9FAFB;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  outline-color: #4338ca;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  width: 100%;
}

p {
  line-height: 1.65;
}

button {
  cursor: pointer;
}

.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
`;
