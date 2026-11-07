import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/content/article-view";
import { HelpContacts } from "@/components/content/help-contacts";
import { getMetooWorks, getWork } from "@/lib/content/works";

export const instant = false;

export function generateStaticParams() {
  return getMetooWorks().map((w) => ({ slug: w.slug }));
}

export default async function MetooDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work || work.kind !== "metoo") notFound();

  return (
    <>
      <ArticleView work={work} backHref="/metoo" backLabel="#MeToo" />
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <p className="mb-4 text-sm text-blue/90">
          Jika tulisan ini membangkitkan rasa cemas atau Anda membutuhkan
          pertolongan segera, hubungi layanan pendampingan gratis dan rahasia
          berikut:
        </p>
        <HelpContacts />
        <Link
          href="/layanan"
          className="mt-6 inline-flex text-sm font-semibold text-blue-ink underline"
        >
          Tentang Layanan / Ruang Aman →
        </Link>
      </section>
    </>
  );
}
