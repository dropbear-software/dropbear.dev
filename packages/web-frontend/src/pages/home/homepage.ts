import { customElement, queryAll } from "lit/decorators.js";
import { CSSResult, TemplateResult, html } from "lit";
import { PageMetadata } from "../../components/web-page/lib/types.js";
import { WebPage } from "../../components/web-page/web-page.js";
import { heroSection, heroStyles } from "./blocks/hero-section.js";
import "../../components/main-navigation/main-navigation.js";
import "../../components/main-navigation/man-navigation-link.js";

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

  static styles: CSSResult[] = [...WebPage.styles, heroStyles ];

  @queryAll('[data-section="cta"] a')
  ctaLinks!: NodeListOf<HTMLElement>

  override firstUpdated(): void {
    this.ctaLinks.forEach(element => {
      element.addEventListener('click', () => {
        window.dataLayer?.push({
          event: 'click_to_contact'
        });
      });
    });
  }

  protected override render(): TemplateResult {
    return html`
      ${heroSection}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage;
  }
}