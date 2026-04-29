#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PUB = join(ROOT, 'public');

const assets = [
  // ── Yong Chieh brand ──
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69b7ada872b483abddc715b9_Yong%20Chieh%20logo_en_black.svg', out: 'images/yongchieh/logo-black.svg' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69b7ad7d843154c20c649ba8_Yong%20Chieh%20logo_en_white.svg', out: 'images/yongchieh/logo-white.svg' },
  // Hero video
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69a7bf44deefecbd0c2dd0ae_hero%20pro-transcode.mp4', out: 'videos/hero.mp4' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69a7bf44deefecbd0c2dd0ae_hero%20pro-poster-00001.jpg', out: 'images/yongchieh/hero-poster.jpg' },
  // Story photos
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69a7e2eb24dfcd4d914c6de7_yc%20man-p-1600.jpg', out: 'images/yongchieh/yc-man.jpg' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69a7f3a82e04af8445d40509_yc%20woman%20crop.jpg', out: 'images/yongchieh/yc-woman.jpg' },
  // Partner logos
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69ccb74dfef86912b43e5948_Damon%20UltimaSystem.webp', out: 'images/yongchieh/partners/damon.webp' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69cc9be3f4d29fadf9cdda62_spark.png', out: 'images/yongchieh/partners/spark.png' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69cc9be2a9a10013884787b3_hufridaygroup.png', out: 'images/yongchieh/partners/hufriday.png' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69cc9be27790a183553e870d_mectron.png', out: 'images/yongchieh/partners/mectron.png' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69cc9be24afd2210148b66fe_kerr.png', out: 'images/yongchieh/partners/kerr.png' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69cc9be28521d6490c49f96c_edgeendo.png', out: 'images/yongchieh/partners/edgeendo.png' },
  { url: 'https://cdn.prod.website-files.com/69a6b05ebfb7a6c3c9b0c2f3/69cc9be250ef3dede7d942a4_euronda.png', out: 'images/yongchieh/partners/euronda.png' },

  // ── Valtech style assets (hero slider) ──
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/hero-slider-block/hero-ai-as-the-differentiator-valtech-one.png?width=1920&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/hero/hero-1.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/hero-slider-block/hero-case-study-lexus-ai-concierge.png?width=1920&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/hero/hero-2.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/hero-slider-block/hero-thought-leadership-voei-mobility.png?width=1920&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/hero/hero-3.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/hero-slider-block/hero-awards-fast-company.png?width=1920&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/hero/hero-4.jpg' },

  // Case study cards
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/case-visuals/retail-eton-index-shirt.png?width=1600&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/cases/eton.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/case-visuals/finance-discover.png?width=1600&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/cases/discover.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/case-visuals/mobility-lexus-lbx-ai-concierge.png?width=1600&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/cases/lexus.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/case-visuals/travel-mandarin-oriental-mobile.png?width=1600&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/cases/mandarin.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/case-visuals/retail-mars-mms-custom-mobile.png?width=1600&height=800&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/cases/mars.jpg' },

  // Industries (8)
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/mobility-audi-themes-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/mobility.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/luxury-showroom-experience-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/luxury.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/retail-levis-tailor-shop-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/retail.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/cpg-danone-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/cpg.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/financial-services-visa-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/finance.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/health-industry_gsk-virtual-clinic.jpg?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/health.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/manufacturing-connected-warehouse-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/manufacturing.jpg' },
  { url: 'https://www.valtech.com/globalassets/00-global/02-images/00-homepage/_new_homepage/industries/travel-easyjet-airport-sm.png?width=1320&height=1320&rmode=min&rsampler=bicubic&compand=true&format=jpg', out: 'images/valtech/industries/travel.jpg' },
];

async function download(url, outPath) {
  const full = join(PUB, outPath);
  if (existsSync(full)) {
    return { url, outPath, status: 'cached' };
  }
  await mkdir(dirname(full), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; AssetDownloader/1.0)' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(full, buf);
    return { url, outPath, status: 'ok', bytes: buf.length };
  } catch (err) {
    return { url, outPath, status: 'fail', error: err.message };
  }
}

const queue = [...assets];
const results = [];
const concurrency = 6;
async function worker() {
  while (queue.length) {
    const a = queue.shift();
    if (!a) break;
    const r = await download(a.url, a.out);
    results.push(r);
    console.log(`${r.status.padEnd(6)} ${r.outPath}${r.error ? ' — ' + r.error : ''}`);
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

const ok = results.filter(r => r.status === 'ok' || r.status === 'cached').length;
const fail = results.filter(r => r.status === 'fail');
console.log(`\nDone. ${ok}/${results.length} ok. ${fail.length} failed.`);
if (fail.length) console.log(fail);
