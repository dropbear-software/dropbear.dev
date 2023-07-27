import { customElement, property, query, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../base-element/base-element.js";
import { CSSResult, TemplateResult, html, nothing } from "lit";
import { componentStyles } from "./lib/styles.js";
import { MainNavigationLink } from "./man-navigation-link.js";

interface NavigationLinks {
  text: string,
  href: URL
}

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

  @queryAssignedElements({selector: 'main-navigation-link'})
  _listItems!: Array<MainNavigationLink>;

  @state()
  _menuLinks: NavigationLinks[] = [];

  static styles: CSSResult[] = [
    ...BaseElement.styles,
    componentStyles
  ];

  protected firstUpdated(): void {
    this.#warnOnNoChildren();
  }

  #handleSlotChange(): void {
    this.#warnOnNoChildren();
    this.#processSlottedLinks();
  }

  #processSlottedLinks(): void {
    this._listItems.forEach((link) => {
      if (link.href && link.text) {
        this._menuLinks.push({
          text: link.text,
          href: new URL(link.href, window.location.origin)
        })
      } else {
        console.warn('main-navigation-link element was missing required name or href attributes', link);
      }
    });
    this.requestUpdate();
  }

  #warnOnNoChildren(): void {
    if (this._listItems.length === 0) {
      console.warn('No main-navigation-link elements found for main-navigation');
    }
  }

  #handleButtonClick(): void {
    this.isOpen = this.button.getAttribute('aria-expanded') === 'false';
    if(this.isOpen){
      this.dispatchEvent(new CustomEvent('navigation-opened'));
    } else {
      this.dispatchEvent(new CustomEvent('navigation-closed'));
    }
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

  #renderLinks(): TemplateResult {
    return html`
      <ul>
        ${this._menuLinks.map((link) => {
        return html`
          <li>
            <a href="${link.href.pathname}" aria-current="${this.#isCurrentPage(link.href) || nothing }">${link.text}</a>
          </li>
        `})
      }
      </ul>
    `;
  }

  #isCurrentPage(url: URL){
    if(url.pathname === window.location.pathname){
      return 'page';
    } else {
      return undefined;
    }
  }

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange="${this.#handleSlotChange}"></slot>
      <nav id="mainnav" @keyup="${this.#handleKeyUp}">
        ${this.#renderButton()}    
        ${this.#renderLinks()}
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-navigation': MainNavigation;
  }
}