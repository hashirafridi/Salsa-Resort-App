import type { Metadata } from "next";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { SITE_NAME, SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Salsa Resort Kaghan Valley | Mountain Resort & Family Stay in Pakistan",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Salsa Resort is a peaceful mountain resort in Kaghan Valley, Pakistan, offering comfortable rooms, family suites, Kunhar River access, BBQ nights, bonfire evenings, kids play area, fresh trout fish and scenic mountain views.",
  icons: {
    icon: "/logonew.webp",
    shortcut: "/logonew.webp",
    apple: "/logonew.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
