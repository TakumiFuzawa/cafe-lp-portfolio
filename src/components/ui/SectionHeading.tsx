type Props = {
  id: string;
  en: string;
  ja: string;
};

/** セクション見出し。id は aria-labelledby から参照される */
export default function SectionHeading({ id, en, ja }: Props) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <p className="text-sm font-medium tracking-[0.25em] text-pine uppercase" aria-hidden="true">
        {en}
      </p>
      <h2 id={id} className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
        {ja}
      </h2>
    </div>
  );
}
