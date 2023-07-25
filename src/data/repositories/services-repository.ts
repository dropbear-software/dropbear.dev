import { ResourceNotFoundError } from "../errors/resource-not-found-error.js";
import { ConsultingService, ServiceType } from "../resources/consulting-service.js";

const croConsultingService = new ConsultingService({
  name: 'CRO Consulting',
  alternateName: 'Conversion Rate Optimization Consulting',
  identifier: 'services/cro-consulting',
  description: 'Something',
  serviceType: ServiceType.ONGOING,
});

const seoConsultingService = new ConsultingService({
  name: 'SEO Consulting',
  alternateName: 'Search Engine Optimization Consulting',
  identifier: 'services/seo-consulting',
  description: 'Something',
  serviceType: ServiceType.ONGOING
});

const devConsultingService = new ConsultingService({
  name: 'Web Development Consulting',
  alternateName: 'Development Consulting',
  identifier: 'services/dev-consulting',
  description: 'Something',
  serviceType: ServiceType.ONGOING
});

const analyticsImplementation = new ConsultingService({
  name: 'Analytics Implementation',
  alternateName: 'Google Analytics 4 Consulting',
  identifier: 'services/analytics-consulting',
  description: 'Something',
  serviceType: ServiceType.ONE_TIME
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

  getAll(): ConsultingService[]{
    return Array.from(this.#services.values());
  }
}

export const servicesRepository = new ServicesRepository([seoConsultingService, croConsultingService, devConsultingService, analyticsImplementation]);