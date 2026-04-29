const stats = [
  { value: "30+", label: "年專業經驗", note: "Years of clinical partnership" },
  { value: "120+", label: "教育活動", note: "Workshops · Webinars · Mastery courses" },
  { value: "5k+", label: "臨床夥伴", note: "Trusted by dentists across Taiwan" },
  { value: "10k+", label: "高品質產品", note: "International dental brands" },
];

export default function StatsBlock() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-start px-6 py-12 lg:px-10 lg:py-16 ${
              i !== 0 ? "lg:border-l lg:border-border/60" : ""
            } ${i === 1 ? "border-l border-border/60 lg:border-l" : ""} ${
              i === 2 ? "border-t border-border/60 lg:border-t-0" : ""
            } ${i === 3 ? "border-t border-l border-border/60 lg:border-t-0" : ""}`}
          >
            <span className="display-lg text-[clamp(48px,5.5vw,84px)] tabular-nums text-foreground">
              {s.value}
            </span>
            <span className="mt-3 text-base font-medium text-foreground">{s.label}</span>
            <span className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
