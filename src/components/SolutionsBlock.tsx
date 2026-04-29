import Image from "next/image";
import Link from "next/link";

type Solution = {
  zh: string;
  en: string;
  desc: string;
  image: string;
};

const solutions: Solution[] = [
  {
    zh: "齒顎矯正",
    en: "Orthodontics",
    desc: "從固定矯正到 Spark 隱形矯正，提供完整的數位化流程與臨床支援。",
    image: "/images/valtech/industries/mobility.jpg",
  },
  {
    zh: "牙周與植牙手術",
    en: "Perio & Implant Surgery",
    desc: "Hu-Friedy、Mectron 手術器械與超音波技術，協助術式更精準、更微創。",
    image: "/images/valtech/industries/luxury.jpg",
  },
  {
    zh: "修復贗復",
    en: "Restorative",
    desc: "Kerr、3M 等國際品牌的修復材料，兼顧美觀與長期穩定性。",
    image: "/images/valtech/industries/retail.jpg",
  },
  {
    zh: "感染控制",
    en: "Infection Control",
    desc: "Euronda 一站式感控解決方案，從滅菌到追溯，建立完整防護鏈。",
    image: "/images/valtech/industries/cpg.jpg",
  },
  {
    zh: "根管治療",
    en: "Endodontics",
    desc: "EdgeEndo 鎳鈦器械與根管科技，挑戰再治療的不可能。",
    image: "/images/valtech/industries/health.jpg",
  },
  {
    zh: "兒童牙科",
    en: "Pediatric Care",
    desc: "適合兒童使用的器械與感官友善材料，讓看牙不再是夢魘。",
    image: "/images/valtech/industries/finance.jpg",
  },
  {
    zh: "診所數位化",
    en: "Digital Workflow",
    desc: "從口掃、設計到製造的整合方案，加速診所的數位轉型。",
    image: "/images/valtech/industries/manufacturing.jpg",
  },
  {
    zh: "臨床教育",
    en: "Clinical Education",
    desc: "AMS Mastery 國際課程與在地工作坊，讓專業成為一種長期投資。",
    image: "/images/valtech/industries/travel.jpg",
  },
];

export default function SolutionsBlock() {
  return (
    <section id="solutions" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Solutions
          </p>
          <h2 className="display-lg mt-4 text-[clamp(36px,4vw,56px)] text-foreground">
            整合臨床價值，
            <br className="hidden sm:block" />
            打造無縫的牙科流程。
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground lg:text-lg">
            從矯正、植牙到感染控制，湧傑與全球頂尖品牌合作，為台灣牙醫師提供從產品、設備到教育的整合解決方案。
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(s => (
            <li key={s.en}>
              <Link
                href="#solutions"
                className="group block overflow-hidden rounded-sm bg-background"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.zh} ${s.en}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.en}
                  </p>
                  <h3 className="mt-2 text-xl font-light text-foreground">
                    {s.zh}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground transition-transform group-hover:translate-x-1">
                    了解更多 <span>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
