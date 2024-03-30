import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

html {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
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

  --main-color: #FFC72C;
  --second-color: #FEB706;
}
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}

export default App
