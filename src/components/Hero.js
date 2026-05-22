"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";

import { ArrowUpRight, Download, Sparkles } from "lucide-react";

export default function Hero() {

  const { language } = useLanguage();
const t = translations[language];

  const hero = {
    name: "I build modern & scalable",
    description:
      "Fullstack developer creating fast, responsive, and high-performance web applications with clean code and smooth user experiences.",
    image: "/roua.png",
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--background)] px-6 pb-20 pt-24 text-[var(--foreground)] lg:min-h-screen lg:pt-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-24 -z-0 h-[420px] w-[420px] rounded-full bg-violet-700/15 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)] backdrop-blur-xl">
            <Sparkles size={14} />
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 className="text-5xl font-black leading-tight tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-6xl">
            {t.hero.title1}
            <br />

            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted-foreground)]">
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex w-full sm:flex-row items-center gap-4  justify-center flex-col lg:justify-start"> 
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.35)] transition duration-300 hover:scale-[1.04]"
            >
              {t.hero.viewWork}

              <ArrowUpRight
                size={16}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] backdrop-blur-xl transition duration-300 hover:scale-[1.03]"
            >
              {t.hero.downloadCV}
              <Download size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4">
            {[
  ["3", t.hero.stat1],
  ["Next.js", t.hero.stat2],
  ["Laravel", t.hero.stat3],
].map(([num, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-bold text-[var(--foreground)]">
                  {num}
                </p>

                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        {/* RIGHT SIDE */}
<div className="relative flex items-center justify-center lg:justify-end">
  <div className="absolute h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-[90px] sm:h-[420px] sm:w-[420px]" />

  <img
    src={hero.image}
    alt="Hero"
    className="relative z-10 h-72 w-72 rounded-[2rem] border border-white/10 object-cover shadow-[0_0_70px_rgba(168,85,247,0.4)] transition duration-500 hover:scale-[1.02] sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]"
  />

  <div className="absolute -right-2 top-6 z-20 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3 text-xs text-[var(--muted-foreground)] backdrop-blur-xl lg:right-0">
    React • Next.js • Tailwind
  </div>
</div>
      </div>
    </section>
  );
}