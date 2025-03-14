import { css } from "lit";

export const resetStyles = css`
@layer reset {
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Set core body defaults */

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /* Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input, button,
  textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Remove default margin */
  * {
    margin: 0;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }
}
`;