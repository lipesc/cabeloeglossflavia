"use client";

import Image from "next/image";
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
    <Image
      src="/icons/whatsapp.png"
      alt="WhatsApp"
      width={20}
      height={20}
      className="h-5 w-5 object-contain"
      priority
    />
  ),
  instagram: (
    <Image
      src="/icons/instagram.png"
      alt="Instagram"
      width={20}
      height={20}
      className="h-5 w-5 object-contain"
      priority
    />
  ),
};

function CtaGroupInner({ variant = "full", align = "left" }: Readonly<CtaGroupProps>) {
  const params = useSearchParams();

  const { whatsappUrl, instagramUrl, calendlyUrl } = useMemo(() => {
    const digits = normalizePhoneNumber(siteContent.links.whatsappNumberE164);
    const rawWhatsapp = `https://wa.me/${digits}?text=${encodeURIComponent(
      siteContent.messages.whatsappPrefill
    )}`;

    const trackingParams = params || new URLSearchParams();

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

    if (typeof globalThis.window === "undefined") return;

    const calendly = (globalThis as any).Calendly;
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

export function CtaGroup(props: Readonly<CtaGroupProps>) {
  return (
    <Suspense fallback={null}>
      <CtaGroupInner {...props} />
    </Suspense>
  );
}
