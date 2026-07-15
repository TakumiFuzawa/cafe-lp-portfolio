# 小森珈琲 | 架空カフェLP(ポートフォリオ)

自家焙煎コーヒーと手作り焼き菓子のカフェ「小森珈琲(架空店舗)」のランディングページです。
飲食店のWeb制作を想定し、**SEO・表示速度・アクセシビリティ・更新しやすさ**を実務品質で作り込むことを目的に制作しました。

> 🚧 デプロイURL: (Vercelデプロイ後にここに記載)

## 制作意図

小規模飲食店のLP制作でよくある要件を想定しています。

- 検索やSNS経由でお店を知った人に、雰囲気・メニュー・場所を迷わず伝える
- スマートフォンでの閲覧が主(モバイルファーストで設計)
- 予約・取材などの問い合わせ導線を用意する
- 公開後にメニューや営業時間をすぐ更新できるようにしておく

## 技術スタック

| 項目 | 採用技術 |
| --- | --- |
| フレームワーク | Next.js 16(App Router)+ TypeScript |
| スタイリング | Tailwind CSS v4 |
| フォーム | react-hook-form + zod |
| 画像最適化 | next/image(AVIF/WebP自動変換・srcset自動生成) |
| デプロイ想定 | Vercel |

### 技術選定の理由

- **Next.js(App Router)**: 全ページ静的生成(SSG)で高速配信しつつ、将来のCMS連携やフォームAPI追加にもそのまま対応できるため。React Server Components により、クライアントに送るJSを最小限にできる点もLPと相性が良い。
- **Tailwind CSS**: デザイントークン(色・フォント)を `@theme` で一元管理でき、コンポーネントと見た目が同じ場所にあるため修正コストが低い。
- **react-hook-form + zod**: スキーマ(`src/lib/schema.ts`)にバリデーションルールが集約され、エラーメッセージの追加・変更が1ファイルで完結する。zodスキーマは将来サーバー側バリデーションにもそのまま流用できる。

## パフォーマンス(Lighthouse)

ローカルの本番ビルド(`next build` + `next start`)に対する計測結果:

| Performance | Accessibility | Best Practices | SEO |
| :-: | :-: | :-: | :-: |
| 92 | 100 | 100 | 100 |

### 主な施策

- **日本語Webフォントを使わない判断**: Noto Sans/Serif JP を `next/font` で読み込むと、分割サブセットでも合計1MB超のフォント転送が発生し、LCP(最大コンテンツの描画)が計測上 3秒以上悪化した。各OSの高品質な日本語フォント(ヒラギノ・游書体等)をフォントスタックで指定する方式に変更し、フォント転送量ゼロを実現(Performance 56 → 92)。
- **画像**: すべて `next/image`。ヒーローのみ `priority` + `quality=60` でLCPを最適化、それ以外は遅延読み込み。`sizes` 指定でモバイルに過大な画像を送らない。
- **クライアントJS最小化**: インタラクティブな部品(お問い合わせフォーム・モバイルメニュー・フェードイン)だけを `'use client'` にし、それ以外はServer Componentsとして静的HTML化。
- **CLS = 0**: 画像は `fill` + アスペクト比固定のコンテナで、読み込み時のレイアウトずれなし。

## SEO

- `metadata` API による title / description / canonical / OGP / Twitter Card
- JSON-LD 構造化データ2種: `CafeOrCoffeeShop`(住所・電話・営業時間)+ `FAQPage`(よくあるご質問)でローカルSEOに対応
- `sitemap.xml` / `robots.txt` を自動生成(`src/app/sitemap.ts` / `robots.ts`)
- 見出し階層の整理(h1はキャッチコピーの1つのみ → セクションはh2 → カードはh3)

## アクセシビリティ

- セマンティックHTML(`header` / `main` / `section` / `footer`、`aria-labelledby` によるセクションのラベル付け)
- キーボード利用者向けのスキップリンク(「本文へスキップ」)
- フォーム: `label` 関連付け・`aria-invalid` / `aria-describedby` / `role="alert"` によるエラー通知、送信完了は `role="status"`
- FAQアコーディオンはネイティブの `details` / `summary` で実装(JS不要でキーボード・スクリーンリーダー対応)
- モバイルメニュー: `aria-expanded` / `aria-controls` / 状態に応じた `aria-label`
- 配色はベージュ背景に対しコントラスト比 4.5:1 以上を確保
- `prefers-reduced-motion` 指定時はフェードインを無効化して即時表示

## 実務を想定した作り込み

- **お知らせ欄**: 営業時間変更・限定メニューなど、飲食店で必ず発生する告知の置き場所を用意
- **FAQ**: 予約・電源Wi-Fi・支払い方法など、電話問い合わせを減らす定番コンテンツ(FAQ構造化データ付き)
- **プライバシーポリシー**(`/privacy`): フォームで個人情報を取得するため、同意チェックボックス必須+ポリシーページを用意
- **LINE導線**: 日本の飲食店の予約・リピート施策の定番。お問い合わせセクションとフッターに公式アカウントへのリンクを設置
- **営業ステータス表示**: 「本日営業中(〜18:00)」「本日は定休日です」を現在時刻から自動判定してアクセス欄に表示(`src/lib/hours.ts`)
- **オリジナルOGP画像**: 店名・キャッチコピー入りの画像を `opengraph-image.tsx` でビルド時に自動生成。文言を変更すれば画像も追従する
- **GA4対応**: 環境変数 `NEXT_PUBLIC_GA_ID` を設定するだけで計測開始(`@next/third-parties` 使用。未設定時はタグ自体を出力しない)
- **テイクアウト表記**: 対象メニューに「テイクアウトOK」バッジを表示(`constants.ts` の `takeout` フラグで管理)
- **スタッフ募集セクション**: 募集職種・時給・条件を掲載し、フォームの種別「採用へのご応募」に接続。飲食店の恒常的な課題である採用に対応
- **ヘッダーに予約CTA**: 「ご予約・お問い合わせ」ボタンを常時表示してコンバージョン導線を確保
- **404ページ**: トップへ戻る導線付きのカスタム404

## 更新しやすさの工夫

メニュー・営業時間・お知らせ・FAQなどの掲載内容は `src/lib/constants.ts` に集約しています。
「スコーンの値段を変えたい」「お知らせを追加したい」といった更新はこのファイルの修正だけで完結し、コンポーネントには触れません。

```
src/
├── app/            # ルーティング・meta情報・SEOファイル・/privacy・404
├── components/
│   ├── layout/     # Header / Footer
│   ├── sections/   # Hero / News / About / Menu / Gallery / Faq / Access / Recruit / Contact
│   ├── form/       # ContactForm(react-hook-form + zod)
│   └── ui/         # FadeIn / SectionHeading などの汎用部品
└── lib/            # constants(掲載データ)/ schema(バリデーション)
```

## お問い合わせフォームについて

送信処理は**デモ用の仮実装**(1秒待機→完了表示)です。実案件では以下のいずれかに差し替えます。

- Next.js Server Actions + メール送信サービス(Resend / SendGrid)
- フォームサービス連携(Formspree / SSGform)

バリデーションはzodスキーマで実装済みのため、サーバー側でも同じスキーマを再利用して二重チェックできます。

## セットアップ

```bash
npm install
npm run dev    # 開発サーバー (http://localhost:3000)
npm run build  # 本番ビルド
```

Vercelへのデプロイはリポジトリを連携するだけで完了します(ビルド設定は自動検出)。

Google Analytics を有効にする場合は、`.env.local.example` を参考に環境変数 `NEXT_PUBLIC_GA_ID` を設定してください(Vercelでは Project Settings → Environment Variables)。

## 実案件での拡張提案

- メニュー・お知らせのCMS化(microCMS / Newt)で店舗スタッフが自分で更新できるように
- フォーム送信の本実装 + スパム対策(reCAPTCHA / Turnstile)
- Googleビジネスプロフィールと連携した口コミ・地図表示
- 予約システム(TableCheck等)との連携

---

※ 本サイトは架空の店舗です。写真は [Unsplash](https://unsplash.com/) のフリー素材を使用しています。
