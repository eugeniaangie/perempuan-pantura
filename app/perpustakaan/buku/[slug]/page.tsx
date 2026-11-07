import Link from "next/link";
import { notFound } from "next/navigation";
import { OpenBookIcon } from "@/components/icons";
import { books, getBook } from "@/lib/content/books";

export const instant = false;

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/perpustakaan"
        className="text-xs font-semibold text-blue-60 hover:underline"
      >
        ← Kembali ke Katalog Buku
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
        <div className="flex aspect-3/4 items-center justify-center rounded-xl border border-blue-24 bg-blue-06 p-6 text-blue opacity-70">
          <OpenBookIcon className="h-auto w-24" />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold text-blue-60 capitalize">
            {book.status} · {book.category} · {book.genre}
          </p>
          <h1 className="text-3xl font-semibold text-blue sm:text-4xl">
            {book.title}
          </h1>
          <p className="text-sm text-blue/90">Penulis: {book.author}</p>
          <p className="text-sm text-blue/90">Penerbit: {book.publisher}</p>
          <p className="text-sm text-blue/90">
            Ketersediaan: {book.availability}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-blue/90 sm:text-base">
            {book.synopsis}
          </p>
          <a
            href="https://wa.me/6285284421817"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-white hover:bg-blue-deep"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
