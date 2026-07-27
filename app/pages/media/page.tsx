import type { Metadata } from "next";
import MediaPage from "../../components/media";
import { absoluteUrl, SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Videos & Facebook Updates",
  description:
    "Watch Salsa Resort videos and follow Facebook updates from The Salsa Resorts Kaghan — tours, bonfire nights and valley life.",
  keywords: [
    "Salsa Resort videos",
    "Salsa Resort Facebook",
    "Kaghan Valley resort videos",
    "The Salsa Resorts Kaghan",
  ],
  alternates: {
    canonical: `${SITE_URL}/pages/media`,
  },
  openGraph: {
    title: "Life at Salsa Resort | Videos & Facebook Feed",
    description:
      "Catch resort videos and Facebook updates from Salsa Resort in Kaghan Valley, Pakistan.",
    url: `${SITE_URL}/pages/media`,
    images: [{ url: absoluteUrl("/hero-image.webp"), alt: "Salsa Resort media" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salsa Resort Videos & Updates",
    description: "Watch videos and follow Facebook updates from Salsa Resort, Kaghan Valley.",
    images: [absoluteUrl("/hero-image.webp")],
  },
};

export default function Page() {
  return <MediaPage />;
}
