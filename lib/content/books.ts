export type Book = {
  slug: string;
  title: string;
  author: string;
  publisher: string;
  category: string;
  genre: string;
  status: "Tersedia" | "Dipinjam";
  availability: string;
  synopsis: string;
};

export const books: Book[] = [
  {
    slug: "petualangan-ombak-cilik",
    title: "Petualangan Ombak Cilik di Teluk Cibuaya",
    author: "Ratna Dewi",
    publisher: "Pustaka Pesisir Karawang (2024)",
    category: "anak",
    genre: "Cerita Bergambar",
    status: "Tersedia",
    availability: "3 dari 3 eksemplar tersedia",
    synopsis:
      "Kisah mendidik tentang keanekaragaman biota laut dan kepedulian menjaga pantai bersih untuk anak-anak sekolah dasar.",
  },
  {
    slug: "bintang-laut-belajar-berenang",
    title: "Bintang Laut yang Belajar Berenang",
    author: "Sari Handayani",
    publisher: "Rumah Baca Pantura (2023)",
    category: "anak",
    genre: "Fabel Edukasi",
    status: "Tersedia",
    availability: "2 dari 2 eksemplar tersedia",
    synopsis:
      "Buku cerita anak dengan ilustrasi ramah tentang persahabatan dan rasa percaya diri.",
  },
  {
    slug: "suara-dari-balik-jaring",
    title: "Suara dari Balik Jaring: Kumpulan Puisi Perempuan Nelayan",
    author: "Antologi Komunitas Pantura",
    publisher: "Penerbit Pesisir (2025)",
    category: "dewasa",
    genre: "Antologi Puisi",
    status: "Tersedia",
    availability: "1 dari 2 eksemplar tersedia",
    synopsis:
      "Kumpulan puisi reflektif karya perempuan di sepanjang garis pantai Jawa Barat bagian utara.",
  },
];

export function getBook(slug: string) {
  return books.find((b) => b.slug === slug);
}
