import { absoluteUrl, FAQS, SITE_URL } from "./site";

export function getResortJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    "@id": `${SITE_URL}/#resort`,
    name: "Salsa Resort",
    alternateName: "Salsa Resort Kaghan",
    description:
      "Salsa Resort is an elegant and serene mountain resort in Kaghan Valley, Khyber Pakhtunkhwa, Pakistan, offering comfortable rooms, family suites, Kunhar River access, Kamal Bunn forest surroundings, BBQ nights, bonfire evenings, fresh trout fish, open lawns, kids play area and warm hospitality.",
    url: SITE_URL,
    logo: absoluteUrl("/logonew.webp"),
    image: [
      absoluteUrl("/resort.webp"),
      absoluteUrl("/room1.webp"),
      absoluteUrl("/hero-image.webp"),
    ],
    telephone: ["+923001499133", "+923449149321"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaghan Valley",
      addressLocality: "Kaghan Valley",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.723418",
      longitude: "73.543387",
    },
    areaServed: {
      "@type": "Place",
      name: "Kaghan Valley, Pakistan",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Kunhar River Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kamal Bunn Forest Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "BBQ Nights", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bonfire Nights", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fresh Trout Fish", value: true },
      { "@type": "LocationFeatureSpecification", name: "Open Lawn and Sitting Area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kids Play Area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Mountain Views", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Hospitality", value: true },
    ],
    containsPlace: [
      {
        "@type": "HotelRoom",
        name: "Deluxe Valley Room",
        description: "Spacious room with a private balcony overlooking the valley and river.",
      },
      {
        "@type": "HotelRoom",
        name: "Family Suite",
        description: "Two-bedroom suite suitable for families, with a sitting area and forest views.",
      },
      {
        "@type": "HotelRoom",
        name: "Riverside Room",
        description: "Room designed for guests who want to wake up near the sound of the Kunhar River.",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Deluxe Valley Room Stay",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#rooms`,
      },
      {
        "@type": "Offer",
        name: "Family Suite Stay",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#rooms`,
      },
      {
        "@type": "Offer",
        name: "Riverside Room Stay",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#rooms`,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "20",
    },
    sameAs: [
      "https://www.youtube.com/@thesalsaresortskaghan",
      "https://www.facebook.com/profile.php?id=61592319543466",
    ],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
