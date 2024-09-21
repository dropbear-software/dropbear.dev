import { LitElement, html, type CSSResultGroup, type TemplateResult } from "lit";
import { globalStyles } from "../../styles/js/global.css.js";
import { customElement } from "lit/decorators.js";
import { componentStyles } from "./case-study-styles.css.js";
import "./case-study-results.js";

@customElement('case-study')
export class CaseStudy extends LitElement {
  static override styles: CSSResultGroup = [
    globalStyles,
    componentStyles
  ];

  protected override render(): TemplateResult {
    return html`
      <div class="section-intro">
        <h2 class="headline-large">
          Case Studies
        </h2>
        <p class="title-medium">
          Discover how I've helped businesses like yours overcome challenges and achieve measurable results. 
          These real-world success stories demonstrate the power of data-driven strategies and expert guidance.
        </p>
      </div>
      
      <section class="case-study tertiary">
        <div class="left-panel">
          <case-study-results></case-study-results>
        </div>

        <div class="right-panel">
          <p>
            Boom Beauty, a thriving cosmetics and skincare brand based in the United States, 
            sought to optimize their website for maximum sales.
          </p>
          <h4 class="headline-small">The problem</h3>
          <p>
            The company's website, while visually appealing and successful, suffered from technical debt 
            that hindered the implementation of typical conversion rate optimization tactics. 
            This created a roadblock in their quest to further enhance their online sales performance.
          </p>
          <h4 class="headline-small">The solution</h3>
          <p>
            Recognizing the need for a creative and technically feasible solution, we focused on improving 
            the website's underlying performance. We developed a custom script to strategically preload 
            key pages in the background, creating a faster and more seamless user experience without altering the website's design.
          </p>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "case-study": CaseStudy;
  }
}