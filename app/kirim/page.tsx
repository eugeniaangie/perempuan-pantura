"use client";

import { kirimPage } from "@/lib/content/pages";

export default function KirimPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-wide text-blue-60 uppercase">
        {kirimPage.eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-blue sm:text-4xl">
        {kirimPage.title}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-blue/90 sm:text-base">
        {kirimPage.intro}
      </p>

      <form
        className="mt-8 space-y-4 rounded-2xl border border-blue-24 bg-white p-5 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field label="Nama Lengkap *" name="nama" />
        <Field
          label="Nama Pena (Opsional jika ingin diterbitkan berbeda)"
          name="pena"
        />
        <Field label="Alamat Surel *" name="email" type="email" />
        <Field
          label="Nomor WhatsApp (Opsional, untuk konfirmasi penerimaan)"
          name="wa"
        />
        <label className="block space-y-1.5 text-sm">
          <span className="font-semibold text-blue">Jenis Karya *</span>
          <select
            name="jenis"
            className="w-full rounded-lg border border-blue-24 bg-white px-3 py-2.5 text-blue outline-none focus:border-blue"
            defaultValue=""
          >
            <option value="" disabled>
              -- Pilih jenis karya --
            </option>
            <option>Cerpen (Sastra)</option>
            <option>Esai (Sastra)</option>
            <option>Puisi (Sastra)</option>
            <option>Ulasan Film</option>
            <option>Ulasan Buku</option>
            <option>Jurnal Perjalanan</option>
          </select>
        </label>
        <Field label="Judul Karya *" name="judul" />
        <label className="block space-y-1.5 text-sm">
          <span className="font-semibold text-blue">Naskah Lengkap *</span>
          <textarea
            name="naskah"
            rows={8}
            className="w-full rounded-lg border border-blue-24 px-3 py-2.5 text-blue outline-none focus:border-blue"
            required
          />
        </label>
        <label className="flex items-start gap-2 text-sm text-blue/90">
          <input type="checkbox" className="mt-1" />
          <span>
            Terbitkan sebagai anonim (nama tidak ditampilkan). Nama Anda tidak
            akan dicantumkan di situs publik jika naskah disetujui terbit.
          </span>
        </label>
        <label className="flex items-start gap-2 text-sm text-blue/90">
          <input type="checkbox" className="mt-1" required />
          <span>
            Saya menyetujui bahwa karya ini adalah orisinal dan belum
            diterbitkan di tempat lain, serta memberikan izin kepada Redaksi
            Perempuan Pantura untuk menyunting seperlunya.
          </span>
        </label>
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue px-5 text-sm font-semibold text-white hover:bg-blue-deep"
        >
          Kirim Naskah
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block space-y-1.5 text-sm">
      <span className="font-semibold text-blue">{label}</span>
      <input
        name={name}
        type={type}
        className="w-full rounded-lg border border-blue-24 px-3 py-2.5 text-blue outline-none focus:border-blue"
      />
    </label>
  );
}
