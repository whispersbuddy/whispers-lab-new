import React from "react";

export default function WhatWeBuild() {
  const logos = {
    nextjs: "https://cdn.simpleicons.org/nextdotjs/000000",
    supabase: "https://cdn.simpleicons.org/supabase/3FCF8E",
    stripe: "https://cdn.simpleicons.org/stripe/635BFF",
    tailwindcss: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    github: "https://cdn.simpleicons.org/github/181717",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    typescript: "https://cdn.simpleicons.org/typescript/3178C6",
    postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
    openai: "https://cdn.simpleicons.org/openai/412991",
    anthropic: "https://cdn.simpleicons.org/anthropic/CC9B7A",
    vercel: "https://cdn.simpleicons.org/vercel/000000"
  };

  const cases = [
    {
      num: "01",
      title: "User Authentication & Multi-Tenancy",
      sub: "Robust security loops including magic links, social logins (Google, GitHub), absolute session security, and clean multi-tenant workspace separation.",
      tools: [
        { name: "TypeScript", logo: logos.typescript },
        { name: "Supabase", logo: logos.supabase },
        { name: "Next.js", logo: logos.nextjs }
      ]
    },
    {
      num: "02",
      title: "Subscription & Billing Matrix",
      sub: "Tightly-engineered Stripe pricing models, custom trial sequences, pro-rata calculations, grace periods, and secure billing webhooks in sync with your DB.",
      tools: [
        { name: "Stripe", logo: logos.stripe },
        { name: "Supabase", logo: logos.supabase },
        { name: "Next.js", logo: logos.nextjs }
      ]
    },
    {
      num: "03",
      title: "Data Row Security & Database Setup",
      sub: "Optimized PostgreSQL databases with granular Row-Level Security (RLS) policies, indexes for sub-millisecond retrieval, and dynamic database schemas.",
      tools: [
        { name: "PostgreSQL", logo: logos.postgresql },
        { name: "Supabase", logo: logos.supabase },
        { name: "TypeScript", logo: logos.typescript }
      ]
    },
    {
      num: "04",
      title: "Core Business Logic & API Layer",
      sub: "Performant serverless API routes with strict type safety, automatic request validation boundaries, custom JSON errors, and rate limit protections.",
      tools: [
        { name: "Next.js", logo: logos.nextjs },
        { name: "TypeScript", logo: logos.typescript },
        { name: "Supabase", logo: logos.supabase }
      ]
    },
    {
      num: "05",
      title: "Premium Responsive User Interfaces",
      sub: "Interactive, fluid frontends styled to perfection with Tailwind CSS. Stutter-free entry transitions and layouts that work flawlessly on all devices.",
      tools: [
        { name: "React", logo: logos.react },
        { name: "Tailwind CSS", logo: logos.tailwindcss },
        { name: "Next.js", logo: logos.nextjs }
      ]
    },
    {
      num: "06",
      title: "Cognitive AI Operations & LLMs",
      sub: "Embed intelligence using OpenAI/Claude APIs. Integrate semantic search indexing, retrieval-augmented document parsing, or autonomous chat agents.",
      tools: [
        { name: "OpenAI", logo: logos.openai },
        { name: "Anthropic", logo: logos.anthropic },
        { name: "Supabase", logo: logos.supabase }
      ]
    },
    {
      num: "07",
      title: "Edge Deployments & Hosting Speed",
      sub: "Worldwide asset loading and serverless caching setups with absolute high Core Web Vital speed metric grades on Vercel or custom edge clusters.",
      tools: [
        { name: "Vercel", logo: logos.vercel },
        { name: "Next.js", logo: logos.nextjs },
        { name: "TypeScript", logo: logos.typescript }
      ]
    },
    {
      num: "08",
      title: "Automated QA & Deployment Pipeline",
      sub: "We implement absolute code coverage including GitHub workflows, end-to-end integration verifications, so you can ship features safely without manual QA.",
      tools: [
        { name: "GitHub", logo: logos.github },
        { name: "TypeScript", logo: logos.typescript },
        { name: "React", logo: logos.react }
      ]
    }
  ];

  return (
    <section id="mvp-what-we-build" className="py-[100px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-[120px] self-start space-y-4">
            <div className="font-display font-bold text-[200px] text-[#7c3aed]/5 leading-none select-none tracking-tighter">
              8
            </div>
            <h2 className="font-display font-medium text-[42px] text-[#111111] tracking-[-0.03em] leading-[1.0] text-left">
              8 core layers <br />
              we build for you.
            </h2>
            <p className="font-sans font-light text-[15px] text-[#888888] max-w-[240px] leading-[1.7] text-left">
              Bespoke, production-grade SaaS infrastructure delivered in a 6-week fixed scope.
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
                    <h3 className={`font-display font-semibold text-[20px] leading-tight ${isLast ? 'text-[#7c3aed]' : 'text-[#111111]'}`}>
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
