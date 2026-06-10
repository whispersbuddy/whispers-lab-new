import React from "react";

export default function WhatWeBuild() {
  const logos = {
    shopify: "https://cdn.simpleicons.org/shopify/7AB55C",
    tailwindcss: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    github: "https://cdn.simpleicons.org/github/181717",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    typescript: "https://cdn.simpleicons.org/typescript/3178C6",
    stripe: "https://cdn.simpleicons.org/stripe/635BFF",
    sanity: "https://cdn.simpleicons.org/sanity/F03E2F",
    algolia: "https://cdn.simpleicons.org/algolia/003DFF",
    klaviyo: "https://cdn.simpleicons.org/klaviyo/151515",
    nextjs: "https://cdn.simpleicons.org/nextdotjs/000000",
    postgresql: "https://cdn.simpleicons.org/postgresql/4169E1"
  };

  const cases = [
    {
      num: "01",
      title: "Bespoke Shopify Theme Logic",
      sub: "Performant Liquid systems built without bloated external app libraries. Lightweight layouts with responsive visual consistency, structural components, and beautiful custom styles.",
      tools: [
        { name: "Shopify", logo: logos.shopify },
        { name: "Tailwind CSS", logo: logos.tailwindcss },
        { name: "GitHub", logo: logos.github }
      ]
    },
    {
      num: "02",
      title: "Semantic Auto-Search & Merchandising",
      sub: "Dynamic filters, smart instant-results cards, and predictive catalog search engines. We implement millisecond-level results matching to guide shoppers directly to their checkout paths.",
      tools: [
        { name: "Algolia", logo: logos.algolia },
        { name: "TypeScript", logo: logos.typescript },
        { name: "Shopify", logo: logos.shopify }
      ]
    },
    {
      num: "03",
      title: "Elite Headless React Storefronts",
      sub: "Blazing fast headless architectures. Decoupling the checkout core using specialized modern Jamstack systems to hit unmatched Core Web Vital mobile loading metrics.",
      tools: [
        { name: "Next.js", logo: logos.nextjs },
        { name: "React", logo: logos.react },
        { name: "Shopify", logo: logos.shopify }
      ]
    },
    {
      num: "04",
      title: "Tailored Variant & Bundle Builders",
      sub: "Bespoke interactive 3D embeds, product bundlers, and dynamic customization wizards. Allowing users to configure color palettes, engrave text, or bulk-mix orders flawlessly.",
      tools: [
        { name: "React", logo: logos.react },
        { name: "TypeScript", logo: logos.typescript },
        { name: "Tailwind CSS", logo: logos.tailwindcss }
      ]
    },
    {
      num: "05",
      title: "Express Checkout Optimizations",
      sub: "Ultra-lean checkout paths incorporating one-tap Apple Pay, Google Pay, and Shop Pay shortcuts. Reduced fields, dynamic address queries, and high-converting checkout layouts.",
      tools: [
        { name: "Stripe", logo: logos.stripe },
        { name: "Shopify", logo: logos.shopify },
        { name: "TypeScript", logo: logos.typescript }
      ]
    },
    {
      num: "06",
      title: "Headless Content Management Blocks",
      sub: "Empower your marketing team with custom drag-and-drop structural blocks. Easily build, modify, and run high-converting visual landings without calling engineering for every text edit.",
      tools: [
        { name: "Sanity", logo: logos.sanity },
        { name: "Next.js", logo: logos.nextjs },
        { name: "React", logo: logos.react }
      ]
    },
    {
      num: "07",
      title: "Multi-Warehouse ERP & Sync Pipes",
      sub: "Unified real-time inventory systems connecting multiple sales channels, physical warehouses, and automated Shopify stock sheets. Prevent oversells, lags, and support debts.",
      tools: [
        { name: "PostgreSQL", logo: logos.postgresql },
        { name: "TypeScript", logo: logos.typescript },
        { name: "Github", logo: logos.github }
      ]
    },
    {
      num: "08",
      title: "Elite Marketing-Tech & Flow Syncing",
      sub: "Clean client tracking pixels, zero-latency server-side conversions, complex Klaviyo behavior triggers, and customer review engine integrations that preserve page speeds.",
      tools: [
        { name: "Klaviyo", logo: logos.klaviyo },
        { name: "Shopify", logo: logos.shopify },
        { name: "TypeScript", logo: logos.typescript }
      ]
    }
  ];

  return (
    <section id="eco-what-we-build" className="py-[100px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-[120px] self-start space-y-4">
            <div className="font-display font-bold text-[200px] text-emerald-600/5 leading-none select-none tracking-tighter">
              CO
            </div>
            <h2 className="font-display font-medium text-[42px] text-[#111111] tracking-[-0.03em] leading-[1.0] text-left">
              8 conversion <br />
              layers we engineer.
            </h2>
            <p className="font-sans font-light text-[15px] text-[#888888] max-w-[240px] leading-[1.7] text-left">
              Bespoke, high-performance physical and digital retail systems delivered with clean, scalable code.
            </p>
          </div>

          {/* Right Column - Numbered Editorial Index */}
          <div className="lg:col-span-8 divide-y divide-[#f0eeee]">
            {cases.map((useCase, idx) => {
              const isLast = idx === cases.length - 1;
              return (
                <div 
                  key={idx}
                  className="grid grid-cols-[48px_1fr_auto] gap-6 items-baseline py-7 border-t border-[#f0eeee]"
                >
                  {/* Column 1: Number */}
                  <div className="font-mono text-[13px] text-[#cccccc] font-medium text-left">
                    {useCase.num}
                  </div>

                  {/* Column 2: Title and Subtitle */}
                  <div className="text-left space-y-1">
                    <h3 className={`font-display font-semibold text-[20px] leading-tight ${isLast ? 'text-emerald-600' : 'text-[#111111]'}`}>
                      {useCase.title}
                    </h3>
                    <p className="font-sans font-light text-[13px] text-[#888888] leading-[1.6]">
                      {useCase.sub}
                    </p>
                  </div>

                  {/* Column 3: Stacked Tool Logos overlapping */}
                  <div className="flex items-center -space-x-1.5 shrink-0 pl-4">
                    {useCase.tools.map((tool: any, tIdx: number) => (
                      <div 
                        key={tIdx} 
                        className="w-5 h-5 rounded-full border border-white bg-white shadow-xs flex items-center justify-center overflow-hidden relative z-10 hover:z-20 transform hover:scale-110 transition-transform select-none"
                      >
                        <img 
                          src={tool.logo} 
                          alt={tool.name} 
                          className="w-3.5 h-3.5 object-contain"
                          onError={e => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
