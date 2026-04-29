"use client";

import { useState } from "react";

export default function ContactBlock() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 gap-10 px-6 lg:px-10">
        <div className="col-span-12 lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60">
            Let’s Start the Conversation
          </p>
          <h2 className="display-lg mt-4 text-[clamp(34px,4vw,56px)] text-background">
            與湧傑一起，
            <br />
            成就更多可能。
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-background/80">
            無論是合作洽詢、課程報名或售後服務，留下您的需求，湧傑團隊將於 24
            小時內與您聯絡。
          </p>

          <ul className="mt-12 space-y-5 text-sm text-background/80">
            <li>
              <p className="text-xs uppercase tracking-[0.18em] text-background/50">
                台北總公司
              </p>
              <p className="mt-1">105 台北市松山區敦化南路一段 2 號 5 樓</p>
            </li>
            <li className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-background/50">
                  北區
                </p>
                <a
                  className="mt-1 block hover:text-background"
                  href="tel:+886-2-2778-8315"
                >
                  +886 2 2778 8315
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-background/50">
                  中區
                </p>
                <a
                  className="mt-1 block hover:text-background"
                  href="tel:+886-4-2305-8915"
                >
                  +886 4 2305 8915
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-background/50">
                  南區
                </p>
                <a
                  className="mt-1 block hover:text-background"
                  href="tel:+886-7-226-0030"
                >
                  +886 7 226 0030
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="col-span-12 lg:col-span-7"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <Field id="name" label="姓名" placeholder="王小明" required />
            <Field id="email" label="Email" type="email" placeholder="you@clinic.com" required />
            <Field id="clinic" label="診所 / 公司" placeholder="湧傑牙醫" />
            <Field id="city" label="所在城市" placeholder="台北市" />
            <Field
              id="topic"
              label="諮詢主題"
              placeholder="例：Damon Ultima 諮詢"
              fullWidth
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-background/60">
              留言
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="請簡述您的需求"
              className="mt-2 w-full resize-none border-b border-background/30 bg-transparent py-3 text-sm font-light text-background placeholder:text-background/40 focus:border-background focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-background px-7 py-3 text-sm font-light text-foreground transition hover:bg-background/85 disabled:opacity-70"
          >
            {submitted ? "已送出，感謝您！" : "送出訊息 →"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
  fullWidth,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "col-span-2" : "col-span-2 sm:col-span-1"}>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-background/60">
        {label}
        {required && <span className="ml-1 text-background/40">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full border-b border-background/30 bg-transparent py-3 text-sm font-light text-background placeholder:text-background/40 focus:border-background focus:outline-none"
      />
    </div>
  );
}
