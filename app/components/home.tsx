"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  formatDisplayNumber,
  PHONE_NUMBERS,
  PRIMARY_PHONE,
  PRIMARY_WHATSAPP,
  toTelLink,
  toWhatsAppLink,
  WHATSAPP_NUMBERS,
} from "../lib/contact";



/*
const legacyRoute = {
  head: () => ({
    meta: [
      { title: "Salsa Resort — Kaghan Valley, Pakistan" },
      {
        name: "description",
        content:
          "Elegant and serene resort in Kaghan Valley offering unmatched comfort, natural beauty, and exceptional hospitality on the banks of the Kunhar River.",
      },
      { property: "og:title", content: "Salsa Resort — Kaghan Valley" },
      {
        property: "og:description",
        content:
          "Elegant and serene resort offering unmatched comfort, natural beauty, and exceptional hospitality.",
      },
      { property: "og:image", content: resortAsset.url },
    ],
  }),
  component: Home,
};
*/

// Brand accent (the pinkish-red from the resort roofs)
const ACCENT = "#c8324a";
const ACCENT_SOFT = "#fff1f3";

const IMAGES = {
  resort: "/resort.webp",
  g4: "/g6.webp",
  g6: "/g6.webp",
  g7: "/g7.webp",
  g8: "/g8.webp",
  gg: "/openlawn.webp",
  kidsPlay: "/kids-play.webp",
  bonfire: "/b3.webp",
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "/pages/contact" },
];

const FACILITIES = [
  {
    title: "Kunhar River Access",
    desc: "Step out onto the banks of the famed Kunhar River.",
    img: IMAGES.g4,
  },
  {
    title: "Kamal Bunn Forest",
    desc: "Direct access to lush pine forests for walks and exploration.",
    img: IMAGES.g7,
  },
  {
    title: "BBQ Nights",
    desc: "Open-air barbecue setups under the stars.",
    img: IMAGES.bonfire,
  },
  {
    title: "Fresh Trout Fish",
    desc: "Locally caught trout, freshly prepared by our kitchen.",
    img: IMAGES.g8,
  },
  {
    title: "Open Lawn & Sitting",
    desc: "Manicured lawns designed for slow mornings and golden evenings.",
    img: IMAGES.gg,
  },
  {
    title: "Mountain Views",
    desc: "Panoramic views of the Himalayan foothills from every corner.",
    img: IMAGES.g6,
  },
];


const ROOMS = [
  {
    name: "Deluxe Valley Room",
    desc: "Spacious room with a private balcony overlooking the valley and river.",
    img: "/room1.webp",
  },
  {
    name: "Family Suite",
    desc: "Two-bedroom suite perfect for families, with a sitting area and forest views.",
    img: "/room2.webp",
  },
  {
    name: "Riverside Room",
    desc: "Wake up to the sound of the Kunhar River right outside your window.",
    img: "/room3.webp",
  },
];

const GALLERY = [IMAGES.g4, IMAGES.g6, IMAGES.g7, IMAGES.g8, IMAGES.gg, IMAGES.resort];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="/logo1.png"
              alt="Salsa Resort Logo"
              className="h-22 w-auto object-contain mix-blend-multiply"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) =>
              n.href.startsWith("/") ? (
                <Link
                  key={n.label}
                  href={n.href}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  {n.label}
                </a>
              )
            )}
            <Link
              href="/pages/contact"
              className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-transform hover:scale-105"
              style={{ background: ACCENT }}
            >
              Book Stay
            </Link>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-neutral-200"
            aria-label="Menu"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV.map((n) =>
                n.href.startsWith("/") ? (
                  <Link
                    key={n.label}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-neutral-700 py-2"
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-neutral-700 py-2"
                  >
                    {n.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.resort})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.1) 70%, transparent 100%), linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 35%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20">
          <div className="max-w-xl text-left">
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-5 text-white/80"
            >
              Kaghan Valley · Pakistan
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal italic text-white tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              Salsa Resort
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-md leading-relaxed mb-10">
              Where the mountains meet refined tranquility.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/pages/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: ACCENT }}
              >
                Book Your Stay
              </Link>
              <a
                href="#rooms"
                className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Explore rooms →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              About the Resort
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A retreat where the <span style={{ color: ACCENT }}>mountains</span> meet the river.
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-5 text-[17px]">
              Tucked into the heart of Pakistan&apos;s stunning Kaghan Valley, Salsa Resort is a sanctuary
              for travelers seeking quiet luxury. Wake up to snow-dusted peaks, breathe the pine-scented
              air of the Kamal Bunn forest, and fall asleep to the soft rush of the Kunhar River.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8 text-[17px]">
              Every detail — from our hand-crafted rooms to our open lawns and riverside BBQ nights —
              is designed to make your stay genuinely unforgettable.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold" style={{ color: ACCENT }}>20+</div>
                <div className="text-sm text-neutral-500 mt-1">Comfortable Rooms</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: ACCENT }}>4.9</div>
                <div className="text-sm text-neutral-500 mt-1">Guest Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: ACCENT }}>24/7</div>
                <div className="text-sm text-neutral-500 mt-1">Hospitality</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl -z-10"
              style={{ background: `linear-gradient(135deg, ${ACCENT_SOFT}, transparent)` }}
            />
            <img
              src={IMAGES.g6}
              alt="Salsa Resort exterior"
              className="rounded-2xl shadow-2xl w-full h-[520px] object-cover"
            />
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px] hidden md:block"
              style={{ borderTop: `4px solid ${ACCENT}` }}
            >
              <div className="text-xs text-neutral-500 mb-1">Located in</div>
              <div className="font-semibold">Kaghan Valley, KPK</div>
              <div className="text-xs text-neutral-500 mt-1">Pakistan 🇵🇰</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-24 px-4 md:px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Gallery
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mt-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A glimpse of paradise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl group ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Salsa Resort ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-64 sm:h-[420px] md:h-full" : "h-56 sm:h-48 md:h-64"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pages/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:translate-x-1"
              style={{ color: ACCENT }}
            >
              View full gallery →
            </Link>
          </div>

        </div>
      </section>

      {/* AMENITIES / FACILITIES */}
      <section id="amenities" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Amenities & Facilities
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Everything you need, <span style={{ color: ACCENT }}>nothing you don&apos;t</span>.
            </h2>
          </div>
          <FacilitiesScroller />

        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Our Rooms
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Rest, refined.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ROOMS.map((r) => (
              <div key={r.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden h-64">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{r.name}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">{r.desc}</p>
                  <Link
                    href="/pages/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:translate-x-1"
                    style={{ color: ACCENT }}
                  >
                    Inquire to book →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pages/rooms"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:translate-x-1"
              style={{ color: ACCENT }}
            >
              View all rooms →
            </Link>
          </div>

        </div>
      </section>

      {/* KIDS + BONFIRE SPLIT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <Link
            href="/pages/gallery?tab=kids"
            className="relative rounded-3xl overflow-hidden h-[420px] group block cursor-pointer"
          >
            <img
              src={IMAGES.kidsPlay}
              alt="Kids play area"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                style={{ background: ACCENT }}
              >
                For Families
              </span>
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Kids Play Area
              </h3>
              <p className="text-white/90 max-w-md leading-relaxed">
                A safe, joyful playground in the open lawn — swings, slides, and plenty of room to run.
              </p>
              <span className="inline-block mt-3 text-sm font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                View gallery →
              </span>
            </div>
          </Link>
          <Link
            href="/pages/gallery?tab=bonfire"
            className="relative rounded-3xl overflow-hidden h-[420px] group block cursor-pointer"
          >
            <img
              src={IMAGES.bonfire}
              alt="Bonfire nights"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                style={{ background: ACCENT }}
              >
                Under the stars
              </span>
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Bonfire Nights
              </h3>
              <p className="text-white/90 max-w-md leading-relaxed">
                Crisp valley air, warm flames, and the sound of the Kunhar — every evening at Salsa.
              </p>
              <span className="inline-block mt-3 text-sm font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                View gallery →
              </span>
            </div>
          </Link>
        </div>
      </section>


      {/* CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #8a1e30 100%)` }}
      >
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your mountain escape awaits.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Reach out and let our team craft the perfect getaway for you and your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={toTelLink(PRIMARY_PHONE)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white hover:scale-105 transition-transform shadow-xl"
              style={{ color: ACCENT }}
            >
              Call {formatDisplayNumber(PRIMARY_PHONE)}
            </a>
            <a
              href={toWhatsAppLink(PRIMARY_WHATSAPP, "Hello! I would like to inquire about booking at Salsa Resort.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white hover:scale-105 transition-transform shadow-xl"
              style={{ background: "#25D366" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-neutral-950 text-neutral-300 pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/logo1.jpg.webp"
                alt="Salsa Resort Logo"
                className="h-10 w-auto object-contain grayscale invert brightness-200 mix-blend-screen opacity-90"
              />
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              An elegant and serene resort in the heart of Kaghan Valley, Pakistan — offering
              unmatched comfort, natural beauty, and exceptional hospitality.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  {n.href.startsWith("/") ? (
                    <Link href={n.href} className="hover:text-white transition-colors">
                      {n.label}
                    </Link>
                  ) : (
                    <a href={n.href} className="hover:text-white transition-colors">
                      {n.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>📍 Kaghan Valley, KPK, Pakistan</li>
              {PHONE_NUMBERS.map((num) => (
                <li key={`phone-${num}`}>
                  <a href={toTelLink(num)} className="hover:text-white transition-colors">
                    📞 {formatDisplayNumber(num)}
                  </a>
                </li>
              ))}
              {WHATSAPP_NUMBERS.map((num) => (
                <li key={`wa-${num}`}>
                  <a
                    href={toWhatsAppLink(num)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    💬 WhatsApp {formatDisplayNumber(num)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-neutral-800 flex flex-wrap gap-4 justify-between text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Salsa Resort. All rights reserved.</span>
          <span>Made with care in Kaghan Valley.</span>
        </div>
      </footer>

      {/* Web font + scroll behavior — scoped, no global theme edits */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

function FacilitiesScroller() {
  // Duplicated set so user can extend later
  const items = [...FACILITIES, ...FACILITIES];

  // Page size: 1 on mobile, 6 on desktop
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const update = () => setPageSize(window.innerWidth < 768 ? 1 : 6);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);



  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(page, totalPages - 1);
  const visible = items.slice(safePage * pageSize, safePage * pageSize + pageSize);

  return (
    <div>
      <div
        className="grid gap-5 md:gap-6"
        style={{
          gridTemplateColumns: pageSize === 1 ? "1fr" : "repeat(3, minmax(0, 1fr))",
        }}
      >
        {visible.map((f, i) => (
          <div
            key={`${safePage}-${i}`}
            className="rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 group"
            style={{ animation: "facFade 0.4s ease both" }}
          >
            <div className="h-44 overflow-hidden">
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={safePage === 0}
          aria-label="Previous"
          className="w-11 h-11 rounded-full border border-neutral-300 grid place-items-center hover:bg-neutral-50 transition-colors text-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === safePage ? 24 : 8,
                background: i === safePage ? ACCENT : "#d4d4d4",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={safePage === totalPages - 1}
          aria-label="Next"
          className="w-11 h-11 rounded-full border grid place-items-center text-white transition-transform hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ background: ACCENT, borderColor: ACCENT }}
        >
          →
        </button>
      </div>

      <style>{`
        @keyframes facFade {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
