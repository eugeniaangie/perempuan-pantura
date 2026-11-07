import Link from "next/link";
import type { Work } from "@/lib/content/works";

export function ArticleView({
  work,
  backHref = "/karya",
  backLabel = "Karya",
}: {
  work: Work;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6">
      <div className="space-y-4 border-b border-blue-24 pb-8">
        <Link
          href={backHref}
          className="text-xs font-semibold text-blue-60 hover:text-blue-deep hover:underline"
        >
          ← {backLabel}
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-60">
          <span className="inline-flex items-center rounded-full bg-blue-12 px-2.5 py-0.5 font-semibold text-blue">
            {work.kindLabel}
          </span>
          <span>·</span>
          <span>{work.readingTime}</span>
          <span>·</span>
          <span>{work.date}</span>
        </div>
        <h1 className="text-3xl leading-tight font-semibold text-blue sm:text-5xl">
          {work.title}
        </h1>
        <p className="text-base text-blue/90 sm:text-lg">{work.excerpt}</p>
        <p className="text-sm font-semibold text-blue">Oleh: {work.author}</p>
      </div>

      {work.contentWarning ? (
        <div className="rounded-lg border border-blue-24 bg-blue-06 p-4 text-sm text-blue">
          <p className="font-semibold">Peringatan Konten Sensitif</p>
          <p className="mt-1 text-blue/90">
            Tulisan ini memuat pengalaman intimidasi dan perlawanan terhadap
            pelecehan di lingkungan kerja.
          </p>
        </div>
      ) : null}

      <div className="prose-pp whitespace-pre-line py-2 text-lg leading-relaxed text-blue sm:text-xl">
        {work.body}
      </div>

      {work.tags.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-semibold text-blue-60">Topik:</span>
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-12 px-2.5 py-0.5 text-xs font-semibold text-blue"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {work.authorBio ? (
        <div className="space-y-2 rounded-xl border border-blue-24 bg-blue-06 p-5">
          <p className="text-xs font-semibold tracking-wide text-blue-60 uppercase">
            Tentang Penulis
          </p>
          <p className="font-semibold text-blue">{work.author}</p>
          <p className="text-sm text-blue/90">{work.authorBio}</p>
        </div>
      ) : null}
    </article>
  );
}
