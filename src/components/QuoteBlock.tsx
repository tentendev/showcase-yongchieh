export default function QuoteBlock() {
  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Confidence to Achieve More
        </p>
        <h2 className="display-lg mt-8 text-[clamp(34px,4.5vw,68px)] text-foreground">
          我們不只是牙科產品代理，
          <br className="hidden sm:block" />
          而是與牙醫師共創價值的長期夥伴。
        </h2>
        <p className="mt-8 max-w-3xl text-base font-light leading-relaxed text-muted-foreground lg:text-lg">
          以信任、教育與創新為核心，湧傑陪伴牙醫師走過超過三十年的專業旅程。從臨床方案、教育學院到全台服務據點，我們把每一次合作都視為長期共創。
        </p>
      </div>
    </section>
  );
}
