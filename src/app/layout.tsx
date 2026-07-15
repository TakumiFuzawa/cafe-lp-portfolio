import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

// GA4計測ID。Vercelの環境変数 NEXT_PUBLIC_GA_ID に設定すると有効になる
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | 西荻窪の自家焙煎コーヒーと手作り焼き菓子のカフェ`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | ${SITE.catchCopy}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "ja_JP",
    type: "website",
    // og:image は src/app/opengraph-image.tsx がビルド時に生成する
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.catchCopy}`,
    description: SITE.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded-full focus:bg-pine focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          本文へスキップ
        </a>
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
