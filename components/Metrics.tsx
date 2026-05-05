"use client";

import React from "react";
import { METRICS } from "../lib/data";
import type { Metric } from "../types";

interface MetricBoxProps {
  metric: Metric;
  position: "tl" | "tr" | "bl" | "br";
}

function MetricBox({ metric, position }: MetricBoxProps): React.JSX.Element {
  const radiusMap: Record<MetricBoxProps["position"], string> = {
    tl: "rounded-tl-2xl",
    tr: "rounded-tr-2xl",
    bl: "rounded-bl-2xl",
    br: "rounded-br-2xl",
  };

  return (
    <div className={`bg-white/3 border border-white/7 p-8 lg:p-10 ${radiusMap[position]}`}>
      <p className="font-extrabold text-5xl lg:text-6xl tracking-tighter" style={{ color: metric.color }}>
        <span className="text-3xl">{metric.prefix}</span>
        {metric.value}
        <span className="text-3xl">{metric.suffix}</span>
      </p>
      <p className="text-slate-500 text-sm mt-3 leading-snug">{metric.label}</p>
    </div>
  );
}

export function Metrics(): React.JSX.Element {
  const positions: MetricBoxProps["position"][] = ["tl", "tr", "bl", "br"];

  return (
    <section id="metrics" className="w-full bg-[#020617] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left copy */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-6">
              Numbers that speak for themselves
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-sm">
              Across 2,400+ companies, HR_RECRUITER consistently delivers measurable improvements
              to every hiring KPI that matters.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-sm font-bold text-white
                         bg-white/8 border border-white/12 px-6 py-3 rounded-full
                         hover:bg-white/12 transition-all duration-200"
            >
              See all case studies <span>→</span>
            </a>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-0.5 rounded-2xl overflow-hidden border border-white/7">
            {METRICS.map((metric, i) => (
              <MetricBox key={metric.label} metric={metric} position={positions[i]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
