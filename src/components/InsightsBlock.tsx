import Image from "next/image";
import Link from "next/link";

type Insight = {
  category: string;
  title: string;
  date: string;
  read: string;
  image: string;
};

const insights: Insight[] = [
  {
    category: "Orthodontics 矯正",
    title: "數位矯正時代：從傳統矯正到客製化治療的轉型之路",
    date: "2025.03.18",
    read: "8 分鐘",
    image: "/images/valtech/industries/mobility.jpg",
  },
  {
    category: "Endodontics 根管",
    title: "根管再治療的挑戰與策略：當第一次治療未能成功",
    date: "2025.02.04",
    read: "10 分鐘",
    image: "/images/valtech/industries/health.jpg",
  },
  {
    category: "Infection Control 感控",
    title: "診所感控不只是滅菌：建立完整交叉感染防護流程",
    date: "2024.12.12",
    read: "6 分鐘",
    image: "/images/valtech/industries/cpg.jpg",
  },
];

export default function InsightsBlock() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Knowledge & Insights
            </p>
            <h2 className="display-lg mt-4 text-[clamp(34px,4vw,56px)] text-foreground">
              知識與洞見
            </h2>
          </div>
          <Link
            href="#stories"
            className="group inline-flex items-center gap-2 text-sm font-light text-foreground"
          >
            前往內容專區
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {insights.map(item => (
            <li key={item.title}>
              <Link
                href="#stories"
                className="group block overflow-hidden rounded-sm bg-background"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-xl font-light leading-snug text-foreground lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{item.date}</span>
                    <span aria-hidden>·</span>
                    <span>{item.read} 閱讀</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
