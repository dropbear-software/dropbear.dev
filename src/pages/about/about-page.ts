import { customElement } from "lit/decorators.js";
import { LitElement, TemplateResult, html } from "lit";

@customElement('about-page')
export class AboutPage extends LitElement {
  protected override render(): TemplateResult {
    return html`
      <h2>About Page</h2>
      <a href="/">Home Page</a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-page': AboutPage;
  }
}