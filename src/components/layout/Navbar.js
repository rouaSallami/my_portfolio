"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";

import { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  SunMedium,
  MoonStar,
  House,
  User,
  Folder,
  Code2,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: House },
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: Folder },
  { name: "Skills", id: "skills", icon: Code2 },
  { name: "Contact", id: "contact", icon: Mail },
];



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const themeIcon = useMemo(() => {
    if (!mounted) return <SunMedium size={18} />;
    return theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />;
  }, [mounted, theme]);


  const { language, setLanguage } = useLanguage();

const t = translations[language];

const menuRef = useRef(null);

useEffect(() => {
  function handleClickOutside(event) {
    if (
      isOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-7xl">
        <nav
          className={`rounded-3xl border px-4 py-3 transition-all duration-500 ${
            scrolled
              ? "border-white/15 bg-[var(--nav-bg-strong)] shadow-xl backdrop-blur-2xl"
              : "border-white/10 bg-[var(--nav-bg)] backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Logo - Hidden on Mobile Menu Open to save space if needed */}
            <Link href="#home" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-700 text-xs font-bold text-white shadow-lg">
                R
              </div>
              <span className="text-sm font-semibold tracking-widest text-[var(--foreground)]">
                ROUA
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group relative text-sm font-medium transition ${
                      activeSection === item.id
                        ? "text-fuchsia-600"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t.nav[item.id]}
                    <span
                      className={`absolute left-1/2 -bottom-2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-all duration-300 ${
                        activeSection === item.id ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">

              <button
  onClick={() =>
    setLanguage(language === "en" ? "fr" : "en")
  }
  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10"
>
  {language === "en" ? "FR" : "EN"}
</button>

              <button onClick={toggleTheme} className="p-2.5 rounded-full border border-white/10 bg-white/5 text-[var(--foreground)] hover:bg-white/10 transition">
                {themeIcon}
              </button>
              <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-2 text-sm font-medium text-white shadow-md hover:scale-105 transition">
                {t.nav.talk}
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--foreground)] md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div
          ref={menuRef}
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-2 pb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                      isActive 
                        ? "bg-white/10 text-fuchsia-400 border border-white/10" 
                        : "text-[var(--muted-foreground)] hover:bg-white/5"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">
  {t.nav[item.id]}
</span>
                  </a>
                );
              })}
              
              <div className="h-[1px] bg-white/10 my-2 mx-2" />
              
              <div className="grid grid-cols-3 gap-3 px-2">
  <button
    onClick={() => setLanguage(language === "en" ? "fr" : "en")}
    className="flex h-12 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] text-xs font-bold uppercase tracking-wider text-[var(--foreground)] backdrop-blur-xl"
  >
    {language === "en" ? "FR" : "EN"}
  </button>

  <button
    onClick={toggleTheme}
    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--foreground)] backdrop-blur-xl"
  >
    {themeIcon}
    <span className="text-xs uppercase tracking-wider">{t.nav.mode}</span>
  </button>

  <a
    href="#contact"
    onClick={() => setIsOpen(false)}
    className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-sm font-bold text-white"
  >
    {t.nav.contactMe}
  </a>
</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}