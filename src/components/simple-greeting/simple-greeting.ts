import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { designSystem } from "@dropbear/design-system";

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = [
    designSystem,
    css`p { color: blue }`
  ];

  @property()
  name = 'World';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}