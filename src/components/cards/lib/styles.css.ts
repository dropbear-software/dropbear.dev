import { css } from "lit";

export const componentStyles = css`
  :host {
    --md-elevation-level: 1;
    --card-container-shadow: var(--md-sys-color-shadow);
    --card-color: var(--md-sys-color-surface-container-low);
    --card-border-radius: 12px;
  }

  #container {
    background-color: var(--card-color);
    border-radius: var(--card-border-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    &:hover {
      background-color: var(--md-sys-color-surface-container);
      --md-elevation-level: 2;
    }

    &:active {
      --md-elevation-level: 1;
    }

    &.outlined {
      --md-elevation-level: 0;
      background-color: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);

      &:hover {
        border: 1px solid var(--md-sys-color-primary);
        --md-elevation-level: 1;
      }
    }

    &.filled {
      background-color: var(--md-sys-color-surface-container-highest);
    }
  }
`;