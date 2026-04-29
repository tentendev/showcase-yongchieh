import Image from "next/image";
import Link from "next/link";

export default function EducationBlock() {
  return (
    <section id="education" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Education Highlight
            </p>
            <h2 className="display-lg mt-4 text-[clamp(34px,4vw,56px)] text-foreground">
              從在地學習，
              <br />
              邁向全球精進。
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground lg:text-lg">
              AMS Mastery 由牙科專業人士共同打造的國際教育平台，整合臨床課程、工作坊與線上講座，讓每一位牙醫師持續成長。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="https://www.amsmastery.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-light text-primary-foreground transition hover:bg-primary/85"
              >
                造訪 AMS Mastery →
              </Link>
              <Link
                href="#education"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-light text-foreground transition hover:border-foreground"
              >
                查看課程行事曆
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  本年度課程
                </dt>
                <dd className="mt-2 text-2xl font-light text-foreground">
                  36 場
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  國際講師
                </dt>
                <dd className="mt-2 text-2xl font-light text-foreground">
                  18 位
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  學員滿意度
                </dt>
                <dd className="mt-2 text-2xl font-light text-foreground">
                  98%
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  累計受訓人次
                </dt>
                <dd className="mt-2 text-2xl font-light text-foreground">
                  4,200+
                </dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-foreground/5 lg:aspect-[5/6]">
              <Image
                src="/images/yongchieh/yc-man.jpg"
                alt="Yong Chieh education partner"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white lg:p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  Featured Course
                </p>
                <h3 className="mt-2 text-2xl font-light lg:text-3xl">
                  AMS Mastery 矯正進階班
                </h3>
                <p className="mt-2 max-w-md text-sm font-light text-white/80">
                  與全球矯正專家共同診斷、共同設計，建立可預期、可重現的臨床流程。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
