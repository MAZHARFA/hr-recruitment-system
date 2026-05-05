"use client";

import React from "react";
import { LOGOS } from "../lib/data";

export function LogoBar(): React.JSX.Element {
  return (
    <section className="w-full bg-[#020617] border-t border-b border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-600 mb-8">
          Trusted by teams at
        </p>
        <div className="flex items-center justify-center flex-wrap gap-10 lg:gap-16">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="font-extrabold text-lg tracking-tighter text-slate-700
                         hover:text-slate-400 transition-colors duration-200 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
