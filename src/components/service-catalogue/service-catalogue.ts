import { customElement } from "lit/decorators.js";
import { CSSResult, TemplateResult, html } from "lit";
import { BaseElement } from "../base-element/base-element.js";
import { servicesRepository } from "../../data/repositories/services-repository.js";
import { ServiceType, type ConsultingService } from "../../data/resources/consulting-service.js";
import { componentStyles } from "./lib/styles.js";
import "@material/web/button/tonal-button.js";
import "@material/web/button/outlined-button.js";
import "../cards/card-component.js";

@customElement('service-catalogue')
export class ServiceCatalogue extends BaseElement {
  #consultingServices: ConsultingService[];

  constructor(){
    super();
    this.#consultingServices = servicesRepository.getAll();
  }

  static styles: CSSResult[] = [
    ...BaseElement.styles, 
    componentStyles
  ];

  private static  _isOngoingService(service: ConsultingService): boolean {
    return service.serviceTypeEnum === ServiceType.ONGOING;
  }

  private static _isOneTimeService(service: ConsultingService): boolean {
    return service.serviceTypeEnum === ServiceType.ONE_TIME;
  }

  #getCaseStudiesUrl(resourceId: string): URL {
    // TODO: Use the correct case studies URL here later
    const caseStudiesURL = new URL(window.location.href);
    caseStudiesURL.searchParams.append('serviceId', resourceId);
    return caseStudiesURL;
  }

  #getOneTimeServices(): ConsultingService[] {
    return this.#consultingServices.filter(ServiceCatalogue._isOneTimeService);
  }

  #getOngoingServices(): ConsultingService[] {
    return this.#consultingServices.filter(ServiceCatalogue._isOngoingService);
  }

  #renderServiceCards(services: ConsultingService[]): TemplateResult {
    return html`
    <ul>
      ${services.map((service) => {
        return html`
        <li>
          <card-component outlined data-resource="${service.identifier.id}" data-service-type="${service.serviceType}">
            <header>
              <h3 class="headline-small" title="${service.alternateName}">
                ${service.name}
              </h3>
            </header>
            <div class="body-medium" data-section="content">
              <p>
                ${service.description}
              </p>
            </div>
            <footer>
              <a href="${service.url.pathname}" title="${service.name} service details">
                <md-tonal-button>See Details</md-tonal-button>
              </a>
              <a href="${this.#getCaseStudiesUrl(service.identifier.id).href}" title="${service.name} case studies">
                <md-outlined-button>View Case Studies</md-outlined-button>
              </a>
            </footer>
          </card-component>
          <script type="application/ld+json">
            ${JSON.stringify(service.toJSON())}
          </script>
        </li>
        `;
      })}
    </ul>
    `;
  }

  render(): TemplateResult {
    return html`
      <section>
        <h2 class="headline-large secondary-text">Ongoing Consultancy Services</h2>
        <p class="body-large">
          For companies currently earning more than $1M USD per year via their website and have unique circumstances and requirements that demand a more personal touch.
        </p>
        ${this.#renderServiceCards(this.#getOngoingServices())}
      </section>

      <section>
        <h2 class="headline-large secondary-text">One Time Services</h2>
        <p class="body-large">
          For companies currently earning more than $1M USD per year via their website and have unique circumstances and requirements that demand a more personal touch.
        </p>
        ${this.#renderServiceCards(this.#getOneTimeServices())}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'service-catalogue': ServiceCatalogue;
  }
}