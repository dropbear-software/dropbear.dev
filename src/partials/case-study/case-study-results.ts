import { LitElement, css, html, type CSSResultGroup, type TemplateResult } from "lit";
import { globalStyles } from "../../styles/js/global.css.js";
import { customElement, property } from "lit/decorators.js";
import { componentStyles } from "./case-study-styles.css.js";

@customElement('case-study-results')
export class CaseStudyResult extends LitElement {

  @property({ type: String })
  client = 'Boom by Cindy Joseph';

  @property({ type: String })
  industry = 'Cosmetrics & skincare e-commerce company';

  static override styles: CSSResultGroup = [
    globalStyles,
    componentStyles,
    css`
      :host {
        display: block;
      }

      md-elevated-card {
        --md-elevated-card-container-color: white;
      }

      h3 {
        font-weight: 700;
      }

      header, main, footer {
        padding: 1rem;
      }

      main {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 1rem;
        color: black;

        & .result {
          display: flex;
          gap: 1rem;
        }
      }

      footer {
        display: flex;
        gap: 1rem;
        border-top: 1px solid var(--md-sys-color-outline);

        & > span {
          border-radius: 15px;
          padding: 0.5rem 1rem;
        }
      }

      @media (min-width: 961px) {
        md-elevated-card {
          min-width: max-content;
        }
      }
    `
  ];

  protected override render(): TemplateResult {
    return html`
      <md-elevated-card>
        <header class="tertiary-container">
          <h3 class="title-medium">${this.industry}</h3>
          <p class="title-small">United States</p>
        </header>
        <main>
          <div class="result">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg>
            <span class="title-medium">+ 6% Average Revenue per User</span>
          </div>
          <div class="result">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg>
            <span class="title-medium">+ 5% E-Commerce Conversion Rate</span>
          </div>
          <div class="result">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg>
            <span class="title-medium">+ $130,000 USD Additional Incremental Revenue</span>
          </div>
          <div class="result">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"/></svg>
            <span class="title-medium">99% Statistically Significant Results</span>
          </div>
          <div class="result">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
            <span class="title-medium">6-Weeks Turnaround Time</span>
          </div>
        </main>
        <footer>
          <span class="tertiary-container label-medium">Conversion Rate Optimization</span>
          <span class="tertiary-container label-medium">Website Performance Optimization</span>
        </footer>
      </md-elevated-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "case-study-results": CaseStudyResult;
  }
}