export type WorkKind = "esai" | "cerpen" | "puisi" | "ulasan-film" | "ulasan-buku" | "metoo" | "jurnal";

export type Work = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  kind: WorkKind;
  kindLabel: string;
  readingTime: string;
  date: string;
  author: string;
  authorBio?: string;
  tags: string[];
  contentWarning?: boolean;
  featured?: boolean;
};

export const works: Work[] = [
  {
    slug: "kami-menolak-tunduk-pada-ketakutan",
    title: "Kami Menolak Tunduk pada Ketakutan",
    excerpt:
      "Sebuah catatan kesaksian tentang keberanian memecah kesunyian atas intimidasi di lingkungan kerja nelayan.",
    body: `Bertahun-tahun kami dibiasakan untuk menganggap gurauan yang merendahkan dan sentuhan tanpa izin sebagai hal yang wajar di dermaga lelang ikan. Jika kami protes, kami yang dituduh membuat keributan.

Namun saat satu perempuan mulai berbicara, perempuan lain menemukan kembali suaranya. Tulisan ini adalah janji bahwa kami tidak akan pernah membiarkan penyintas berjalan sendirian lagi.`,
    kind: "metoo",
    kindLabel: "#MeToo",
    readingTime: "3 menit baca",
    date: "20 Oct 2026",
    author: "Anonim",
    tags: ["#MeToo", "#pesisir"],
    contentWarning: true,
    featured: true,
  },
  {
    slug: "menelusuri-hutan-mangrove-sedari",
    title:
      "Menelusuri Sabuk Mangrove Sedari: Catatan Ketahanan Perempuan Pesisir",
    excerpt:
      "Laporan lapangan tentang kelompok ibu-ibu pembibit mangrove yang menahan laju abrasi di pesisir utara Karawang.",
    body: `Kami tiba di Dusun Sedari saat matahari tepat di atas ubun-ubun. Lumpur basah menenggelamkan betis hingga separuh, namun tangan-tangan lincah kelompok perempuan pembibit bakau tak pernah berhenti menancapkan ajir bambu.

Mangrove bagi mereka bukan sekadar proyek konservasi hijau; ini adalah dinding pertahanan rumah mereka dari serbuan air pasang tahunan yang kian mengganas.`,
    kind: "esai",
    kindLabel: "#Esai",
    readingTime: "6 mnt baca",
    date: "22 Oct 2026",
    author: "Sari Handayani",
    authorBio:
      "Penulis catatan lapangan dan fasilitator literasi pesisir di Karawang Utara.",
    tags: ["#Jurnal Perjalanan", "#mangrove", "#pesisir"],
  },
  {
    slug: "garam-yang-terbawa-angin-malam",
    title: "Garam yang Terbawa Angin Malam",
    excerpt:
      "Di bibir muara Ciparage, seorang perempuan menenun jaring sembari menanti kabar kapal yang tak kunjung bersandar.",
    body: `Malam itu ombak terdengar lebih riuh dari biasanya. Di teras rumah panggung kayu yang menghadap ke tambak, Mak Asih duduk menyulam tambalan jaring nylon biru.

Setiap simpul yang ditariknya adalah hitungan doa untuk perahu kecil suaminya yang masih melaut di batas perairan Tanjung Pakis. Di pesisir ini, kesabaran perempuan tidak diukur dari jam dinding, melainkan dari pasang surut air laut yang meraba tiang-tiang dermaga.`,
    kind: "cerpen",
    kindLabel: "#Cerpen",
    readingTime: "4 mnt baca",
    date: "21 Oct 2026",
    author: "Maya Kartika",
    authorBio:
      "Penulis cerpen dan pengelola lingkaran membaca perempuan di Ciparage.",
    tags: ["#pesisir", "#Perahu"],
  },
  {
    slug: "kidung-perahu-terakhir",
    title: "Kidung Perahu Terakhir",
    excerpt:
      "Bait-bait hening dari bibir pantai Tanjung Pakis ketika senja melarut.",
    body: `perahu itu pulang membawa lelah
layarnya basah oleh doa-doa pagi

di sini, di tepi karang karawang
kita belajar memeluk kehilangan
seperti pasir yang selalu ikhlas
dibawa pergi debur ombak malam.`,
    kind: "puisi",
    kindLabel: "#Puisi",
    readingTime: "2 mnt baca",
    date: "19 Oct 2026",
    author: "Dewi Ratnasari",
    authorBio:
      "Guru sekolah dasar di muara Citarum, menulis puisi dan catatan tentang anak-anak nelayan.",
    tags: ["#puisi", "#pesisir"],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function getWorksByKind(kind: WorkKind | "all") {
  if (kind === "all") {
    return works.filter((w) => w.kind !== "metoo");
  }
  if (kind === "esai") {
    return works.filter((w) => w.kind === "esai" || w.kind === "jurnal");
  }
  return works.filter((w) => w.kind === kind);
}

export function getMetooWorks() {
  return works.filter((w) => w.kind === "metoo");
}

export const karyaFilters = [
  { href: "/karya", label: "Semua Karya", kind: "all" as const },
  { href: "/karya/cerpen", label: "Cerpen", kind: "cerpen" as const },
  { href: "/karya/esai", label: "Esai", kind: "esai" as const },
  { href: "/karya/puisi", label: "Puisi", kind: "puisi" as const },
  { href: "/karya/ulasan", label: "Ulasan", kind: "all" as const },
];
