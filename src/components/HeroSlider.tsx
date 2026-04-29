"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta: { label: string; href: string };
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Yong Chieh × AMS Mastery",
    title: (
      <>
        以信任、教育與創新
        <br />
        成就更多牙科可能
      </>
    ),
    body: "三十年專業代理經驗，國際品牌、臨床教育與在地服務的完整整合，陪伴牙醫師走得更穩、看得更遠。",
    cta: { label: "了解湧傑的解決方案", href: "#solutions" },
    image: "/images/valtech/hero/hero-1.jpg",
    alt: "Yong Chieh hero visual 1",
  },
  {
    eyebrow: "案例分享",
    title: (
      <>
        Damon Ultima 數位矯正
        <br />
        從療程到客製的轉型
      </>
    ),
    body: "結合 Spark 隱形矯正與數位流程，讓矯正師專注於診斷與美感，把療程交給可預期的科技。",
    cta: { label: "閱讀完整案例", href: "#stories" },
    image: "/images/valtech/hero/hero-2.jpg",
    alt: "Yong Chieh hero visual 2",
  },
  {
    eyebrow: "白皮書",
    title: (
      <>
        報告：
        <br />
        牙科診所的下一個十年
      </>
    ),
    body: "從感染控制到 AI 影像分析，整理影響台灣牙醫產業的關鍵趨勢與行動建議。",
    cta: { label: "下載報告", href: "#stories" },
    image: "/images/valtech/hero/hero-3.jpg",
    alt: "Yong Chieh hero visual 3",
  },
  {
    eyebrow: "獎項與認證",
    title: (
      <>
        最值得信賴的
        <br />
        牙科夥伴品牌
      </>
    ),
    body: "連續多年獲得醫療通路專業評選肯定，全台逾數千家診所長期合作，與您一同成長。",
    cta: { label: "認識湧傑", href: "#about" },
    image: "/images/valtech/hero/hero-4.jpg",
    alt: "Yong Chieh hero visual 4",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-black text-white">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-6 pb-24 pt-32 lg:px-10 lg:pb-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {slides[index].eyebrow}
          </p>
          <h1 className="display-xl mt-6 text-[clamp(40px,6vw,84px)] text-white">
            {slides[index].title}
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 lg:text-lg">
            {slides[index].body}
          </p>
          <Link
            href={slides[index].cta.href}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3 text-sm font-light text-white transition hover:bg-white hover:text-black"
          >
            {slides[index].cta.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-10 right-6 z-10 flex items-center gap-3 lg:right-10">
        <div className="hidden text-xs font-light uppercase tracking-[0.2em] text-white/70 lg:flex">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`切換至第 ${i + 1} 張`}
              onClick={() => setIndex(i)}
              className={`h-[2px] w-10 transition-all ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
