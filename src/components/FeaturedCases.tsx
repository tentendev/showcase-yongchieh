import Image from "next/image";
import Link from "next/link";

type CaseItem = {
  title: string;
  client: string;
  category: string;
  image: string;
  alt: string;
  href: string;
  size: "large" | "small";
};

const cases: CaseItem[] = [
  {
    title: "Damon Ultima：可預期的高效矯正",
    client: "矯正",
    category: "Orthodontics",
    image: "/images/valtech/cases/eton.jpg",
    alt: "Damon Ultima orthodontics case",
    href: "#stories",
    size: "large",
  },
  {
    title: "Spark 隱形矯正：美觀與舒適並重",
    client: "矯正",
    category: "Aligners",
    image: "/images/valtech/cases/discover.jpg",
    alt: "Spark clear aligner case",
    href: "#stories",
    size: "large",
  },
  {
    title: "Hu-Friedy 手術器械：植牙手術的細節革命",
    client: "植牙手術",
    category: "Implant Surgery",
    image: "/images/valtech/cases/lexus.jpg",
    alt: "Hu-Friedy implant surgery instruments",
    href: "#stories",
    size: "large",
  },
  {
    title: "Mectron Piezosurgery：超音波微創",
    client: "牙周",
    category: "Perio",
    image: "/images/valtech/cases/mandarin.jpg",
    alt: "Mectron piezo surgery case",
    href: "#stories",
    size: "small",
  },
  {
    title: "Euronda 感控系統：診所安全升級",
    client: "感控",
    category: "Infection Control",
    image: "/images/valtech/cases/mars.jpg",
    alt: "Euronda infection control system",
    href: "#stories",
    size: "small",
  },
];

export default function FeaturedCases() {
  return (
    <section id="stories" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Knowledge & Insights
            </p>
            <h2 className="display-lg mt-4 text-[clamp(36px,4vw,56px)] text-foreground">
              真實案例，臨床洞見
            </h2>
          </div>
          <Link
            href="#stories"
            className="group inline-flex items-center gap-2 text-sm font-light text-foreground"
          >
            瀏覽全部案例
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </header>

        <div className="mt-12 grid grid-cols-12 gap-6">
          {cases.map((c, i) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group relative col-span-12 overflow-hidden rounded-sm bg-foreground/5 ${
                c.size === "large" ? "lg:col-span-6" : "lg:col-span-4"
              } ${i === 0 ? "lg:col-span-6" : ""}`}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-6 p-6 lg:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.category} · {c.client}
                  </p>
                  <h3 className="mt-3 text-[clamp(20px,1.6vw,28px)] font-light leading-snug text-foreground">
                    {c.title}
                  </h3>
                </div>
                <span className="mt-1 shrink-0 text-xl text-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
