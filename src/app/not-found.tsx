import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="text-sm tracking-[0.3em] text-pine uppercase">404 Not Found</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink md:text-3xl">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        お探しのページは移動または削除された可能性があります。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-pine px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-pine-dark"
      >
        {SITE.name}のトップへ戻る
      </Link>
    </main>
  );
}
