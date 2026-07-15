import { HOURS, SITE } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";
import OpenStatus from "@/components/ui/OpenStatus";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Access() {
  return (
    <section id="access" aria-labelledby="access-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="access-heading" en="Access" ja="アクセス・営業時間" />

          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
            <div className="mb-6 text-center">
              <OpenStatus />
            </div>
            <dl className="space-y-5">
              <div className="md:flex md:gap-6">
                <dt className="shrink-0 font-medium text-cocoa md:w-28">住所</dt>
                <dd className="mt-1 md:mt-0">
                  {SITE.address}
                  <br />
                  <span className="text-sm text-muted">{SITE.access}</span>
                </dd>
              </div>
              <div className="md:flex md:gap-6">
                <dt className="shrink-0 font-medium text-cocoa md:w-28">電話</dt>
                <dd className="mt-1 md:mt-0">
                  <a href={`tel:${SITE.tel}`} className="underline-offset-4 hover:underline">
                    {SITE.tel}
                  </a>
                </dd>
              </div>
              <div className="md:flex md:gap-6">
                <dt className="shrink-0 font-medium text-cocoa md:w-28">営業時間</dt>
                <dd className="mt-1 md:mt-0">
                  <ul className="space-y-1">
                    {HOURS.map((row) => (
                      <li key={row.label}>
                        <span className="mr-3 inline-block w-14 text-sm text-muted">
                          {row.label}
                        </span>
                        {row.value}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full border border-pine px-6 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-pine hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
            >
              Google マップで見る
              <span className="sr-only">(新しいタブで開きます)</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
