import { site } from "@/data/site";
import { services } from "@/data/services";
import type { Faq } from "@/data/faqs";

// LocalBusiness structured data (JSON-LD), rendered on every page by BaseLayout.
// Google reads this to understand who the business is, where it operates,
// and what it offers.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "AccountingService"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.venue}, ${site.address.street}`,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHours: "Mo-Fr 09:00-15:00",
    areaServed: site.areas.map((area) => ({ "@type": "Place", name: area })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.summary,
        url: `${site.url}/#${service.id}`,
      },
    })),
    ...(site.social.length > 0 ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

// FAQPage structured data for pages that render FAQs.
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
