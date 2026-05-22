import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {

  const { language } = useLanguage();
const t = translations[language];

  const contacts = [
    {
      icon: <Mail size={20} />,
      title: t.contact.email,
      value: "rouasallami5@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      title: t.contact.phone,
      value: "+216 51 113 398",
    },
    {
      icon: <MapPin size={20} />,
      title: t.contact.location,
      value: "Tunisia",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[var(--background)] px-6  sm:pt-2 pb-24 text-[var(--foreground)]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
            {t.contact.badge}
          </div>

          <h2 className="text-4xl font-black sm:text-5xl">
            {t.contact.title1}{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
              {t.contact.title2}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[var(--muted-foreground)]">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-5">
            {contacts.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://github.com/rouaSallami"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/roua-sallami-962456373/"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right */}
          <form className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-transparent px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-transparent px-4 py-3 outline-none"
              />

              <textarea
                rows="5"
                placeholder={t.contact.messagePlaceholder}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-transparent px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 font-medium text-white"
              >
                {t.contact.send}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}