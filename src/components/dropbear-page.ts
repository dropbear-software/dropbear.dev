import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('dropbear-page')
export class DropbearPage extends LitElement {

  override render() {
    return html`<slot></slot>`;
  }
}
