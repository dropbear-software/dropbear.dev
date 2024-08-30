import { LitElement, css, html, type CSSResultGroup, type TemplateResult } from "lit";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/button/filled-tonal-button.js';
import { customElement, queryAsync, state } from "lit/decorators.js";
import { globalStyles } from "../styles/js/global.css.js";
import type { MdDialog } from "@material/web/dialog/dialog.js";
import type { ContactForm } from "./contact-form.js";

@customElement('home-page')
export class HomePage extends LitElement {

  @state()
  dialogReady = false;

  @queryAsync('md-dialog')
  contactDialog?: Promise<MdDialog>;

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
						<md-filled-button @click=${this.#onContactButtonClick}>Contact Us</md-filled-button>
					</div>
				</div>
			</md-elevated-card>
      ${this.#renderContactForm()}
    `;
  }

  async #onContactButtonClick(){
    await import('@material/web/dialog/dialog.js');
    await import('./contact-form.js');
    this.dialogReady = true;
    const dialog = await this.contactDialog;
    dialog!.show();
  }

  async #onContactSubmitClick(){
    const contactForm: ContactForm = this.shadowRoot!.querySelector('contact-form')!;
    await contactForm!.submit();
    const dialog = await this.contactDialog;
    dialog!.close();
  }

  #renderContactForm(): TemplateResult {
    if (this.dialogReady) {
      return html`
      <md-dialog>
        <div slot="headline">
          Dialog title
        </div>
        <contact-form slot="content" id="form-id" method="dialog">
        </contact-form>
        <div slot="actions">
          <md-filled-button form="form-id" @click=${this.#onContactSubmitClick}>Ok</md-filled-button>
        </div>
      </md-dialog>
    `;
    } else {
      return html``;
    }
  }
}