"use client";

import { useEffect, useState } from "react";

import { siteContent } from "@/content/siteContent";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function PwaInstallBanner() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 4000);
    const handler = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-white/70 bg-white/90 p-4 shadow-soft">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">Leve o salão no seu bolso</p>
          <p className="text-xs text-muted">
            Instale o app para abrir a agenda mais rápido. Disponível em navegadores compatíveis.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="btn-primary w-full"
            onClick={async () => {
              if (!promptEvent) return;
              await promptEvent.prompt();
              setVisible(false);
            }}
            disabled={!promptEvent}
          >
            {siteContent.ctas.installPwaLabel}
          </button>
          <button
            className="btn-ghost w-full"
            onClick={() => setVisible(false)}
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}
