import { books } from "@/lib/content/books";
import { getMetooWorks, works } from "@/lib/content/works";

export type NavChild = {
  href: string;
  label: string;
  children?: NavChild[];
};

export type NavItem = {
  href: string;
  label: string;
  description?: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    href: "/karya",
    label: "Karya",
    children: [
      { href: "/karya/esai", label: "Esai" },
      { href: "/karya/cerpen", label: "Cerpen" },
      { href: "/karya/puisi", label: "Puisi" },
      {
        href: "/karya/ulasan",
        label: "Ulasan",
        children: [
          { href: "/karya/ulasan/film", label: "Ulasan Film" },
          { href: "/karya/ulasan/buku", label: "Ulasan Buku" },
        ],
      },
    ],
  },
  { href: "/metoo", label: "#MeToo" },
  {
    href: "/layanan",
    label: "Layanan",
    description:
      "Pengaduan, pendampingan, dan advokasi pelecehan dan kekerasan seksual",
  },
  { href: "/perpustakaan", label: "Perpustakaan" },
  { href: "/tentang", label: "Tentang" },
];

export const footerKanal = [
  { href: "/karya", label: "Karya" },
  { href: "/metoo", label: "#MeToo" },
  { href: "/layanan", label: "Layanan" },
  { href: "/perpustakaan", label: "Perpustakaan" },
  { href: "/tentang", label: "Tentang" },
] as const;

export const footerInfo = {
  blurb: "Arsip karya, jurnal perjalanan, dan ruang aman perempuan pantura",
  name: "Perempuan Pantura",
  address:
    "Perumahan Purwasari Indah II Blok B216, Purwasari, Kab. Karawang 41373",
  hours: "Buka: Senin – Jumat, 08.00 – 16.00 WIB",
  whatsappDisplay: "6285284421817",
  whatsappHref: "https://wa.me/6285284421817",
} as const;

const featured = getMetooWorks()[0] ?? works[0];

export const featuredStory = {
  href: `/metoo/${featured.slug}`,
  tagHref: "/metoo",
  tag: "##MeToo",
  meta: "Karya Pilihan Redaksi",
  readingTime: featured.readingTime,
  title: featured.title,
  excerpt: featured.excerpt,
  author: featured.author,
};

export const latestWorks = works
  .filter((w) => w.kind !== "metoo")
  .map((w) => ({
    href: `/karya/${w.slug}`,
    tagHref: `/karya/${w.kind === "jurnal" ? "esai" : w.kind}`,
    tag: w.kindLabel,
    readingTime: w.readingTime,
    title: w.title,
    excerpt: w.excerpt,
    author: w.author,
    date: w.date,
  }));

export const libraryBooks = books.map((b) => ({
  href: `/perpustakaan/buku/${b.slug}`,
  title: b.title,
  author: b.author,
  category: b.category,
  status: b.status,
}));

export const impactStats = [
  { value: "1,250", label: "Koleksi Buku Komunitas" },
  { value: "340", label: "Peminjam Aktif" },
  { value: "84", label: "Sesi Membaca Bareng" },
  { value: "120", label: "Karya Sastra Terbit" },
] as const;

export const footerPanduan = [
  { href: "/tentang", label: "Tentang Redaksi" },
  { href: "/kode-etik", label: "Kode Etik Publikasi" },
  { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
  { href: "/cari", label: "Pencarian" },
  { href: "/kirim", label: "Kirim Naskah" },
] as const;
