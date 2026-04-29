import Image from "next/image";

const partners = [
  { name: "Damon Ultima", src: "/images/yongchieh/partners/damon.webp" },
  { name: "Spark Aligner", src: "/images/yongchieh/partners/spark.png" },
  { name: "Hu-Friedy Group", src: "/images/yongchieh/partners/hufriday.png" },
  { name: "Mectron", src: "/images/yongchieh/partners/mectron.png" },
  { name: "Kerr", src: "/images/yongchieh/partners/kerr.png" },
  { name: "EdgeEndo", src: "/images/yongchieh/partners/edgeendo.png" },
  { name: "Euronda", src: "/images/yongchieh/partners/euronda.png" },
];

export default function PartnersWall() {
  // Duplicate list so the marquee loops seamlessly
  const list = [...partners, ...partners];

  return (
    <section id="partners" className="border-y border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/60">
              Our Proud Partners
            </p>
            <h2 className="display-lg mt-4 text-[clamp(28px,3.2vw,44px)] text-background">
              品牌合作牆 — 與全球頂尖品牌同行
            </h2>
          </div>
          <a
            href="#partners"
            className="text-sm font-light text-background/80 hover:text-background"
          >
            查看全部 →
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden pb-16">
        <div className="flex w-max items-center gap-16 px-10 animate-marquee will-change-transform">
          {list.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-16 w-[160px] shrink-0 items-center justify-center"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={160}
                height={64}
                className="max-h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
