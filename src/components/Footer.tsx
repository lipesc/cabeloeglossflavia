import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-muted">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <p>
              © {new Date().getFullYear()} {siteContent.brand.professionalName}. Todos os direitos
              reservados.
            </p>
            <p className="mt-2 max-w-xl">{siteContent.privacy.shortText}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-gray-700">Desenvolvido por</p>
            <div className="flex items-center gap-2">
              <span>{siteContent.developer.name}</span>
            </div>
            <div className="flex gap-3">
              <a
                href={siteContent.developer.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hover:opacity-70 transition"
              >
                <img
                  src="/icons/github.svg"
                  alt="GitHub logo"
                  className="h-14 w-14"
                />
              </a>
              <a
                href={siteContent.developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hover:opacity-70 transition"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn logo"
                  className="h-5 w-5 translate-y-3.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
