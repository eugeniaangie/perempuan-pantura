import Link from "next/link";
import { HelpContacts } from "@/components/content/help-contacts";
import { WorkCard } from "@/components/content/work-card";
import { metooPage } from "@/lib/content/pages";
import { getMetooWorks } from "@/lib/content/works";

export default function MetooPage() {
  const stories = getMetooWorks();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="rounded-2xl border border-blue-24 bg-blue-06 p-6 sm:p-10">
        <p className="text-xs font-semibold text-blue-60">{metooPage.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold text-blue sm:text-4xl">
          {metooPage.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue/90 sm:text-base">
          {metooPage.intro}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kirim"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue px-5 text-sm font-semibold text-white hover:bg-blue-deep"
          >
            Cerita ke Redaksi →
          </Link>
          <Link
            href="/layanan"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue px-5 text-sm font-semibold text-blue hover:bg-white"
          >
            Tentang Layanan →
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-blue">
            Kesaksian yang Diterbitkan
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {stories.map((work) => (
              <WorkCard key={work.slug} work={work} hrefBase="/metoo" />
            ))}
          </div>
        </div>
        <HelpContacts />
      </div>
    </section>
  );
}
