import { notFound } from "next/navigation";
import { ArticleView } from "@/components/content/article-view";
import { getWork, works } from "@/lib/content/works";

export const instant = false;

export function generateStaticParams() {
  return works
    .filter((w) => w.kind !== "metoo")
    .map((w) => ({ slug: w.slug }));
}

export default async function KaryaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work || work.kind === "metoo") notFound();
  return <ArticleView work={work} backHref="/karya" backLabel="Karya" />;
}
