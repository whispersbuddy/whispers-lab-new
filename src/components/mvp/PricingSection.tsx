import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";

export default function PricingSection() {
  const [showCompareTable, setShowCompareTable] = useState(false);

  useEffect(() => {
    if (showCompareTable) {
      gsap.fromTo(".pricing-table-wrap-mvp", 
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showCompareTable]);

  return (
    <section id="mvp-pricing" className="py-[100px] border-b border-[#e8e6e3] bg-white relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Eyebrow Label */}
        <span className="font-label-scale block mb-4 text-[#7c3aed]">
          Commercial Terms
        </span>

        {/* Section title */}
        <div className="max-w-[700px] mb-12">
          <h2 className="font-display-scale text-[#111111] mb-4">
            Guaranteed outcomes. Fixed pricing budgets.
          </h2>
          <p className="font-sans font-body-text">
            We operate in transparent 6-week development cycles. No sneaky consulting fees, hourly drift counters, or surprise developer resource invoices.
          </p>
        </div>

        {/* Pricing Tiers Ribbon Connected Layout: white -> black -> white */}
        <div 
          className="border border-[#e8e6e3] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#faf9f9]"
        >
          {/* STARTER (cols-4) - White */}
          <div className="lg:col-span-4 bg-white p-10 flex flex-col justify-between text-left border-b lg:border-b-0 lg:border-r border-[#e8e6e3]">
            <div className="space-y-6">
              <span className="font-mono text-[11px] text-[#999999] uppercase tracking-widest font-bold">MVP STARTER</span>
              <div>
                <h3 className="font-display font-bold text-gray-950 text-4xl sm:text-5xl leading-none">
                  $5,000 <span className="font-light text-2xl text-[#888]">&ndash; $8,000</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-2 uppercase tracking-wide">
                  single core workflow · fixed price
                </p>
              </div>

              <div className="h-[1px] bg-[#f0eeee] w-full" />

              {/* Best for box */}
              <div className="bg-[#faf9f9] border border-gray-150 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-[#555555] leading-relaxed font-light">
                  Early web operators looking to validate workflows or run immediate closed beta tests.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-[#555555] text-[13.5px] font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Up to 3 high-fidelity responsive screens</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Supabase users database & social auth login</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Simple Stripe subscriptions integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Pure responsive Tailwind CSS styles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>4 weeks sprint turnaround target</span>
                </li>
              </ul>
            </div>

            <a 
              href="#cta" 
              className="block mt-10 text-center font-mono text-[11px] border border-[#e8e6e3] hover:border-gray-900 px-4 py-4 uppercase font-bold rounded-xl transition-colors text-gray-800 bg-white"
            >
              Book scoping briefing
            </a>
          </div>

          {/* STUDIO (cols-4) - Black (Callback to the Pain section) */}
          <div className="lg:col-span-4 bg-[#0f0f0f] text-white p-10 flex flex-col justify-between text-left relative border-b lg:border-b-0 lg:border-r border-neutral-800">
            {/* Sit on top border badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono text-[10px] font-bold uppercase py-1.5 px-6 rounded-b-xl leading-none">
              Most chosen / 6-week
            </div>

            <div className="space-y-6 pt-4">
              <span className="block font-mono text-[11px] text-purple-400 uppercase tracking-widest font-extrabold">MVP STUDIO</span>
              <div>
                <h3 className="font-display font-bold text-white text-4xl sm:text-5xl leading-none">
                  $8,000 <span className="font-light text-2xl text-gray-400">&ndash; $15,000</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-500 mt-2 uppercase tracking-wide">
                  comprehensive SaaS MVP · fixed price
                </p>
              </div>

              <div className="h-[1px] bg-neutral-800 w-full" />

              {/* Best for box */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-purple-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-neutral-300 leading-relaxed font-light">
                  Serious SaaS startup founders preparing for public release with premium dashboard panels and full core assets.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-neutral-350 text-[13.5px] font-sans">
                {[
                  "Up to 8 high-fidelity animated screens",
                  "Supabase DB with Row-Level Security policies",
                  "Advanced multi-tier Stripe webhook billing",
                  "Third-party AI (OpenAI/Claude) smart embeds",
                  "Interactive onboarding emails via Resend",
                  "100% intellectual property & code ownership",
                  "2 weeks post-launch support window"
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
              className="block mt-10 text-center font-mono text-[11.5px] text-white bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-4 uppercase font-bold rounded-xl transition-all shadow-md active:scale-98"
            >
              Start an MVP project &rarr;
            </a>
          </div>

          {/* ENTERPRISE (cols-4) - White */}
          <div className="lg:col-span-4 bg-white p-10 flex flex-col justify-between text-left border-[#e8e6e3]">
            <div className="space-y-6">
              <span className="font-mono text-[11px] text-[#999999] uppercase tracking-widest font-bold">MVP ENTERPRISE</span>
              <div>
                <h3 className="font-display font-bold text-gray-950 text-4xl sm:text-5xl leading-none">
                  $15,000 <span className="font-light text-2xl text-[#888]">&ndash; $30,000+</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-2 uppercase tracking-wide">
                  advanced custom setup · fixed scope
                </p>
              </div>

              <div className="h-[1px] bg-[#f0eeee] w-full" />

              {/* Best for box */}
              <div className="bg-[#faf9f9] border border-gray-150 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-[#555555] leading-relaxed font-light">
                  Enterprise scale setups with multi-tenant custom portals, heavy database loads, or complex internal workflows.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-[#555555] text-[13.5px] font-sans">
                {[
                  "Unlimited screens & interface routes",
                  "Custom database triggers & edge functions",
                  "Autonomous AI agents & model pools",
                  "GitHub CI/CD custom pipelines",
                  "Playwright automated E2E testing framework",
                  "Comprehensive handover guides for team",
                  "1 month post-launch SLA protection"
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
          <div className="pricing-table-wrap-mvp overflow-hidden mt-8 max-w-4xl mx-auto border border-[#e8e6e3] rounded-xl bg-white shadow-xs animate-fadeIn">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f3f3] font-mono text-[11px] text-[#aaa] uppercase tracking-wider border-b border-[#e8e6e3]">
                  <th className="p-4 text-left pl-6">Feature</th>
                  <th className="p-4 text-center">MVP Starter</th>
                  <th className="p-4 text-center">MVP Studio</th>
                  <th className="p-4 text-center">MVP Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e6e3]">
                {[
                  { f: "UI Views / Routes", a: "Up to 3", b: "Up to 8", c: "Unlimited" },
                  { f: "Supabase DB Security", a: "Standard Setup", b: "Row-Level Security Policed", c: "Custom Edge Triggers" },
                  { f: "Stripe Subscriptions", a: "Direct Elements", b: "Webhook Sync Tiers", c: "Custom subscription portals" },
                  { f: "Third-party AI integration", a: "—", b: "OpenAI / Claude API", c: "Embeddings / pgvector agents" },
                  { f: "Programmatic Email", a: "—", b: "Resend automation", c: "Full transactional engines" },
                  { f: "End-to-end testing tests", a: "—", b: "—", c: "Playwright / E2E Suite" },
                  { f: "Support window", a: "—", b: "2 weeks", c: "1 month SLA contract" }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-50/50">
                    <td className="p-4 pl-6 text-[13px] font-sans font-medium text-gray-900 text-left">{row.f}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-gray-500 font-light">{row.a}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-[#7c3aed] font-semibold">{row.b}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-gray-800 font-medium">{row.c}</td>
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
