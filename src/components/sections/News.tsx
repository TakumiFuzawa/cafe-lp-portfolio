import { NEWS_ITEMS } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}

export default function News() {
  return (
    <section id="news" aria-label="お知らせ" className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <h2 className="mb-5 text-center text-sm font-medium tracking-[0.25em] text-pine uppercase">
            News <span className="sr-only">お知らせ</span>
          </h2>
          <ul className="divide-y divide-cream-dark">
            {NEWS_ITEMS.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 py-3 md:flex-row md:items-center md:gap-5">
                <div className="flex shrink-0 items-center gap-3">
                  <time dateTime={item.date} className="text-sm text-muted tabular-nums">
                    {formatDate(item.date)}
                  </time>
                  <span className="rounded-full bg-cream-dark px-3 py-0.5 text-xs text-cocoa">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-ink md:text-base">{item.title}</p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
