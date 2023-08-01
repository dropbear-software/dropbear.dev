import { ReactiveController, ReactiveControllerHost, TemplateResult, html } from "lit";

export const homepageContent: HeroSectionContent = {
    headline: html`<strong>Increase Website Conversions with Our Data-Driven Approach</strong>`,
    leadText: html`<p>
      Are you looking to increase website conversions? If so, you need to use a data-driven approach.
      At Dropbear Software, we use data to identify and fix the problems that are preventing your website from generating leads and sales.
      </p>
      <p>
        Our team of experienced marketing and development consultants has helped businesses of all shapes and sizes achieve their online goals.
        We know what it takes to create a successful website that converts visitors into customers.
      </p>
      <p>
        If you're ready to increase your website conversions, contact us today for a free consultation.
      </p>`,
    primaryButton: {
      text: 'Primary Action',
      destination: '/'
    },
    secondaryButton: {
      text: 'Secondary Action',
      destination: '#'
    }
};

export interface HeroSectionContent {
  headline: string | TemplateResult,
  leadText: string | TemplateResult,
  primaryButton: {
    text: string,
    destination: string,
  },
  secondaryButton : {
    text: string,
    destination: string
  },
  heroImageSvg: TemplateResult
}

export class HeroSectionController implements ReactiveController {
  #host: ReactiveControllerHost

  #content : HeroSectionContent

  constructor(host: ReactiveControllerHost, content: HeroSectionContent){
    (this.#host = host).addController(this);
    this.#content = content;
  }

  hostConnected(){
    console.log('Hero Host is connected');
  }

  heroSection(heroImageSvg: TemplateResult): TemplateResult {
    return html`
      <header data-component="hero-section">
        <div data-section="text">
          <h1 class="primary-text">
            ${this.#content.headline}
          </h1>
          <div class="title-large">
            ${this.#content.leadText}
          </div>
          <div data-section="cta">
            <a href="${this.#content.primaryButton.destination}">
              <md-filled-button>${this.#content.primaryButton.text}</md-filled-button>
            </a>
            <a href="${this.#content.secondaryButton.destination}">
              <md-outlined-button>${this.#content.secondaryButton.text}</md-outlined-button>
            </a>
          </div>
        </div>
        <div data-section="image" class="tertiary-text">
          ${this.#content.heroImageSvg}
        </div>
      </header>
    `;
  }
}