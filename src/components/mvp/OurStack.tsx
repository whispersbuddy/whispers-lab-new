import React from "react";

export default function OurStack() {
  const tools = [
    {
      name: "Next.js",
      iconSlug: "nextdotjs",
      brandColor: "000000",
      percentage: "98%",
      filledCount: 5,
      desc: "Our primary tool for high-performance React web application architectures. Standard choices for worldwide CDN delivery, file-based routing, and dynamic page loads."
    },
    {
      name: "Supabase",
      iconSlug: "supabase",
      brandColor: "3FCF8E",
      percentage: "95%",
      filledCount: 5,
      desc: "Our choice for backend and data operations. Fully-managed PostgreSQL databases with native support for real-time web socket feeds, secure storage caches, and user authentication."
    },
    {
      name: "Stripe Subscriptions",
      iconSlug: "stripe",
      brandColor: "635BFF",
      percentage: "95%",
      filledCount: 5,
      desc: "Comprehensive billing engineering. We construct custom pricing models, secure Stripe checkout matrices, pro-rata tiers, and custom webhook callbacks synchronized in real-time."
    },
    {
      name: "Tailwind CSS",
      iconSlug: "tailwindcss",
      brandColor: "06B6D4",
      percentage: "98%",
      filledCount: 5,
      desc: "Modern utility layout engine. Allows for dense responsive designs, premium micro-animations, and fluid alignments without compromising Web page speed metrics."
    },
    {
      name: "TypeScript",
      iconSlug: "typescript",
      brandColor: "3178C6",
      percentage: "95%",
      filledCount: 5,
      desc: "100% type safety across the client frontend and server APIs. Prevents interface errors before deployment, saving months of expensive engineering redesign down the road."
    },
    {
      name: "OpenAI / Claude AI",
      iconSlug: "openai",
      brandColor: "412991",
      percentage: "90%",
      filledCount: 5,
      desc: "Integrate powerful cognitive capabilities directly into your SaaS workspace. Fine-tuned prompt engineering, semantic embeddings, and automated text parser bots."
    },
    {
      name: "Resend",
      iconSlug: "resend",
      brandColor: "000000",
      percentage: "92%",
      filledCount: 5,
      desc: "Modern, developer-first transactional email delivery. Outgoing SMTP pipelines configured for instantaneous onboarding dispatches, alert notices, and secure magic link logins."
    },
    {
      name: "Vercel",
      iconSlug: "vercel",
      brandColor: "000000",
      percentage: "95%",
      filledCount: 5,
      desc: "Elite edge hosting platform. Global serverless deployments that ensure perfect Core Web Vital speeds, auto-scaling traffic thresholds, and seamless GitHub actions code deploys."
    }
  ];

  return (
    <section id="mvp-tools" className="py-[100px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Table Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-medium text-[42px] sm:text-[64px] text-[#111111] tracking-[-0.03em] leading-[1.0]">
              Our premium <br />
              SaaS tech stack.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center h-full">
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#888888] max-w-[320px] leading-[1.75]">
              We build using modern, elite frameworks to guarantee performance, scaling security, and easy engineering handovers. No fragile no-code workarounds.
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
                          ? 'bg-gradient-to-tr from-purple-500 to-cyan-500'
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
