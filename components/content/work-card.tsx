import Link from "next/link";
import type { Work } from "@/lib/content/works";

export function WorkCard({
  work,
  hrefBase = "/karya",
}: {
  work: Work;
  hrefBase?: string;
}) {
  return (
    <article className="group flex flex-col justify-between rounded-lg border border-blue-24 bg-white p-5 transition-all duration-200 hover:border-blue">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-blue-60">
          <span className="inline-flex items-center rounded-full bg-blue-12 px-2.5 py-0.5 text-xs font-semibold text-blue">
            {work.kindLabel}
          </span>
          <span>{work.readingTime}</span>
        </div>
        <h3 className="text-xl leading-snug font-semibold text-blue group-hover:text-blue-deep sm:text-2xl">
          <Link href={`${hrefBase}/${work.slug}`} className="focus:underline">
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
  );
}
