"use client";

import { useEffect, useState } from "react";

export function TopBar() {
  const [upright, setUpright] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [locale, setLocale] = useState<"id" | "en">("id");

  useEffect(() => {
    document.documentElement.classList.toggle("not-italic", upright);
  }, [upright]);

  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText);
  }, [largeText]);

  return (
    <div className="border-b border-blue-24 bg-blue-06 px-3 py-1.5 text-[11px] text-blue sm:px-4 sm:text-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
        <span className="truncate text-blue-60">Pesisir Pantura · Karawang</span>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setUpright((v) => !v)}
            className="cursor-pointer rounded px-1.5 py-0.5 underline hover:text-blue-deep focus:outline-none focus:ring-1 focus:ring-blue-deep"
            title="Huruf Tegak"
          >
            {upright ? "Gaya Asli" : "Huruf Tegak"}
          </button>
          <span className="text-blue-24">|</span>
          <button
            type="button"
            onClick={() => setLargeText((v) => !v)}
            className="cursor-pointer rounded px-1.5 py-0.5 underline hover:text-blue-deep focus:outline-none focus:ring-1 focus:ring-blue-deep"
            title="Teks Besar"
          >
            {largeText ? "Normal" : "Teks Besar"}
          </button>
          <span className="text-blue-24">|</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              lang="id"
              aria-label="Bahasa Indonesia"
              aria-current={locale === "id" ? "true" : undefined}
              onClick={() => setLocale("id")}
              className={`cursor-pointer rounded px-1.5 py-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-deep ${
                locale === "id"
                  ? "font-bold text-blue underline"
                  : "text-blue-60 hover:text-blue-deep hover:underline"
              }`}
            >
              ID
            </button>
            <span className="text-blue-24">/</span>
            <button
              type="button"
              lang="en"
              aria-label="English"
              aria-current={locale === "en" ? "true" : undefined}
              onClick={() => setLocale("en")}
              className={`cursor-pointer rounded px-1.5 py-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-deep ${
                locale === "en"
                  ? "font-bold text-blue underline"
                  : "text-blue-60 hover:text-blue-deep hover:underline"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
