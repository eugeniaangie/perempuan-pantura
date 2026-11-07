import Link from "next/link";
import { OpenHandIcon } from "@/components/icons";
import { featuredStory } from "@/lib/data";

export function MetooBanner() {
  return (
    <section className="my-8 border-y border-blue-24 bg-blue-06 py-10 sm:my-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-3">
          <div className="space-y-3 sm:space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue px-2.5 py-0.5 text-xs font-semibold text-white">
                #MeToo Pesisir
              </span>
              <span className="text-xs text-blue-60">
                Zona Aman & Kesaksian
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-blue sm:text-3xl">
              <Link
                href={featuredStory.href}
                className="hover:text-blue-deep"
              >
                {featuredStory.title}
              </Link>
            </h2>
            <p className="text-sm leading-relaxed text-blue/90 sm:text-base">
              {featuredStory.excerpt}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={featuredStory.href}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border border-transparent bg-blue px-5 py-2.5 text-center text-sm font-semibold text-white shadow-none transition-all duration-150 hover:bg-blue-deep active:scale-[0.98] active:bg-blue-deep focus:ring-2 focus:ring-blue-deep focus:ring-offset-2 focus:outline-none sm:w-auto"
              >
                Baca Kesaksian
              </Link>
              <Link
                href="/layanan"
                className="py-1 text-center text-xs font-semibold text-blue-ink hover:underline sm:text-left sm:text-sm"
              >
                Tentang Layanan →
              </Link>
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-blue-24 bg-white p-6 text-center">
            <div className="mx-auto w-16 text-blue opacity-80">
              <OpenHandIcon className="h-auto w-full" />
            </div>
            <h3 className="text-lg font-semibold text-blue">
              Cerita ke Redaksi
            </h3>
            <p className="text-xs leading-relaxed text-blue/80">
              Punya pengalaman yang ingin dibagi secara aman dan anonim? Redaksi
              siap mendengarkan tanpa jejak identitas.
            </p>
            <Link
              href="/kirim?anonim=1"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-blue bg-transparent px-4 py-2 text-sm font-semibold text-blue transition-colors hover:bg-blue hover:text-white"
            >
              Kirim Cerita Anonim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
