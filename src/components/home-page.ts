import { LitElement, css, html, type CSSResultGroup, type TemplateResult } from "lit";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/button/filled-tonal-button.js';
import { customElement } from "lit/decorators.js";
import { globalStyles } from "../styles/js/global.css.js";

@customElement('home-page')
export class HomePage extends LitElement {

  static override styles: CSSResultGroup = [
    globalStyles,
    css`
    .card-actions {
      margin-block-start: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
    }

    .display-large {
      font-weight: 700;
    }

    .content {
      padding: 4rem 5rem;
      text-align: center;
    }`
  ];

  protected override render(): TemplateResult {
    return html`
      <md-elevated-card class="card">
				<div class="content">
					<h1>
						<span class="display-large">Dropbear</span><br>
						<span class="display-small">Software & Consulting</span>
					</h1>
					<div class="card-actions">
						<md-outlined-button>About Us</md-outlined-button>
						<md-filled-tonal-button>Case Studies</md-filled-tonal-button>
						<md-filled-button>Contact Us</md-filled-button>
					</div>
				</div>
			</md-elevated-card>
    `;
  }
}