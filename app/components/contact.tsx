"use client";

import Link from "next/link";
import {
  formatDisplayNumber,
  PHONE_NUMBERS,
  PRIMARY_PHONE,
  PRIMARY_WHATSAPP,
  toTelLink,
  toWhatsAppLink,
  WHATSAPP_NUMBERS,
} from "../lib/contact";

const ACCENT = "#c8324a";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
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
          <Link href="/" className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(160deg, #fff1f3 0%, #ffffff 45%, #fafafa 100%)`,
          }}
        />
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
            Contact
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Get in touch
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mx-auto">
            Call or message us to reserve your stay at Salsa Resort in Kaghan Valley.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div
              className="w-12 h-12 rounded-full grid place-items-center mb-5 text-white"
              style={{ background: ACCENT }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Phone
            </h2>
            <p className="text-neutral-500 text-sm mb-6">Speak with our team directly.</p>
            <ul className="space-y-3">
              {PHONE_NUMBERS.map((num) => (
                <li key={num}>
                  <a
                    href={toTelLink(num)}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 px-5 py-4 text-neutral-800 font-medium hover:border-neutral-400 transition-colors"
                  >
                    <span>{formatDisplayNumber(num)}</span>
                    <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                      Call
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div
              className="w-12 h-12 rounded-full grid place-items-center mb-5 text-white"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              WhatsApp
            </h2>
            <p className="text-neutral-500 text-sm mb-6">Message us anytime for bookings and inquiries.</p>
            <ul className="space-y-3">
              {WHATSAPP_NUMBERS.map((num) => (
                <li key={num}>
                  <a
                    href={toWhatsAppLink(num, "Hello! I would like to inquire about booking at Salsa Resort.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 px-5 py-4 text-neutral-800 font-medium hover:border-neutral-400 transition-colors"
                  >
                    <span>{formatDisplayNumber(num)}</span>
                    <span className="text-sm font-semibold" style={{ color: "#25D366" }}>
                      Chat
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 text-center">
          <p className="text-neutral-500 text-sm mb-4">Prefer a quick start?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={toTelLink(PRIMARY_PHONE)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105"
              style={{ background: ACCENT }}
            >
              Call {formatDisplayNumber(PRIMARY_PHONE)}
            </a>
            <a
              href={toWhatsAppLink(PRIMARY_WHATSAPP, "Hello! I would like to inquire about booking at Salsa Resort.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105"
              style={{ background: "#25D366" }}
            >
              WhatsApp us
            </a>
          </div>
          <p className="mt-10 text-neutral-500 text-sm">📍 Kaghan Valley, KPK, Pakistan</p>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
      `}</style>
    </div>
  );
}
