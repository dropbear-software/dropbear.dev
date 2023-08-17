import { css, html } from "lit";
import { onlineStatsIllustration } from "../../../svg/hero-images.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-button.js";

export const heroSection = html`
<header data-component="hero-section">
  <div data-section="text">
    <h1 class="primary-text">
      <strong>Increase Website Conversions with Our Data-Driven Approach</strong>
    </h1>
    <div class="title-large">
      <p>
        Are you looking to increase website conversions? If so, you need to use a data-driven approach.
        At Dropbear Software, we use data to identify and fix the problems that are preventing your website from generating leads and sales.
      </p>
      <p>
        Our team of experienced marketing and development consultants has helped businesses of all shapes and sizes achieve their online goals.
        We know what it takes to create a successful website that converts visitors into customers.
      </p>
      <p>
        If you're ready to increase your website conversions, contact us today for a free consultation.
      </p>
    </div>
    <div data-section="cta">
      <a href="#"><md-filled-button>Primary CTA</md-filled-button></a>
      <a href="/contact-us/"><md-outlined-button>Secondary CTA</md-outlined-button></a>
    </div>
  </div>
  <div data-section="image" class="tertiary-text">
    ${onlineStatsIllustration}
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