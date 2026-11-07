"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { books } from "@/lib/content/books";
import { cariPage } from "@/lib/content/pages";
import { works } from "@/lib/content/works";

export default function CariPage() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const workHits = works
      .filter(
        (w) =>
          w.title.toLowerCase().includes(query) ||
          w.excerpt.toLowerCase().includes(query) ||
          w.author.toLowerCase().includes(query),
      )
      .map((w) => ({
        href: w.kind === "metoo" ? `/metoo/${w.slug}` : `/karya/${w.slug}`,
        title: w.title,
        meta: w.kindLabel,
      }));
    const bookHits = books
      .filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.author.toLowerCase().includes(query) ||
          b.synopsis.toLowerCase().includes(query),
      )
      .map((b) => ({
        href: `/perpustakaan/buku/${b.slug}`,
        title: b.title,
        meta: "Buku",
      }));
    return [...workHits, ...bookHits];
  }, [q]);

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold text-blue sm:text-4xl">
        {cariPage.title}
      </h1>
      <p className="mt-3 text-sm text-blue/90 sm:text-base">{cariPage.intro}</p>
      <form
        className="mt-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari cerpen, esai, puisi, catatan lapangan, atau judul buku..."
          className="w-full rounded-full border border-blue-24 px-5 py-3 text-sm text-blue outline-none focus:border-blue"
        />
      </form>

      <div className="mt-8 space-y-3">
        {q && results.length === 0 ? (
          <p className="text-sm text-blue-60">Tidak ada hasil untuk “{q}”.</p>
        ) : null}
        {results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl border border-blue-24 bg-white p-4 hover:border-blue"
          >
            <p className="text-xs font-semibold text-blue-60">{item.meta}</p>
            <p className="mt-1 font-semibold text-blue">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
