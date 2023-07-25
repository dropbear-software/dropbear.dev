import { customElement } from "lit/decorators.js";
import { TemplateResult, html } from "lit";
import { BaseElement } from "../base-element/base-element.js";
import { servicesRepository } from "../../data/repositories/services-repository.js";
import type { ConsultingService } from "../../data/resources/consulting-service.js";
import "../cards/card-component.js";

@customElement('service-catalogue')
export class ServiceCatalogue extends BaseElement {
  #consultingServices: ConsultingService[];

  constructor(){
    super();
    this.#consultingServices = servicesRepository.getAll();
  }

  #getCaseStudiesUrl(resourceId: string): URL {
    // TODO: Use the correct case studies URL here later
    const caseStudiesURL = new URL(window.location.href);
    caseStudiesURL.searchParams.append('serviceId', resourceId);
    return caseStudiesURL;
  }

  render(): TemplateResult {
    console.log(this.#consultingServices);
    return html`
      <ul>
        ${this.#consultingServices.map((service) => {
          return html`
          <li>
            <card-component data-resource="${service.identifier.id}" data-service-type="${service.serviceType}">
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
            <script type="application/json">
              ${JSON.stringify(service.toJSON())}
            </script>
          </li>
          `;
        })}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'service-catalogue': ServiceCatalogue;
  }
}