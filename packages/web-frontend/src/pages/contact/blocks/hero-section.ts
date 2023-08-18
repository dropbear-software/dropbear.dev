import { css, html } from "lit";
import { emailIcon } from "../../../svg/hero-images.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-button.js";

export const heroSection = html`
<header data-component="hero-section">
  <div data-section="text">
    <h1 class="primary-text">
      <strong>Looking to get in touch? <br> We'd love to hear from you!</strong>
    </h1>
    <div class="title-large">
      <p>
      We are always happy to hear from our clients and potential clients. 
      If you have any questions or would like to discuss your business needs, please do not hesitate to fill out the form on this page. 
      We will be in touch as soon as possible.
      </p>
    </div>
    <div data-section="cta">
      <a href="/"><md-filled-button>Home</md-filled-button></a>
      <a href="#"><md-outlined-button>Secondary CTA</md-outlined-button></a>
    </div>
  </div>
  <div data-section="image" class="tertiary-text">
    ${emailIcon}
  </div>
</header>
`;

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
    display: flex;
    justify-content: center;
    flex-direction: column;
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