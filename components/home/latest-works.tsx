import Link from "next/link";
import { latestWorks } from "@/lib/data";

export function LatestWorks() {
  return (
    <section className="mx-auto max-w-6xl border-t border-blue-24 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <div>
          <h2 className="text-xl font-semibold text-blue sm:text-3xl">
            Karya Terbaru
          </h2>
          <p className="mt-0.5 text-xs text-blue-60 sm:mt-1 sm:text-sm">
            Cerpen, esai, dan puisi dari pesisir Pantura
          </p>
        </div>
        <Link
          href="/sastra"
          className="shrink-0 text-xs font-semibold text-blue underline hover:text-blue-deep sm:text-sm"
        >
          Lihat Semua →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {latestWorks.map((work) => (
          <article
            key={work.href}
            className="group flex flex-col justify-between rounded-lg border border-blue-24 bg-white p-5 transition-all duration-200 hover:border-blue"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-blue-60">
                <Link
                  href={work.tagHref}
                  className="inline-flex items-center rounded-full bg-blue-12 px-3 py-1 text-xs font-semibold text-blue transition-colors hover:bg-blue-24 hover:text-blue-deep active:bg-blue-24 focus:ring-1 focus:ring-blue-deep sm:px-2.5 sm:py-0.5"
                >
                  {work.tag}
                </Link>
                <span>{work.readingTime}</span>
              </div>

              <h3 className="text-xl leading-snug font-semibold text-blue group-hover:text-blue-deep sm:text-2xl">
                <Link
                  href={work.href}
                  className="focus:underline focus:outline-none"
                >
                  {work.title}
                </Link>
              </h3>

              <p className="line-clamp-2 text-sm leading-relaxed text-blue/90">
                {work.excerpt}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-blue-12 pt-4 text-xs text-blue-60">
              <span className="font-medium text-blue">{work.author}</span>
              <span>{work.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
