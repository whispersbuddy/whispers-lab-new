import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, X, Sparkles, Cpu, HardDrive, ShoppingBag, Radio, ArrowUpRight, CheckCircle2, Eye, ArrowDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  num: string;
  name: string;
  tag: string;
  info: string;
  image: string;
  metrics: Metric[];
  outcome: string;
  fullStory: string;
  detailedStack: string[];
  handoffDetails: string;
  icon: React.ReactNode;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    num: "01",
    name: "Aether Dashboard",
    tag: "SaaS MVP Development",
    info: "Fintech Systems · Toronto · 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    outcome: "40% increase in product retention. Rebuilt slow query calculations into synchronous real-time telemetry.",
    metrics: [
      { value: "+40%", label: "User Retention" },
      { value: "< 120ms", label: "Query Latency" },
      { value: "7 Weeks", label: "Delivery Speed" }
    ],
    fullStory: "Aether had thousands of active financial advisors struggling with slow static reporting. WhispersLab stepped in to audit, rebuild, and optimize their data collection tier. We replaced their legacy query engines with structured Next.js caching and Redis indices. The interface now delivers instantly, lowering average query load-time under 120ms and driving user retention up by 40% in Q3.",
    detailedStack: ["Next.js", "PostgreSQL", "Redis cache", "D3.js Charts", "Tailwind CSS"],
    handoffDetails: "Full monorepo ownership transfer, complete unit testing suites with 98% coverage, visual container orchestration manuals.",
    icon: <Cpu className="text-blue-500 w-5 h-5" />
  },
  {
    num: "02",
    name: "Nexus Logic Flow",
    tag: "Workflow Automation",
    info: "Agency Operations · Vancouver · 2024",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
    outcome: "Saves 22+ engineering hours every week. Unified customer intake, contract loops, and reporting boards.",
    metrics: [
      { value: "22 Hrs", label: "Recovered Weekly" },
      { value: "$4,800", label: "Overhead Excluded" },
      { value: "3 Weeks", label: "Delivery Time" }
    ],
    fullStory: "Nexus executive members spent hours manual-shifting customer data across forms, calendars, and spreadsheets. We audited the operational workflows and structured a self-healing automation tier using n8n. Now, contracts output instantly on signature triggers, onboarding calendars invite automatically, and weekly reporting lists compile with absolute zero human keystrokes.",
    detailedStack: ["n8n.io Core", "GoHighLevel API", "DocuSign Webhooks", "OpenAI Assistant API", "Google Sheets Integration"],
    handoffDetails: "Visual dependency maps, recorded video training guides on custom Javascript nodes, and 2 weeks live SLA monitoring.",
    icon: <HardDrive className="text-purple-500 w-5 h-5" />
  },
  {
    num: "03",
    name: "Vanta Flagship Store",
    tag: "Commerce Engineering",
    info: "DTC Apparel · California · 2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    outcome: "120% YoY top-line revenue rise. Built performant custom themes with lightning CDN pre-fetching.",
    metrics: [
      { value: "+120%", label: "YoY Revenue Rise" },
      { value: "100/100", label: "Lighthouse Score" },
      { value: "< 1.0s", label: "Time To Interactive" }
    ],
    fullStory: "Vanta demanded a web experience representing the premium nature of their high-end streetwear. Standard themes was holding back conversions on mobile. We designed and hand-coded a headless commerce front-end, optimized image delivery layers, and tuned Liquid queries. The user path is lightning fast, decreasing cart checkout abandonment by 32% and driving 120% YoY sales growth.",
    detailedStack: ["Shopify Liquid", "Tailwind CSS Spec", "Google Lighthouse SEO Tuning", "Cloudflare pre-fetching webhooks"],
    handoffDetails: "Style token systems manual, customized checkout automation recipes, auto-deploy actions on GitHub.",
    icon: <ShoppingBag className="text-amber-500 w-5 h-5" />
  },
  {
    num: "04",
    name: "Stellar Cloud Engine",
    tag: "AI Specialty Service",
    info: "Deep-Tech Scale · New York · 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    outcome: "Real-time auto-routing of $2M+ monthly ad budgets. Dynamic semantic LLM classifier lines.",
    metrics: [
      { value: "$2M+", label: "Monthly Ad Budget" },
      { value: "99.4%", label: "Routing Accuracy" },
      { value: "12 Days", label: "Build to Deploy" }
    ],
    fullStory: "Stellar required instantaneous scoring, classification and dispatch of thousands of high-value incoming campaign tenders. WhispersLab deployed custom vector embeddings and OpenAI classifiers to parse structural briefs, target the correct Sales branch, and post instant telemetry to Slack. All functions achieve response windows under 4 seconds with perfect uptime.",
    detailedStack: ["Node.js Express", "OpenAI Assistant", "Pinecone Vector DB", "Slack Alerts API", "Docker Container Engines"],
    handoffDetails: "Detailed Swagger API parameters, database indexing rate-limit runbooks, diagnostic telemetry datasets.",
    icon: <Radio className="text-emerald-500 w-5 h-5" />
  }
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalCase, setModalCase] = useState<CaseStudy | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run GSAP pinning animation on desktop viewports (lg >= 1024px) using a clean context
    const ctx = gsap.context(() => {
      const matchMediaObj = gsap.matchMedia();

      matchMediaObj.add("(min-width: 1024px)", () => {
        if (!containerRef.current || !pinRef.current) return;

        const slides = gsap.utils.toArray(".case-slide") as HTMLElement[];
        const totalItems = slides.length;

        // Initial setup for absolutely layered slides
        gsap.set(slides, {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1,
          pointerEvents: (i) => i === 0 ? "auto" : "none"
        });

        // Set up the premium staggered slide parts
        slides.forEach((slide, i) => {
          if (i === 0) {
            const titleWrap = slide.querySelector(".case-title-wrap");
            if (titleWrap) {
              gsap.set(titleWrap, { opacity: 1, y: 0 });
            }
          } else {
            const img = slide.querySelector(".case-image-wrap");
            const text = slide.querySelector(".case-text-wrap");
            if (img) {
              gsap.set(img, { opacity: 0, scale: 1.12, yPercent: 30 });
            }
            if (text) {
              gsap.set(text, { opacity: 0, yPercent: 40 });
            }
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: pinRef.current, // Pin the inner viewport instead of the root section
            scrub: 1.1,
            start: "top top",
            end: () => `+=${totalItems * 120}%`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              let index = Math.floor(p * totalItems);
              if (index >= totalItems) index = totalItems - 1;
              if (index < 0) index = 0;
              setActiveIndex(index);
            }
          }
        });

        // Animate sequential transitions: current parts shrink & exit up, next parts rise beautifully
        for (let i = 0; i < totalItems - 1; i++) {
          const positionLabel = `transition_${i}`;

          // Outgoing slide logic (Slide [i])
          if (i === 0) {
            const titleWrap = slides[0].querySelector(".case-title-wrap");
            if (titleWrap) {
              tl.to(titleWrap, {
                opacity: 0,
                y: -100,
                duration: 1,
                ease: "power2.inOut"
              }, positionLabel);
            }
          } else {
            const prevImg = slides[i].querySelector(".case-image-wrap");
            const prevText = slides[i].querySelector(".case-text-wrap");
            if (prevImg) {
              tl.to(prevImg, {
                opacity: 0,
                scale: 0.88,
                yPercent: -20,
                duration: 1,
                ease: "power2.inOut"
              }, positionLabel);
            }
            if (prevText) {
              tl.to(prevText, {
                opacity: 0,
                yPercent: -20,
                duration: 1,
                ease: "power2.inOut"
              }, positionLabel);
            }
          }
          tl.to(slides[i], { pointerEvents: "none" }, positionLabel);

          // Incoming slide logic (Slide [i + 1])
          const nextImg = slides[i + 1].querySelector(".case-image-wrap");
          const nextText = slides[i + 1].querySelector(".case-text-wrap");

          if (nextImg) {
            tl.to(nextImg, {
              opacity: 1,
              scale: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2.inOut"
            }, positionLabel);
          }
          if (nextText) {
            tl.to(nextText, {
              opacity: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2.inOut"
            }, positionLabel);
          }
          tl.to(slides[i + 1], { pointerEvents: "auto" }, positionLabel);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section 
        ref={containerRef} 
        className="relative bg-gray-950 border-gray-950 select-none overflow-hidden text-white" 
        id="work"
      >
        
        {/* DESKTOP PINNED VIEWPORT (Available >= 1024px) */}
        <div ref={pinRef} className="case-studies-pin-target hidden lg:block w-full h-screen relative bg-gray-950 overflow-hidden">
          
          {/* Slider Vertical Stack Viewport Container */}
          <div className="w-full h-full relative">
            
            {/* Slide 0: Central Title Slide (shows when scroll into section) */}
            <div className="case-slide absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-8">
              <div className="case-title-wrap max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-[#a78bfa] font-bold mb-4">
                  Portfolio Showcase
                </span>
                <h2 className="font-display font-medium text-white text-6xl md:text-8xl tracking-tight leading-none mt-4">
                  From Brief to Shipped.
                </h2>
                <p className="font-sans font-light text-base md:text-lg text-gray-400 mt-6 max-w-xl leading-relaxed">
                  Explore a selected series of production deliverables optimized for performance, scalability, and seamless software engineering.
                </p>
                <div className="mt-12 flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#a78bfa] font-extrabold animate-pulse">
                    Scroll down to explore case files
                  </span>
                  <ArrowDown size={16} className="text-[#a78bfa] animate-bounce mt-1" />
                </div>
              </div>
            </div>

            {/* Case Studies Slides 1 to N */}
            {CASE_STUDIES.map((project) => (
              <div
                key={project.num}
                className="case-slide absolute inset-0 w-full h-full flex items-center justify-center px-16 lg:px-24"
              >
                <div className="max-w-[1280px] w-full grid grid-cols-12 gap-16 xl:gap-24 items-center">
                  
                  {/* Left Column: Image Frame (7 Cols) - Generous size with modern hover & overlay */}
                  <div className="case-image-wrap col-span-12 lg:col-span-7 h-[460px] xl:h-[540px] relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] border border-gray-800 bg-gray-900 group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge details on image */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="font-mono text-[9.5px] uppercase tracking-widest font-extrabold bg-[#7c3aed] text-white px-3.5 py-2 rounded-full shadow-lg">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Content Panel (5 Cols) - Highly structured & elegant */}
                  <div className="case-text-wrap col-span-12 lg:col-span-5 flex flex-col justify-center text-left space-y-6">
                    <span className="font-mono text-xs text-[#a78bfa] block font-bold uppercase tracking-wider">
                      {project.info}
                    </span>

                    <h3 className="font-display font-medium text-4.5xl xl:text-5.5xl text-white leading-[1.05] tracking-tight">
                      {project.name}
                    </h3>

                    <p className="font-sans font-light text-base xl:text-lg text-gray-300 leading-relaxed">
                      {project.outcome}
                    </p>

                    {/* Verifiable quantitative metrics strip */}
                    <div className="grid grid-cols-3 gap-6 border-t border-b border-gray-800/80 py-6">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="space-y-1">
                          <div className="font-display text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            {metric.value}
                          </div>
                          <div className="font-sans font-light text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trigger View more option - High Contrast Premium Button */}
                    <button
                      onClick={() => setModalCase(project)}
                      className="inline-flex items-center gap-2.5 bg-white text-gray-950 rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-gray-100 hover:scale-[1.03] active:scale-95 transition-all w-fit cursor-pointer group shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    >
                      <span>Read full story</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* MOBILE & TABLET LAYOUT (Available < 1024px) */}
        <div className="block lg:hidden max-w-[1280px] mx-auto px-6 py-20 text-left bg-gray-950 text-white">
          
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a78bfa] block mb-2 font-bold">
              Case studies
            </span>
            <h2 className="font-display font-medium text-[32px] text-white leading-tight tracking-tight">
              From brief to shipped.
            </h2>
            <p className="font-sans font-light text-sm text-gray-400 mt-3 max-w-sm leading-relaxed">
              Verifiable case studies. Built to strict performance benchmarks.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {CASE_STUDIES.map((project) => (
              <div 
                key={project.num}
                className="border border-gray-800/80 bg-gray-900/40 rounded-2xl overflow-hidden shadow-lg text-left bg-gray-900/50"
              >
                {/* Responsive Image */}
                <div className="h-[210px] w-full relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-wider font-extrabold bg-[#7c3aed] text-white px-2 py-0.5 rounded">
                    {project.tag}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#a78bfa] font-bold block mb-1">
                      {project.info}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {project.name}
                    </h3>
                  </div>

                  <p className="font-sans font-light text-xs text-gray-300 leading-relaxed">
                    {project.outcome}
                  </p>

                  <div className="grid grid-cols-3 gap-2 border-t border-b border-gray-800/80 py-3.5 my-4">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div className="font-display text-[15px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                          {metric.value}
                        </div>
                        <div className="font-sans text-[10px] text-gray-400 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trigger View more option */}
                  <button
                    onClick={() => setModalCase(project)}
                    className="w-full text-center py-2.5 bg-white text-gray-950 hover:bg-gray-100 transition-colors font-mono text-[10.5px] uppercase font-bold tracking-wider rounded-lg block cursor-pointer"
                  >
                    View detailed story &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* RICH CASE STUDY DETAIL DEEP-DIVE MODAL (UPGRADED DARK COMPOSITE THEME) */}
      {modalCase && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
          onClick={() => setModalCase(null)}
        >
          <div 
            className="w-full max-w-[760px] bg-[#0d0d12] rounded-2xl overflow-hidden shadow-[0_24px_85px_rgba(0,0,0,0.8)] border border-gray-800/80 relative animate-in fade-in zoom-in-95 duration-300 text-left flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header image slide card banner */}
            <div className="relative h-[200px] sm:h-[240px] shrink-0">
              <img
                src={modalCase.image}
                alt={modalCase.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/50 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setModalCase(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer border border-gray-800"
                aria-label="Close detailed case study panel"
              >
                <X size={16} />
              </button>

              <div className="absolute bottom-6 left-6 text-white text-left space-y-1">
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] block">
                  {modalCase.tag}
                </span>
                <h2 className="font-display font-medium text-2xl sm:text-3.5xl tracking-tight text-white leading-none">
                  {modalCase.name}
                </h2>
              </div>
            </div>

            {/* Scrollable Detailed Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 bg-[#0d0d12] text-gray-200">
              
              {/* Top Context row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-gray-800/60">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">INFO</span>
                  <p className="font-sans text-sm text-gray-300 font-medium">{modalCase.info}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">BENCHMARK OUTCOME</span>
                  <p className="font-sans text-sm text-gray-300 font-medium">{modalCase.outcome}</p>
                </div>
              </div>

              {/* Metrics Ribbon block */}
              <div className="space-y-3">
                <h3 className="font-mono text-[11px] text-gray-400 uppercase tracking-wider font-bold">
                  Verified Analytical Gains
                </h3>
                <div className="grid grid-cols-3 gap-4 bg-gray-900/60 border border-gray-850 rounded-xl p-5">
                  {modalCase.metrics.map((metric, idx) => (
                    <div key={idx} className="text-left">
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-cyan-400">
                        {metric.value}
                      </div>
                      <div className="font-sans font-light text-[11px] text-gray-400 mt-1 leading-snug">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Narrative Story copy block */}
              <div className="space-y-3 text-left">
                <h3 className="font-mono text-[11px] text-gray-400 uppercase tracking-wider font-bold">
                  The Detailed Story
                </h3>
                <div className="font-sans font-light text-sm text-gray-300 leading-relaxed space-y-4">
                  <p>{modalCase.fullStory}</p>
                </div>
              </div>

              {/* Technologies deployed stack list tags */}
              <div className="space-y-3">
                <h3 className="font-mono text-[11px] text-gray-400 uppercase tracking-wider font-bold">
                  Technologies Deployed &amp; Integration API Connectors
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {modalCase.detailedStack.map((tech) => (
                    <span 
                      key={tech}
                      className="font-mono text-xs text-purple-300 bg-purple-950/40 border border-purple-900/50 rounded px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Handover & IP scope details */}
              <div className="space-y-2 pt-4 border-t border-gray-800/80">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider font-extrabold block">
                  Delivery &amp; Handover Specs:
                </span>
                <div className="flex gap-2.5 items-start bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <p className="font-sans font-light text-xs text-emerald-300 leading-relaxed">
                    {modalCase.handoffDetails}
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Modal Close drawer controls footer */}
            <div className="p-4 bg-gray-900/40 border-t border-gray-800/80 shrink-0 text-right flex items-center justify-between">
              <span className="font-sans text-[11px] text-gray-450 italic">
                WhispersLab guaranteed outcome scope &copy; {new Date().getFullYear()}
              </span>
              <button
                onClick={() => setModalCase(null)}
                className="bg-white text-gray-950 font-mono text-[11px] uppercase tracking-wider font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Dismiss Case File
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

