"use client";

import React from "react";
import { TESTIMONIALS } from "../lib/data";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps): React.JSX.Element {
  const { quote, author, role, company, initials, avatarColor } = testimonial;

  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col
                    hover:border-indigo-500/25 hover:bg-indigo-600/4 transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d97a0e">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed italic flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{author}</p>
          <p className="text-slate-500 text-xs">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials(): React.JSX.Element {
  return (
    <section id="testimonials" className="w-full bg-[#04080f] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">Testimonials</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-16 max-w-xl">
          Loved by HR teams at every scale
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
