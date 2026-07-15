import ContactForm from "@/components/form/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="contact-heading" en="Contact" ja="お問い合わせ" />
          <p className="mb-6 text-center text-sm leading-relaxed text-muted">
            ご予約・貸切のご相談・取材のご依頼など、お気軽にお問い合わせください。
          </p>

          {/* LINEの方が返信が早い想定。フォームより先に提示する */}
          <div className="mb-10 text-center">
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755]"
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.03 3.58 7.4 8.42 8.04.33.07.77.22.89.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.08-.46 5.84-3.44 7.97-5.89C21.5 13.4 22 11.83 22 10.13 22 5.64 17.52 2 12 2z" />
              </svg>
              LINEで予約・お問い合わせ
              <span className="sr-only">(新しいタブで開きます)</span>
            </a>
            <p className="mt-3 text-xs text-muted">
              LINEなら営業時間内にすぐご返信できます。フォームからのお問い合わせも承ります。
            </p>
          </div>

          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
