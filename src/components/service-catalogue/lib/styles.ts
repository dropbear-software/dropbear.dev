import { css } from "lit";

export const componentStyles = css`
  #consultancy-section {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: auto;
    margin-inline-end: auto;
    max-width: 1400px;
  }

  [data-section="content"]{
    max-width: 50ch;
  }

  footer {
    margin-block-end: 2rem;
    margin-block-start: 2rem;
    display: flex;
    gap: 1rem;
  }

  li {
    list-style: none;
  }

  ul {
    display: flex;
    margin: 0 auto;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
  }
`;