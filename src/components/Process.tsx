import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    num: "01",
    title: "Discovery & scoping",
    desc: "A targeted 20-minute strategy briefing. We examine your user flows, active technological stack, and project deliverables thoroughly. No generic intake forms, no sales pitches.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    badge: "20 Min Scoping"
  },
  {
    num: "02",
    title: "Fixed-scope roadmap",
    desc: "Within 48 hours, you receive a written engineering contract: precise project timeline, week-by-week delivery gates, and guaranteed flat pricing. Not an estimate, a contract.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    badge: "Guaranteed Timeline"
  },
  {
    num: "03",
    title: "Weekly sprint iterations",
    desc: "We build in rapid 1-week cycles with live demo previews. You receive weekly recorded video updates detailing exact code changes, keeping you in complete control.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    badge: "1-Week Gates"
  },
  {
    num: "04",
    title: "Production launch & handoff",
    desc: "Deploying directly to your hosting environments with 100% automated test coverage. We transfer all repository ownership and IP rights immediately — zero vendor lock-in.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    badge: "100% IP Handoff"
  }
];

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STEPS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleStepSelect = (idx: number) => {
    setActiveIdx(idx);
    setAutoPlay(false);
  };

  return (
    <section className="py-24 border-b border-gray-200 bg-white" id="process">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-start">
        
        {/* Left Column Sticky Section info & Image rendering */}
        <div className="lg:sticky lg:top-24 text-left">
          <SectionHeader label="How we work" />
          <h2 className="font-display-scale text-gray-950 mb-6">
            Predictable from day one.
          </h2>
          <p className="font-sans font-light text-sm text-gray-500 leading-relaxed mb-10 max-w-[360px]">
            We stripped away standard agency layers. Flat pricing, guaranteed milestones, and bulletproof code delivery.
          </p>

          {/* Clean Active Image Display Frame */}
          <div className="relative w-full h-[240px] md:h-[280px] bg-neutral-100 border border-gray-200 overflow-hidden rounded-lg">
            {STEPS.map((step, idx) => (
              <img
                key={step.num}
                src={step.image}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeIdx === idx
                    ? "opacity-100 scale-102 z-10"
                    : "opacity-0 scale-100 z-0"
                }`}
                alt={step.title}
                referrerPolicy="no-referrer"
              />
            ))}
            
            {/* Overlay tag label */}
            <div className="absolute bottom-4 left-4 z-20 bg-gray-950 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded">
              {STEPS[activeIdx].badge}
            </div>
          </div>
        </div>

        {/* Right Column Custom Typographic Accordion List */}
        <div className="flex flex-col border-t border-gray-200 w-full">
          {STEPS.map((step, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={step.num}
                onClick={() => handleStepSelect(idx)}
                className={`group cursor-pointer py-8 border-b border-gray-200 text-left transition-colors flex flex-col`}
              >
                {/* Accordion Row Trigger */}
                <div className="flex items-center gap-6 select-none">
                  <span className={`font-mono text-xs font-semibold ${
                    isActive ? "text-[#7c3aed]" : "text-gray-300 group-hover:text-gray-400"
                  } transition-colors`}>
                    {step.num}
                  </span>
                  
                  <h4 className={`font-display font-medium text-lg leading-tight ${
                    isActive ? "text-gray-950" : "text-gray-400 group-hover:text-gray-700"
                  } transition-colors`}>
                    {step.title}
                  </h4>

                  {isActive && (
                    <span className="ml-auto font-mono text-[9px] text-emerald-600 tracking-wider font-semibold bg-emerald-50 px-1.5 py-0.5 rounded uppercase">
                      ACTIVE STEP
                    </span>
                  )}
                </div>

                {/* Content Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 h-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans font-light text-sm text-gray-500 leading-relaxed max-w-xl pl-10 pr-6">
                      {step.desc}
                    </p>
                    
                    <div className="flex items-center gap-1.5 pl-10 mt-5 text-[#7c3aed] font-mono text-[10px] font-semibold uppercase tracking-wider">
                      <a href="#cta" className="hover:underline">
                        Align scope with our squad &nbsp;→
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
