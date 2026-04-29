import Image from "next/image";
import Link from "next/link";

const footerNav = [
  {
    title: "解決方案",
    links: [
      { label: "齒顎矯正", href: "#solutions" },
      { label: "牙周與植牙", href: "#solutions" },
      { label: "修復贗復", href: "#solutions" },
      { label: "感染控制", href: "#solutions" },
    ],
  },
  {
    title: "教育學院",
    links: [
      { label: "AMS Mastery", href: "https://www.amsmastery.com" },
      { label: "工作坊", href: "#education" },
      { label: "線上講座", href: "#education" },
    ],
  },
  {
    title: "公司",
    links: [
      { label: "關於湧傑", href: "#about" },
      { label: "新聞中心", href: "#stories" },
      { label: "加入我們", href: "#careers" },
      { label: "聯絡我們", href: "#contact" },
    ],
  },
  {
    title: "資訊",
    links: [
      { label: "隱私權政策", href: "#" },
      { label: "Cookie 聲明", href: "#" },
      { label: "法律聲明", href: "#" },
    ],
  },
];

const social = [
  {
    label: "LINE",
    href: "https://page.line.me/143ljplv?openQrModal=true",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.6 1.6 4.9 4 6.4-.1.5-.6 2-.7 2.4 0 .2.1.3.3.3.1 0 .2 0 .3-.1.3-.2 3.1-2 3.7-2.4.8.1 1.6.2 2.4.2 5.5 0 10-3.6 10-8s-4.5-8-10-8Zm-3.6 9.7H6.7c-.2 0-.3-.1-.3-.3V8.8c0-.2.1-.3.3-.3s.3.1.3.3v3.3h1.4c.2 0 .3.1.3.3s-.1.3-.3.3Zm1.7-.3c0 .2-.1.3-.3.3s-.3-.1-.3-.3V8.8c0-.2.1-.3.3-.3s.3.1.3.3v3.6Zm4.3 0c0 .2-.1.3-.3.3-.1 0-.2 0-.2-.1l-1.7-2.4v2.2c0 .2-.1.3-.3.3s-.3-.1-.3-.3V8.8c0-.2.1-.3.3-.3.1 0 .2 0 .2.1l1.7 2.4V8.8c0-.2.1-.3.3-.3s.3.1.3.3v3.6Zm3-1.8c.2 0 .3.1.3.3s-.1.3-.3.3h-1.4v.9h1.4c.2 0 .3.1.3.3s-.1.3-.3.3h-1.7c-.2 0-.3-.1-.3-.3V8.8c0-.2.1-.3.3-.3h1.7c.2 0 .3.1.3.3s-.1.3-.3.3h-1.4v.9h1.4Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.16 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.77 8.43-4.93 8.43-9.93Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yongchiehdental",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer id="about" className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-28">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Image
              src="/images/yongchieh/logo-white.svg"
              alt="Yong Chieh"
              width={220}
              height={42}
              className="h-9 w-auto"
            />
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-white/85">
              您在牙科卓越路上的長期夥伴。
            </p>
            <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/60">
              三十年專業經驗，與全球頂尖品牌一同陪伴台灣牙醫師專業成長。
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {social.map(s => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white"
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <nav
            aria-label="頁尾選單"
            className="col-span-12 grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-7"
          >
            {footerNav.map(col => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3 text-sm font-light text-white/85">
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 border-t border-white/15 pt-8 text-xs font-light text-white/55">
          <p className="col-span-12 lg:col-span-6">
            © {new Date().getFullYear()} Yong Chieh Enterprise Co., Ltd. All Rights Reserved. · 統一編號：84470624
          </p>
          <p className="col-span-12 lg:col-span-6 lg:text-right">
            105 台北市松山區敦化南路一段 2 號 5 樓 ·{" "}
            <a href="tel:+886-2-2778-8315" className="hover:text-white">
              +886 2 2778 8315
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
