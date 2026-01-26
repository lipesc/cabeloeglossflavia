import Image from "next/image";

import { siteContent } from "@/content/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function BeforeAfter() {
  return (
    <section id="antes-depois" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title={siteContent.beforeAfter.title} subtitle={siteContent.beforeAfter.subtitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.beforeAfter.photos.map((photo, index) => (
            <figure
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized={photo.src.endsWith(".gif")}
                  priority={index < 2}
                />
              </div>
              {photo.caption ? (
                <figcaption className="px-4 py-3 text-sm text-muted">
                  {photo.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
