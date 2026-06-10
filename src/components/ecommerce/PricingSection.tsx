import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";

export default function PricingSection() {
  const [showCompareTable, setShowCompareTable] = useState(false);

  useEffect(() => {
    if (showCompareTable) {
      gsap.fromTo(".pricing-table-wrap-eco", 
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showCompareTable]);

  return (
    <section id="eco-pricing" className="py-[100px] border-b border-[#e8e6e3] bg-white relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Eyebrow Label */}
        <span className="font-label-scale block mb-4 text-emerald-600">
          Commercial Terms
        </span>

        {/* Section title */}
        <div className="max-w-[700px] mb-12">
          <h2 className="font-display-scale text-[#111111] mb-4">
            Guaranteed speed. Fixed optimization rates.
          </h2>
          <p className="font-sans font-body-text">
            We operate in clear, fixed-price development cycles. No surprise monthly retainers, obscure developer invoices, or endless timeline slides.
          </p>
        </div>

        {/* Pricing Tiers Ribbon Connected Layout */}
        <div 
          className="border border-[#e8e6e3] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#faf9f9]"
        >
          {/* STARTER (cols-4) - White */}
          <div className="lg:col-span-4 bg-white p-10 flex flex-col justify-between text-left border-b lg:border-b-0 lg:border-r border-[#e8e6e3]">
            <div className="space-y-6">
              <span className="font-mono text-[11px] text-[#999999] uppercase tracking-widest font-bold">RETAIL OPTIMIZER</span>
              <div>
                <h3 className="font-display font-bold text-gray-950 text-4xl sm:text-5xl leading-none">
                  $4,000 <span className="font-light text-2xl text-[#888]">&ndash; $6,000</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-2 uppercase tracking-wide">
                  theme tuneups &middot; fixed price
                </p>
              </div>

              <div className="h-[1px] bg-[#f0eeee] w-full" />

              {/* Best for box */}
              <div className="bg-[#faf9f9] border border-gray-150 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-[#555555] leading-relaxed font-light">
                  Teams with existing stores who want to eliminate theme lag, optimize custom details, and lift metrics.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-[#555555] text-[13.5px] font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Core Web Vital speed optimization (&lt; 1.5s)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Up to 3 custom Liquid layout modules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Checkout conversion calibration review</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>Clean analytical tracking integrations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                  <span>2 weeks rapid sprint turnaround</span>
                </li>
              </ul>
            </div>

            <a 
              href="#cta" 
              className="block mt-10 text-center font-mono text-[11px] border border-[#e8e6e3] hover:border-gray-900 px-4 py-4 uppercase font-bold rounded-xl transition-colors text-gray-800 bg-white"
            >
              Book optimization call
            </a>
          </div>

          {/* STUDIO (cols-4) - Black */}
          <div className="lg:col-span-4 bg-[#0f0f0f] text-white p-10 flex flex-col justify-between text-left relative border-b lg:border-b-0 lg:border-r border-neutral-800">
            {/* Sit on top border badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-mono text-[10px] font-bold uppercase py-1.5 px-6 rounded-b-xl leading-none">
              Most chosen / 6-week
            </div>

            <div className="space-y-6 pt-4">
              <span className="block font-mono text-[11px] text-emerald-400 uppercase tracking-widest font-extrabold">RETAIL STUDIO</span>
              <div>
                <h3 className="font-display font-bold text-white text-4xl sm:text-5xl leading-none">
                  $8,000 <span className="font-light text-2xl text-gray-400">&ndash; $14,000</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-500 mt-2 uppercase tracking-wide">
                  full custom shopify storefront
                </p>
              </div>

              <div className="h-[1px] bg-neutral-800 w-full" />

              {/* Best for box */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-neutral-300 leading-relaxed font-light">
                  High-growth merchant operations ready to launch a high-converting, fully tailored brand presence on Shopify OS 2.0.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-neutral-350 text-[13.5px] font-sans">
                {[
                  "100% custom-coded Liquid theme build",
                  "High-speed variant, bundle & custom drawers",
                  "Algolia instant search index configurations",
                  "Durable transactional email triggers (Klaviyo)",
                  "Custom responsive interactive landing options",
                  "Full inventory & third-party carrier syncs",
                  "2 weeks post-launch SLA protection"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-emerald-500 mt-1 shrink-0 font-bold">&#10003;</span>
                    <span className="text-white font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button stays gradient in Studio tier */}
            <a 
              href="#cta" 
              className="block mt-10 text-center font-mono text-[11.5px] text-white bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-4 uppercase font-bold rounded-xl transition-all shadow-md active:scale-98"
            >
              Start custom project &rarr;
            </a>
          </div>

          {/* ENTERPRISE (cols-4) - White */}
          <div className="lg:col-span-4 bg-white p-10 flex flex-col justify-between text-left border-[#e8e6e3]">
            <div className="space-y-6">
              <span className="font-mono text-[11px] text-[#999999] uppercase tracking-widest font-bold">RETAIL ENTERPRISE</span>
              <div>
                <h3 className="font-display font-bold text-gray-950 text-4xl sm:text-5xl leading-none">
                  $16,000 <span className="font-light text-2xl text-[#888]">&ndash; $25,000+</span>
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-2 uppercase tracking-wide">
                  headless storefront setup &middot; fixed scope
                </p>
              </div>

              <div className="h-[1px] bg-[#f0eeee] w-full" />

              {/* Best for box */}
              <div className="bg-[#faf9f9] border border-gray-150 rounded-xl p-4 text-left">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">BEST FOR</span>
                <p className="font-sans text-[13px] text-[#555555] leading-relaxed font-light">
                  Enterprise retail operations demanding Jamstack React storefront architectures for absolute speeds and structured CMS layouts.
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2 text-[#555555] text-[13.5px] font-sans">
                {[
                  "Headless React / Next.js layout core",
                  "Decoupled Sanity CMS editorial panels",
                  "Global edge routing & localization",
                  "Bespoke visual builders (3D widgets)",
                  "Multi-warehouse ERP pipeline syncs",
                  "Premium Klaviyo retention strategy setup",
                  "1 month complete launch support SLA"
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
              Let's evaluate &rarr;
            </a>
          </div>

        </div>

        {/* COMPARISON SPREADSHEET TOGGLE ELEMENT */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowCompareTable(!showCompareTable)}
            className="font-mono text-xs text-emerald-600 font-bold uppercase tracking-widest hover:underline cursor-pointer flex items-center gap-1 mx-auto"
          >
            <span>{showCompareTable ? "Dismiss detailed compare table ↑" : "Compare all features spreadsheet →"}</span>
          </button>
        </div>

        {/* CSS Expand Wrapper of Spreadsheet comparison matrix */}
        {showCompareTable && (
          <div className="pricing-table-wrap-eco overflow-hidden mt-8 max-w-4xl mx-auto border border-[#e8e6e3] rounded-xl bg-white shadow-xs animate-fadeIn">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f3f3] font-mono text-[11px] text-[#aaa] uppercase tracking-wider border-b border-[#e8e6e3]">
                  <th className="p-4 text-left pl-6">Feature</th>
                  <th className="p-4 text-center">Retail Optimizer</th>
                  <th className="p-4 text-center">Retail Studio</th>
                  <th className="p-4 text-center">Retail Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e6e3]">
                {[
                  { f: "Coded Storefront Core", a: "Standard Speedups", b: "100% custom Liquid OS 2.0", c: "Headless React / Next.js JS Core" },
                  { f: "Target Loading Met", a: "Sub 2.0s Speed Index", b: "Sub 1.5s Speed Index", c: "Sub 0.8s Decoupled Page Speeds" },
                  { f: "Inbound Search Engineering", a: "Standard search layout", b: "Algolia Instant autocompletes", c: "Algolia customized semantic searches" },
                  { f: "Editorial Landing Boards", a: "Standard blocks", b: "Custom Shopify layout blocks", c: "Headless CMS editorial boards" },
                  { f: "Warehouse & ERP syncs", a: "—", b: "Standard automation scripts", c: "Bespoke high-frequency Postgres links" },
                  { f: "Transactional Klaviyo", a: "—", b: "Durable flows & confirmations", c: "Comprehensive multi-tier automation" },
                  { f: "Post-Launch SLA protection", a: "—", b: "2 weeks", c: "1 month SLA support" }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-50/50">
                    <td className="p-4 pl-6 text-[13px] font-sans font-medium text-gray-900 text-left">{row.f}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-gray-500 font-light">{row.a}</td>
                    <td className="p-4 text-center text-[13px] font-sans text-emerald-600 font-semibold">{row.b}</td>
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
