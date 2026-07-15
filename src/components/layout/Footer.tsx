import Link from "next/link";
import { HOURS, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-pine-dark text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 店舗情報 */}
          <div>
            <p className="font-serif text-2xl font-semibold">{SITE.name}</p>
            <p className="mt-1 text-xs tracking-widest text-cream/70 uppercase">
              {SITE.nameEn}
            </p>
            <address className="mt-4 text-sm leading-relaxed text-cream/90 not-italic">
              {SITE.address}
              <br />
              {SITE.access}
              <br />
              TEL:{" "}
              <a href={`tel:${SITE.tel}`} className="underline-offset-4 hover:underline">
                {SITE.tel}
              </a>
            </address>
            <div className="mt-4 flex items-center gap-5">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/90 transition-colors hover:text-cream"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
                Instagram
                <span className="sr-only">(新しいタブで開きます)</span>
              </a>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/90 transition-colors hover:text-cream"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.03 3.58 7.4 8.42 8.04.33.07.77.22.89.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.08-.46 5.84-3.44 7.97-5.89C21.5 13.4 22 11.83 22 10.13 22 5.64 17.52 2 12 2z" />
                </svg>
                LINE
                <span className="sr-only">(新しいタブで開きます)</span>
              </a>
            </div>
          </div>

          {/* 営業時間 */}
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-cream/70 uppercase">
              Open
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/90">
              {HOURS.map((row) => (
                <li key={row.label}>
                  <span className="mr-3 inline-block w-14 text-cream/70">{row.label}</span>
                  {row.value}
                </li>
              ))}
            </ul>
          </div>

          {/* サイト内リンク */}
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-cream/70 uppercase">
              Menu
            </p>
            <nav aria-label="フッターナビゲーション" className="mt-4">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`/${link.href}`}
                      className="text-sm text-cream/90 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-cream/90 transition-colors hover:text-cream"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-12 border-t border-cream/20 pt-6 text-center text-xs text-cream/70">
          &copy; {new Date().getFullYear()} {SITE.nameEn}. ※本サイトはポートフォリオ用の架空店舗です。
        </p>
      </div>
    </footer>
  );
}
