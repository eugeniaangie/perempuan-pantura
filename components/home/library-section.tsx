import Link from "next/link";
import { OpenBookIcon } from "@/components/icons";
import { libraryBooks } from "@/lib/data";

export function LibrarySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <div>
          <h2 className="text-xl font-semibold text-blue sm:text-3xl">
            Perpustakaan Komunitas
          </h2>
          <p className="mt-0.5 text-xs text-blue-60 sm:mt-1 sm:text-sm">
            Koleksi buku anak dan perempuan di Karawang
          </p>
        </div>
        <Link
          href="/perpustakaan"
          className="shrink-0 text-xs font-semibold text-blue underline hover:text-blue-deep sm:text-sm"
        >
          Katalog Lengkap →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
        {libraryBooks.map((book) => (
          <article
            key={book.href}
            className="flex flex-col justify-between rounded-lg border border-blue-24 bg-white p-4 transition-all duration-200 hover:border-blue"
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

              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-blue-12 px-2 py-0.5 text-xs font-medium text-blue capitalize">
                  {book.category}
                </span>
              </div>

              <h4 className="line-clamp-2 text-lg leading-snug font-semibold text-blue">
                <Link
                  href={book.href}
                  className="hover:text-blue-deep focus:underline"
                >
                  {book.title}
                </Link>
              </h4>
              <p className="mt-1 text-xs text-blue-60">{book.author}</p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-blue-12 pt-4">
              <Link
                href={book.href}
                className="text-xs font-semibold text-blue hover:text-blue-deep hover:underline"
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
