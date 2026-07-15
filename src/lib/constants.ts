/**
 * 店舗情報・掲載コンテンツの定数定義。
 * 文言やメニューの更新はこのファイルだけで完結する。
 */

export const SITE = {
  name: "小森珈琲",
  nameEn: "Komori Coffee",
  catchCopy: "木漏れ日と、一杯の珈琲。",
  description:
    "路地裏の小さな隠れ家カフェ「小森珈琲」。自家焙煎コーヒーと焼きたてのスコーンで、なにもしない時間を愉しむ場所です。",
  url: "https://cafe-lp-portfolio.vercel.app",
  tel: "03-0000-0000",
  address: "東京都杉並区小森町1-2-3",
  access: "JR中央線「西荻窪駅」北口より徒歩6分",
  mapUrl: "https://maps.google.com/?q=西荻窪駅",
  instagramUrl: "https://www.instagram.com/",
  lineUrl: "https://line.me/R/ti/p/@komori-coffee",
} as const;

export const HOURS = [
  { label: "平日", value: "9:00 – 18:00(L.O. 17:30)" },
  { label: "土日祝", value: "8:30 – 19:00(L.O. 18:30)" },
  { label: "定休日", value: "毎週水曜日" },
] as const;

/**
 * 営業ステータス判定用の構造化データ(days は Date#getDay の値。水曜=3 は定休日)。
 * 表示用文言は HOURS、計算用はこちらと役割を分けている。
 */
export const BUSINESS_HOURS = [
  { days: [1, 2, 4, 5], open: "09:00", close: "18:00" },
  { days: [0, 6], open: "08:30", close: "19:00" },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "私たちのこと" },
  { href: "#menu", label: "メニュー" },
  { href: "#gallery", label: "店内の様子" },
  { href: "#faq", label: "よくあるご質問" },
  { href: "#access", label: "アクセス" },
  { href: "#recruit", label: "採用情報" },
  { href: "#contact", label: "お問い合わせ" },
] as const;

export const NEWS_ITEMS = [
  {
    date: "2026-07-10",
    label: "メニュー",
    title: "夏季限定「水出しコーヒーのアフォガート」はじめました",
  },
  {
    date: "2026-06-28",
    label: "営業時間",
    title: "7月の営業時間変更のお知らせ(7/20は15:00閉店)",
  },
  {
    date: "2026-06-05",
    label: "お知らせ",
    title: "貸切のご予約を承ります(平日夜・10名様まで)",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "席の予約はできますか?",
    answer:
      "2名様以上でしたら、お電話またはお問い合わせフォームからご予約いただけます。混雑時はご案内までお待ちいただく場合があります。",
  },
  {
    question: "電源・Wi-Fiはありますか?",
    answer:
      "カウンター席に電源をご用意しています。Wi-Fiは店内全席でご利用いただけます。混雑時は長時間のご利用をご遠慮いただく場合があります。",
  },
  {
    question: "支払い方法は何が使えますか?",
    answer:
      "現金のほか、各種クレジットカード、交通系IC、主要なQRコード決済がご利用いただけます。",
  },
  {
    question: "子ども連れ・ペット連れでも入れますか?",
    answer:
      "お子様連れも歓迎です。ペットは店先のテラス席(2席)のみご利用いただけます。",
  },
  {
    question: "コーヒー豆の販売はしていますか?",
    answer:
      "店頭にて自家焙煎豆を100gからお売りしています。ご希望の豆と焙煎度をスタッフにお声がけください。",
  },
] as const;

export const FEATURES = [
  {
    title: "自家焙煎の珈琲",
    text: "店の奥の小さな焙煎機で、毎朝その日に淹れる分だけを焙煎。豆本来の甘みを引き出す、やわらかな中深煎りが自慢です。",
    image: "/images/about-roast.jpg",
    alt: "焙煎したてのコーヒー豆",
  },
  {
    title: "焼きたてのおやつ",
    text: "スコーンや焼き菓子はすべて店内の厨房で手作り。珈琲に合わせて甘さを控えめに仕上げています。",
    image: "/images/about-bake.jpg",
    alt: "手作りの焼き菓子",
  },
  {
    title: "なにもしない時間",
    text: "木の家具と本棚、窓から差し込むやわらかな光。読書も、考えごとも、ぼんやりするのも自由な空間です。",
    image: "/images/about-space.jpg",
    alt: "木漏れ日の差し込む店内",
  },
] as const;

export const MENU_ITEMS = [
  {
    name: "カフェラテ",
    price: 650,
    note: "自家焙煎豆のエスプレッソに、まろやかなミルクを",
    image: "/images/menu-1.jpg",
    takeout: true,
  },
  {
    name: "小森ブレンド",
    price: 600,
    note: "甘みとコクのバランスがとれた、当店の看板ブレンド",
    image: "/images/menu-2.jpg",
    takeout: true,
  },
  {
    name: "シングルオリジン",
    price: 700,
    note: "季節ごとに産地を変えて、一杯ずつハンドドリップで(店内限定)",
    image: "/images/menu-3.jpg",
    takeout: false,
  },
  {
    name: "焼きたてスコーン",
    price: 480,
    note: "外はさっくり中はしっとり。クロテッドクリーム添え",
    image: "/images/menu-4.jpg",
    takeout: true,
  },
  {
    name: "本日の焼き菓子",
    price: 450,
    note: "日替わりで2〜3種類。詳しくは店頭の黒板にて",
    image: "/images/menu-5.jpg",
    takeout: true,
  },
  {
    name: "水出しアイスコーヒー",
    price: 630,
    note: "ひと晩かけて抽出した、すっきりとした甘みの一杯",
    image: "/images/menu-6.jpg",
    takeout: true,
  },
] as const;

export const RECRUIT = {
  message:
    "小森珈琲では、一緒にお店をつくってくれる仲間を募集しています。珈琲が好きな方、人と話すのが好きな方、未経験でも大歓迎です。",
  positions: [
    {
      title: "ホールスタッフ",
      type: "アルバイト・パート",
      wage: "時給 1,250円〜",
      detail: "接客・ドリンク提供。週2日・1日4時間から相談OK。土日勤務できる方歓迎。",
    },
    {
      title: "キッチン・焙煎アシスタント",
      type: "アルバイト・パート",
      wage: "時給 1,300円〜",
      detail: "焼き菓子の仕込みと焙煎の補助。コーヒーや製菓が好きな方、経験不問です。",
    },
  ],
} as const;

export const GALLERY_IMAGES = [
  { src: "/images/interior-1.jpg", alt: "カウンター席と珈琲を淹れる様子" },
  { src: "/images/interior-2.jpg", alt: "窓際の席から見た店内" },
  { src: "/images/interior-3.jpg", alt: "木の温もりを感じるテーブル席" },
  { src: "/images/interior-4.jpg", alt: "店内に並ぶコーヒー器具" },
] as const;

export const CONTACT_TOPICS = [
  "ご予約について",
  "貸切・イベントのご相談",
  "取材・お仕事のご依頼",
  "採用へのご応募",
  "その他",
] as const;
