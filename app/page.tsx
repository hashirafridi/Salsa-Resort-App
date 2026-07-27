import Home from "./components/home";

export const metadata = {
  title: "Salsa Resort - Kaghan Valley, Pakistan",

  description:
    "Elegant resort in Kaghan Valley with comfortable rooms, river access, lawns, BBQ nights, and mountain views.",

  keywords: [
    "Salsa Resort",
    "Kaghan Valley",
    "Pakistan",
    "Resort in Kaghan",
    "Hotel in Kaghan",
    "Mountain Resort",
    "Luxury Resort",
    "Family Resort",
  ],

  alternates: {
    canonical: "https://salsaresorts.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Salsa Resort - Kaghan Valley, Pakistan",
    description:
      "Elegant resort in Kaghan Valley with comfortable rooms, river access, lawns, BBQ nights, and mountain views.",
    url: "https://salsaresorts.com",
    siteName: "Salsa Resort",
    images: [
      {
        url: "/resort.webp",
        width: 1200,
        height: 630,
        alt: "Salsa Resort in Kaghan Valley",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salsa Resort - Kaghan Valley, Pakistan",
    description:
      "Elegant resort in Kaghan Valley with comfortable rooms, river access, lawns, BBQ nights, and mountain views.",
    images: ["/resort.webp"],
  },
};

export default function Page() {
  return <Home />;
}