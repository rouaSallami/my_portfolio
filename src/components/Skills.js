import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";

import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

export default function Skills() {

  const { language } = useLanguage();
const t = translations[language];


  const skillGroups = [
  {
    icon: <Code2 size={24} />,
    title: t.skills.frontend,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    icon: <Server size={24} />,
    title: t.skills.backend,
    skills: ["Laravel", "Express.js"],
  },

  {
    icon: <Database size={24} />,
    title: t.skills.database,
    skills: ["MySQL", "MongoDB"],
  },

  {
    icon: <Wrench size={24} />,
    title: t.skills.tools,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "phpMyAdmin",
      "Figma",
    ],
  },

  {
    icon: <Code2 size={24} />,
    title: t.skills.design,
    skills: [
      "Responsive Design",
      "UI Design",
      "User Experience",
    ],
  },

  {
    icon: <Code2 size={24} />,
    title: t.skills.ai,
    skills: [
      "ChatGPT",
      "AI Productivity",
      "Prompt Engineering",
    ],
  },
];

  return (
    <section
      id="skills"
      className="relative bg-[var(--background)] px-6 pt-2 pb-24 text-[var(--foreground)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)] backdrop-blur-xl">
            {t.skills.badge}
          </div>

          <h2 className="text-4xl font-black sm:text-5xl">
            {t.skills.title1}{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              {t.skills.title2}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[var(--muted-foreground)]">
            {t.skills.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
                {group.icon}
              </div>

              <h3 className="mb-5 text-xl font-bold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}