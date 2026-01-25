type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mx-auto max-w-3xl ${alignClass}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
