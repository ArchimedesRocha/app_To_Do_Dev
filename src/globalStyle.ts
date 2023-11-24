// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  /* Gray Scale */
  --gray-100: #F2F2F2;
  --gray-200: #D9D9D9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1A1A1A;
  --gray-700: #0D0D0D;

  /* Blue Scale */
  --blue:#4EA8DE;
  --blue-dark:#1E6F9F;

  /* Purple Scale */
  --purple:#8284FA;
  --purple-dark:#5E60CE;

  /* General Colors */
  --black: #000000;
  --white: #ffffff;
  --danger: #E25858;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  color: var(--white);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  text-rendering: optimizeLegibility;
  //border: 1px solid red;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

html {
  width: 100vw;
  background: var(--gray-600);
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @include responsive(991px) {
    font-size: 50%;
  }
  @include responsive(500px) {
    font-size: 48%;
  }
}

body {
  display: flex;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #fbfbfc;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $color-brand-red;
  }
}

button,
a {
  background-color: transparent;
  cursor: pointer;
}

`;

export default GlobalStyle;
