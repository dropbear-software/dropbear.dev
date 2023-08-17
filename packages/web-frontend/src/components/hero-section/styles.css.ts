import { css } from "lit";

export const heroStyles = css`
  [data-component="hero-section"] {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  [data-component="hero-section"] [data-section="text"]{
    max-width: 90ch;
  }

  [data-component="hero-section"] [data-section="cta"]{
    --md-filled-button-container-shape: 10px;
    --md-outlined-button-container-shape: 10px;
    display: flex;
    gap: 1rem;
  }

  [data-component="hero-section"] [data-section="image"]{
    display: none;
  }

  @media screen and (min-width: 1300px) {
    [data-component="hero-section"] [data-section="image"]{
      display: flex;
      align-items: center;
    }
  }

  @media screen and (max-width: 600px) {
    [data-component="hero-section"] h1 {
      font-size: calc(var(--md-sys-typescale-display-large-size) * 0.8);
      line-height: calc(var(--md-sys-typescale-display-large-line-height) * 0.8);
    }

    [data-component="hero-section"] .title-large p {
      font-size: calc(var(--md-sys-typescale-title-large-size) * 0.8);
    }
  }
`;