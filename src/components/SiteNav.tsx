"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SubLink = { label: string; href: string };
type NavItem = { label: string; subLabel?: string; columns: { title?: string; links: SubLink[] }[] };

const NAV: NavItem[] = [
  {
    label: "解決方案",
    subLabel: "Solutions",
    columns: [
      {
        title: "臨床方案",
        links: [
          { label: "齒顎矯正 Orthodontics", href: "#solutions" },
          { label: "牙周與植牙手術 Perio & Implant", href: "#solutions" },
          { label: "修復贗復 Restorative", href: "#solutions" },
          { label: "感染控制 Infection Control", href: "#solutions" },
        ],
      },
      {
        title: "服務支援",
        links: [
          { label: "臨床顧問", href: "#solutions" },
          { label: "設備保養", href: "#solutions" },
          { label: "全台服務據點", href: "#about" },
        ],
      },
    ],
  },
  {
    label: "教育學院",
    subLabel: "Education",
    columns: [
      {
        title: "課程",
        links: [
          { label: "AMS Mastery 國際課程", href: "https://www.amsmastery.com" },
          { label: "工作坊 Workshops", href: "#education" },
          { label: "線上講座 Webinars", href: "#education" },
        ],
      },
      {
        title: "資源",
        links: [
          { label: "臨床案例庫", href: "#stories" },
          { label: "專家專訪", href: "#stories" },
        ],
      },
    ],
  },
  {
    label: "品牌故事",
    subLabel: "Stories",
    columns: [
      {
        title: "Knowledge & Insights",
        links: [
          { label: "數位矯正時代", href: "#stories" },
          { label: "根管再治療策略", href: "#stories" },
          { label: "診所感控流程", href: "#stories" },
        ],
      },
    ],
  },
  {
    label: "合作品牌",
    subLabel: "Partners",
    columns: [
      {
        title: "Our Proud Partners",
        links: [
          { label: "Damon Ultima", href: "#partners" },
          { label: "Spark Aligner", href: "#partners" },
          { label: "Hu-Friedy Group", href: "#partners" },
          { label: "Mectron", href: "#partners" },
          { label: "Kerr", href: "#partners" },
          { label: "EdgeEndo", href: "#partners" },
          { label: "Euronda", href: "#partners" },
        ],
      },
    ],
  },
  {
    label: "關於湧傑",
    subLabel: "About",
    columns: [
      {
        title: "公司",
        links: [
          { label: "我們的故事", href: "#about" },
          { label: "辦公室據點", href: "#about" },
          { label: "新聞中心", href: "#stories" },
        ],
      },
      {
        title: "加入我們",
        links: [
          { label: "Careers 加入湧傑", href: "#careers" },
          { label: "聯絡資訊", href: "#contact" },
        ],
      },
    ],
  },
];

export default function SiteNav() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpenIdx(null);
      closeTimer.current = null;
    }, 180);
  };

  const openMenu = (i: number) => {
    cancelClose();
    setOpenIdx(i);
  };

  const onLight = scrolled || openIdx !== null || mobileOpen;

  return (
    <header
      data-light={onLight ? "true" : "false"}
      className={`group fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onLight
          ? "bg-background/95 backdrop-blur border-b border-border/60 text-foreground"
          : "bg-transparent text-white"
      }`}
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-primary text-primary-foreground px-3 py-1 text-xs"
      >
        略過導覽列
      </a>

      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="湧傑首頁">
          <Image
            src={onLight ? "/images/yongchieh/logo-black.svg" : "/images/yongchieh/logo-white.svg"}
            alt="Yong Chieh"
            width={140}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主要選單">
          <ul className="flex items-center gap-1">
            {NAV.map((item, i) => (
              <li
                key={item.label}
                onMouseEnter={() => openMenu(i)}
                onFocus={() => openMenu(i)}
                className="relative"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-[15px] font-light tracking-wide text-current opacity-90 transition hover:opacity-100"
                  aria-expanded={openIdx === i}
                  aria-haspopup="true"
                  onClick={() => (openIdx === i ? setOpenIdx(null) : openMenu(i))}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="rounded-full p-2 text-current opacity-80 transition hover:bg-current/5 hover:opacity-100"
            aria-label="搜尋"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className="hidden items-center gap-1 rounded-full px-3 py-1.5 text-xs font-light tracking-wide text-current opacity-80 hover:opacity-100 xl:flex"
            aria-label="切換地區"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            台灣 / 繁中
          </button>
          <Link
            href="#contact"
            className={`ml-1 rounded-full px-5 py-2 text-sm font-light transition ${
              onLight
                ? "bg-primary text-primary-foreground hover:bg-primary/85"
                : "border border-white/60 text-white hover:bg-white hover:text-black"
            }`}
          >
            聯絡我們
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="lg:hidden rounded-full p-2"
          aria-label="開啟選單"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {mobileOpen ? (
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="1.6" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mega menu panel */}
      <div
        className={`absolute inset-x-0 top-full origin-top overflow-hidden border-b border-border/60 bg-background transition-[opacity,transform] duration-300 ${
          openIdx !== null
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {openIdx !== null && (
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-10 py-12">
            <div className="col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {NAV[openIdx].subLabel}
              </p>
              <h3 className="mt-3 font-light text-[28px] leading-tight">
                {NAV[openIdx].label}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                以三十年的專業積累，為牙醫師打造完整的解決方案、教育與服務體驗。
              </p>
            </div>
            <div className="col-span-9 grid grid-cols-12 gap-10">
              {NAV[openIdx].columns.map((col, ci) => (
                <div key={ci} className="col-span-12 sm:col-span-6 md:col-span-4">
                  {col.title && (
                    <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {col.title}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {col.links.map(l => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="group inline-flex items-center gap-2 text-[17px] font-light text-foreground transition"
                        >
                          {l.label}
                          <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-background transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-[80vh] border-t border-border/60" : "max-h-0"
        }`}
      >
        <ul className="divide-y divide-border/60">
          {NAV.map(item => (
            <li key={item.label}>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-light">
                  {item.label}
                  <span className="text-xs text-muted-foreground">{item.subLabel}</span>
                </summary>
                <ul className="space-y-2 bg-muted/40 px-8 pb-4">
                  {item.columns.flatMap(c => c.links).map(l => (
                    <li key={l.label}>
                      <Link href={l.href} className="block py-1.5 text-sm text-foreground/80">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
          <li className="p-6">
            <Link
              href="#contact"
              className="block rounded-full bg-primary px-5 py-3 text-center text-sm text-primary-foreground"
            >
              聯絡我們
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
