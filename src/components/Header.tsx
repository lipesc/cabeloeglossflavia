import { siteContent } from "@/content/siteContent";
import { CtaGroup } from "@/components/CtaGroup";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
          {siteContent.brand.professionalName}
          </p>
          <p className="text-xs text-muted">
            Atendimento no salão {siteContent.brand.salonName} ({siteContent.brand.neighborhood}/
            {siteContent.brand.city})
          </p>
        </div>
        <CtaGroup variant="header" />
      </div>
    </header>
  );
}
