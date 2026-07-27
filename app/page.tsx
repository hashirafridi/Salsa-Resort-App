import type { Metadata } from "next";
import Home from "./components/home";
import JsonLd from "./components/JsonLd";
import { getFaqJsonLd, getResortJsonLd } from "./lib/schema";
import { absoluteUrl, SITE_NAME, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  title: "Salsa Resort Kaghan Valley | Mountain Resort & Family Stay in Pakistan",
  description:
    "Salsa Resort is a peaceful mountain resort in Kaghan Valley, offering comfortable rooms, BBQ nights, fresh trout fish and scenic mountain views.",
  keywords: [
    "Salsa Resort",
    "Salsa Resort Kaghan",
    "resort in Kaghan Valley",
    "hotel in Kaghan Valley",
    "best resort in Kaghan",
    "family hotel in Kaghan",
    "Kaghan Valley resort",
    "Kunhar River resort",
    "hotels in Kaghan Pakistan",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Salsa Resort Kaghan Valley | Where the Mountains Meet Refined Tranquility",
    description:
      "Discover Salsa Resort in Kaghan Valley, Pakistan — comfortable rooms, river access, mountain views, BBQ nights, bonfire evenings and family-friendly hospitality.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/resort.webp"),
        width: 1200,
        height: 630,
        alt: "Salsa Resort in Kaghan Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salsa Resort Kaghan Valley",
    description:
      "A peaceful mountain resort in Kaghan Valley, Pakistan with rooms, family suites, Kunhar River access and scenic valley views.",
    images: [absoluteUrl("/resort.webp")],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={getResortJsonLd()} />
      <JsonLd data={getFaqJsonLd()} />
      <Home />
    </>
  );
}
