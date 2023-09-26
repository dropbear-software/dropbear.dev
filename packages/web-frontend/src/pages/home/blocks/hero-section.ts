import { css, html } from "lit";
import { onlineStatsIllustration } from "../../../svg/hero-images.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-button.js";
import { avatarData } from "../../../svg/avatar.js";

export const heroSection = html`
<header data-component="hero-section">
  <div data-section="text">
    <h1 class="primary-text">
      <strong>Grow Your Business with Digital Marketing Strategies That Work</strong>
    </h1>
    <h3 class="tertiary-text">
      I'm Mark, a senior consultant with 15 years of experience helping businesses of all sizes achieve their digital marketing goals.
    </h3>
    <div class="title-large">
      <p>
        Do you want to reach more customers, generate more leads, and increase your sales? Digital marketing is the key, 
        but it can be complex and time-consuming to manage on your own. That's where I come in.
      </p>
      <p>
        As a senior digital marketing consultant, I have the experience and expertise to help you develop and implement a digital 
        marketing strategy that works for your business. I specialize in SEO, web analytics, A/B testing, personalization, 
        and more. I also have been building websites of all shapes and sizes since 1997 which means I also have a deep technical background, 
        so I can understand the limitations of what is possible and know how to implement the solutions and strategies I suggest.
      </p>
      <p>
        I have a proven track record of success, helping clients across all kinds of industries achieve their digital marketing goals. 
        I pride myself on my ability to work closely with my clients to find the right solutions for their particular set of circumstances.
      </p>

      <p>
        <strong>
          Over the past 18 months alone, I have helped my clients generate several million dollars in additional revenue as a direct result of my work. I am confident that I can help you achieve similar results.
        </strong>
      </p>
      <p>
        Please don't hesitate to contact me today for a free consultation.
      </p>
    </div>
    <div data-section="cta">
      <a href="mailto:mark@dropbear.dev"><md-filled-button>Send Me An Email</md-filled-button></a>
      <a href="tel:+351913957329"><md-outlined-button>Give Me A Call</md-outlined-button></a>
    </div>
  </div>
  <div data-section="image" class="tertiary-text">
    <img src="${avatarData}" alt="Mark">
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
    margin-block-end: 1rem;
  }

  [data-section="cta"] a {
    text-decoration: none;
  }

  [data-component="hero-section"] [data-section="image"]{
    display: none;
  }

  @media screen and (min-width: 1300px) {
    [data-component="hero-section"] [data-section="image"]{
      display: flex;
      align-items: center;
      min-width: 30vw;
    }

    [data-component="hero-section"] img {
      width: 100%;
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