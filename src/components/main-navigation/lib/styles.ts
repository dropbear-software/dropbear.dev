import { css } from "lit";

export const componentStyles = css`
  :host {
    --navigation-color: var(--md-sys-color-on-surface-variant);
    --color-highlight: var(--md-sys-color-primary);
    --navigation-background-color: var(--md-sys-color-surface-variant);
  }

  @media (min-width: 48em) {
    nav {
      --nav-button-display: none;
      --nav-position: static;
    }
  
    ul {
      --nav-list-layout: row;
      --nav-list-position: static;
      --nav-list-padding: 1.5rem;
      --nav-list-height: auto;
      --nav-list-width: 100%;
      --nav-list-shadow: none;
      --nav-list-transform: none;
      --nav-list-visibility: visible;
      justify-content: center;
    }
  }

  /* Remove the default :focus outline */
  *:focus {
    outline: none;
  }

  /* Show a custom outline on :focus-visible */
  *:focus-visible {
    outline: 4px solid var(--navigation-color);
    outline-offset: 4px;
  }

  nav {
    position: var(--nav-position, fixed);
    inset-block-start: 1rem;
    inset-inline-end: 1rem;
    z-index: 1;
  }

  svg {
    fill: var(--md-sys-color-on-background);
  }
  
  /* Remove default list styling and create layout for list */
  ul {
    background: var(--navigation-background-color);
    box-shadow: var(--nav-list-shadow, -5px 0 11px 0 rgb(0 0 0 / 0.2));
    display: flex;
    flex-direction: var(--nav-list-layout, column);
    flex-wrap: wrap;
    gap: 0.9rem;
    height: var(--nav-list-height, 100vh);
    list-style: none;
    margin: 0;
    padding: var(--nav-list-padding, 2rem);
    position: var(--nav-list-position, fixed);
    inset-block-start: 0; /* Logical property. Equivalent to top: 0; */
    inset-inline-end: 0; /* Logical property. Equivalent to right: 0; */
    width: var(--nav-list-width, min(22rem, 100vw));
    visibility: var(--nav-list-visibility, visible);
  }

  @media (prefers-reduced-motion: no-preference) {
    ul {
      transition: transform 0.6s cubic-bezier(.68,-0.55,.27,1.55), visibility 0.3s linear;
    }
  }
  
  [aria-expanded="false"] + ul {
    transform: var(--nav-list-transform, translateX(100%));
    visibility: var(--nav-list-visibility, hidden);
  }
  
  /* Basic link styling */
  a {
    --text-color: var(--navigation-color);
    
    border-block-end: 3px solid var(--border-color, transparent);
    color: var(--text-color);
    padding: 0.1rem;
    text-decoration: none;
  }
  
  /* Change the border-color on :hover and :focus */
  a:where(:hover, :focus) {
    --border-color: var(--text-color);
  }
  
  /* Change border-color and color for the active page */
  [aria-current="page"] {
    --border-color: var(--color-highlight);
    --text-color: var(--color-highlight);
  }
  
  /* Reset button styling */
  button {
    all: unset;
    display: var(--nav-button-display, flex);
    position: relative;
    z-index: 1;
  }
`;