import { LitElement, html, type CSSResultGroup, type TemplateResult } from "lit";
import { globalStyles } from '../../styles/js/global.css.js';
import { customElement } from "lit/decorators.js";
import { componentStyles } from "./hero-styles.css.js";
import { heroContent } from "./hero-content.js";

@customElement('hero-split')
export class HeroSplit extends LitElement {

  static override styles: CSSResultGroup = [
    globalStyles,
    componentStyles
  ];

  protected override render(): TemplateResult {
    return html`
      <section class="hero">
        <div class="hero-content">
          <h1 class="display-large">${heroContent.actual.headline}</h1> 
          <p class="headline-large">${heroContent.actual.subheading}</p>
          <div>
            <md-filled-button>${heroContent.actual.cta}</md-filled-button>
          </div>
        </div>
        <div class="hero-image">
          <img src="/growth-saplings.jpg" class="hero-image" width="920">
        </div>
      </section>
    `;
  }
}
