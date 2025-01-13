import { css } from "lit";

export const componentStyles = css`
  h2 {
    font-weight: 700;
  }

  h4 {
    font-weight: 700;
    margin-block-start: 1rem;
  }

  p.title-medium {
    max-width: 85ch;
    text-wrap: balance;
    margin-block: 1rem;
  }

  p.headline-medium {
    font-weight: 700;
  }

  .contact {
    padding: 2rem;
  }

  form {
    margin-top: 1.5rem;
  }

  .responsive-column {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-end;
    justify-content: center;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
  }

  md-outlined-text-field {
    resize: none;
  }

  @media (max-width: 768px) {
    .responsive-column {
      flex-direction: column;
      align-items: center;
    }

    .column {
      width: 80%;
    }
  }
`