import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PainSection() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pain-item',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pain-list',
            start: 'top 65%'
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const pains = [
    {
      num: "01",
      tag: "THE DESIGN-to-CODE GAP",
      headline: "Beautiful Figma designs look clunky and unaligned on screen.",
      sub: "You approved gorgeous web designs, but the actual React product feels slow, missing fluid animations, mobile spacing collapses, and interactive visual rhythms look raw. Your premium brand feels compromised.",
      cost: "Yields a 35%+ drop-off in user trust on Day 1"
    },
    {
      num: "02",
      tag: "THE OUTSOURCED NIGHTMARE",
      headline: "Offshore freelancers or giant agencies that disappear mid-sprint.",
      sub: "Slow response times, massive timezone lags, and shifting developer assignments. Your budget is drained on endless PM meetings, while the timeline slips by 3 to 6 months without a working product.",
      cost: "Averages $20,005 in unrecouped engineering costs"
    },
    {
      num: "03",
      tag: "THE SPAGHETTI BASE",
      headline: "The system runs on fragile shortcuts that won't scale.",
      sub: "A junior coder threw together a messy build. Databases have raw text columns, APIs lack structured error layers, and there is no type safety. Your MVP is a brittle deck of cards waiting to collapse.",
      cost: "Demands a complete $40K+ rewrite before scaling"
    },
    {
      num: "04",
      tag: "THE SUBSCRIPTION ROULETTE",
      headline: "Stripe integration breaks when users change billing tiers.",
      sub: "Multi-tenant logic, tiered pricing matrix, grace periods, trial pauses, and invoice webhooks are hard. If your billing layer is fragile, you leak money every time a card is declined or updated.",
      cost: "Leaks up to 18% of early-stage recurring revenue"
    },
    {
      num: "05",
      tag: "THE SECURITY VOID",
      headline: "User auth and database tables are wide open to leaks.",
      sub: "Basic credentials saved as raw state. Row-Level Security (RLS) policies left open in Supabase, meaning any technical user can access your database tables. Your customers' IP is not secure.",
      cost: "Creates immense legal liability & loss of brand integrity"
    },
    {
      num: "06",
      tag: "THE OVER-ENGINEERED TRAP",
      headline: "Months spent building infrastructure that users don't need.",
      sub: "Instead of shipping a functional core, your developer spent 3 months coding complex scaling systems, custom chat servers, and multiple dashboards. You run out of runway before launching.",
      cost: "Wastes 10–12 weeks of high-intent market window"
    }
  ];

  return (
    <div className="w-full bg-[#fafafc] text-[#111111] py-[140px] px-6 select-none relative z-10 border-b border-[#e8e6e3]">
      <div className="max-w-[800px] mx-auto text-left">
        
        {/* Opening Statement */}
        <h2 className="font-display font-medium text-[#111111] text-[42px] sm:text-[64px] tracking-[-0.03em] leading-[1.05] mb-[80px] text-center">
          Sound familiar?
        </h2>

        {/* 6 pain items list */}
        <div ref={listRef} className="pain-list divide-y divide-black/[0.06]">
          {pains.map((pain, idx) => (
            <div 
              key={idx}
              className="pain-item py-12 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 sm:gap-10 items-start border-t border-black/[0.06]"
            >
              <div className="font-display font-bold text-6xl sm:text-[72px] text-black/[0.04] leading-none select-none">
                {pain.num}
              </div>
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-[#7c3aed] font-extrabold tracking-widest uppercase block">
                  {pain.tag}
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-[30px] leading-[1.15] text-[#111111] tracking-tight">
                  {pain.headline}
                </h3>
                <p className="font-sans font-light text-[15px] sm:text-base text-[#555555] leading-relaxed">
                  {pain.sub}
                </p>
                <div className="font-mono text-xs text-[#7c3aed]/80 pt-2 uppercase tracking-wide font-semibold">
                  Cost: {pain.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Panel */}
        <div className="pt-20 mt-20 border-t border-black/[0.06] text-center space-y-6">
          <h3 className="font-display font-bold text-[32px] sm:text-[52px] leading-[1.1] text-[#111111] tracking-[-0.03em]">
            An MVP isn't a draft.<br />
            It is your first impression.
          </h3>
          <p className="font-sans font-light text-[16px] sm:text-[17px] text-[#555555] max-w-[480px] mx-auto leading-relaxed">
            Don't compromise your initial launch. Build a lean, production-grade foundation that converts early users from day one.
          </p>
        </div>

      </div>
    </div>
  );
}
