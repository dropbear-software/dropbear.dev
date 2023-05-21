import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base-element/base-element';

@customElement('simple-greeting')
export class SimpleGreeting extends BaseElement {

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