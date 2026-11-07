import Link from "next/link";
import { WorksListing } from "@/components/content/works-listing";

export default function UlasanPage() {
  return (
    <>
      <WorksListing
        title="Ulasan"
        intro="Ulasan film dan buku dari redaksi serta komunitas Pantura."
        works={[]}
        activeHref="/karya/ulasan"
      />
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/karya/ulasan/film"
            className="inline-flex min-h-11 items-center rounded-full border border-blue-24 px-4 text-sm font-semibold text-blue hover:border-blue hover:bg-blue-06"
          >
            Ulasan Film →
          </Link>
          <Link
            href="/karya/ulasan/buku"
            className="inline-flex min-h-11 items-center rounded-full border border-blue-24 px-4 text-sm font-semibold text-blue hover:border-blue hover:bg-blue-06"
          >
            Ulasan Buku →
          </Link>
        </div>
      </section>
    </>
  );
}
