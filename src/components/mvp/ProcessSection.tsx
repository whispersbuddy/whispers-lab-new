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

    const panels = gsap.utils.toArray('.process-step-panel-mvp') as HTMLElement[];
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
        const stepNum = document.querySelector('.process-step-number-mvp');
        if (stepNum) stepNum.textContent = `0${activeIdx + 1}`;

        const progBar: any = document.querySelector('.process-progress-mvp');
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
      label: "Blueprint Creation",
      title: "Data Models & Integrations.",
      desc: "First, we design a complete blueprint of your database and API integrations. Over an active mapping call, we'll sketch out exactly how data will flow. You'll review and approve this clear web profile map, so you know exactly what is being built before we write any code.",
      durationText: "Duration: Week 1",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=90&fit=crop",
      imageAlt: "Team mapping out database architecture schemes"
    },
    {
      number: "02",
      label: "Secure Datastores",
      title: "Clean database and security.",
      desc: "Next, we spin up your cloud database and secure everything. We construct isolated user accounts, multi-tenant locks, and safe credentials, ensuring that files and user profiles are bulletproof. This solid baseline gets your app fully ready for actual user registration.",
      durationText: "Duration: Week 2",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90&fit=crop",
      imageAlt: "Designing clean and secure Supabase database environments"
    },
    {
      number: "03",
      label: "Payment Connections",
      title: "Stripe setup & checkouts.",
      desc: "With the database locked, we configure your payment system. We translate your commercial pricing packages into live checkout pages, configure multi-tier customer subscriptions, and build automatic failed-payment alerts. Everything syncs back into your Postgres schema smoothly.",
      durationText: "Duration: Week 3–4",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=90&fit=crop",
      imageAlt: "Configuring premium Stripe payment layers"
    },
    {
      number: "04",
      label: "Dashboard Development",
      title: "Responsive custom views.",
      desc: "Once payments and servers are synced, we bring the user interface to life. We code beautiful responsive workspaces, high-speed interactive tables, and user control hubs using sleek React components. Your interface is dialed in for absolute speed and looks gorgeous on iPhones and large displays alike.",
      durationText: "Duration: Week 4–5",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=90&fit=crop",
      imageAlt: "Translating mockups into elegant React responsive code"
    },
    {
      number: "05",
      label: "Deployment & Shift",
      title: "Live release & handovers.",
      desc: "Finally, we run extensive automated tests to prevent and catch edge cases, package personalized video tutorials describing every system route, and transfer 100% intellectual property rights to you. Your MVP is fully completed, deployed live, and ready to sign up paying clients.",
      durationText: "Duration: Week 6",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=90&fit=crop",
      imageAlt: "Performing automated deployment routines"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0c0c0e] border-b border-white/[0.04] pb-[60px] md:pb-[100px] select-none text-white h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Sticky navigation metrics header */}
      <div 
        className="bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/[0.04] py-5 px-6 md:px-16 flex items-center justify-between text-white w-full shrink-0"
      >
        <div className="flex items-center gap-4 text-left">
          <span className="font-mono text-[11px] text-white/40 font-bold uppercase tracking-wider">STATE</span>
          <span className="process-step-number-mvp font-display text-4xl font-bold text-white leading-none">01</span>
          <span className="font-mono text-[11px] text-white/40"> / 05</span>
        </div>

        {/* Dynamic fluid progress bar */}
        <div className="hidden sm:block flex-1 max-w-[300px] h-[2px] bg-white/10 rounded-full mx-10">
          <div 
            className="process-progress-mvp h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"
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
              className="process-step-panel-mvp absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center text-left"
            >
              {/* Left Column — Clean raw typography, no backgrounds or boxes */}
              <div className="space-y-4">
                <span className="font-mono text-[11px] text-purple-400 uppercase tracking-[0.14em] block font-bold">
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
