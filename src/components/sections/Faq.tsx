import { FAQ_ITEMS } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

/** アコーディオンはネイティブの details/summary で実装(JS不要・キーボード操作可) */
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="faq-heading" en="FAQ" ja="よくあるご質問" />

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl bg-white shadow-sm open:pb-1"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-4 font-medium text-ink transition-colors hover:text-pine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine">
                  <span>
                    <span className="mr-3 font-serif text-pine" aria-hidden="true">
                      Q.
                    </span>
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-pine transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted md:pl-13">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
