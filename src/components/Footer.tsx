import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteContent.brand.professionalName}. Todos os direitos
          reservados.
        </p>
        <p className="max-w-xl">{siteContent.privacy.shortText}</p>
      </div>
    </footer>
  );
}
