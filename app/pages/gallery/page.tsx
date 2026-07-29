import type { Metadata } from "next";
import GalleryPage from "../../components/gallery";
import { absoluteUrl, SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of Salsa Resort in Kaghan Valley - rooms, resort grounds, rivers, kids play area, bonfire nights and mountain scenery.",
  keywords: [
    "Salsa Resort gallery",
    "Kaghan Valley resort photos",
    "Salsa Resort rooms",
    "bonfire nights Kaghan",
  ],
  alternates: {
    canonical: `${SITE_URL}/pages/gallery`,
  },
  openGraph: {
    title: "Salsa Resort Gallery | Moments in Kaghan Valley",
    description:
      "Explore photos of rooms, rivers, lawns, kids play areas and bonfire nights at Salsa Resort, Kaghan Valley.",
    url: `${SITE_URL}/pages/gallery`,
    images: [{ url: absoluteUrl("/g6.webp"), alt: "Salsa Resort gallery" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salsa Resort Photo Gallery",
    description: "Photos from Salsa Resort - rooms, rivers, family spaces and valley views in Kaghan.",
    images: [absoluteUrl("/g6.webp")],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;

  return <GalleryPage initialTab={tab || "all"} />;
}
