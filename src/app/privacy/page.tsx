import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${SITE.name}`,
  description: `${SITE.name}のプライバシーポリシーです。お問い合わせフォームで取得した個人情報の取り扱いについて定めています。`,
  robots: { index: false },
};

const sections = [
  {
    heading: "1. 取得する情報",
    body: "当店は、お問い合わせフォームを通じて、お名前・メールアドレス・お問い合わせ内容を取得します。",
  },
  {
    heading: "2. 利用目的",
    body: "取得した個人情報は、お問い合わせへの回答、ご予約の確認・ご連絡のためにのみ利用します。",
  },
  {
    heading: "3. 第三者への提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    heading: "4. 安全管理",
    body: "取得した個人情報は適切に管理し、漏えい・滅失・毀損の防止に努めます。利用目的を終えた情報は速やかに削除します。",
  },
  {
    heading: "5. お問い合わせ窓口",
    body: `本ポリシーに関するお問い合わせは、店頭またはお電話(${SITE.tel})にて承ります。`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-4 pt-16 pb-20 md:px-6 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-ink">
          プライバシーポリシー
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {SITE.name}(以下「当店」)は、お客様の個人情報を以下の方針に基づき取り扱います。
        </p>

        {sections.map((s) => (
          <section key={s.heading} className="mt-8">
            <h2 className="font-serif text-xl font-semibold text-cocoa">{s.heading}</h2>
            <p className="mt-2 leading-relaxed text-ink">{s.body}</p>
          </section>
        ))}

        <p className="mt-10 text-sm text-muted">制定日: 2026年7月1日</p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full border border-pine px-6 py-2.5 text-sm font-medium text-pine transition-colors hover:bg-pine hover:text-white"
        >
          トップページへ戻る
        </Link>
      </main>
      <Footer />
    </>
  );
}
