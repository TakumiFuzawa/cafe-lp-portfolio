import { RECRUIT } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Recruit() {
  return (
    <section id="recruit" aria-labelledby="recruit-heading" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="recruit-heading" en="Recruit" ja="一緒に働きませんか" />
          <p className="mx-auto max-w-xl text-center text-sm leading-loose text-ink md:text-base">
            {RECRUIT.message}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {RECRUIT.positions.map((position) => (
              <article
                key={position.title}
                className="rounded-2xl border border-cream-dark bg-cream p-6"
              >
                <p className="text-xs font-medium tracking-wider text-pine">
                  {position.type}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink">
                  {position.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-cocoa">{position.wage}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {position.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block rounded-full bg-pine px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
            >
              応募する
            </a>
            <p className="mt-3 text-xs text-muted">
              お問い合わせフォームの種別で「採用へのご応募」を選択のうえ、ご希望の職種をお知らせください。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
