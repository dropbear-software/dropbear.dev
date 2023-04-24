import { customElement } from "lit/decorators.js";
import { TemplateResult, html } from "lit";
import { PageMetadata } from "../../components/web-page/lib/types.js";
import { WebPage } from "../../components/web-page/web-page.js";

const aboutPageMetadata: PageMetadata = {
  pageTitle: 'About Us - Dropbear.dev',
  screenName: 'About Page',
  contentGroups: ['landing-pages'],
  description: ''
}

@customElement('about-page')
export class AboutPage extends WebPage {

  constructor(pageMetadata = aboutPageMetadata){
    super(pageMetadata);
  }

  protected override render(): TemplateResult {
    return html`
      <h2>About Page</h2>
      <a href="/">Home Page</a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-page': AboutPage;
  }
}