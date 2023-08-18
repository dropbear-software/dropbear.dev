/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {ResourceNotFoundError} from "../errors/resource-not-found-error.js";
import {ConsultingService, ServiceType} from "../resources/consulting-service.js";

const croConsultingService = new ConsultingService({
  name: "CRO Consulting",
  alternateName: "Conversion Rate Optimisation Consulting",
  identifier: "services/cro-consulting",
  description: "Conversion Rate Optimisation is a data-driven way to improve your website or app by testing different variations of a page or feature to see which one performs better and in many cases provides a statistically significant link to ROI.",
  serviceType: ServiceType.ONGOING,
});

const seoConsultingService = new ConsultingService({
  name: "SEO Consulting",
  alternateName: "Search Engine Optimisation Consulting",
  identifier: "services/seo-consulting",
  description: "Search Engine Optimisation is one of the most cost effective ways to bring traffic to your website. Our modern evidence based approach to SEO also makes it more predictable and transparent allowing you to invest in it with confidence.",
  serviceType: ServiceType.ONGOING,
});

const devConsultingService = new ConsultingService({
  name: "Web Development Consulting",
  alternateName: "Development Consulting",
  identifier: "services/dev-consulting",
  description: "If you are looking to build a new website or just modernise the one you already have, do yourself a favour and speak to us first. Our unique combination of skillsets means we can offer you solutions that you won't find anywhere else.",
  serviceType: ServiceType.ONGOING,
});

const analyticsImplementation = new ConsultingService({
  name: "Analytics Implementation",
  alternateName: "Google Analytics 4 Consulting",
  identifier: "services/analytics-consulting",
  description: "The modern analytics landscape is changing rapidly. With the introduction of AI and ML platforms into tools such as Google Analytics, a new world of opportunities open up. Let us show you how to take advantage of them for your business.",
  serviceType: ServiceType.ONE_TIME,
});

const designSystem = new ConsultingService({
  name: "Digital Transformation Starter Kits",
  alternateName: "Design System Package",
  identifier: "services/starter-kits",
  description: "Based on our extensive consulting work, we have designed and developed a series of modular packages to help modernise your business ranging from custom design systems all the way up to your entire digital infrastructure.",
  serviceType: ServiceType.ONE_TIME,
});

const websiteAudits = new ConsultingService({
  name: "Website Audits",
  alternateName: "Conversion focused website audits",
  identifier: "services/website-audits",
  description: "Something",
  serviceType: ServiceType.ONE_TIME,
});

class ServicesRepository {
  #services = new Map<string, ConsultingService>();

  constructor(services: ConsultingService[]) {
    for (const consultingService of services) {
      this.#services.set(consultingService.identifier.id, consultingService);
    }
  }

  getById(name: string): ConsultingService {
    const service = this.#services.get(name);
    if (service) {
      return service;
    }

    throw new ResourceNotFoundError(`Consulting Service: ${name} not found`, name);
  }

  getAll(): ConsultingService[] {
    return Array.from(this.#services.values());
  }
}

export const servicesRepository = new ServicesRepository([
  seoConsultingService,
  croConsultingService,
  devConsultingService,
  analyticsImplementation,
  designSystem,
  websiteAudits,
]);
