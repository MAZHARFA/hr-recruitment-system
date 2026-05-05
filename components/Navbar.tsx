"use client";

import { ZapIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center p-6 pointer-events-none">
      <div
        className={`
          flex items-center justify-between w-full max-w-6xl px-6 py-3
          transition-all duration-500 pointer-events-auto
          ${
            isScrolled
              ? "bg-[#020617]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl scale-95"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-white text-xl tracking-tighter">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <ZapIcon size={18} fill="white" />
          </div>
          HR_RECRUITER
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {(
            [
              { href: "#features", label: "Features" },
              { href: "#how", label: "Process" },
              { href: "#testimonials", label: "Testimonila" },
            ] as const
          ).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => router.push("/yz/login")}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold
                     hover:bg-indigo-500 hover:text-white transition-all duration-200
                     active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
