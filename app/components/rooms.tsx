"use client";

import Link from "next/link";

/*
const legacyRoute = {
  head: () => ({
    meta: [
      { title: "Rooms — Salsa Resort" },
      { name: "description", content: "Explore all rooms and suites at Salsa Resort, Kaghan Valley." },
    ],
  }),
  component: RoomsPage,
};
*/

const ACCENT = "#c8324a";

const ROOMS = [
  {
    name: "Deluxe Valley Room",
    desc: "Spacious room with a private balcony overlooking the valley and river.",
    img: "/rm1.avif",
  },
  {
    name: "Family Suite",
    desc: "Two-bedroom suite perfect for families, with a sitting area and forest views.",
    img: "/rm2.avif",
  },
  {
    name: "Riverside Room",
    desc: "Wake up to the sound of the Kunhar River right outside your window.",
    img: "/rm3.avif",
  },
  {
    name: "Forest View Room",
    desc: "Cozy room facing the Kamal Bunn pine forest, perfect for quiet mornings.",
    img: "/rm4.avif",
  },
  {
    name: "Executive Suite",
    desc: "Premium suite with sitting lounge, balcony, and panoramic mountain views.",
    img: "/rm5.avif",
  },
  {
    name: "Standard Twin",
    desc: "Comfortable twin-bed room with modern amenities and warm decor.",
    img: "/rm6.avif",
  },
];

export default function RoomsPage() {
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

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
              Our Rooms
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              All rooms & suites
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map((r) => (
              <div key={r.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-100">
                <div className="overflow-hidden h-64">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{r.name}</h3>
                  <p className="text-neutral-600 leading-relaxed">{r.desc}</p>
                </div>
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
