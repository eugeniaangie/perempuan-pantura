import Link from "next/link";
import { WorkCard } from "@/components/content/work-card";
import { karyaFilters, type Work } from "@/lib/content/works";

export function WorksListing({
  title,
  intro,
  works,
  activeHref = "/karya",
  showFilters = true,
}: {
  title: string;
  intro: string;
  works: Work[];
  activeHref?: string;
  showFilters?: boolean;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-blue-60 uppercase">
          Karya
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-blue sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-blue/90 sm:text-base">
          {intro}
        </p>
      </div>

      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {karyaFilters.map((filter) => {
            const active = filter.href === activeHref;
            return (
              <Link
                key={filter.href}
                href={filter.href}
                className={`inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-blue text-white"
                    : "bg-blue-12 text-blue hover:bg-blue-24"
                }`}
              >
                {filter.label}
              </Link>
            );
          })}
        </div>
      ) : null}

      {works.length === 0 ? (
        <div className="rounded-2xl border border-blue-24 bg-blue-06 p-8 text-sm text-blue-60">
          Belum ada naskah pada kategori ini. Silakan cek kembali nanti atau{" "}
          <Link href="/kirim" className="font-semibold text-blue underline">
            kirim naskah
          </Link>
          .
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      )}
    </section>
  );
}
