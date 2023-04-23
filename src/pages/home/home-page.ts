import { customElement } from "lit/decorators.js";
import { LitElement, TemplateResult, html } from "lit";

import "../../components/simple-greeting/simple-greeting.js";

@customElement('home-page')
export class HomePage extends LitElement {
  protected override render(): TemplateResult {
    return html`
      <a href="/about">About Page</a>
      <simple-greeting .name=${"Universe"}></simple-greeting>`
    ;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage;
  }
}