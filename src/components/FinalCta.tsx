import { siteContent } from "@/content/siteContent";
import { CtaGroup } from "@/components/CtaGroup";

export function FinalCta() {
  return (
    <section id="agendar" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2rem] border border-white/70 bg-white/90 p-10 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Agenda rápida</p>
          <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
            Garanta seu horário com {siteContent.brand.professionalName}
          </h2>
          <p className="mt-3 text-base text-muted">
            Atendimento no salão {siteContent.brand.salonName} ({siteContent.brand.neighborhood}/
            {siteContent.brand.city}).
          </p>
          <div className="mt-6 flex justify-center">
            <CtaGroup variant="full" align="center" />
          </div>
        </div>
      </div>
    </section>
  );
}
