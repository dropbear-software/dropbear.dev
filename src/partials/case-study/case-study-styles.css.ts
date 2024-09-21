import { css } from "lit";

export const componentStyles = css`
.section-intro {
  margin-inline-start: 2rem;
}

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

.case-study {
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & .title-medium {
    max-width: 75ch;
    text-wrap: balance; 
  }

  .left-panel, .right-panel {
    max-width: 85ch;
  }

  .right-panel {
    margin: 2rem;
  }
}

  /* Add media queries for responsive design */
  @media (max-width: 960px) {
    .case-study {
      flex-direction: column-reverse;
    }
  }
`;