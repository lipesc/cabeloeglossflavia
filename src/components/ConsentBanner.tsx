"use client";

import { useEffect, useMemo, useState } from "react";

type ConsentState = "granted" | "denied";

const STORAGE_KEY = "consentMode";

const defaultConsent = {
  ad_storage: "denied" as ConsentState,
  analytics_storage: "denied" as ConsentState,
  ad_user_data: "denied" as ConsentState,
  ad_personalization: "denied" as ConsentState,
};

function updateConsent(consent: typeof defaultConsent) {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", consent);
    return;
  }

  const dataLayer = (window as any).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push(["consent", "update", consent]);
  }
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const acceptConsent = useMemo(
    () => ({
      ad_storage: "granted" as ConsentState,
      analytics_storage: "granted" as ConsentState,
      ad_user_data: "granted" as ConsentState,
      ad_personalization: "granted" as ConsentState,
    }),
    []
  );

  useEffect(() => {
    setIsClient(true);

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      updateConsent(acceptConsent);
      setVisible(false);
      return;
    }

    if (stored === "denied") {
      updateConsent(defaultConsent);
      setVisible(false);
      return;
    }

    setVisible(true);
  }, [acceptConsent]);

  const handleAccept = () => {
    updateConsent(acceptConsent);
    window.localStorage.setItem(STORAGE_KEY, "granted");
    setVisible(false);
  };

  const handleReject = () => {
    updateConsent(defaultConsent);
    window.localStorage.setItem(STORAGE_KEY, "denied");
    setVisible(false);
  };

  if (!isClient || !visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-white/70 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Privacidade e cookies</p>
          <p className="mt-1 text-sm text-muted">
            Usamos cookies para medir resultados e melhorar sua experiência. Você pode aceitar ou
            recusar a coleta de dados para anúncios e métricas.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <button className="btn-ghost" onClick={handleReject}>
            Recusar
          </button>
          <button className="btn-primary" onClick={handleAccept}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
