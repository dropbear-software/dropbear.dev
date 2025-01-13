// src/data/services/consulting.ts
interface ConsultingService {
  "@context": "https://schema.org", // Standard schema.org context
  "@type": "Service",
  name: string,
  description: string,
  serviceType: string,
  provider: {
    "@type": "Organization",
    name: string
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: string,
      price: number
    }
  }
}

// const consultingData: ConsultingService = {
//   // ... your consulting service data
// };

// export default consultingData;
