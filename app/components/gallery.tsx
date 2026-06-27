"use client";

import Link from "next/link";
import { useState } from "react";


/*
const legacyRoute = {
  validateSearch: (search: { tab?: string }) => ({ tab: search.tab || "all" }),
  head: () => ({
    meta: [
      { title: "Gallery — Salsa Resort" },
      { name: "description", content: "Browse the full gallery of Salsa Resort, Kaghan Valley." },
    ],
  }),
  component: GalleryPage,
};
*/

const ACCENT = "#c8324a";

const RESORT_IMGS = ["/resort.webp", "/g4.webp", "/g6.webp", "/g7.webp", "/g8.webp", "/gg.webp"];
const KIDS_IMGS = ["/kids-play.webp", "/kids-play.webp", "/kids-play.webp"];
const BONFIRE_IMGS = ["/bonfire.webp", "/bonfire.webp", "/bonfire.webp"];

const TABS: { id: string; label: string; images: string[] }[] = [
  { id: "all", label: "All", images: [...RESORT_IMGS, ...KIDS_IMGS, ...BONFIRE_IMGS] },
  { id: "resort", label: "Resort", images: RESORT_IMGS },
  { id: "kids", label: "Kids Play Area", images: KIDS_IMGS },
  { id: "bonfire", label: "Bonfire Nights", images: BONFIRE_IMGS },
];


type GalleryPageProps = {
  initialTab?: string;
};

export default function GalleryPage({ initialTab = "all" }: GalleryPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const current = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Simple header */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span
              className="font-semibold tracking-tight text-2xl italic"
              style={{ color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Salsa Resort
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Gallery
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Moments at Salsa
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TABS.map((t) => {
              const active = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: active ? ACCENT : "transparent",
                    color: active ? "#fff" : "#404040",
                    border: `1px solid ${active ? ACCENT : "#e5e5e5"}`,
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {current.images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl group bg-neutral-100">
                <img
                  src={src}
                  alt={`${current.label} ${i + 1}`}
                  className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
      `}</style>
    </div>
  );
}
