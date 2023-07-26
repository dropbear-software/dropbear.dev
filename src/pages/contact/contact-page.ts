import { customElement } from "lit/decorators.js";
import { CSSResult, TemplateResult, html } from "lit";
import { PageMetadata } from "../../components/web-page/lib/types.js";
import { WebPage } from "../../components/web-page/web-page.js";
import { heroSection, heroStyles } from "./blocks/hero-section.js";
import "../../components/main-navigation/main-navigation.js";


const aboutPageMetadata: PageMetadata = {
  pageTitle: 'About Us - Dropbear.dev',
  screenName: 'About Page',
  contentGroups: ['landing-pages'],
  description: ''
}

@customElement('contact-page')
export class ContactPage extends WebPage {

  constructor(pageMetadata = aboutPageMetadata){
    super(pageMetadata);
  }

  static styles: CSSResult[] = [
    ...WebPage.styles, 
    heroStyles,
  ];

  protected override render(): TemplateResult {
    return html`
      <main-navigation></main-navigation>
      ${heroSection}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'contact-page': ContactPage;
  }
}