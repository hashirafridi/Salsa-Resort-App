"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FACEBOOK_PAGE_URL, YOUTUBE_UPLOADS_PLAYLIST_ID } from "../lib/media";

const ACCENT = "#c8324a";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (node?: HTMLElement) => void } };
    fbAsyncInit?: () => void;
  }
}

function FacebookFeed() {
  useEffect(() => {
    if (document.getElementById("facebook-jssdk")) {
      window.FB?.XFBML.parse();
      return;
    }

    window.fbAsyncInit = () => {
      window.FB?.XFBML.parse();
    };

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v24.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      delete window.fbAsyncInit;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6 shadow-sm">
      <div id="fb-root" />
      <div
        className="fb-page mx-auto"
        data-href={FACEBOOK_PAGE_URL}
        data-tabs="timeline"
        data-width="500"
        data-height="650"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      />
    </div>
  );
}

function YouTubeFeed() {
  const hasPlaylist = Boolean(YOUTUBE_UPLOADS_PLAYLIST_ID);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
      {hasPlaylist ? (
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST_ID}`}
            title="Salsa Resort videos on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="aspect-video flex flex-col items-center justify-center gap-4 px-6 text-center"
          style={{ background: `linear-gradient(135deg, ${ACCENT}12 0%, #fafafa 100%)` }}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full text-white"
            style={{ background: ACCENT }}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
              <path d="M10 16.5v-9l6 4.5-6 4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-neutral-800">Resort videos coming soon</p>
            <p className="mt-1 text-sm text-neutral-500 max-w-sm">
              Our YouTube channel is being set up. Check back soon for tours, bonfire nights, and valley views.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MediaPage() {
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

      <section className="relative py-16 md:py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(160deg, #fff1f3 0%, #ffffff 50%, #fafafa 100%)" }}
        />
        <div className="max-w-7xl mx-auto text-center mb-14">
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
            Watch & Follow
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Life at Salsa Resort
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Catch the latest videos from our valley and follow daily moments from Kaghan on Facebook.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <div className="mb-5">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Resort Videos
              </h2>
              <p className="text-neutral-500 mt-2 text-sm md:text-base">
                Tours, bonfire evenings, and glimpses of life by the Kunhar River.
              </p>
            </div>
            <YouTubeFeed />
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-transform hover:translate-x-1"
              style={{ color: ACCENT }}
            >
              Visit our YouTube channel →
            </a>
          </div>

          <div>
            <div className="mb-5">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Facebook Updates
              </h2>
              <p className="text-neutral-500 mt-2 text-sm md:text-base">
                Photos, announcements, and stories from The Salsa Resorts Kaghan.
              </p>
            </div>
            <FacebookFeed />
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-transform hover:translate-x-1"
              style={{ color: ACCENT }}
            >
              Open Facebook page →
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
      `}</style>
    </div>
  );
}
