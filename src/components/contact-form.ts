import { LitElement, html, type TemplateResult } from "lit";
import { customElement, query } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';

@customElement('contact-form')
export class ContactForm extends LitElement {

  @query('form')
  form!: HTMLFormElement;

  public async submit(): Promise<void> {
    const formData = new FormData(this.form);

    const response = await fetch("/api/enquiry/create", {
      method: "POST",
      body: formData,
    });
    
    const responseData = await response.json();
    console.log(`Api response = ${responseData.message}`);
  }

  protected override render(): TemplateResult {
    return html`
      <form>
        <md-outlined-text-field label="First Name" value="" name="givenName" required>
        </md-outlined-text-field>
        <md-outlined-text-field label="Surname" value="" name="familyName" required>
        </md-outlined-text-field>
        <md-outlined-text-field label="Email" value="" name="email" required type="email">
        </md-outlined-text-field>
        <input type="hidden" value="${new Date(Date.now()).toISOString()}" name="startTime">
      </form>
    `;
  }
}