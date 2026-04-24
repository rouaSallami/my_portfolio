"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero`)
      .then((res) => res.json())
      .then((data) => setHero(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setHero({
          name: "I build modern & scalable",
          description:
            "Fullstack developer creating fast, responsive, and high-performance web applications with clean code and smooth user experiences.",
          image: null,
        });
      });
  }, []);

  if (hero === null) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        Loading...
      </section>
    );
  }

  const imageUrl = hero.image
    ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${hero.image}`
    : null;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--background)] px-6 pt-32 text-[var(--foreground)] md:pt-0"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-24 -z-0 h-[420px] w-[420px] rounded-full bg-violet-700/15 blur-[130px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)] backdrop-blur-xl">
            <Sparkles size={14} />
            Fullstack Developer
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[var(--foreground)] md:text-7xl">
            {hero.name || "I build modern & scalable"}
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              web applications.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.35)] transition duration-300 hover:scale-[1.04]"
            >
              View My Work
              <ArrowUpRight
                size={16}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] backdrop-blur-xl transition duration-300 hover:scale-[1.03]"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["10+", "Projects"],
              ["3+", "Years"],
              ["100%", "Passion"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-4 backdrop-blur-xl"
              >
                <p className="text-2xl font-bold text-[var(--foreground)]">
                  {num}
                </p>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          <div className="absolute bottom-8 h-40 w-[420px] rounded-[100%] border-t border-fuchsia-400/60 bg-fuchsia-600/10 shadow-[0_-20px_90px_rgba(217,70,239,0.35)]" />

          <div className="absolute h-72 w-72 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] blur-sm md:h-[420px] md:w-[420px]" />

          <div className="relative flex h-80 w-80 items-center justify-center md:h-[460px] md:w-[460px]">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={hero.name}
                className="relative z-10 h-72 w-72 rounded-[2rem] object-cover shadow-[0_0_80px_rgba(168,85,247,0.45)] md:h-96 md:w-96"
              />
            ) : (
              <div className="relative z-10 text-[240px] font-black leading-none text-transparent drop-shadow-[0_0_45px_rgba(168,85,247,0.75)] md:text-[360px]">
                <span className="bg-gradient-to-br from-fuchsia-400 via-purple-500 to-violet-900 bg-clip-text">
                  R
                </span>
              </div>
            )}
          </div>

          <div className="absolute right-6 top-16 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3 text-xs text-[var(--muted-foreground)] backdrop-blur-xl">
            React • Next.js • Laravel
          </div>
        </div>
      </div>
    </section>
  );
}