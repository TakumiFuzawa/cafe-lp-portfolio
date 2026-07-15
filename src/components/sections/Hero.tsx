import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" aria-label="メインビジュアル" className="relative flex min-h-svh items-center justify-center">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        quality={60}
        sizes="100vw"
        className="object-cover"
      />
      {/* 文字のコントラスト確保用オーバーレイ */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative px-4 text-center text-white">
        <p className="text-sm tracking-[0.4em] uppercase">{SITE.nameEn}</p>
        <h1 className="mt-4 font-serif text-4xl leading-relaxed font-semibold md:text-6xl md:leading-relaxed">
          {SITE.catchCopy}
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-loose">
          路地裏の小さな隠れ家カフェ。
          <br />
          自家焙煎の香りに包まれて、なにもしない時間を。
        </p>
        <a
          href="#menu"
          className="mt-10 inline-block rounded-full bg-pine px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          メニューを見る
        </a>
      </div>
    </section>
  );
}
