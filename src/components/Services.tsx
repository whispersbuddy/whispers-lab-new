import React from "react";
import SectionHeader from "./SectionHeader";

const DISCIPLINES = [
  {
    num: "01",
    title: "SaaS MVP Development",
    desc: "We take your validated product concept and transform it into a robust, shippable web application. A dedicated, agile squad handles your database architecture, Stripe monetization, API integrations, and frontend performance – in a guaranteed 6-week sprint.",
    tags: ["Next.js · Supabase", "Stripe Subscriptions", "Tailwind CSS UI", "GitHub CI/CD Workspace"],
    hashLink: "#services/saas-mvp"
  },
  {
    num: "02",
    title: "Automated Business Workflows",
    desc: "We map your manual operational flows and build a resilient software automation layer. The result is a robust system your team fully controls — not a patchwork of fragile visual templates.",
    tags: ["n8n.io Pipelines", "Make.com REST Integration", "GoHighLevel CRM", "Internal API Hooks"],
    hashLink: "#services/automation"
  },
  {
    num: "03",
    title: "High-Growth E-Commerce Systems",
    desc: "We build custom Shopify storefronts engineered for conversion speed. Custom Liquid theme structure, performant content loading, and complex third-party system connections — never basic template styling.",
    tags: ["Shopify OS 2.0", "Liquid Theme Logic", "CRO Calibration", "WebPageSpeed tuning"],
    hashLink: "#services/ecommerce"
  }
];

const AI_CAPABILITIES = [
  "RAG pipelines (Retrieval-Augmented Generation)",
  "Co-pilot features & workspace text autocomplete",
  "Document indexing & report summarizers",
  "Auto-classification & customer inquiry routing",
  "Semantic search indexing & custom vector databases"
];

export default function Services() {
  const handleNavigation = (hash: string | null) => {
    if (hash) {
      window.location.hash = hash;
    }
  };

  return (
    <section className="py-24 border-b border-gray-200 bg-white" id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Header Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-start gap-8 mb-16">
          <div className="text-left">
            <SectionHeader label="Our disciplines" />
            <h2 className="font-display-scale text-gray-950">
              A studio built around three disciplines.
            </h2>
          </div>
          <div className="text-left lg:pt-16">
            <p className="font-sans font-light text-sm text-gray-500 leading-relaxed max-w-sm">
              Not a generalist agency. Not a floating freelancer queue. A focused studio with rigorous engineering standards deployed across three cohesive areas.
            </p>
          </div>
        </div>

        {/* List of Practice Areas */}
        <div className="flex flex-col border-t border-gray-200">
          {DISCIPLINES.map((item) => {
            const hasLink = item.hashLink !== null;
            return (
              <div
                key={item.num}
                onClick={() => handleNavigation(item.hashLink)}
                className={`grid grid-cols-1 md:grid-cols-12 py-10 items-start border-b border-gray-200 gap-6 text-left group transition-all duration-300 ${
                  hasLink ? "cursor-pointer hover:bg-gray-50/50" : "cursor-default"
                }`}
              >
                {/* Number */}
                <div className="col-span-1 md:col-span-1">
                  <span className="font-mono text-xs text-gray-400">
                    {item.num}
                  </span>
                </div>

                {/* Title & Tags */}
                <div className="col-span-1 md:col-span-5">
                  <h3 className={`font-display font-medium text-[22px] text-gray-900 group-hover:text-gray-950 transition-colors ${
                    hasLink ? "group-hover:text-[#7c3aed] underline decoration-gray-200 underline-offset-4" : ""
                  }`}>
                    {item.title}
                  </h3>
                  
                  {/* Tags list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-gray-500 bg-gray-50 px-2.5 py-1 rounded border border-gray-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description Column */}
                <div className="col-span-1 md:col-span-5">
                  <p className="font-sans font-light text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Link Indicator Column */}
                <div className="col-span-1 md:col-span-1 md:text-right flex items-center md:justify-end gap-1 font-mono text-xs text-gray-400 group-hover:text-gray-950 transition-colors">
                  {hasLink ? (
                    <span className="text-[#7c3aed] font-medium tracking-wide">
                      VIEW &nbsp;→
                    </span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Specialty AI block */}
        <div className="mt-24 pt-16 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          <div className="col-span-1 lg:col-span-5">
            <span className="font-label-scale block mb-4 text-emerald-600">
              AI SPECIALTY SERVICE
            </span>
            <h3 className="font-display font-bold text-[28px] text-gray-950 mb-6">
              AI Feature Integration
            </h3>
            <p className="font-body-text text-sm max-w-md">
              Embed smart capability directly into your operational systems. We design semantic vector layouts, automated transcription caches, and dynamic LLM router pipelines optimized for production stability — no complete software redesign required.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center gap-5 pl-0 lg:pl-12 lg:border-l lg:border-gray-200">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest font-semibold block mb-2">
              Capabilities We Embed:
            </span>
            {AI_CAPABILITIES.map((capability, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="font-mono text-[#7c3aed] text-sm font-semibold select-none">
                  &gt;
                </span>
                <span className="font-mono text-sm text-gray-600 leading-relaxed">
                  {capability}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
