export default function MarqueeStrip() {
  const phrase = "進入湧傑";
  const items = Array.from({ length: 16 }, () => phrase);
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-border/60 bg-background py-6"
    >
      <div className="flex w-max gap-12 animate-marquee will-change-transform">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-12 text-[clamp(40px,4vw,72px)] font-light tracking-tight text-foreground"
          >
            {t}
            <span className="text-foreground/30">✱</span>
          </span>
        ))}
      </div>
    </section>
  );
}
