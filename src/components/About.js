import { Code2, Laptop, Rocket } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 size={22} />,
      title: "Clean Code",
      text: "Writing organized, reusable, and maintainable code.",
    },
    {
      icon: <Laptop size={22} />,
      title: "Responsive Design",
      text: "Building websites that work perfectly on all devices.",
    },
    {
      icon: <Rocket size={22} />,
      title: "Performance",
      text: "Creating fast and optimized web applications.",
    },
  ];

  return (
    <section
  id="about"
  className="relative bg-[var(--background)] px-6 pt-4 sm:pt-20 pb-20 sm:pb-36 text-[var(--foreground)]"
>
  <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <div className="mb-6 flex justify-center lg:justify-start">
  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)] backdrop-blur-xl">
    About Me
  </div>
</div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            I&apos;m a passionate{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              web developer
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted-foreground)]">
            I create modern, responsive, and user-friendly websites using clean
            code and creative design. I enjoy transforming ideas into real web
            applications that are fast, functional, and visually attractive.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted-foreground)]">
            My focus is building smooth digital experiences with technologies
            like React, Next.js, Tailwind CSS, TypeScript, and modern frontend
            tools.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-4 self-start">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[var(--foreground)]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}