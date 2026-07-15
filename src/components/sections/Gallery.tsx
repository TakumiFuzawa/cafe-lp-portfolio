import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <SectionHeading id="gallery-heading" en="Gallery" ja="店内の様子" />
        </FadeIn>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY_IMAGES.map((image, i) => (
            <li key={image.src}>
              <FadeIn delay={i * 0.1}>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
