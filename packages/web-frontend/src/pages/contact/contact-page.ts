import { customElement } from "lit/decorators.js";
import { CSSResult, TemplateResult, html } from "lit";
import { PageMetadata } from "../../components/web-page/lib/types.js";
import { WebPage } from "../../components/web-page/web-page.js";
import { heroSection, heroStyles } from "./blocks/hero-section.js";
import "../../components/main-navigation/main-navigation.js";
import "../../components/main-navigation/man-navigation-link.js";


const aboutPageMetadata: PageMetadata = {
  pageTitle: 'Contact Us - Dropbear.dev',
  screenName: 'Contact Us Page',
  contentGroups: ['conversion-pages'],
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
      <main-navigation>
        <main-navigation-link text="Home" href="/"></main-navigation-link>
        <main-navigation-link text="Contact" href="/contact-us/"></main-navigation-link>
      </main-navigation>
      ${heroSection}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'contact-page': ContactPage;
  }
}