"use client";

import React from "react";
import { PRICING_PLANS } from "../lib/data";
import type { PricingPlan } from "../types";

interface PricingCardProps {
  plan: PricingPlan;
}

function CheckIcon(): React.JSX.Element {
  return (
    <div className="w-4 h-4 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
      <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
        <path d="M1 4l3 3 5-6" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PricingCard({ plan }: PricingCardProps): React.JSX.Element {
  const { name, price, period, description, features, featured, cta } = plan;

  if (featured) {
    return (
      <div className="relative bg-indigo-600 rounded-3xl p-8 border border-indigo-500/50
                      shadow-[0_0_60px_rgba(99,102,241,0.25)] scale-105 z-10">
        {/* Popular badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-indigo-700
                        text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full">
          Most Popular
        </div>

        <p className="text-indigo-200 font-bold tracking-widest text-xs uppercase mb-5">{name}</p>
        <div className="mb-1">
          <span className="text-indigo-200 text-2xl font-bold">$</span>
          <span className="text-white font-extrabold text-5xl tracking-tighter">{price.replace("$", "")}</span>
        </div>
        <p className="text-indigo-300 text-xs mb-3">{period}</p>
        <p className="text-indigo-200 text-sm leading-relaxed mb-7">{description}</p>

        <ul className="flex flex-col gap-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-indigo-100 text-sm">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {f}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="w-full bg-white text-indigo-700 font-bold py-3.5 rounded-xl
                     hover:bg-indigo-50 transition-all duration-200 active:scale-98"
        >
          {cta} →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/3 border border-white/8 rounded-3xl p-8
                    hover:border-white/15 transition-all duration-300">
      <p className="text-slate-400 font-bold tracking-widest text-xs uppercase mb-5">{name}</p>
      <div className="mb-1">
        {price !== "Custom" && (
          <span className="text-slate-400 text-2xl font-bold">$</span>
        )}
        <span className="text-white font-extrabold text-5xl tracking-tighter">
          {price.replace("$", "")}
        </span>
      </div>
      <p className="text-slate-600 text-xs mb-3">{period}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-7">{description}</p>

      <ul className="flex flex-col gap-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="w-full bg-white/6 text-white border border-white/10 font-bold py-3.5 rounded-xl
                   hover:bg-white/10 transition-all duration-200 active:scale-98"
      >
        {cta} →
      </button>
    </div>
  );
}

export function Pricing(): React.JSX.Element {
  return (
    <section id="pricing" className="w-full bg-[#020617] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">Pricing</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4 max-w-lg">
          Simple, transparent pricing
        </h2>
        <p className="text-slate-400 text-base max-w-md leading-relaxed mb-16">
          Start free, scale as you hire. No hidden fees, no per-seat charges for viewers.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
