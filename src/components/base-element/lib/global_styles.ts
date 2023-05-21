import { designSystem } from "@dropbear/design-system";
import { CSSResult, css } from "lit";

export const globalStyles: CSSResult[] = [
  designSystem,
  css`
  :host {
    background-color: var(--md-sys-color-background);
    color: var(--md-sys-color-on-background);
    font-family: var(--md-sys-typescale-body-large-font);
    font-weight: var(--md-sys-typescale-body-large-weight);
    font-size: var(--md-sys-typescale-body-large-size);
    letter-spacing: var(--md-sys-typescale-body-large-tracking);
    line-height: var(--md-sys-typescale-body-large-line-height);
  }

  a {
    color: var(--md-sys-color-primary);
  }

  a:hover {
    color: var(--md-sys-color-on-primary-container)
  }

  a:focus {
    margin: -1px;
    border: 1px solid var(--md-sys-color-primary);
    outline: 0;
    box-shadow: inset 0 0 0 1px var(--md-sys-color-surface);
  }

  a:hover:focus {
    border: 1px solid var(--md-sys-color-on-primary-container);
    outline: 0;
    color: var(--md-sys-color-on-primary-container);
  }

  p {
    -webkit-margin-before: 1em;
    margin-block-start:1em;-webkit-margin-after: 1em;
    margin-block-end:1em;
  }
  
  `
];