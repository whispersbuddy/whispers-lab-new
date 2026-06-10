import React, { useEffect, useRef } from "react";
import { Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const panels = gsap.utils.toArray('.process-step-panel-eco') as HTMLElement[];
    const totalPanels = panels.length;

    // Create a master ScrollTrigger that pins the entire ProcessSection in place
    // while the user scrubs through each phase. This guarantees only 1 phase is visible at a time.
    const mainTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${totalPanels * 130}%`, // Scroll distance (scrubbing length)
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIdx = Math.min(
          Math.floor(progress * totalPanels),
          totalPanels - 1
        );

        // Update indicator states
        const stepNum = document.querySelector('.process-step-number-eco');
        if (stepNum) stepNum.textContent = `0${activeIdx + 1}`;

        const progBar: any = document.querySelector('.process-progress-eco');
        if (progBar) {
          gsap.to(progBar, {
            width: `${(activeIdx + 1) * 20}%`,
            duration: 0.2
          });
        }

        // Keep inactive slides completely invisible to eliminate distractions
        panels.forEach((panel, idx) => {
          if (idx === activeIdx) {
            gsap.to(panel, {
              opacity: 1,
              y: 0,
              scale: 1,
              pointerEvents: "auto",
              duration: 0.35,
              overwrite: "auto"
            });
          } else if (idx < activeIdx) {
            // Previous slide vanishes into upper space
            gsap.to(panel, {
              opacity: 0,
              y: -50,
              scale: 0.95,
              pointerEvents: "none",
              duration: 0.35,
              overwrite: "auto"
            });
          } else {
            // Future slides wait in lower space
            gsap.to(panel, {
              opacity: 0,
              y: 50,
              scale: 0.95,
              pointerEvents: "none",
              duration: 0.35,
              overwrite: "auto"
            });
          }
        });
      }
    });

    // Seed initial position state for render layout alignment
    panels.forEach((panel, i) => {
      if (i === 0) {
        gsap.set(panel, { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" });
      } else {
        gsap.set(panel, { opacity: 0, y: 50, scale: 0.95, pointerEvents: "none" });
      }
    });

    return () => {
      mainTrigger.kill();
    };
  }, []);

  const stepItems = [
    {
      number: "01",
      label: "UX Strategy & Mapping",
      title: "Conversion paths & schemas.",
      desc: "First, we analyze how your buyers browse. Over an active strategy session, we sketch out shopping paths, layout logic, and catalog groupings on paper. You approve this visual map before we assemble any custom theme sections.",
      durationText: "Duration: Week 1",
      image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800&q=90&fit=crop",
      imageAlt: "Planning conversion paths and user flows"
    },
    {
      number: "02",
      label: "Custom Liquid Overhaul",
      title: "Assembling clean themes.",
      desc: "Next, we build your storefront layout. We write custom Liquid code from scratch, deliberately skipping bloated Shopify apps and slow templates. Your custom tables and cards load instantly, optimized for high conversion.",
      durationText: "Duration: Week 2–3",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90&fit=crop",
      imageAlt: "Coding custom Shopify Theme structures"
    },
    {
      number: "03",
      label: "Real-Time Product Search",
      title: "Predictive instantaneous search.",
      desc: "With layout modules written, we optimize browsing. We configure fast predictive search grids and intuitive selectors. Buyers get instant results and fast filters to easily find and tap exactly what they want.",
      durationText: "Duration: Week 3–4",
      image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52?w=800&q=90&fit=crop",
      imageAlt: "Configuring high-speed Algolia index matrices"
    },
    {
      number: "04",
      label: "Retention Automation Suite",
      title: "Klaviyo retention syncs.",
      desc: "Once the storefront is ready, we set up your customer engines. We integrate secure tracking actions and configure smart Klaviyo email flows. Abandoned carts, customer welcomes, and delivery updates trigger automatically.",
      durationText: "Duration: Week 4–5",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=90&fit=crop",
      imageAlt: "Configuring automated Klaviyo campaign flows"
    },
    {
      number: "05",
      label: "Performance Calibrations",
      title: "Speed calibrations and handovers.",
      desc: "Finally, we run full sandbox checkout trials, audit Core Web Vitals speed indexes on actual mobile phones, test stock API syncs, and deploy live. You receive complete training videos to manage everything easily.",
      durationText: "Duration: Week 6",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=90&fit=crop",
      imageAlt: "Performing deployment checks and handovers"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0c0c0e] border-b border-white/[0.04] pb-[60px] md:pb-[100px] select-none text-white h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Sticky navigation metrics header */}
      <div 
        className="bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/[0.04] py-5 px-6 md:px-16 flex items-center justify-between text-white w-full shrink-0"
      >
        <div className="flex items-center gap-4 text-left">
          <span className="font-mono text-[11px] text-white/40 font-bold uppercase tracking-wider">RETAIL</span>
          <span className="process-step-number-eco font-display text-4xl font-bold text-white leading-none">01</span>
          <span className="font-mono text-[11px] text-white/40"> / 05</span>
        </div>

        {/* Dynamic fluid progress bar */}
        <div className="hidden sm:block flex-1 max-w-[300px] h-[2px] bg-white/10 rounded-full mx-10">
          <div 
            className="process-progress-eco h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"
            style={{ width: "20%", transition: "width 0.3s ease" }}
          />
        </div>

        <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase font-bold">
          Our 6-Week Roadmap
        </span>
      </div>

      {/* Presentation Display Board */}
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 md:px-16 relative flex items-center justify-center">
        <div className="relative w-full h-[85%] max-h-[580px] lg:max-h-[460px]">
          {stepItems.map((step, idx) => (
            <div 
              key={idx}
              className="process-step-panel-eco absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center text-left"
            >
              {/* Left Column — Clean raw typography, no backgrounds or boxes */}
              <div className="space-y-4">
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-[0.14em] block font-bold">
                  PHASE {step.number} &mdash; {step.label}
                </span>
                <h3 className="font-display font-medium text-[32px] sm:text-[48px] lg:text-[54px] text-white tracking-[-0.03em] leading-[1.05] mb-2">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-[460px]">
                  {step.desc}
                </p>
                
                {/* Duration flag */}
                <div className="font-mono text-xs text-white/40 pt-2 flex items-center gap-2">
                  <Clock size={13} className="text-white/30 shrink-0" />
                  <span>{step.durationText}</span>
                </div>
              </div>

              {/* Right Column — Professional photo with overlaid giant number */}
              <div className="w-full">
                <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[300px] lg:h-[360px] border border-white/[0.06] shadow-2xl">
                  <img 
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover select-none filter brightness-90 saturate-[0.8]"
                  />
                  
                  {/* Step number as beautiful faint background overlay */}
                  <div 
                    className="absolute top-6 right-6 font-display text-[80px] sm:text-[120px] font-bold text-white/15 leading-none tracking-[-0.05em] select-none pointer-events-none"
                    style={{ textShadow: "0 4px 30px rgba(0, 0, 0, 0.4)" }}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
