import Link from "next/link";
import { OpenBookIcon } from "@/components/icons";
import { books } from "@/lib/content/books";
import { perpustakaanPage } from "@/lib/content/pages";

export default function PerpustakaanPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="rounded-2xl border border-blue-24 bg-blue-06 p-6 sm:p-10">
        <p className="text-xs font-semibold text-blue-60">
          {perpustakaanPage.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-blue sm:text-4xl">
          {perpustakaanPage.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue/90 sm:text-base">
          {perpustakaanPage.intro}
        </p>
        <div className="mt-5 space-y-1 text-xs text-blue-60 sm:text-sm">
          <p>Jam Buka: {perpustakaanPage.hours}</p>
          <p>Lokasi: {perpustakaanPage.location}</p>
          <p>Kontak WhatsApp: {perpustakaanPage.whatsapp}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/perpustakaan/katalog"
            className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-white hover:bg-blue-deep"
          >
            Jelajahi Katalog Buku
          </Link>
          <Link
            href="/perpustakaan/donasi"
            className="inline-flex min-h-11 items-center rounded-full border border-blue px-5 text-sm font-semibold text-blue hover:bg-white"
          >
            Donasi Buku
          </Link>
          <Link
            href="/perpustakaan/relawan"
            className="inline-flex min-h-11 items-center rounded-full border border-blue px-5 text-sm font-semibold text-blue hover:bg-white"
          >
            Daftar Jadi Relawan →
          </Link>
        </div>
      </div>

      <div className="mt-10 mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-blue">Koleksi Buku Pilihan</h2>
          <p className="mt-1 text-sm text-blue-60">
            Buku yang siap dipinjam di ruang baca pesisir
          </p>
        </div>
        <Link
          href="/perpustakaan/katalog"
          className="text-sm font-semibold text-blue underline hover:text-blue-deep"
        >
          Lihat Semua →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
        {books.map((book) => (
          <article
            key={book.slug}
            className="flex flex-col justify-between rounded-lg border border-blue-24 bg-white p-4 transition-all hover:border-blue"
          >
            <div>
              <div className="relative mb-4 flex aspect-3/4 w-full items-center justify-center overflow-hidden rounded border border-blue-12 bg-blue-06 p-3">
                <div className="w-16 text-blue opacity-60">
                  <OpenBookIcon className="h-auto w-full" />
                </div>
                <span className="absolute top-2 right-2 rounded bg-blue-12 px-2 py-0.5 text-[11px] font-semibold text-blue-60">
                  {book.status}
                </span>
              </div>
              <div className="mb-2">
                <span className="rounded-full bg-blue-12 px-2 py-0.5 text-xs font-medium text-blue capitalize">
                  {book.category}
                </span>
              </div>
              <h3 className="line-clamp-2 text-lg leading-snug font-semibold text-blue">
                <Link
                  href={`/perpustakaan/buku/${book.slug}`}
                  className="hover:text-blue-deep"
                >
                  {book.title}
                </Link>
              </h3>
              <p className="mt-1 text-xs text-blue-60">{book.author}</p>
            </div>
            <div className="mt-4 border-t border-blue-12 pt-4">
              <Link
                href={`/perpustakaan/buku/${book.slug}`}
                className="text-xs font-semibold text-blue hover:underline"
              >
                Lihat Detail
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
