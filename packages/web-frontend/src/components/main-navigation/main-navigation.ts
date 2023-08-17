import { customElement, property, query, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../base-element/base-element.js";
import { CSSResult, TemplateResult, html, nothing } from "lit";
import { componentStyles } from "./lib/styles.css.js";
import { MainNavigationLink } from "./man-navigation-link.js";

interface NavigationLinks {
  text: string,
  href: URL
}

@customElement('main-navigation')
export class MainNavigation extends BaseElement {
  @property({ type: Boolean})
  open: boolean = false;

  @query('button')
  private _button!: HTMLButtonElement;

  @queryAssignedElements({selector: 'main-navigation-link'})
  private _listItems!: Array<MainNavigationLink>;

  @state()
  private _menuLinks: NavigationLinks[] = [];

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
    this.open = this._button.getAttribute('aria-expanded') === 'false';
    if(this.open){
      this.dispatchEvent(new CustomEvent('navigation-opened'));
    } else {
      this.dispatchEvent(new CustomEvent('navigation-closed'));
    }
  }

  #handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.open = false;
      this._button.focus();
    }
  }

  #renderButton(): TemplateResult {
    return html`
      <button type="button" aria-expanded="${this.open}" aria-label="Menu" aria-controls="mainnav" @click="${this.#handleButtonClick}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" aria-hidden="true">
          <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
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