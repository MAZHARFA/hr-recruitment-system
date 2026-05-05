"use client";

import React from "react";
import type { CTAProps } from "../types";

export function CTA({ onGetStarted }: CTAProps): React.JSX.Element {
  return (
    <section
      id="cta"
      className="relative w-full bg-indigo-600 py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-white/7 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[100px] w-[300px] h-[300px] rounded-full bg-white/7 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-6">
          Your best hire is<br />one AI away
        </h2>
        <p className="text-indigo-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join 2,400+ companies using HR_RECRUITER to build exceptional teams faster.
          No setup fee, no contract, cancel anytime.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onGetStarted}
            className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl
                       hover:bg-indigo-50 transition-all duration-200 active:scale-95 shadow-xl"
          >
            Start Free — No Card Needed →
          </button>
          <button
            type="button"
            className="bg-white/10 text-white border border-white/25 font-bold px-8 py-4 rounded-xl
                       hover:bg-white/20 transition-all duration-200 active:scale-95"
          >
            Book a Demo
          </button>
        </div>

        <p className="text-indigo-300/70 text-xs mt-6">
          Free plan includes 100 AI screenings/month · No credit card required
        </p>
      </div>
    </section>
  );
}
