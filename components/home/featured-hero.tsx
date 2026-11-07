import Link from "next/link";
import { ScribbleUnderline } from "@/components/icons";
import { PlaceholderHeroArt } from "@/components/placeholder-logo";
import { featuredStory } from "@/lib/data";

export function FeaturedHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6 sm:pt-10 sm:pb-16">
      <div className="rounded-2xl border-2 border-blue-24 bg-blue-06 p-5 transition-colors hover:border-blue sm:p-10">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-3 sm:space-y-4 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-xs text-blue-60 sm:gap-3">
              <Link
                href={featuredStory.tagHref}
                className="inline-flex items-center rounded-full bg-blue-12 px-3 py-1 text-xs font-semibold text-blue transition-colors hover:bg-blue-24 hover:text-blue-deep active:bg-blue-24 focus:ring-1 focus:ring-blue-deep sm:px-2.5 sm:py-0.5"
              >
                {featuredStory.tag}
              </Link>
              <span aria-hidden>{"\u00B7"}</span>
              <span>{featuredStory.meta}</span>
              <span aria-hidden>{"\u00B7"}</span>
              <span>{featuredStory.readingTime}</span>
            </div>

            <h1 className="text-2xl leading-tight font-semibold text-blue sm:text-4xl lg:text-5xl">
              <Link
                href={featuredStory.href}
                className="hover:text-blue-deep focus:underline"
              >
                {featuredStory.title}
              </Link>
            </h1>

            <div className="w-28 text-blue-ink opacity-80 sm:w-32" aria-hidden>
              <ScribbleUnderline className="h-auto w-full" />
            </div>

            <p className="text-sm leading-relaxed text-blue/90 sm:text-lg">
              {featuredStory.excerpt}
            </p>

            <div className="flex flex-col justify-between gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
              <span className="text-xs font-semibold text-blue sm:text-sm">
                Oleh: {featuredStory.author}
              </span>
              <Link
                href={featuredStory.href}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border border-transparent bg-blue px-5 py-2.5 text-center text-sm font-semibold text-white shadow-none transition-all duration-150 hover:bg-blue-deep active:scale-[0.98] active:bg-blue-deep focus:ring-2 focus:ring-blue-deep focus:ring-offset-2 focus:outline-none sm:w-auto"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>

          <div className="order-first flex flex-col items-center justify-center lg:order-last lg:col-span-5">
            <div className="flex w-full max-w-60 items-center justify-center rounded-2xl border-2 border-blue-24 bg-white p-5 transition-colors hover:border-blue sm:max-w-xs sm:p-7">
              <PlaceholderHeroArt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
