import { LitElement, html, type CSSResultGroup, type TemplateResult } from "lit";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/button/filled-tonal-button.js';
import '../partials/hero/hero-split.js';
import { customElement } from "lit/decorators.js";
import { globalStyles } from "../styles/js/global.css.js";
import { servicesPartial, servicesStyle } from "../partials/services/services-partial.js";

@customElement('home-page')
export class HomePage extends LitElement {

  static override styles: CSSResultGroup = [
    globalStyles,
    servicesStyle
  ];

  protected override render(): TemplateResult {
    return this.#renderHero();
  }

  #renderHero(): TemplateResult {
    return html`
    <hero-split></hero-split>
    ${servicesPartial}
    `;
  } 
}