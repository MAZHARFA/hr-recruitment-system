"use client";

import React from "react";
import { ZapIcon } from "lucide-react";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features",     href: "#features" },
      { label: "Integrations", href: "#"         },
      { label: "Pricing",      href: "#pricing"  },
      { label: "Changelog",    href: "#"         },
      { label: "Roadmap",      href: "#"         },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "#" },
      { label: "Blog",     href: "#" },
      { label: "Careers",  href: "#" },
      { label: "Press",    href: "#" },
      { label: "Contact",  href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Help Center",   href: "#" },
      { label: "Status",        href: "#" },
      { label: "Security",      href: "#" },
    ],
  },
];

function TwitterIcon(): React.JSX.Element {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

function LinkedInIcon(): React.JSX.Element {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon(): React.JSX.Element {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020617] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center
                              shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <ZapIcon size={16} fill="white" className="text-white" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tighter">HR_RECRUITER</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[260px] mb-6">
              The AI-powered recruitment platform that finds, screens, and hires exceptional people —
              faster than any human team.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {(
                [
                  { Icon: TwitterIcon,  label: "Twitter"  },
                  { Icon: LinkedInIcon, label: "LinkedIn" },
                  { Icon: GitHubIcon,   label: "GitHub"   },
                ] as const
              ).map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center
                             text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-500 text-sm hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {currentYear} HR_RECRUITER, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-600 text-xs hover:text-slate-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
