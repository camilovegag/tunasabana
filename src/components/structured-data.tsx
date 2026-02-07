import Script from "next/script";
import { siteConfig } from "@/config/site";

// LocalBusiness + MusicGroup Schema for Tuna Sabana
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MusicGroup"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: ["Tuna Sabana", "Tuna Serenata Bogotá", "Tuna de La Sabana"],
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}/hero.jpg`,
  logo: `${siteConfig.url}/logo.png`,
  foundingDate: "1999",
  slogan: "La mejor serenata de tuna en Bogotá",
  genre: ["Música Española", "Música Tradicional", "Serenata"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: "Chía",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.8616,
    longitude: -74.0302,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bogotá",
      "@id": "https://www.wikidata.org/wiki/Q2841",
    },
    {
      "@type": "City",
      name: "Chía",
    },
    {
      "@type": "AdministrativeArea",
      name: "Cundinamarca",
    },
    {
      "@type": "AdministrativeArea",
      name: "La Sabana de Bogotá",
    },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "23:00",
  },
  sameAs: [siteConfig.links.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "reservations",
    availableLanguage: "Spanish",
  },
};

// Service Schema for Serenatas
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/#serenata-service`,
  name: "Serenata de Tuna en Bogotá",
  alternateName: [
    "Tuna Serenata",
    "Serenata Romántica con Tuna",
    "Contratar Tuna para Serenata",
  ],
  description:
    "Servicio de serenata con tuna universitaria en Bogotá y La Sabana. Música tradicional española para bodas, grados, cumpleaños, aniversarios y eventos especiales.",
  provider: {
    "@id": `${siteConfig.url}/#organization`,
  },
  serviceType: "Serenata Musical",
  areaServed: {
    "@type": "City",
    name: "Bogotá",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tipos de Serenata",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Serenata Romántica",
          description:
            "Serenata de tuna para sorprender a esa persona especial con música tradicional",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Serenata de Grado",
          description:
            "Celebra tu graduación universitaria con una serenata de tuna tradicional",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Serenata para Eventos Corporativos",
          description:
            "Música española y tradición universitaria para eventos empresariales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Serenata de Cumpleaños",
          description:
            "Sorprende en su cumpleaños con una serenata de tuna inolvidable",
        },
      },
    ],
  },
};

// FAQ Schema for common questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una serenata de tuna en Bogotá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de una serenata de tuna varía según la duración y el tipo de evento. Contáctanos por WhatsApp para una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es una tuna universitaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una tuna es una agrupación musical estudiantil con tradición española. La Tuna Universidad de La Sabana existe desde 1999 y está conformada por estudiantes y egresados apasionados por la música.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contratar una serenata de tuna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactarnos por WhatsApp al +57 316 784 3615 o a través del formulario en nuestra página web. Te responderemos con disponibilidad y cotización.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen serenatas fuera de Bogotá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, realizamos serenatas en Bogotá, Chía, y toda la Sabana de Bogotá. También podemos viajar a otras ciudades de Colombia.",
      },
    },
  ],
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  inLanguage: "es-CO",
};

export function OrganizationSchema() {
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires this pattern, content is static and controlled
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}

export function ServiceSchema() {
  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires this pattern, content is static and controlled
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema),
      }}
    />
  );
}

export function FAQSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires this pattern, content is static and controlled
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires this pattern, content is static and controlled
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
  );
}

export default function StructuredData() {
  return (
    <>
      <OrganizationSchema />
      <ServiceSchema />
      <FAQSchema />
      <WebsiteSchema />
    </>
  );
}
