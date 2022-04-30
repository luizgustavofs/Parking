import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body, input, textarea, select, button, text {
    font: 400 1rem "Open Sans", sans-serif;
    overflow: hidden;
    display: flex;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5 {
    font: 400 1rem "Open Sans", sans-serif;
    &.bold{
      font-weight: bold;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1}rem;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2}rem;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3}rem;
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h4}rem;
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.h5}rem;
  }

`;
