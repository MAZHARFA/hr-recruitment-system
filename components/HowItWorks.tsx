"use client";

import React, { useEffect, useState } from "react";
import { STEPS } from "../lib/data";
import type { HowItWorksProps } from "../types";

// ─── Step visual panels ──────────────────────────────────────────────────────

function VisStep0(): React.JSX.Element {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-5">Step 1 — Job Builder</p>
      <div className="bg-white/4 border border-white/8 rounded-xl p-4 mb-3">
        <p className="text-[10px] text-slate-600 mb-2">Job Title</p>
        <p className="text-white font-bold text-base">Senior Software Engineer</p>
      </div>
      <div className="bg-white/4 border border-white/8 rounded-xl p-4 mb-3">
        <p className="text-[10px] text-slate-600 mb-3">AI-Generated Requirements</p>
        <div className="flex flex-wrap gap-2">
          {["React / Next.js", "Node.js", "TypeScript", "5+ years", "System Design", "AWS"].map((tag) => (
            <span key={tag}
              className="bg-indigo-600/25 text-indigo-300 text-[11px] px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-3">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
        <p className="text-slate-400 text-xs">Ready to publish to <strong className="text-white">80+ job boards</strong></p>
      </div>
    </div>
  );
}

function VisStep1(): React.JSX.Element {
  const candidates = [
    { initials: "SR", name: "Sarah Rodriguez", score: 97, pct: "97%",  color: "#6366f1", barColor: "#6366f1" },
    { initials: "LK", name: "Liam Kowalski",   score: 93, pct: "93%",  color: "#34d399", barColor: "#0d9e75" },
    { initials: "AP", name: "Aisha Patel",      score: 91, pct: "91%",  color: "#fbbf24", barColor: "#d97a0e" },
  ] as const;

  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-5">Step 2 — AI Screening</p>
      <div className="flex items-center justify-between bg-white/4 border border-white/8 rounded-xl p-4 mb-4">
        <div>
          <p className="text-white font-extrabold text-2xl">1,482</p>
          <p className="text-slate-500 text-xs">applications received</p>
        </div>
        <span className="bg-indigo-600/30 text-indigo-300 text-xs px-3 py-1.5 rounded-full font-semibold">
          Screening…
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {candidates.map(({ initials, name, pct, color, barColor }) => (
          <div key={initials}
            className="flex items-center gap-3 bg-white/3 border border-white/6 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
              style={{ background: barColor }}>{initials}</div>
            <div className="flex-1">
              <p className="text-slate-300 text-xs mb-1.5">{name}</p>
              <div className="h-1 bg-white/6 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: pct, background: barColor }} />
              </div>
            </div>
            <span className="text-xs font-bold" style={{ color }}>{pct}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 text-[11px] mt-4">
        AI screened 1,248 of 1,482 · ~3 min remaining
      </p>
    </div>
  );
}

function VisStep2(): React.JSX.Element {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-5">Step 3 — Interview Scheduled</p>
      <div className="bg-white/4 border border-white/8 rounded-xl p-4 mb-4">
        <p className="text-slate-500 text-xs mb-3">Email sent to Sarah Rodriguez</p>
        <p className="text-slate-300 text-xs leading-relaxed bg-white/3 rounded-lg p-3">
          Hi Sarah, we loved your profile! We'd like to invite you for a technical interview.{" "}
          <span className="text-indigo-400">Please pick a time that works →</span>
        </p>
      </div>
      <div className="flex items-center gap-3 bg-emerald-600/10 border border-emerald-500/25 rounded-xl p-4">
        <div className="w-9 h-9 rounded-xl bg-emerald-600/25 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
          ✓
        </div>
        <div>
          <p className="text-emerald-400 font-semibold text-sm">Interview confirmed!</p>
          <p className="text-slate-500 text-xs mt-0.5">Wed Jan 15 · 2:00 PM EST · Google Meet</p>
        </div>
      </div>
    </div>
  );
}

function VisStep3(): React.JSX.Element {
  const reviews = [
    { initials: "JL", color: "#6366f1", name: "Jake (Engineering Lead)", verdict: "Strong hire ✓", verdictColor: "text-emerald-400",
      comment: "Strong system design answers. Impressed by distributed systems experience at Google." },
    { initials: "MP", color: "#0d9e75", name: "Maria (HR)", verdict: "Hire ✓", verdictColor: "text-emerald-400",
      comment: "Great culture fit. Collaborative approach. Salary expectation within range." },
  ] as const;

  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-5">Step 4 — Hiring Room</p>
      <div className="flex flex-col gap-3">
        {reviews.map(({ initials, color, name, verdict, verdictColor, comment }) => (
          <div key={initials} className="bg-white/3 border border-white/6 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
                style={{ background: color }}>{initials}</div>
              <span className="text-slate-500 text-xs">{name}</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {comment}{" "}
              <span className={`font-semibold ${verdictColor}`}>{verdict}</span>
            </p>
          </div>
        ))}
        <div className="bg-indigo-600/10 border border-indigo-500/25 rounded-xl p-3 text-center">
          <p className="text-indigo-300 font-semibold text-sm">3/3 reviewers voted: Hire ✓</p>
          <p className="text-slate-600 text-xs mt-1">Ready to send offer</p>
        </div>
      </div>
    </div>
  );
}

function VisStep4(): React.JSX.Element {
  const tasks = [
    { done: true,  label: "Offer letter signed (DocuSign)"    },
    { done: true,  label: "Background check initiated"         },
    { done: false, label: "Equipment ordered via IT"           },
    { done: false, label: "Day-1 schedule sent to Sarah"       },
  ] as const;

  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-5">Step 5 — Offer & Onboarding</p>
      <div className="bg-emerald-600/10 border border-emerald-500/25 rounded-xl p-4 mb-4">
        <p className="text-emerald-400 font-bold mb-1">🎉 Offer Accepted!</p>
        <p className="text-slate-400 text-xs">Sarah Rodriguez — Senior Engineer — Starting Feb 3</p>
      </div>
      <div className="flex flex-col gap-0 border border-white/6 rounded-xl overflow-hidden">
        {tasks.map(({ done, label }) => (
          <div key={label} className="flex items-center gap-3 p-3 border-b border-white/4 last:border-b-0">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${
              done ? "bg-emerald-600/25 text-emerald-400" : "bg-indigo-600/25 text-indigo-400"
            }`}>
              {done ? "✓" : "→"}
            </div>
            <span className="text-slate-300 text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEP_VISUALS: React.FC[] = [VisStep0, VisStep1, VisStep2, VisStep3, VisStep4];

// ─── Main Component ───────────────────────────────────────────────────────────

export function HowItWorks({ activeStep, onStepChange }: HowItWorksProps): React.JSX.Element {
  const ActiveVisual = STEP_VISUALS[activeStep];

  return (
    <section id="how" className="w-full bg-[#04080f] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">How It Works</p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4 max-w-xl">
          From job post to offer in 5 simple steps
        </h2>
        <p className="text-slate-400 text-base max-w-md leading-relaxed mb-16">
          HR_RECRUITER plugs into your workflow in minutes. No complex setup, no data migration headaches.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps list */}
          <div className="flex flex-col">
            {STEPS.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => onStepChange(index)}
                className={`text-left flex gap-5 py-7 border-b transition-all duration-200
                  ${index === 0 ? "border-t border-white/5" : "border-white/5"}
                  hover:bg-white/2 px-2 rounded-lg`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                  font-extrabold text-sm transition-all duration-200
                  ${activeStep === index
                    ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "bg-white/5 text-slate-500 border border-white/8"
                  }`}>
                  {step.number}
                </div>
                <div>
                  <p className={`font-bold text-base mb-2 transition-colors ${
                    activeStep === index ? "text-white" : "text-slate-400"
                  }`}>
                    {step.title}
                  </p>
                  {activeStep === index && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Visual panel */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#0a0f1e] border border-white/8 rounded-3xl p-8 shadow-2xl min-h-[420px]">
              <ActiveVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
