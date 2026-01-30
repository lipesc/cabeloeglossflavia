"use client";

import { siteContent } from "@/content/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function LocationSection() {
  const handleMapClick = () => {
    // Google Ads conversion tracking
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(undefined);
    }
  };

  return (
    <section id="local" className="py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeader title={siteContent.location.title} />
          <p className="mt-6 text-base text-muted">
            Atendimento no salão {siteContent.brand.salonName} ({siteContent.brand.neighborhood}/
            {siteContent.brand.city}). Agendamento direto com {siteContent.brand.professionalName}.
          </p>
          <div className="mt-6 rounded-2xl border border-white/70 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-ink">{siteContent.location.addressLine1}</p>
            <p className="mt-2 text-sm text-muted">{siteContent.location.addressLine2}</p>
            <p className="mt-4 text-sm text-muted">{siteContent.location.note}</p>
          </div>
        </div>
        <div 
          className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-soft"
          onClick={handleMapClick}
        >
          <iframe
            title="Mapa do salão"
            src={siteContent.location.googleMapsEmbedUrl}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
