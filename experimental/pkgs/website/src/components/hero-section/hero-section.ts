import { CSSResult, TemplateResult, html } from "lit";
import { BaseElement } from "../base-element/base_element.js";
import { property } from "lit/decorators.js";
import { HeroSectionContent } from "../../controllers/home-page-controller.js";
import { heroStyles } from "./styles.css.js";

export class HeroSection extends BaseElement {
  @property({ type: Object})
  content: HeroSectionContent | undefined

  static styles: CSSResult[] = [...BaseElement.styles, heroStyles];

  protected override render(): TemplateResult {
    if (this.content === undefined) {
      return html``;
    }

    return html`
      <header data-component="hero-section">
        <div data-section="text">
          <h1 class="primary-text">
            ${this.content.headline}
          </h1>
          <div class="title-large">
            ${this.content.leadText}
          </div>
          <div data-section="cta">
            <a href="${this.content.primaryButton.destination}">
              <md-filled-button>${this.content.primaryButton.text}</md-filled-button>
            </a>
            <a href="${this.content.secondaryButton.destination}">
              <md-outlined-button>${this.content.secondaryButton.text}</md-outlined-button>
            </a>
          </div>
        </div>
        <div data-section="image" class="tertiary-text">
          ${this.content.heroImageSvg}
        </div>
      </header>
    `;
  }
}