"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FACEBOOK_PAGE_URL, YOUTUBE_CHANNEL_URL, YOUTUBE_UPLOADS_PLAYLIST_ID } from "../lib/media";

const ACCENT = "#c8324a";

type YTPlayer = {
  nextVideo: () => void;
  previousVideo: () => void;
  destroy: () => void;
};

declare global {
  interface Window {
    FB?: { XFBML: { parse: (node?: HTMLElement) => void } };
    fbAsyncInit?: () => void;
    YT?: {
      Player: new (
        elementId: string,
        options: {
          height?: string | number;
          width?: string | number;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: () => void;
            onError?: () => void;
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
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
      <div className="flex justify-center">
        <div
          className="fb-page"
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
    </div>
  );
}

function YouTubeFeed() {
  const playerRef = useRef<YTPlayer | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const createPlayer = () => {
      if (cancelled || !window.YT?.Player) return;
      playerRef.current?.destroy();
      playerRef.current = new window.YT.Player("salsa-yt-player", {
        height: "100%",
        width: "100%",
        playerVars: {
          listType: "playlist",
          list: YOUTUBE_UPLOADS_PLAYLIST_ID,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: () => {
            if (!cancelled) setReady(true);
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        createPlayer();
      };

      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
      <div className="aspect-video bg-neutral-100">
        <div id="salsa-yt-player" className="h-full w-full" />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 py-4 border-t border-neutral-100 bg-[#fafafa]">
        <button
          type="button"
          onClick={() => playerRef.current?.previousVideo()}
          disabled={!ready}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-all hover:border-neutral-400 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <p className="text-center text-xs text-neutral-500 px-2">
          Browse all channel videos · new uploads appear automatically
        </p>
        <button
          type="button"
          onClick={() => playerRef.current?.nextVideo()}
          disabled={!ready}
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ background: ACCENT }}
        >
          Next →
        </button>
      </div>
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
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: ACCENT }}
          >
            Life at Salsa Resort
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Catch the latest videos from our valley and follow daily moments from Kaghan on Facebook.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <div className="mb-5">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: ACCENT }}
              >
                Resort Videos
              </h2>
              <p className="text-neutral-500 mt-2 text-sm md:text-base">
                Tours, bonfire evenings, and glimpses of life by the Kunhar River.
              </p>
            </div>
            <YouTubeFeed />
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-transform hover:translate-x-1"
              style={{ color: ACCENT }}
            >
              Visit our YouTube channel →
            </a>
          </div>

          <div className="text-center">
            <div className="mb-5">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: ACCENT }}
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
