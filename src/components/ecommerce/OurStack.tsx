import React from "react";

export default function OurStack() {
  const tools = [
    {
      name: "Shopify Plus / OS 2.0",
      iconSlug: "shopify",
      brandColor: "7AB55C",
      percentage: "98%",
      filledCount: 5,
      desc: "Our primary hub for enterprise-grade retail scaling, secure global payment checkouts, centralized stock sheets, and reliable multi-channel admin operations."
    },
    {
      name: "Custom Liquid Engine",
      iconSlug: "shopify",
      brandColor: "2F3E46",
      percentage: "95%",
      filledCount: 5,
      desc: "High-integrity Shopify theme engineering. We build structures directly into native liquid layers, strictly avoiding bloated slow-loading browser apps."
    },
    {
      name: "React / Next.js",
      iconSlug: "nextdotjs",
      brandColor: "000000",
      percentage: "95%",
      filledCount: 5,
      desc: "Decoupled headless storefront capabilities. Hit absolute sub-second loading speeds spanning heavy product search grids and premium detail media pages."
    },
    {
      name: "Tailwind CSS",
      iconSlug: "tailwindcss",
      brandColor: "06B6D4",
      percentage: "98%",
      filledCount: 5,
      desc: "Modern atomic layouts. Fluid variant grids, responsive navigation tabs, and elegant animations styled perfectly without causing stylesheet weights."
    },
    {
      name: "Algolia Search AI",
      iconSlug: "algolia",
      brandColor: "003DFF",
      percentage: "90%",
      filledCount: 5,
      desc: "Intelligent mercantile indexing. Offers predictive results queries, instant filter response arrays, and automatic autocomplete suggestions on product queries."
    },
    {
      name: "Klaviyo Flows",
      iconSlug: "klaviyo",
      brandColor: "151515",
      percentage: "92%",
      filledCount: 5,
      desc: "Sophisticated email automation pathways. High-return browser abandonment dispatches, precise segmentations, and beautiful invoice designs."
    },
    {
      name: "Sanity CMS Blocks",
      iconSlug: "sanity",
      brandColor: "F03E2F",
      percentage: "92%",
      filledCount: 5,
      desc: "Structured content controls. Marketing teams gain fluid visual editing blocks to assemble fresh pages, campaigns, and lookbooks instantly."
    },
    {
      name: "Shippo / Shipstation",
      iconSlug: "github", // Using github icon or similar fallback since simpleicons might not have Shippo
      brandColor: "181717",
      percentage: "90%",
      filledCount: 5,
      desc: "Frictionless carrier and logistics pipes. Seamless connections with major global shippers, automated rate quotes, and instant tracking triggers."
    }
  ];

  return (
    <section id="eco-tools" className="py-[100px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Table Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-medium text-[42px] sm:text-[64px] text-[#111111] tracking-[-0.03em] leading-[1.0]">
              Our high-speed <br />
              retail tech stack.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center h-full">
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#888888] max-w-[320px] leading-[1.75]">
              We strictly utilize clean, modern, high-grade commerce systems to warrant conversion acceleration, security compliance, and robust operations. No messy layouts.
            </p>
          </div>
        </div>

        {/* Tools row tables */}
        <div className="tools-list flex flex-col gap-0 mt-14 border-t border-[#e8e6e3]">
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="tool-row group grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-6 md:gap-10 items-center py-[24px] border-b border-[#f0eeee] transition-all duration-300 hover:bg-[#faf9f9] hover:px-8 hover:mx-[-32px] md:hover:mx-[-64px] md:hover:px-[64px]"
            >
              
              {/* Col 1: Logo & Tool Name */}
              <div className="flex items-center gap-3">
                <img 
                  src={`https://cdn.simpleicons.org/${tool.iconSlug}/${tool.brandColor}`} 
                  alt={tool.name}
                  className="w-6 h-6 object-contain shrink-0"
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <span className="font-display font-medium text-[16px] text-[#111111]">
                  {tool.name}
                </span>
              </div>

              {/* Col 2: Brief Description */}
              <div className="font-sans font-light text-[14px] text-[#888888] leading-[1.6]">
                {tool.desc}
              </div>

              {/* Col 3: Proficiency indicators */}
              <div className="flex items-center justify-between md:justify-end gap-4">
                <span className="font-mono text-[10px] text-[#999999] uppercase tracking-wide">
                  {tool.percentage}
                </span>
                
                {/* 5 small squares */}
                <div className="flex gap-1 shrink-0">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div 
                      key={i} 
                      className={`w-[5px] h-[5px] rounded-[1px] ${
                        i <= tool.filledCount 
                          ? 'bg-gradient-to-tr from-emerald-500 to-teal-500'
                          : 'bg-[#e8e6e3]'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
