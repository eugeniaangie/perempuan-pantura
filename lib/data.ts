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
  address: "Perumahan Purwasari Indah II Blok B216, Purwasari, Kab. Karawang 41373",
  hours: "Buka: Senin – Jumat, 08.00 – 16.00 WIB",
  whatsappDisplay: "6285284421817",
  whatsappHref: "https://wa.me/6285284421817",
} as const;

export const featuredStory = {
  href: "/sastra/kami-menolak-tunduk-pada-ketakutan",
  tagHref: "/sastra?jenis=metoo",
  tag: "##MeToo",
  meta: "Karya Pilihan Redaksi",
  readingTime: "3 menit baca",
  title: "Kami Menolak Tunduk pada Ketakutan",
  excerpt:
    "Sebuah catatan kesaksian tentang keberanian memecah kesunyian atas intimidasi di lingkungan kerja nelayan.",
  author: "Anonim",
};

export const latestWorks = [
  {
    href: "/sastra/menelusuri-hutan-mangrove-sedari",
    tagHref: "/sastra?jenis=jurnal-perjalanan",
    tag: "#Jurnal Perjalanan",
    readingTime: "6 mnt baca",
    title:
      "Menelusuri Sabuk Mangrove Sedari: Catatan Ketahanan Perempuan Pesisir",
    excerpt:
      "Laporan lapangan tentang kelompok ibu-ibu pembibit mangrove yang menahan laju abrasi di pesisir utara Karawang.",
    author: "Sari Handayani",
    date: "22 Oct 2026",
  },
  {
    href: "/sastra/garam-yang-terbawa-angin-malam",
    tagHref: "/sastra?jenis=cerpen",
    tag: "#Cerpen",
    readingTime: "8 mnt baca",
    title: "Garam yang Terbawa Angin Malam",
    excerpt:
      "Di bibir muara Ciparage, seorang perempuan menenun jaring sembari menanti kabar kapal yang tak kunjung bersandar.",
    author: "Anonim",
    date: "18 Oct 2026",
  },
  {
    href: "/sastra/kidung-perahu-terakhir",
    tagHref: "/sastra?jenis=puisi",
    tag: "#Puisi",
    readingTime: "2 mnt baca",
    title: "Kidung Perahu Terakhir",
    excerpt:
      "Bait-bait hening dari bibir pantai Tanjung Pakis ketika senja melarut.",
    author: "Ratna Dewi",
    date: "12 Oct 2026",
  },
] as const;

export const libraryBooks = [
  {
    href: "/perpustakaan/buku/petualangan-ombak-cilik",
    title: "Petualangan Ombak Cilik di Teluk Cibuaya",
    author: "Ratna Dewi",
    category: "anak",
    status: "Dipinjam",
  },
  {
    href: "/perpustakaan/buku/bintang-laut",
    title: "Bintang Laut yang Belajar Berenang",
    author: "Sari Handayani",
    category: "anak",
    status: "Dipinjam",
  },
  {
    href: "/perpustakaan/buku/suara-dari-balik-jaring",
    title: "Suara dari Balik Jaring: Kumpulan Puisi Perempuan Nelayan",
    author: "Antologi Komunitas Pantura",
    category: "puisi",
    status: "Tersedia",
  },
] as const;

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
  { href: "/feed", label: "RSS Feed" },
  { href: "/admin", label: "Panel Redaksi" },
] as const;
