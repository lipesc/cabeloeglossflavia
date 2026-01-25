"use client";

import { Suspense, useMemo } from "react";
import type { MouseEvent } from "react";
import { useSearchParams } from "next/navigation";

import { siteContent } from "@/content/siteContent";
import { pushDataLayer } from "@/lib/gtm";
import { appendTrackingParams, normalizePhoneNumber } from "@/lib/utm";

type CtaGroupProps = {
  variant?: "full" | "header" | "compact";
  align?: "left" | "center";
};

const icons = {
  whatsapp: (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M19.11 17.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.66.15-.2.29-.76.94-.94 1.13-.17.2-.34.22-.63.08-.29-.15-1.24-.46-2.36-1.47-.87-.78-1.45-1.74-1.62-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.36-.02-.51-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.11.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z" />
      <path d="M16 3C9.38 3 4 8.38 4 15c0 2.14.56 4.16 1.55 5.92L4 29l8.33-1.51A11.91 11.91 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 21.82a9.8 9.8 0 0 1-5-1.38l-.36-.21-4.95.9.93-4.82-.24-.38a9.78 9.78 0 1 1 9.62 5.89z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 7.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
      <path d="M17.5 3h-11A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3zm1.7 14.5a1.7 1.7 0 0 1-1.7 1.7h-11a1.7 1.7 0 0 1-1.7-1.7v-11a1.7 1.7 0 0 1 1.7-1.7h11a1.7 1.7 0 0 1 1.7 1.7v11z" />
      <path d="M18 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
    </svg>
  ),
};

function CtaGroupInner({ variant = "full", align = "left" }: CtaGroupProps) {
  const params = useSearchParams();

  const { whatsappUrl, instagramUrl, calendlyUrl } = useMemo(() => {
    const digits = normalizePhoneNumber(siteContent.links.whatsappNumberE164);
    const rawWhatsapp = `https://wa.me/${digits}?text=${encodeURIComponent(
      siteContent.messages.whatsappPrefill
    )}`;

    const trackingParams = params ? params : new URLSearchParams();

    return {
      whatsappUrl: appendTrackingParams(rawWhatsapp, trackingParams),
      instagramUrl: appendTrackingParams(
        siteContent.links.instagramProfileUrl,
        trackingParams
      ),
      calendlyUrl: appendTrackingParams(
        siteContent.links.calendlyUrl,
        trackingParams
      ),
    };
  }, [params]);

  const alignClass = align === "center" ? "justify-center" : "justify-start";

  const handleCalendlyClick = (event: MouseEvent) => {
    event.preventDefault();
    pushDataLayer("click_calendly", { label: calendlyUrl });

    if (typeof window === "undefined") return;

    const calendly = (window as any).Calendly;
    if (calendly && typeof calendly.initPopupWidget === "function") {
      calendly.initPopupWidget({ url: calendlyUrl });
      return;
    }

    if (!document.getElementById("calendly-widget-script")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    pushDataLayer("click_whatsapp", { label: whatsappUrl });
  };

  const handleInstagramClick = () => {
    pushDataLayer("click_instagram", { label: instagramUrl });
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${alignClass}`}>
      <button className="btn-primary" onClick={handleCalendlyClick}>
        {siteContent.ctas.primaryLabel}
      </button>

      {variant === "full" && (
        <>
          <a
            className="btn-secondary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            onClick={handleWhatsAppClick}
          >
            {siteContent.ctas.secondaryLabel}
          </a>
          <a
            className="btn-ghost"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            onClick={handleInstagramClick}
          >
            {siteContent.ctas.tertiaryLabel}
          </a>
        </>
      )}

      {variant === "header" && (
        <div className="flex items-center gap-2">
          <a
            className="btn-ghost"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp"
            onClick={handleWhatsAppClick}
          >
            {icons.whatsapp}
          </a>
          <a
            className="btn-ghost"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            onClick={handleInstagramClick}
          >
            {icons.instagram}
          </a>
        </div>
      )}
    </div>
  );
}

export function CtaGroup(props: CtaGroupProps) {
  return (
    <Suspense fallback={null}>
      <CtaGroupInner {...props} />
    </Suspense>
  );
}
