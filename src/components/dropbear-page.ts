import { LitElement, html, type CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalStyles } from '../styles/js/global.css.js';


@customElement('dropbear-page')
export class DropbearPage extends LitElement {

  static override styles: CSSResultGroup = [globalStyles];

  override connectedCallback(): void {
    super.connectedCallback();
    // @ts-ignore
    globalStyles.forEach((style: { styleSheet: CSSStyleSheet; }) => {
      // @ts-ignore
      document.adoptedStyleSheets.push(style.styleSheet!);
    });
  }

  override render() {
    return html`<slot></slot>`;
  }
}
