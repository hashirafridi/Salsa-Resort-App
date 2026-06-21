import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salsa Resort - Kaghan Valley, Pakistan",
  description:
    "Elegant resort in Kaghan Valley with comfortable rooms, river access, lawns, BBQ nights, and mountain views.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
