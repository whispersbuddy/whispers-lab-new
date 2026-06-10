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
      tag: "THE MORNING CHORE",
      headline: "Your leads are typed in by hand. Every single morning.",
      sub: "Someone on your team starts their day copying lead submissions from forms into your CRM. It takes 45 minutes of manual overhead. It is never 100% accurate. And it will never scale.",
      cost: "Wastes ~160 hours per employee per year"
    },
    {
      num: "02",
      tag: "THE BROKEN PROCESS",
      headline: "Client onboarding is a checklist nobody finishes.",
      sub: "Contract signature, welcome email sequences, client Slack environment spawning, CRM status updating, calendar links — all manual, all relying on someone remembering to do it.",
      cost: "Costs $800–$1,200 in manual labor per client"
    },
    {
      num: "03",
      tag: "THE COLD INTEL",
      headline: "Your pipeline report is a spreadsheet from last Friday.",
      sub: "By the time your weekly stats are collected, formatted, clean, and shared, the data is already stale. You are forced to make active, high-stakes decisions using cold, historic indicators.",
      cost: "Creates a 5-day data lag on strategic decisions"
    },
    {
      num: "04",
      tag: "THE SILENT CHURN",
      headline: "Failed payments go unnoticed until the client churns.",
      sub: "Stripe attempts a charge. It fails. Your team missed the email. The client's workspace access lapses in silence. They assume you don't care, and quietly migrate to a competitor.",
      cost: "Leads to a 2%–8% MRR leak from passive churn"
    },
    {
      num: "05",
      tag: "THE NOCODE CRISIS",
      headline: "You are running your entire ops on Zapier. And it breaks.",
      sub: "You hit your task limits. Webhooks silently fail. You only find out three days later when a high-value customer sends an angry complaint. Your 'temporary' workaround is now breaking point infrastructure.",
      cost: "Heavy subscription billing for broken queues"
    },
    {
      num: "06",
      tag: "THE BLACK HOLE",
      headline: "High-value sales leads drop through the cracks. Silently.",
      sub: "A hot inbound query arrives at 6:15 PM on Thursday. It remains completely unseen until Monday morning. By the time your representative replies, they have already signed with your fastest competitor.",
      cost: "Leads to a 31% drop-off in close probability"
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
                <span className="font-mono text-[10px] text-rose-500 font-extrabold tracking-widest uppercase block">
                  {pain.tag}
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-[30px] leading-[1.15] text-[#111111] tracking-tight">
                  {pain.headline}
                </h3>
                <p className="font-sans font-light text-[15px] sm:text-base text-[#555555] leading-relaxed">
                  {pain.sub}
                </p>
                <div className="font-mono text-xs text-rose-600/80 pt-2 font-semibold">
                  Cost: {pain.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Panel */}
        <div className="pt-20 mt-20 border-t border-black/[0.06] text-center space-y-6">
          <h3 className="font-display font-bold text-[32px] sm:text-[52px] leading-[1.1] text-[#111111] tracking-[-0.03em]">
            None of this is a people problem.<br />
            It's a systems problem.
          </h3>
          <p className="font-sans font-light text-[16px] sm:text-[17px] text-[#555555] max-w-[480px] mx-auto leading-relaxed">
            The fix is not hiring more people. The fix is building the system once.
          </p>
        </div>

      </div>
    </div>
  );
}
