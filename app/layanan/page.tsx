import Link from "next/link";
import { HelpContacts } from "@/components/content/help-contacts";
import { layananPage } from "@/lib/content/pages";

export default function LayananPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="rounded-2xl border border-blue-24 bg-blue-06 p-6 sm:p-10">
        <p className="text-xs font-semibold text-blue-60">{layananPage.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold text-blue sm:text-4xl">
          {layananPage.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue/90 sm:text-base">
          {layananPage.intro}
        </p>
        <p className="mt-3 max-w-3xl text-xs text-blue-60 sm:text-sm">
          {layananPage.note}
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blue/90 sm:text-base">
          {layananPage.body}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kirim"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue px-5 text-sm font-semibold text-white hover:bg-blue-deep"
          >
            Kirim Cerita Anonim
          </Link>
          <Link
            href="/metoo"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue px-5 text-sm font-semibold text-blue hover:bg-white"
          >
            Baca Kanal #MeToo →
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: "Pengaduan",
            text: "Saluran aman untuk menyampaikan laporan pelecehan dan kekerasan seksual secara rahasia.",
          },
          {
            title: "Pendampingan",
            text: "Dukungan emosional dan praktis bagi penyintas yang membutuhkan teman perjalanan.",
          },
          {
            title: "Advokasi",
            text: "Pendampingan menuju layanan hukum dan lembaga perlindungan yang relevan.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-blue-24 bg-white p-5"
          >
            <h2 className="text-lg font-semibold text-blue">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-blue/90">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <HelpContacts />
      </div>
    </section>
  );
}
