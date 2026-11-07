import Link from "next/link";
import { PlaceholderLogo } from "@/components/placeholder-logo";
import { footerInfo, footerKanal, footerPanduan } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t-2 border-blue-deep bg-blue text-white sm:mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3 sm:space-y-4 md:col-span-2">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <PlaceholderLogo
                variant="white"
                portraitClassName="h-8 sm:h-10 w-auto"
                wordmarkClassName="h-5 sm:h-7"
              />
            </div>
            <p className="max-w-md text-xs leading-relaxed text-white/80 sm:text-sm">
              {footerInfo.blurb}
            </p>
            <div className="space-y-1 text-[11px] text-white/70 sm:text-xs">
              <p className="font-semibold text-white">{footerInfo.name}</p>
              <p>{footerInfo.address}</p>
              <p>
                {footerInfo.hours} · WhatsApp:{" "}
                <a
                  href={footerInfo.whatsappHref}
                  className="underline-offset-4 hover:text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footerInfo.whatsappDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="border-b border-white/20 pb-1 text-sm font-semibold tracking-wide text-white sm:text-base">
              Kanal Publik
            </p>
            <ul className="space-y-1 text-xs text-white/80 sm:space-y-2 sm:text-sm">
              {footerKanal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="border-b border-white/20 pb-1 text-sm font-semibold tracking-wide text-white sm:text-base">
              Panduan & Privasi
            </p>
            <ul className="space-y-1 text-xs text-white/80 sm:space-y-2 sm:text-sm">
              {footerPanduan.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Redaksi Perempuan Pantura. Karawang, Jawa Barat.</p>
          <p>Didukung oleh komunitas pesisir Karawang · Bebas pelacak</p>
        </div>
      </div>
    </footer>
  );
}
