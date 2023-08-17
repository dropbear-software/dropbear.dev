import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../base-element/base-element.js";

@customElement('main-navigation-link')
export class MainNavigationLink extends BaseElement {
  @property({type: String})
  text?: string;

  @property({type: String})
  href?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'main-navigation-link': MainNavigationLink;
  }
}