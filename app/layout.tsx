import type { Metadata, Viewport } from "next";
import { Fraunces, Literata } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  weight: "variable",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Perempuan Pantura – Ruang Sastra, Jurnal Pesisir & Perpustakaan",
  description:
    "Situs sastra, catatan lapangan pesisir, ruang aman, dan perpustakaan komunitas Perempuan Pantura di Karawang.",
};

export const viewport: Viewport = {
  themeColor: "#334D70",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${literata.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-white font-body text-blue antialiased italic selection:bg-blue-12 selection:text-blue-deep">
        <TopBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
