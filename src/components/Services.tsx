import { siteContent } from "@/content/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function Services() {
  return (
    <section id="servicos" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title={siteContent.services.title} subtitle={siteContent.services.subtitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {siteContent.services.items.map((service) => (
            <article
              key={service.id}
              className={`rounded-2xl border border-white/70 bg-white p-6 shadow-soft transition hover:-translate-y-1 ${
                service.highlight ? "ring-2 ring-accent/20" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-ink">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted">{service.shortDescription}</p>
                </div>
                {service.highlight ? (
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Mais pedido
                  </span>
                ) : null}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
                {service.durationMinutes ? (
                  <span className="rounded-full bg-base px-3 py-1">
                    {service.durationMinutes} min
                  </span>
                ) : null}
                {service.startingPriceBRL && service.startingPriceBRL > 0 ? (
                  <span className="rounded-full bg-base px-3 py-1">
                    A partir de R$ {service.startingPriceBRL}
                  </span>
                ) : (
                  <span className="rounded-full bg-base px-3 py-1">
                    Consulte valores
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">{siteContent.services.priceNote}</p>
      </div>
    </section>
  );
}
