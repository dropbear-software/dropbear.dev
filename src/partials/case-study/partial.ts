import { css, html } from "lit";
import "@material/web/labs/card/elevated-card.js";
import "@material/web/button/outlined-button.js";
import './case-study.js';

export const caseStudyPartial = html`
<case-study></case-study>
`;

export const caseStudyPartialStyles = css`
.case-study {
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & h2 {
    font-weight: 700;
  }

  & .title-medium {
    max-width: 75ch;
    text-wrap: balance; 
  }

  & md-elevated-card {
    --md-elevated-card-container-color: white;
    margin-top: 1rem;

    & .title-medium {
      font-weight: 700;
    }

    & .card-contents, .card-header, .card-footer {
      padding: 1rem;
    }

    & .card-contents {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }

    & .result {
      display: flex;
      gap: 1rem;
    }

    & .card-footer {
      display: flex;
      gap: 1rem;
      border-top: 1px solid var(--md-sys-color-outline);

      & > span {
        border-radius: 15px;
        padding: 0.5rem 1rem;
      }
    }
  }
}
`;