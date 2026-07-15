"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="font-serif text-xl font-semibold text-ink">
          {SITE.name}
          <span className="ml-2 text-xs font-normal tracking-widest text-muted">
            {SITE.nameEn}
          </span>
        </a>

        {/* デスクトップナビ */}
        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="メインナビゲーション">
            <ul className="flex gap-6">
              {NAV_LINKS.filter((link) => link.href !== "#contact").map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-pine"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-pine px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
          >
            ご予約・お問い合わせ
          </a>
        </div>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* モバイルナビ */}
      <nav
        id="mobile-menu"
        aria-label="モバイルナビゲーション"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-cream-dark bg-cream`}
      >
        <ul className="px-4 py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
