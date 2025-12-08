// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --caras-font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--caras-font);
    background: #fff;
    color: #111;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }
`;
