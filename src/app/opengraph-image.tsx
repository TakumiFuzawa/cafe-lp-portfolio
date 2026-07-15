import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

/**
 * OGP画像をビルド時に生成する(店名・キャッチコピー入り)。
 * 静的ページのため本番では /opengraph-image として静的配信される。
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} | ${SITE.catchCopy}`;

/** 画像内で使う文字だけのサブセットフォントをGoogle Fontsから取得(ビルド時のみ実行) */
async function loadGoogleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@600&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!resource) throw new Error(`OGP用フォントの取得に失敗しました: ${family}`);
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

export default async function OgImage() {
  const text = `${SITE.name}${SITE.catchCopy}${SITE.nameEn.toUpperCase()} `;
  const [fontData, heroJpg] = await Promise.all([
    loadGoogleFont("Noto Serif JP", text),
    readFile(path.join(process.cwd(), "public/images/hero.jpg")),
  ]);
  const heroSrc = `data:image/jpeg;base64,${heroJpg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "NotoSerifJP",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20, 24, 20, 0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(250, 246, 240, 0.6)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#faf6f0",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: "0.5em" }}>
            {SITE.nameEn.toUpperCase()}
          </div>
          <div style={{ fontSize: 76, marginTop: 28, fontWeight: 600 }}>
            {SITE.catchCopy}
          </div>
          <div style={{ fontSize: 40, marginTop: 36 }}>{SITE.name}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "NotoSerifJP", data: fontData, weight: 600, style: "normal" }],
    },
  );
}
