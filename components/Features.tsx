"use client";

import React from "react";
import {
  SearchIcon,
  CalendarIcon,
  BrainCircuitIcon,
  GiftIcon,
  UsersIcon,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, iconBg, title, description }: FeatureCardProps): React.JSX.Element {
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-indigo-500/30
                    hover:bg-indigo-600/5 transition-all duration-300 group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}>
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

interface SkillBarProps {
  label: string;
  percent: number;
  color: string;
  valueLabel: string;
}

function SkillBar({ label, percent, color, valueLabel }: SkillBarProps): React.JSX.Element {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-xs font-bold" style={{ color }}>{valueLabel}</span>
      </div>
      <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
    </div>
  );
}

export function Features(): React.JSX.Element {
  const cards: FeatureCardProps[] = [
    {
      icon: <SearchIcon size={22} className="text-indigo-400" />,
      iconBg: "bg-indigo-600/20",
      title: "AI Resume Screening",
      description:
        "Our LLM-powered engine reads every resume in seconds, scoring candidates on skills, experience, and culture fit — eliminating manual review for 90% of applications.",
    },
    {
      icon: <CalendarIcon size={22} className="text-emerald-400" />,
      iconBg: "bg-emerald-600/20",
      title: "Smart Interview Scheduler",
      description:
        "Automatically syncs with Google and Outlook calendars to find perfect interview slots. Sends reminders and handles rescheduling without HR involvement.",
    },
    {
      icon: <GiftIcon size={22} className="text-amber-400" />,
      iconBg: "bg-amber-600/20",
      title: "Automated Onboarding",
      description:
        "Once a hire is made, AI triggers onboarding workflows — sending offer letters, collecting documents, and briefing managers automatically.",
    },
    {
      icon: <UsersIcon size={22} className="text-rose-400" />,
      iconBg: "bg-rose-600/20",
      title: "Collaborative Hiring Rooms",
      description:
        "Loop in hiring managers and executives into a shared workspace to review scorecards, leave feedback, and make decisions together in real time.",
    },
  ];

  const skillBars: SkillBarProps[] = [
    { label: "Technical Skills",   percent: 97, color: "#818cf8", valueLabel: "97%" },
    { label: "Culture Fit",        percent: 94, color: "#34d399", valueLabel: "94%" },
    { label: "Leadership",         percent: 88, color: "#fbbf24", valueLabel: "88%" },
    { label: "Communication",      percent: 91, color: "#fb7185", valueLabel: "91%" },
    { label: "Tenure Prediction",  percent: 80, color: "#a78bfa", valueLabel: "3.2 yrs" },
  ];

  return (
    <section id="features" className="w-full bg-[#020617] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">Features</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight max-w-lg">
            Everything you need to hire with confidence
          </h2>
          <p className="text-slate-400 text-base max-w-sm leading-relaxed">
            From intake to offer letter, AI automates the entire funnel — saving HR teams 20+ hours per week.
          </p>
        </div>

        {/* 2×2 feature grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {cards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>

        {/* Wide feature card — Candidate Intelligence */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-7 lg:p-10
                        grid lg:grid-cols-2 gap-10 items-center hover:border-indigo-500/30
                        transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuitIcon size={20} className="text-indigo-400" />
              <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">AI-Powered</span>
            </div>
            <h3 className="text-white font-extrabold text-2xl lg:text-3xl tracking-tighter mb-4">
              Candidate Intelligence Engine
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
              Go beyond keywords. AI understands context — mapping candidate trajectories, predicting
              tenure, detecting skill adjacencies, and surfacing hidden gems your ATS would miss.
            </p>
            <div className="flex gap-8 flex-wrap">
              {(
                [
                  { num: "92%",  label: "Prediction accuracy" },
                  { num: "3.8×", label: "Better retention"    },
                  { num: "64%",  label: "Bias reduction"      },
                ] as const
              ).map(({ num, label }) => (
                <div key={label}>
                  <p className="text-white font-extrabold text-2xl tracking-tighter">{num}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill bars visual */}
          <div className="bg-[#0a0f1e] rounded-2xl p-6 border border-white/5">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-5">
              Candidate Skill Analysis — Sarah R.
            </p>
            <div className="flex flex-col gap-4">
              {skillBars.map((bar) => (
                <SkillBar key={bar.label} {...bar} />
              ))}
            </div>
            <div className="mt-5 bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
              <p className="text-[10px] text-slate-500 mb-1">AI Recommendation</p>
              <p className="text-slate-300 text-xs leading-relaxed">
                Strong match. Schedule a technical interview within 48 hours to avoid candidate loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
