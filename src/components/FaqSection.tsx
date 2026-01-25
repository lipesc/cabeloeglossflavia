import { siteContent } from "@/content/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function FaqSection() {
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader title={siteContent.faq.title} />
        <div className="mt-8 space-y-4">
          {siteContent.faq.items.map((item) => (
            <details
              key={item.id}
              className="rounded-2xl border border-white/70 bg-white p-5 shadow-soft"
            >
              <summary className="cursor-pointer text-sm font-semibold text-ink">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
