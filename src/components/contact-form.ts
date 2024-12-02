import { LitElement, html, type CSSResultGroup, type TemplateResult } from "lit";
import { customElement, query } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';
import { componentStyles } from "../partials/contact-me/contact-styles.css";
import { globalStyles } from "../styles/js/global.css";

@customElement('contact-form')
export class ContactForm extends LitElement {

  @query('form')
  form!: HTMLFormElement;

  static override styles: CSSResultGroup = [
    globalStyles,
    componentStyles
  ];

  protected override firstUpdated(): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submit();
    });
  }

  public async submit(): Promise<void> {
    const formData = new FormData(this.form);

    const response = await fetch("/api/enquiry/create", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();
    console.log(responseData);
  }

  protected override render(): TemplateResult {
    return html`
      <section class="contact">
        <div class="section-intro">
          <h2 class="headline-large">
            Get in touch
          </h2>
          <p class="title-medium">
            Your digital success is my priority. Reach out and let's discuss how we can work together to achieve your business goals.
          </p>
        </div>
        <form>
          <div class="responsive-column">
            <div class="column">
              <md-outlined-text-field label="First Name" value="" name="givenName" required>
              </md-outlined-text-field>
              <md-outlined-text-field label="Surname" value="" name="familyName" required>
              </md-outlined-text-field>
              <md-outlined-text-field label="Email" value="" name="email" required type="email">
              </md-outlined-text-field>
              <md-outlined-text-field label="Company Name" value="" name="organization">
              </md-outlined-text-field>
            </div>
            <div class="column">
              <md-outlined-text-field
                type="textarea"
                label="Message"
                required
                rows="7"
                name="message"
              >
              </md-outlined-text-field>
              <input type="hidden" value="${new Date(Date.now()).toISOString()}" name="startTime">
              <md-filled-button type="submit">Submit</md-filled-button>
            </div>
          </div>
        </form>
      </section>
    `;
  }
}