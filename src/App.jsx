import React from "react";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  vertical-align: middle;
  font-style: italic;
}

:root {
  --small-size: 4px;
  --default-size: 8px;
  --size-2x: 16px;
  --size-3x: 24px;
  --size-4x: 32px;
}
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}

export default App
