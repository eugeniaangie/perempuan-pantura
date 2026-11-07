import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-blue sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold sm:text-4xl">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-xl text-sm text-blue/90 sm:text-base">
        Maaf, tautan yang kamu buka belum tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-deep"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
