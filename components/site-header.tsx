"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { PlaceholderLogo } from "@/components/placeholder-logo";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-blue-24 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-deep sm:gap-2.5"
          aria-label="Perempuan Pantura"
        >
          <span className="sr-only">Perempuan Pantura</span>
          <PlaceholderLogo />
        </Link>

        <nav
          className="hidden items-center gap-6 text-[15px] font-semibold lg:flex"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDesktop(item.href)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 border-b-2 border-transparent pb-0.5 transition-colors hover:text-blue-deep"
                  aria-expanded={openDesktop === item.href}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className="text-[10px] text-blue-60" aria-hidden>
                    ▾
                  </span>
                </Link>

                {openDesktop === item.href ? (
                  <div className="absolute top-full left-0 z-50 min-w-50 pt-2">
                    <div className="rounded-xl border border-blue-24 bg-white py-2 shadow-sm">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.href} className="relative group/sub">
                            <Link
                              href={child.href}
                              className="flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-blue-06 hover:text-blue-deep"
                            >
                              <span>{child.label}</span>
                              <span className="text-[10px] text-blue-60">
                                ▸
                              </span>
                            </Link>
                            <div className="invisible absolute top-0 left-full z-50 min-w-45 pl-1 opacity-0 transition group-hover/sub:visible group-hover/sub:opacity-100">
                              <div className="rounded-xl border border-blue-24 bg-white py-2 shadow-sm">
                                {child.children.map((nested) => (
                                  <Link
                                    key={nested.href}
                                    href={nested.href}
                                    className="block px-4 py-2 text-sm transition-colors hover:bg-blue-06 hover:text-blue-deep"
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-blue-06 hover:text-blue-deep"
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                title={item.description}
                className="border-b-2 border-transparent pb-0.5 transition-colors hover:text-blue-deep"
              >
                {item.label}
              </Link>
            ),
          )}

          <Link
            href="/cari"
            className="rounded-full p-1.5 text-blue transition-colors hover:bg-blue-12 hover:text-blue-deep"
            aria-label="Pencarian Tulisan dan Buku"
          >
            <SearchIcon className="h-5 w-5" />
          </Link>

          <Link
            href="/kirim"
            className="inline-flex items-center justify-center rounded-full bg-blue px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-deep focus:ring-2 focus:ring-blue-deep"
          >
            Kirim Naskah
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
          <Link
            href="/cari"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-blue transition-colors hover:bg-blue-12 hover:text-blue-deep active:bg-blue-24"
            aria-label="Pencarian Tulisan dan Buku"
          >
            <SearchIcon className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-blue transition-colors hover:bg-blue-12 focus:outline-none focus:ring-2 focus:ring-blue-deep active:bg-blue-24"
            aria-expanded={mobileMenuOpen}
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="space-y-4 border-t border-blue-24 bg-white px-4 py-5 sm:px-6 lg:hidden">
          <nav className="flex flex-col space-y-1 text-base font-semibold">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-blue-12">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobile((v) =>
                        v === item.href ? null : item.href,
                      )
                    }
                    className="flex min-h-11 w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-blue hover:bg-blue-06"
                    aria-expanded={openMobile === item.href}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-blue-60">
                      {openMobile === item.href ? "▴" : "▾"}
                    </span>
                  </button>

                  {openMobile === item.href ? (
                    <div className="space-y-1 pb-3 pl-3">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex min-h-10 items-center px-3.5 py-2 text-sm text-blue-60 hover:text-blue-deep"
                      >
                        Semua Karya
                      </Link>
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.href} className="space-y-1">
                            <Link
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex min-h-10 items-center px-3.5 py-2 text-sm hover:bg-blue-06 hover:text-blue-deep"
                            >
                              {child.label}
                            </Link>
                            <div className="space-y-1 border-l border-blue-12 pl-3">
                              {child.children.map((nested) => (
                                <Link
                                  key={nested.href}
                                  href={nested.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex min-h-10 items-center px-3.5 py-2 text-sm text-blue-60 hover:bg-blue-06 hover:text-blue-deep"
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex min-h-10 items-center px-3.5 py-2 text-sm hover:bg-blue-06 hover:text-blue-deep"
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-11 flex-col justify-center rounded-lg border-b border-blue-12 px-3.5 py-2.5 text-blue hover:bg-blue-06"
                >
                  <span className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-xs text-blue-60">→</span>
                  </span>
                  {item.description ? (
                    <span className="mt-1 pr-6 text-xs font-normal text-blue-60">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              ),
            )}
          </nav>
          <div className="pt-2">
            <Link
              href="/kirim"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11.5 w-full items-center justify-center gap-2 rounded-full bg-blue px-4 font-semibold text-white transition-colors hover:bg-blue-deep active:bg-blue-deep"
            >
              Kirim Naskah
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
