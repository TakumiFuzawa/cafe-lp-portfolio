import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Faq from "@/components/sections/Faq";
import Access from "@/components/sections/Access";
import Recruit from "@/components/sections/Recruit";
import Contact from "@/components/sections/Contact";
import { FAQ_ITEMS, SITE } from "@/lib/constants";

/** ローカルSEO用の構造化データ(カフェ) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE.name,
  alternateName: SITE.nameEn,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/opengraph-image`,
  telephone: SITE.tel,
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "杉並区",
    streetAddress: "小森町1-2-3",
  },
  servesCuisine: "コーヒー・焼き菓子",
  priceRange: "¥¥",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:30",
      closes: "19:00",
    },
  ],
};

/** よくあるご質問の構造化データ */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <News />
        <About />
        <Menu />
        <Gallery />
        <Faq />
        <Access />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
