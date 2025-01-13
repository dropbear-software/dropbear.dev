import { css } from "lit";

export const themeStyles = css`
@layer theme {
  /* Colors */
  .primary-container {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
  }

  .secondary-container {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
  }

  .tertiary-container {
    background-color: var(--md-sys-color-tertiary-container);
    color: var(--md-sys-color-on-tertiary-container);
  }

  .primary {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }

  .secondary {
    background-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-secondary);
  }

  .tertiary {
    background-color: var(--md-sys-color-tertiary);
    color: var(--md-sys-color-on-tertiary);
  }

  .surface-variant {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
  }

  .outline {
    border: 1px solid var(--md-sys-color-outline);
  }

  /* Typography */
  .title-small, h6 {
    font-family: var(--md-sys-typescale-title-small-font);
    font-weight: var(--md-sys-typescale-title-small-weight);
    font-size: var(--md-sys-typescale-title-small-size);
    line-height: var(--md-sys-typescale-title-small-line-height);
    letter-spacing: var(--md-sys-typescale-title-small-tracking);
  }

  .title-medium, h5 {
    font-family: var(--md-sys-typescale-title-medium-font);
    font-weight: var(--md-sys-typescale-title-medium-weight);
    font-size: var(--md-sys-typescale-title-medium-size);
    line-height: var(--md-sys-typescale-title-medium-line-height);
    letter-spacing: var(--md-sys-typescale-title-medium-tracking);
  }

  .title-large, h4 {
    font-family: var(--md-sys-typescale-title-large-font);
    font-weight: var(--md-sys-typescale-title-large-weight);
    font-size: var(--md-sys-typescale-title-large-size);
    line-height: var(--md-sys-typescale-title-large-line-height);
    letter-spacing: var(--md-sys-typescale-title-large-tracking);
  }

  .label-small {
    font-family: var(--md-sys-typescale-label-small-font);
    font-weight: var(--md-sys-typescale-label-small-weight);
    font-size: var(--md-sys-typescale-label-small-size);
    line-height: var(--md-sys-typescale-label-small-line-height);
    letter-spacing: var(--md-sys-typescale-label-small-tracking);
  }

  .label-medium {
    font-family: var(--md-sys-typescale-label-medium-font);
    font-weight: var(--md-sys-typescale-label-medium-weight);
    font-size: var(--md-sys-typescale-label-medium-size);
    line-height: var(--md-sys-typescale-label-medium-line-height);
    letter-spacing: var(--md-sys-typescale-label-medium-tracking);
  }

  .label-medium-prominent {
    font-family: var(--md-sys-typescale-label-medium-font);
    font-weight: var(--md-sys-typescale-label-medium-weight-prominent);
    font-size: var(--md-sys-typescale-label-medium-size);
    line-height: var(--md-sys-typescale-label-medium-line-height);
    letter-spacing: var(--md-sys-typescale-label-medium-tracking);
  }

  .label-large, label {
    font-family: var(--md-sys-typescale-label-large-font);
    font-weight: var(--md-sys-typescale-label-large-weight);
    font-size: var(--md-sys-typescale-label-large-size);
    line-height: var(--md-sys-typescale-label-large-line-height);
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
  }

  .label-large-prominent {
    font-family: var(--md-sys-typescale-label-large-font);
    font-weight: var(--md-sys-typescale-label-large-weight-prominent);
    font-size: var(--md-sys-typescale-label-large-size);
    line-height: var(--md-sys-typescale-label-large-line-height);
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
  }

  .headline-small, h3 {
    font-family: var(--md-sys-typescale-headline-small-font);
    font-weight: var(--md-sys-typescale-headline-small-weight);
    font-size: var(--md-sys-typescale-headline-small-size);
    line-height: var(--md-sys-typescale-headline-small-line-height);
    letter-spacing: var(--md-sys-typescale-headline-small-tracking);
  }

  .headline-medium, h2 {
    font-family: var(--md-sys-typescale-headline-medium-font);
    font-weight: var(--md-sys-typescale-headline-medium-weight);
    font-size: var(--md-sys-typescale-headline-medium-size);
    line-height: var(--md-sys-typescale-headline-medium-line-height);
    letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
  }

  .headline-large, h1 {
    font-family: var(--md-sys-typescale-headline-large-font);
    font-weight: var(--md-sys-typescale-headline-large-weight);
    font-size: var(--md-sys-typescale-headline-large-size);
    line-height: var(--md-sys-typescale-headline-large-line-height);
    letter-spacing: var(--md-sys-typescale-headline-large-tracking);
  }

  .display-small {
    font-family: var(--md-sys-typescale-display-small-font);
    font-weight: var(--md-sys-typescale-display-small-weight);
    font-size: var(--md-sys-typescale-display-small-size);
    line-height: var(--md-sys-typescale-display-small-line-height);
    letter-spacing: var(--md-sys-typescale-display-small-tracking);
  }

  .display-medium {
    font-family: var(--md-sys-typescale-display-medium-font);
    font-weight: var(--md-sys-typescale-display-medium-weight);
    font-size: var(--md-sys-typescale-display-medium-size);
    line-height: var(--md-sys-typescale-display-medium-line-height);
    letter-spacing: var(--md-sys-typescale-display-medium-tracking);
  }

  .display-large {
    font-family: var(--md-sys-typescale-display-large-font);
    font-weight: var(--md-sys-typescale-display-large-weight);
    font-size: var(--md-sys-typescale-display-large-size);
    line-height: var(--md-sys-typescale-display-large-line-height);
    letter-spacing: var(--md-sys-typescale-display-large-tracking);
  }

  .body-small {
    font-family: var(--md-sys-typescale-body-small-font);
    font-weight: var(--md-sys-typescale-body-small-weight);
    font-size: var(--md-sys-typescale-body-small-size);
    line-height: var(--md-sys-typescale-body-small-line-height);
    letter-spacing: var(--md-sys-typescale-body-small-tracking);
  }

  .body-medium {
    font-family: var(--md-sys-typescale-body-medium-font);
    font-weight: var(--md-sys-typescale-body-medium-weight);
    font-size: var(--md-sys-typescale-body-medium-size);
    line-height: var(--md-sys-typescale-body-medium-line-height);
    letter-spacing: var(--md-sys-typescale-body-medium-tracking);
  }

  .body-large {
    font-family: var(--md-sys-typescale-body-large-font);
    font-weight: var(--md-sys-typescale-body-large-weight);
    font-size: var(--md-sys-typescale-body-large-size);
    line-height: var(--md-sys-typescale-body-large-line-height);
    letter-spacing: var(--md-sys-typescale-body-large-tracking);
  }
}
`;