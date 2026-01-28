import Image from "next/image";

import { siteContent } from "@/content/siteContent";

export function FlaviaImage() {
  const flaviaImage = siteContent.flaviaImage;

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <figure className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/70 bg-white shadow-soft">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={flaviaImage.src}
              alt={flaviaImage.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              className="object-cover"
              priority
              unoptimized={flaviaImage.src.endsWith(".gif")}
            />
          </div>
          {flaviaImage.caption ? (
            <figcaption className="px-4 py-3 text-center text-sm text-muted">
              {flaviaImage.caption}
            </figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
