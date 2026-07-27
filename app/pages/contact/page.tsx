import type { Metadata } from "next";
import ContactPage from "../../components/contact";
import { absoluteUrl, SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact & Book Your Stay",
  description:
    "Contact Salsa Resort in Kaghan Valley for room bookings and inquiries. Call 0300 149 9133 or WhatsApp 0333 918 1540 and 0344 914 9321.",
  keywords: [
    "Salsa Resort contact",
    "book Salsa Resort Kaghan",
    "Kaghan Valley hotel booking",
    "WhatsApp booking Kaghan",
  ],
  alternates: {
    canonical: `${SITE_URL}/pages/contact`,
  },
  openGraph: {
    title: "Contact Salsa Resort | Book Your Stay in Kaghan Valley",
    description:
      "Reach Salsa Resort by phone or WhatsApp to reserve rooms, family suites and riverside stays in Kaghan Valley.",
    url: `${SITE_URL}/pages/contact`,
    images: [{ url: absoluteUrl("/resort.webp"), alt: "Salsa Resort Kaghan Valley" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Salsa Resort Kaghan Valley",
    description: "Call or WhatsApp Salsa Resort to book your mountain stay in Kaghan Valley, Pakistan.",
    images: [absoluteUrl("/resort.webp")],
  },
};

export default function Page() {
  return <ContactPage />;
}
