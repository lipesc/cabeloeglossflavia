import Image from "next/image";

import { siteContent } from "@/content/siteContent";
import { CtaGroup } from "@/components/CtaGroup";

export function Hero() {
  const heroImage = siteContent.heroImage;

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          {/* <div className="flex flex-wrap items-center gap-3">
            <span className="chip">Atendimento no salão {siteContent.brand.salonName}</span>
            <span className="chip">Agendamento direto com {siteContent.brand.professionalName}</span>
          </div> */}
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {siteContent.brand.headline}
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            {siteContent.brand.subheadline}
          </p>
          <div className="mt-8">
            <CtaGroup align="left" variant="full" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
            {siteContent.trust.bullets.map((bullet) => (
              <span key={bullet} className="rounded-full bg-white/70 px-4 py-2 shadow-soft">
                {bullet}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(min-width: 768px) 320px, 90vw"
              className="object-cover"
              priority
              unoptimized={heroImage.src.endsWith(".gif")}
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,210,200,0.55),rgba(255,255,255,0.2),rgba(255,237,204,0.55))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-start justify-end gap-3 p-6 text-white">
              {/* <p className="text-sm uppercase tracking-widest text-white/80 drop-shadow-sm">Agenda rápida</p> */}
              <p className="font-display text-2xl text-white drop-shadow-sm">
                {siteContent.brand.salonName} — {siteContent.brand.neighborhood}
              </p>
              {/* <p className="text-sm text-white/85 drop-shadow-sm">
                {siteContent.brand.professionalName}
              </p> */}
            </div>
          </div>
          <div className="absolute -right-8 -top-10 hidden rounded-full bg-white/70 px-5 py-3 text-sm text-muted shadow-soft md:block">
            Disponível para eventos e ensaios
          </div>
        </div>
      </div>
    </section>
  );
}
