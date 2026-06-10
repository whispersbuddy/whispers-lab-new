import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";

export default function PricingSection() {
  const [showCompareTable, setShowCompareTable] = useState(false);

  useEffect(() => {
    if (showCompareTable) {
      gsap.fromTo(".pricing-table-wrap", 
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showCompareTable]);

  return (
    <section id="pricing" className="py-[100px] border-b border-[#e8e6e3] bg-white relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Eyebrow Label */}
        <span className="font-label-scale block mb-4">
          Commercial Terms
        </span>

        {/* Section title */}
        <div className="max-w-[700px] mb-12">
          <h2 className="font-display-scale text-[#111111] mb-4">
            Transparent, fixed engagement scopes.
          </h2>
          <p className="font-sans font-body-text">
            We charge per project outcome. The figure agreed in the architecture handshake is the final pricing.
          </p>
        </div>

        {/* Pricing Tiers Ribbon Connected Layout: white -> black -> white */}
        <div 
          className="border border-[#e8e6e3] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#faf9f9]"
        >
          {/* STARTER (cols-4) - White */}
          <div className="lg:col-span-4 bg-white p-10 flex flex-col justify-between text-left border-b lg:border-b-0 lg:border-r border-[#e8e6e3]">
            <div className="space-y-6">
              <span className="font-mono text-[11px] text-[#999999] uppercase tracking-widest font-bold">STARTER</span>
              <div>
                <h3 className="font-display font-bold text-gray-950 text-4xl sm:text-5xl leading-none">
                  $1,200 <span className="font-light text-2xl text-[#888]">&ndash; $2,500</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-2 uppercase tracking-wide">
                  single workflow · fixed price
                </p>
              </div>

              <div className="h-[1px] bg-[#f0eeee] w-full" />

              {/* Best for box */}
              <div className="bg-[#faf9f9] border border-gray-150 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-[#555555] leading-relaxed font-light">
                  Teams with one specific manual process they need eliminated. Scoped, built, done.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-[#555555] text-[13.5px] font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>1&ndash;2 connected tools</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Single trigger &rarr; action pipeline</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Error handling + Slack alerts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Full documentation Runbook</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>30-min handoff walk-through</span>
                </li>
              </ul>
            </div>

            <a 
              href="#cta" 
              className="block mt-10 text-center font-mono text-[11px] border border-[#e8e6e3] hover:border-gray-900 px-4 py-4 uppercase font-bold rounded-xl transition-colors text-gray-800 bg-white"
            >
              Book a scoping call
            </a>
          </div>

          {/* STUDIO (cols-4) - Black (Callback to the Pain section) */}
          <div className="lg:col-span-4 bg-[#0f0f0f] text-white p-10 flex flex-col justify-between text-left relative border-b lg:border-b-0 lg:border-r border-neutral-800">
            {/* Sit on top border badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] text-white font-mono text-[10px] font-bold uppercase py-1.5 px-6 rounded-b-xl leading-none">
              Most chosen
            </div>

            <div className="space-y-6 pt-4">
              <span className="block font-mono text-[11px] text-purple-400 uppercase tracking-widest font-extrabold">STUDIO</span>
              <div>
                <h3 className="font-display font-bold text-white text-4xl sm:text-5xl leading-none">
                  $2,500 <span className="font-light text-2xl text-gray-400">&ndash; $6,000</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-500 mt-2 uppercase tracking-wide">
                  multi-system pipeline · fixed price
                </p>
              </div>

              <div className="h-[1px] bg-neutral-800 w-full" />

              {/* Best for box */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-purple-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-neutral-300 leading-relaxed font-light">
                  Agencies and SaaS companies with multi-tool processes &mdash; lead intake, onboarding, billing, and internal ops.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-neutral-350 text-[13.5px] font-sans">
                {[
                  "3–6 connected tools",
                  "Multi-branch conditional logic",
                  "AI scoring or classification",
                  "Full error handling + monitoring",
                  "Complete documentation runbook",
                  "1-hour team walkthrough",
                  "2 weeks post-launch support"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#7c3aed] mt-1 shrink-0 font-bold">&#10003;</span>
                    <span className="text-white font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button stays gradient in Studio tier */}
            <a 
              href="#cta" 
              className="block mt-10 text-center font-mono text-[11.5px] text-white bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-4 py-4 uppercase font-bold rounded-xl transition-all shadow-md shadow-purple-900/10 active:scale-98"
            >
              Start a project &rarr;
            </a>
          </div>

          {/* ENTERPRISE (cols-4) - White */}
          <div className="lg:col-span-4 bg-white p-10 flex flex-col justify-between text-left border-[#e8e6e3]">
            <div className="space-y-6">
              <span className="font-mono text-[11px] text-[#999999] uppercase tracking-widest font-bold">ENTERPRISE</span>
              <div>
                <h3 className="font-display font-bold text-gray-950 text-4xl sm:text-5xl leading-none">
                  $6,000 <span className="font-light text-2xl text-[#888]">&ndash; $15,000+</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-2 uppercase tracking-wide">
                  full ops layer · fixed scope
                </p>
              </div>

              <div className="h-[1px] bg-[#f0eeee] w-full" />

              {/* Best for box */}
              <div className="bg-[#faf9f9] border border-gray-150 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-[#555555] leading-relaxed font-light">
                  Companies replacing entire operations teams or building automation infrastructure that runs at scale.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-[#555555] text-[13.5px] font-sans">
                {[
                  "Unlimited workflow complexity",
                  "Custom API integrations",
                  "Multi-team, multi-location logic",
                  "Dedicated project lead",
                  "SLA monitoring + alerting",
                  "Full runbook + team training",
                  "Optional monthly retainer option"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#cta" 
              className="block mt-10 text-center font-mono text-[11px] border border-[#e8e6e3] hover:border-gray-900 px-4 py-4 uppercase font-bold rounded-xl transition-colors text-gray-800 bg-white"
            >
              Let's discuss &rarr;
            </a>
          </div>

        </div>

        {/* COMPARISON SPREADSHEET TOGGLE ELEMENT */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowCompareTable(!showCompareTable)}
            className="font-mono text-xs text-[#7c3aed] font-bold uppercase tracking-widest hover:underline cursor-pointer flex items-center gap-1 mx-auto"
          >
            <span>{showCompareTable ? "Dismiss detailed compare table ↑" : "Compare all features spreadsheet →"}</span>
          </button>
        </div>

        {/* CSS Expand Wrapper of Spreadsheet comparison matrix */}
        {showCompareTable && (
          <div className="pricing-table-wrap overflow-hidden mt-8 max-w-4xl mx-auto border border-[#e8e6e3] rounded-xl bg-white shadow-xs">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f3f3] font-mono text-[11px] text-[#aaa] uppercase tracking-wider border-b border-[#e8e6e3]">
                  <th className="p-4 text-left pl-6">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center">Studio</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e6e3]">
                {[
                  { f: "Tools connected", a: "1–2", b: "3–6", c: "Unlimited" },
                  { f: "AI model layer", a: "—", b: "✓", c: "✓" },
                  { f: "Monitoring alerts", a: "✓", b: "✓", c: "✓" },
                  { f: "Post support window", a: "—", b: "2 weeks", c: "Ongoing SLA" },
                  { f: "Team training", a: "—", b: "—", c: "✓" },
                  { f: "Retainer Option", a: "Add-on", b: "Add-on", c: "Included option" }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-50/50">
                    <td className="p-4 pl-6 text-[13px] font-sans font-medium text-gray-900 text-left">{row.f}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-gray-500 font-light">{row.a}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-gray-900 font-semibold text-[#7c3aed]">{row.b}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-gray-900 font-medium font-sans">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
