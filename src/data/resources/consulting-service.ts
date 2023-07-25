import { ResourceIdentifier } from "../types/resource-identifier.js";

export enum ServiceType {ONGOING, ONE_TIME}

export interface ServiceInit {
  identifier: string,
  name: string,
  alternateName?: string,
  description: string,
  serviceType: ServiceType
}

export class ConsultingService {
  accessor name: string;

  accessor identifier: ResourceIdentifier
  
  accessor url: URL

  accessor description: string

  accessor alternateName: string;

  #serviceType: ServiceType;

  constructor(init: ServiceInit) {
    const normalizedId = new ResourceIdentifier(init.identifier);
    this.name = init.name;
    this.identifier = normalizedId;
    this.url = new URL(`${normalizedId.id}/`, 'https://www.dropbear.dev/');
    this.description = init.description;
    this.alternateName = init.alternateName || "";
    this.#serviceType = init.serviceType;
  }

  get urlPattern(): URLPattern{
    return new URLPattern({pathname: `${this.url.pathname}{/}?`});
  }

  get serviceType(): string {
    if (this.#serviceType === ServiceType.ONGOING) {
      return "Ongoing consultation"
    } else {
      return "One time service"
    }
  }

  get serviceTypeEnum(): ServiceType {
    return this.#serviceType;
  }

  toJSON(): JSON {
    return JSON.parse(
      `{
        "@context": "https://schema.org/",
        "@type": "Service",
        "provider": {
          "@type": "OnlineBusiness",
          "name": "Dropbear Software",
          "url": "https://www.dropbear.dev/"
        },
        "name": "${this.name}",
        "description": "${this.description}",
        "alternateName": "${this.alternateName}",
        "url": "${this.url.href}",
        "serviceType": "${this.serviceType}"
      }`
    );
  }
}