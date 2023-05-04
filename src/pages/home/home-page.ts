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
    return html`
      <h1>Home Page</h1>
      <h2>Something Else</h2>
      <h3>Another</h3>
      <p class="headline-large">Large Headline</p>
      <p class="headline-medium">Medium Headline</p>
      <h4>Small Headline H4</h4>
      <p class="title-large">Large Title</p>
      <p class="title-medium">Medium Title</p>
      <p class="title-small">Small Title</p>
      <p class="body-medium">Medium Body</p>
      <p class="body-small">Small Body</p>
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