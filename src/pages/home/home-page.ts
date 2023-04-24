import { customElement } from "lit/decorators.js";
import { TemplateResult, html } from "lit";
import { PageMetadata } from "../../components/web-page/lib/types.js";
import { WebPage } from "../../components/web-page/web-page.js";
import "../../components/simple-greeting/simple-greeting.js";

const homePageMetadata: PageMetadata = {
  pageTitle: 'Dropbear.dev: Modern Web Consultancy',
  screenName: 'Home Page',
  contentGroups: ['landing-pages'],
  description: ''
}

@customElement('home-page')
export class HomePage extends WebPage {

  constructor(pageMetadata = homePageMetadata){
    super(pageMetadata);
  }

  protected override render(): TemplateResult {
    console.log(`Getting context: ${this.websiteConfiguration?.hidden_feature_enabled}`);
    return html`
      <a href="/about">About Page</a>
      <simple-greeting .name=${"Universe"}></simple-greeting>`
    ;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage;
  }
}