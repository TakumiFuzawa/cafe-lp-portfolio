import Image from "next/image";
import { FEATURES, SITE } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="about-heading" en="About" ja="私たちのこと" />
          <p className="mx-auto max-w-2xl text-center leading-loose text-ink">
            {SITE.name}は、街の喧騒から一歩入った路地裏にある小さなカフェです。
            <br className="hidden md:block" />
            毎朝店内で焙煎する珈琲と、焼きたてのおやつをご用意して、
            あなたの「なにもしない時間」をお待ちしています。
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.15}>
              <article className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-cocoa">
                  {feature.title}
                </h3>
                <p className="mt-3 text-left text-sm leading-relaxed text-muted">
                  {feature.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
