"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  User,
  Share2,
  ArrowUpRight,
  Heart,
  Send,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = ["About", "Projects", "Skills", "Contact"];

  const socials = [
    { icon: Globe, href: "#" },
    { icon: Mail, href: "#" },
    { icon: User, href: "#" },
    { icon: Share2, href: "#" },
  ];


  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--background)]">
      {/* Background Glow - bech yji fih el vibe mta3 el portfolio */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative z-10 grid gap-12 lg:grid-cols-12">
          
          {/* Brand Section: Large & Modern */}
          <div className="lg:col-span-5">
            <Link href="#home" className="flex items-center gap-3 group w-fit">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-700 text-white font-bold text-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-transform group-hover:scale-110">
                R
              </div>
              <span className="text-2xl font-bold tracking-[0.2em] text-[var(--foreground)]">
                ROUA
              </span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted-foreground)]">
              Crafting immersive digital experiences through clean code and 
              innovative design. Let's build the future together.
            </p>
            
            {/* Minimal Socials */}
            <div className="mt-8 flex gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[var(--nav-bg)] text-[var(--muted-foreground)] backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--foreground)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
              Navigation
            </h3>
            <ul className="mt-8 space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center text-sm font-medium text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[var(--primary)] transition-all group-hover:w-full" />
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="ml-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section: Glass Card Style */}
          <div className="lg:col-span-4">
            <div className="rounded-[32px] border border-white/10 bg-[var(--nav-bg-strong)] p-8 backdrop-blur-2xl shadow-2xl">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                <Send size={16} className="text-[var(--primary)]" />
                Let's Work Together
              </h3>
              <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                Have a project in mind? Reach out and let's make it happen.
              </p>
              <a
                href="mailto:contact@roua.dev"
                className="mt-6 block w-full rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 py-4 text-center text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-fuchsia-500/20"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            © {year} <span className="text-[var(--foreground)]">ROUA</span> • All rights reserved
          </p>

          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-[var(--nav-bg)] px-5 py-2 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
              Made with
            </span>
            <Heart size={14} className="animate-pulse text-fuchsia-500 fill-fuchsia-500" />
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
              in Tunisia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
