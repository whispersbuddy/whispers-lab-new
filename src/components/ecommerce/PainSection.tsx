import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PainSection() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pain-item-eco',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pain-list-eco',
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
      tag: "THE SPEED TAX",
      headline: "Bloated themes and heavy trackers delaying page load metrics.",
      sub: "Every millisecond above a 1.2s loading window triggers a predictable drop in conversions. Heavy unoptimized media, rigid off-the-shelf templates, and messy tracker scripts create severe rendering lag, irritating visitors and tanking your organic Search rankings.",
      cost: "Yields a measurable 7% drop-off in conversions per second of lag"
    },
    {
      num: "02",
      tag: "THE FIGMA-TO-THEME COLLAPSE",
      headline: "Bespoke brand aesthetics compromised by rigid layout limits.",
      sub: "You designed a world-class shopping visual journey in Figma, but your generic template or drag-and-drop editor cannot execute it. Grid spacing shifts, custom product carousels stutter, and mobile typography collapses into clutter.",
      cost: "Averages 24% erosion of premium brand trust at first glance"
    },
    {
      num: "03",
      tag: "THE DISCONNECTED WAREHOUSE",
      headline: "Inventory and physical storage states desynced from checkout.",
      sub: "Oversells and missing stock records trigger expensive customer refunds and support debt. Without solid, low-latency API links between Shopify, ERPs, and warehouse units, your backend remains a chaotic house of cards.",
      cost: "Costs upwards of $12,500 monthly in support debt and refunds"
    },
    {
      num: "04",
      tag: "THE ABANDON LOOP",
      headline: "Friction-heavy cart sequences and clumsy input flows.",
      sub: "Forcing users to fill extensive forms without modern address completion, auto-detect tools, or integrated express payments. The moment checkout feels like administrative work, high-intent shopping carts are abandoned.",
      cost: "Responsible for up to 69% of lost high-intent transaction revenue"
    },
    {
      num: "05",
      tag: "THE TRAFFIC DRIFT",
      headline: "Scale performance crashing during high-volume ad drops.",
      sub: "A major creator or marketing campaign goes live, and your storefront stutters under the traffic spikes. Server response times jump to 10 seconds, databases throttle, and customers face infinite spinner icons instead of buy buttons.",
      cost: "Annihilates high-ROI marketing spends in minutes"
    },
    {
      num: "06",
      tag: "THE MANUAL HEADACHE",
      headline: "Reps spending hours compiling order logistics manually.",
      sub: "Exporting shipping CSVs, syncing tax fields, and resolving carrier updates via manual data entry. Your operations team is buried in administrative chores instead of building customer relationships or driving volume.",
      cost: "Wastes up to 15 hours of core staff labor every week"
    }
  ];

  return (
    <div className="w-full bg-[#fafafc] text-[#111111] py-[140px] px-6 select-none relative z-10 border-b border-[#e8e6e3]">
      <div className="max-w-[800px] mx-auto text-left">
        
        {/* Opening Statement */}
        <h2 className="font-display font-medium text-[#111111] text-[42px] sm:text-[64px] tracking-[-0.03em] leading-[1.05] mb-[80px] text-center">
          Retail friction kills margins.
        </h2>

        {/* 6 pain items list */}
        <div ref={listRef} className="pain-list-eco divide-y divide-black/[0.06]">
          {pains.map((pain, idx) => (
            <div 
              key={idx}
              className="pain-item-eco py-12 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 sm:gap-10 items-start border-t border-black/[0.06]"
            >
              <div className="font-display font-bold text-6xl sm:text-[72px] text-black/[0.04] leading-none select-none">
                {pain.num}
              </div>
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-emerald-600 font-extrabold tracking-widest uppercase block">
                  {pain.tag}
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-[30px] leading-[1.15] text-[#111111] tracking-tight">
                  {pain.headline}
                </h3>
                <p className="font-sans font-light text-[15px] sm:text-base text-[#555555] leading-relaxed">
                  {pain.sub}
                </p>
                <div className="font-mono text-xs text-emerald-600/85 pt-2 font-semibold">
                  Impact: {pain.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Panel */}
        <div className="pt-20 mt-20 border-t border-black/[0.06] text-center space-y-6">
          <h3 className="font-display font-bold text-[32px] sm:text-[52px] leading-[1.1] text-[#111111] tracking-[-0.03em]">
            Fast code converts.<br />
            Slow templates bleed.
          </h3>
          <p className="font-sans font-light text-[16px] sm:text-[17px] text-[#555555] max-w-[480px] mx-auto leading-relaxed">
            Don't let rigid tech stacks cap your e-commerce growth. Build custom Shopify architectures and tailored UI experiences engineered to convert.
          </p>
        </div>

      </div>
    </div>
  );
}
