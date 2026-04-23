export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Algarve SimRacing",
    description: "Professional simulator rentals, coaching, streaming-ready rigs, events, and driver-focused training in Portimão, Portugal.",
    url: "https://algarvesimracing.com",
    telephone: "+351-915-301-376",
    email: "info@algarvesimracing.com",
    image: "https://algarvesimracing.com/assets/008-900x900-1.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zona Industrial Coca Maravilhas Lote 15",
      addressLocality: "Portimão",
      addressRegion: "Algarve",
      postalCode: "8500-483",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.1520056,
      longitude: -8.5493578,
    },
    hasMap: "https://www.google.com/maps/place/Algarve+SimRacing/@37.1520056,-8.5519327,1286m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd1b298a91a1115b:0xd3aff11132632faa!8m2!3d37.1520056!4d-8.5493578!16s%2Fg%2F11xh8q8scr?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/algarvesimracing/",
      "https://wa.me/351915301376",
    ],
    areaServed: {
      "@type": "Place",
      name: "Portimão, Algarve, Portugal",
    },
    serviceType: [
      "Simulator Rentals",
      "Sim Racing Coaching",
      "Private Events",
      "Streaming & Content Creation",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Algarve SimRacing",
    url: "https://algarvesimracing.com",
    logo: "https://algarvesimracing.com/assets/asr-logo-color.svg",
    image: "https://algarvesimracing.com/assets/008-900x900-1.jpg",
    description: "Portugal's Premier Sim Racing Experience — Where Virtual Meets Reality.",
    sameAs: [
      "https://www.instagram.com/algarvesimracing/",
      "https://wa.me/351915301376",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+351-915-301-376",
      contactType: "Customer Service",
      email: "info@algarvesimracing.com",
      availableLanguage: ["English", "Portuguese"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Algarve SimRacing",
    url: "https://algarvesimracing.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://algarvesimracing.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
