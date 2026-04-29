import Image from "next/image";
import Link from "next/link";

export default function CareersBlock() {
  return (
    <section id="careers" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-foreground/5">
              <Image
                src="/images/yongchieh/yc-woman.jpg"
                alt="Join Yong Chieh"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-end lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Careers
            </p>
            <h2 className="display-lg mt-4 text-[clamp(34px,4vw,56px)] text-foreground">
              加入湧傑，
              <br />
              一起改變台灣牙科。
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground lg:text-lg">
              我們相信每一位夥伴都能在湧傑找到屬於自己的舞台。從業務、行銷到臨床顧問與教育團隊，我們持續尋找對牙科專業熱情的你。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-light text-primary-foreground transition hover:bg-primary/85"
              >
                查看職缺 →
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-light text-foreground transition hover:border-foreground"
              >
                認識我們的文化
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
