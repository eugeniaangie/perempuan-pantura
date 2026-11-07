import Link from "next/link";

export function StaticPage({
  title,
  children,
  updated,
}: {
  title: string;
  children: React.ReactNode;
  updated?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-wide text-blue-60 uppercase">
        Perempuan Pantura
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-blue sm:text-4xl">
        {title}
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-blue/90 sm:text-base">
        {children}
      </div>
      {updated ? (
        <p className="mt-8 text-xs text-blue-60">
          Terakhir diperbarui: {updated}
        </p>
      ) : null}
      <Link
        href="/"
        className="mt-6 inline-flex text-sm font-semibold text-blue underline hover:text-blue-deep"
      >
        ← Kembali ke Beranda
      </Link>
    </section>
  );
}
