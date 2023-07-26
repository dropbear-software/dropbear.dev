import { customElement, property, query } from "lit/decorators.js";
import { BaseElement } from "../base-element/base-element.js";
import { CSSResult, TemplateResult, html } from "lit";
import { componentStyles } from "./lib/styles.js";

@customElement('main-navigation')
export class MainNavigation extends BaseElement {

  @query('nav')
  nav!: HTMLElement;

  @query('ul')
  list!: HTMLUListElement;

  @query('button')
  button!: HTMLButtonElement;

  @property({ type: Boolean, attribute: 'open' })
  isOpen: boolean = false;

  static styles: CSSResult[] = [
    ...BaseElement.styles,
    componentStyles
  ];

  #handleButtonClick(): void {
    console.log('Button clicked');
    this.isOpen = this.button.getAttribute('aria-expanded') === 'false';
  }

  #handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.isOpen = false;
      this.button.focus();
    }
  }

  #renderButton(): TemplateResult {
    return html`
      <button type="button" aria-expanded="${this.isOpen}" aria-label="Menu" aria-controls="mainnav" @click="${this.#handleButtonClick}">
        <svg width="24" height="24" aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
        </svg>
      </button>
    `;
  }

  protected override render(): TemplateResult {
    return html`
      <nav id="mainnav" @keyup="${this.#handleKeyUp}">
        ${this.#renderButton()}
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about-us" aria-current="page">About us</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-navigation': MainNavigation;
  }
}