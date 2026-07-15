import Image from "next/image";
import { MENU_ITEMS } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="menu-heading" en="Menu" ja="メニュー" />
        </FadeIn>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_ITEMS.map((item, i) => (
            <li key={item.name}>
              <FadeIn delay={(i % 3) * 0.15}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative aspect-4/3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold text-ink">
                        {item.name}
                      </h3>
                      <p className="shrink-0 text-sm text-cocoa">
                        ¥{item.price.toLocaleString()}
                        <span className="ml-0.5 text-xs">(税込)</span>
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>
                    {item.takeout && (
                      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-pine/10 px-3 py-1 text-xs font-medium text-pine-dark">
                        <svg
                          aria-hidden="true"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 8h12l-1.5 12.5a1 1 0 0 1-1 .5h-7a1 1 0 0 1-1-.5L6 8z" />
                          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                        </svg>
                        テイクアウトOK
                      </p>
                    )}
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>

        <FadeIn>
          <p className="mt-10 text-center text-sm text-muted">
            「テイクアウトOK」の商品はお持ち帰りいただけます。カップ・袋のご用意もあります。
            <br />
            このほかにも季節限定のドリンクやフードをご用意しています。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
