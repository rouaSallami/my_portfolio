import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";

import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {

  const { language } = useLanguage();
const t = translations[language];

  const projects = [
  {
    title: t.projectCards.coffeeTitle,
    description: t.projectCards.coffeeDesc,
    tech: ["Next.js", "Tailwind CSS", "Laravel", "MySQL"],
    image: "/projects/coffee.png",
    github: "#",
    live: "#",
  },

  {
    title: t.projectCards.ophtaTitle,
    description: t.projectCards.ophtaDesc,
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/projects/ophta.png",
    github: "#",
    live: "#",
  },

  {
    title: t.projectCards.portfolioTitle,
    description: t.projectCards.portfolioDesc,
    tech: ["Next.js", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    github: "#",
    live: "#",
  },
];

  return (
    <section
      id="projects"
      className="relative bg-[var(--background)] px-6 pt-2 pb-20 text-[var(--foreground)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)] backdrop-blur-xl">
            {t.projects.badge}
          </div>

          <h2 className="text-4xl font-black sm:text-5xl">
            {t.projects.title1}{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              {t.projects.title2}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[var(--muted-foreground)]">
            {t.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                  >
                    {t.projects.liveDemo}
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] px-4 py-2 text-sm font-medium transition hover:bg-white/5"
                  >
                    <FaGithub size={16} />
                    {t.projects.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}