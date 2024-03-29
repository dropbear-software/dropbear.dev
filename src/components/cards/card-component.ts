import { CSSResult, TemplateResult, html } from "lit";
import { BaseElement } from "../base-element/base-element.js";
import { componentStyles } from "./lib/styles.css.js";
import { customElement, property } from "lit/decorators.js";
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import "@material/web/elevation/elevation.js";
import "@material/web/ripple/ripple.js";

@customElement('card-component')
export class CardComponent extends BaseElement {
  static styles: CSSResult[] = [
    ...BaseElement.styles,
    componentStyles
  ];

  @property({type: Boolean})
  outlined: boolean = false;

  @property({type: Boolean})
  filled: boolean = false;

  #getRenderClasses(): ClassInfo {
    return { outlined: this.outlined, filled: this.filled };
  }

  protected override render(): TemplateResult {
    return html`
      <div id="container" class=${classMap(this.#getRenderClasses())}>
        <md-elevation></md-elevation>
        <md-ripple></md-ripple>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'card-component': CardComponent;
  }
}
