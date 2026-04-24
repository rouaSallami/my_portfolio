"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaExternalLinkAlt,
  FaHeart,
  FaPaperPlane,
  FaCode
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  // Navigation simple
  const links = ["About", "Projects", "Experience", "Contact"];

  // Socials
  const socials = [
    { icon: FaGithub, href: "https://github.com/votre-username", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/in/votre-profile", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--background)]">
      {/* Ligne de dégradé top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative z-10 grid gap-12 lg:grid-cols-12">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="#home" className="flex items-center gap-3 group w-fit">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-700 text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-110">
                R
              </div>
              <span className="text-2xl font-bold tracking-[0.2em] text-[var(--foreground)]">
                ROUA
              </span>
            </Link>

            <p className="mt-6 max-w-md text-base text-[var(--muted-foreground)] leading-relaxed">
              Full-stack developer passionnée par la création d'interfaces fluides 
              et de solutions robustes. On transforme vos idées en code.
            </p>

            {/* Social Icons centered on mobile */}
            <div className="mt-8 flex gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[var(--nav-bg)] text-[var(--muted-foreground)] transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Menu - Centered on Mobile / Start on MD */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start lg:ml-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
              Menu
            </h3>
            <ul className="mt-8 space-y-4 flex flex-col items-center md:items-start">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link}
                    <FaExternalLinkAlt size={10} className="ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card - Centered on Mobile */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-[var(--nav-bg-strong)] p-8 shadow-2xl flex flex-col items-center text-center md:items-start md:text-left relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-white/5 transition-transform group-hover:scale-110 group-hover:rotate-12">
                 <FaCode size={80} />
              </div>
              
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase text-[var(--foreground)] relative z-10">
                <FaPaperPlane className="text-[var(--primary)]" />
                Start a conversation
              </h3>

              <p className="mt-4 text-sm text-[var(--muted-foreground)] relative z-10">
                Disponible pour des projets en freelance ou des opportunités full-time.
              </p>

              <a
                href="mailto:contact@roua.dev"
                className="mt-6 block w-full rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 py-4 text-center text-sm font-bold text-white hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all active:scale-95 relative z-10"
              >
                Envoyer un mail
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/5 pt-10 md:flex-row md:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            © {year} ROUA • Made in Tunisia
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest">
              Built with
            </span>
            <FaHeart className="text-fuchsia-500 animate-pulse" />
            <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest">
              in Tunisia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}