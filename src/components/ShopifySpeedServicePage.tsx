import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import BookingSection from "./BookingSection";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

interface ShopifySpeedServicePageProps {
  handleNavigateHome: () => void;
}

export default function ShopifySpeedServicePage({ handleNavigateHome }: ShopifySpeedServicePageProps) {
  // Global premium scroll animations
  useScrollAnimations();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const speedLogos = [
    { url: 'https://cdn.simpleicons.org/shopify/96BF48', name: 'Shopify' },
    { url: 'https://cdn.simpleicons.org/pagespeedinsights/4285F4', name: 'Google PageSpeed' },
    { url: 'https://cdn.simpleicons.org/lighthouse/F58220', name: 'Lighthouse' },
    { url: 'https://cdn.simpleicons.org/vercel/000000', name: 'Vercel' },
    { url: 'https://cdn.simpleicons.org/klaviyo/FFD900', name: 'Klaviyo' },
    { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
    { url: 'https://cdn.simpleicons.org/googleanalytics/E37400', name: 'Core Web Vitals' }
  ];

  const steps = [
    {
      step: "01",
      title: "Free audit",
      desc: "We run your store through PageSpeed Insights, Lighthouse, and GTmetrix. We generate a prioritized list of every issue affecting your score. You get this before committing to anything.",
      time: "24 hours"
    },
    {
      step: "02",
      title: "Fixed scope proposal",
      desc: "We share exactly what we'll fix, in what order, what the expected score improvement is, and what it costs. Fixed price. You approve before we touch the theme.",
      time: "48 hours after audit"
    },
    {
      step: "03",
      title: "Implementation",
      desc: "We work on a theme duplicate — never your live store. Every fix is tested. When everything passes, we push to production and run a final Lighthouse audit.",
      time: "3–7 business days"
    },
    {
      step: "04",
      title: "Before/after report",
      desc: "You receive a documented report: original scores, final scores, every fix applied, and the business impact estimate. Something you can show your team or investors.",
      time: "Same day as launch"
    }
  ];

  const faqs = [
    {
      q: "How fast can you get my Shopify store?",
      a: "Most stores go from 30–55 range to 85–96 after optimization. The exact outcome depends on your theme, app stack, and how many external scripts are loading. We'll tell you the realistic target score after the audit — before you pay anything."
    },
    {
      q: "Will this break my theme or affect my design?",
      a: "No. We work on a duplicate theme. Zero risk to your live store at any point. Before we push to production, you approve every change. If you're not happy, nothing goes live."
    },
    {
      q: "Do you offer a score guarantee?",
      a: "We don't guarantee a specific number because factors outside our control — particularly heavy third-party apps — can cap the achievable score. What we do guarantee is a documented improvement and honest communication about what's achievable before we start."
    },
    {
      q: "What about apps that I can't remove?",
      a: "We optimize how they load — defer execution, lazy-load where possible, and reduce their impact on your LCP and INP scores. Sometimes the right answer is recommending a faster alternative app. We'll tell you when that's the case."
    },
    {
      q: "Can you work on my existing theme or do I need a new one?",
      a: "We work on your existing theme. We rarely need to rebuild anything — speed optimization is surgical, not a rebuild. The exception is if your theme is extremely outdated or custom-built with fundamental performance issues."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-emerald-600/10 relative">
      
      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="Speed Optimization — Under Shopify Development"
        headline="Your store is losing sales"
        headlineItalic="because it loads too slowly."
        sub="Every second of load time costs conversions. We audit your Shopify store, find exactly what's slowing it down, fix it, and hand you a Lighthouse score that proves it."
        primaryCTA={{ label: "Get my store audited →", href: "#scoping-booking-speed" }}
        secondaryCTA={{ label: "See what we fix ↗", href: "#what-we-fix" }}
        backgroundImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&q=90&fit=crop"
        overlayStrength={0.58}
      />
      <TrustMarquee logos={speedLogos} />

      {/* SECTION 2 — THE COST OF SLOW */}
      <section className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <h2 className="gsap-headline font-display font-bold text-gray-950 text-[36px] sm:text-[48px] md:text-[68px] tracking-[-0.03em] leading-[1.05] max-w-[800px] mb-12">
            "A 1-second improvement in load time increases conversions by{" "}
            <em className="text-purple-600 italic font-normal">7%.</em>"
          </h2>

          <div className="font-mono text-xs text-gray-400 mb-16 tracking-wide">
            Source: Portent study · replicated across Deloitte and Google research
          </div>

          {/* Stat Cells Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e6e3] border border-[#e8e6e3] rounded-xl overflow-hidden">
            {[
              { num: "53%", label: "of mobile visitors leave if load time exceeds 3 seconds" },
              { num: "7%", label: "conversion increase per 1-second improvement" },
              { num: "16%", label: "customer satisfaction decrease per 1-second delay" },
              { num: "11%", label: "fewer page views per second of load time added" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 flex flex-col justify-between h-full">
                <div 
                  className="gsap-count font-display text-[44px] font-bold text-gray-900 tracking-[-0.03em] leading-none mb-3"
                  data-target={parseFloat(stat.num)}
                  data-suffix="%"
                >
                  {stat.num}
                </div>
                <div className="font-sans text-[13px] font-light text-gray-500 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — BEFORE / AFTER SCORES */}
      <section id="results" className="py-24 border-b border-[#e8e6e3] bg-[#faf9f9] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-3">Real results</span>
          <h2 className="gsap-headline font-display font-bold text-[#111111] text-[32px] sm:text-[44px] leading-tight tracking-[-0.02em] mb-12">
            What our clients' scores look like before and after.
          </h2>

          <div className="flex flex-col gap-6 mt-12">
            {[
              {
                store: "DTC Apparel Brand",
                category: "Shopify 2.0 · Dawn theme",
                before: { score: 41, lcp: "5.2s", cls: "0.28", fid: "210ms" },
                after: { score: 94, lcp: "0.9s", cls: "0.04", fid: "48ms" },
                outcome: "+28% conversion rate · 3 weeks after launch"
              },
              {
                store: "Beauty & Skincare Store",
                category: "Custom theme · heavy app stack",
                before: { score: 34, lcp: "7.1s", cls: "0.41", fid: "380ms" },
                after: { score: 89, lcp: "1.2s", cls: "0.06", fid: "62ms" },
                outcome: "+19% revenue per session · first month"
              },
              {
                store: "Home Goods Brand",
                category: "Shopify Plus · Prestige theme",
                before: { score: 52, lcp: "4.3s", cls: "0.19", fid: "175ms" },
                after: { score: 96, lcp: "0.8s", cls: "0.02", fid: "41ms" },
                outcome: "+34% mobile conversion · PageSpeed 96"
              }
            ].map((result, i) => (
              <div key={i} className="border border-[#e8e6e3] rounded-2xl overflow-hidden bg-white shadow-xs">
                {/* Header info */}
                <div className="px-7 py-5 border-b border-[#e8e6e3] bg-[#faf9f9] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="font-display font-semibold text-base text-gray-900">
                      {result.store}
                    </span>
                    <span className="font-mono text-[11px] text-gray-400 ml-0 sm:ml-4 sm:border-l sm:border-gray-200 sm:pl-4 block sm:inline">
                      {result.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-emerald-600 bg-emerald-50 border border-emerald-200/50 rounded-lg px-3 py-1 font-medium w-fit">
                    {result.outcome}
                  </span>
                </div>

                {/* Grid score comparing */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 px-7 py-8 items-center">
                  
                  {/* Before */}
                  <div className="lg:col-span-5 text-left space-y-4">
                    <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-bold">
                      Before
                    </div>
                    <div className="font-display text-6xl sm:text-7xl font-bold text-[#ef4444] tracking-[-0.04em] leading-none">
                      {result.before.score}
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: 'LCP', val: result.before.lcp },
                        { label: 'CLS', val: result.before.cls },
                        { label: 'INP', val: result.before.fid }
                      ].map((m, j) => (
                        <div key={j} className="bg-red-50/50 border border-red-100 rounded-lg p-2.5 text-center">
                          <div className="font-mono text-[10px] text-red-500 font-bold mb-1">
                            {m.label}
                          </div>
                          <div className="font-display text-sm font-semibold text-red-500">
                            {m.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Icon of improvement */}
                  <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center gap-3 py-4 border-y lg:border-y-0 border-gray-100 lg:py-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8e6e3" strokeWidth="2" className="rotate-90 lg:rotate-0 flex-shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
                    </svg>
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest text-center">
                      after optimization
                    </span>
                  </div>

                  {/* After */}
                  <div className="lg:col-span-5 text-left space-y-4">
                    <div className="font-mono text-[10px] text-emerald-600 uppercase tracking-widest font-bold">
                      After
                    </div>
                    <div className="font-display text-6xl sm:text-7xl font-bold text-emerald-600 tracking-[-0.04em] leading-none">
                      {result.after.score}
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: 'LCP', val: result.after.lcp },
                        { label: 'CLS', val: result.after.cls },
                        { label: 'INP', val: result.after.fid }
                      ].map((m, j) => (
                        <div key={j} className="bg-emerald-50/55 border border-emerald-100 rounded-lg p-2.5 text-center">
                          <div className="font-mono text-[10px] text-emerald-600 font-bold mb-1">
                            {m.label}
                          </div>
                          <div className="font-display text-sm font-semibold text-emerald-600">
                            {m.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHAT WE FIX */}
      <section id="what-we-fix" className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-3">What we fix</span>
          <h2 className="gsap-headline font-display font-bold text-[#111111] text-[32px] sm:text-[44px] leading-tight tracking-[-0.02em] mb-4">
            Every millisecond has a cause. We find them all.
          </h2>
          <p className="gsap-fade-up font-sans font-light text-base text-gray-500 max-w-2xl mb-12">
            We don't guess. We audit your specific store, generate a prioritized fix list, and work through it methodically. Here's what we typically find and fix:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-12 border-t border-[#e8e6e3]">
            {[
              {
                category: "Images",
                fixes: [
                  { fix: "Convert to WebP/AVIF format", impact: "High" },
                  { fix: "Add explicit width and height attributes", impact: "High" },
                  { fix: "Implement lazy loading below the fold", impact: "Medium" },
                  { fix: "Compress without visible quality loss", impact: "Medium" },
                  { fix: "Preload hero image with fetchpriority", impact: "High" }
                ]
              },
              {
                category: "JavaScript",
                fixes: [
                  { fix: "Defer non-critical third-party scripts", impact: "High" },
                  { fix: "Remove unused Shopify apps still loading JS", impact: "High" },
                  { fix: "Audit and remove duplicate JS libraries", impact: "Medium" },
                  { fix: "Bundle and minify custom theme JS", impact: "Medium" },
                  { fix: "Replace heavy libraries with lightweight alternatives", impact: "High" }
                ]
              },
              {
                category: "CSS",
                fixes: [
                  { fix: "Remove unused CSS with PurgeCSS", impact: "Medium" },
                  { fix: "Inline critical CSS to eliminate render-blocking", impact: "High" },
                  { fix: "Minify and compress all stylesheets", impact: "Low" },
                  { fix: "Audit and remove app CSS still loading after uninstall", impact: "Medium" }
                ]
              },
              {
                category: "Fonts",
                fixes: [
                  { fix: "Preload critical fonts", impact: "High" },
                  { fix: "Use font-display: swap to prevent invisible text", impact: "High" },
                  { fix: "Self-host Google Fonts to reduce DNS lookups", impact: "Medium" },
                  { fix: "Subset fonts to characters actually used", impact: "Medium" }
                ]
              },
              {
                category: "Liquid & Theme",
                fixes: [
                  { fix: "Reduce section render-blocking on page load", impact: "High" },
                  { fix: "Optimize collection page product loops", impact: "Medium" },
                  { fix: "Remove redundant metafield calls", impact: "Low" },
                  { fix: "Audit custom sections for performance regressions", impact: "Medium" }
                ]
              },
              {
                category: "Apps & Third-party",
                fixes: [
                  { fix: "Audit all installed apps for JS weight", impact: "High" },
                  { fix: "Load chat widgets and reviews only when needed", impact: "High" },
                  { fix: "Replace bloated app functionality with native Shopify", impact: "Medium" },
                  { fix: "Configure Klaviyo and Meta Pixel to load efficiently", impact: "Medium" }
                ]
              }
            ].map((section, i) => (
              <div key={i} className="pb-4">
                <div className="font-mono text-[11px] text-purple-600 font-bold uppercase tracking-widest py-6 border-b border-[#f0eeee] mb-1">
                  {section.category}
                </div>
                {section.fixes.map((item, j) => (
                  <div key={j} className="gsap-row flex items-center justify-between py-3 border-b border-[#f9f8f8]">
                    <span className="font-sans text-[13.5px] font-light text-gray-750">
                      {item.fix}
                    </span>
                    <span className={`font-mono text-[9px] uppercase tracking-wider font-bold py-1 px-2.5 rounded-md border flex-shrink-0 ml-3 ${
                      item.impact === 'High'
                        ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                        : item.impact === 'Medium'
                          ? 'text-amber-700 bg-amber-50 border-amber-200'
                          : 'text-gray-700 bg-[#f9fafb] border-gray-200'
                    }`}>
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="py-24 border-b border-[#e8e6e3] bg-[#faf9f9] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-3">How it works</span>
          <h2 className="gsap-headline font-display font-bold text-[#111111] text-[32px] sm:text-[44px] leading-tight tracking-[-0.02em] mb-12">
            Audit first. Fix second. Prove it third.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e6e3] border border-[#e8e6e3] rounded-2xl overflow-hidden mt-12 shadow-xs gsap-card-group">
            {steps.map((item, i) => (
              <div key={i} className="gsap-card bg-white p-8 flex flex-col justify-between text-left min-h-[260px]">
                <div>
                  <div className="font-mono text-xs text-purple-600 font-bold mb-4">{item.step}</div>
                  <h3 className="font-display font-semibold text-[17px] text-gray-900 mb-2.5">{item.title}</h3>
                  <p className="font-sans font-light text-[13px] text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span>TIMEFRAME</span>
                  <span className="text-gray-950 font-bold">{item.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-24 border-b border-[#e8e6e3] bg-white text-left animate-fadeIn" id="speed-optimization-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:sticky lg:top-24 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-3">FAQ</span>
            <h2 className="font-sans font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Speed &amp; Performance<br />Questions Answered.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[285px] leading-relaxed">
              Find technical answers about PageSpeed goals, duplicate themes, standard safe deployment practices, and third-party app constraints.
            </p>
          </div>

          {/* Right Column Accordion */}
          <div className="flex flex-col w-full text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border-t border-[#e8e6e3] last:border-b border-[#e8e6e3] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left py-6 flex justify-between items-center gap-6 focus:outline-none group cursor-pointer"
                  >
                    <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-emerald-600 transition-colors">
                      {faq.q}
                    </span>
                    
                    <div
                      className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-[#111111] border-[#111111] text-white" : "bg-transparent text-gray-500"
                      }`}
                    >
                      <svg
                        viewBox="0 0 10 10"
                        className={`w-2.5 h-2.5 stroke-current fill-none stroke-[2.5] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <path d="M5,1 L5,9 M1,5 L9,5" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="transition-all duration-300 overflow-hidden"
                    style={{
                      maxHeight: isOpen ? "220px" : "0px",
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <p className="pb-6 font-sans font-light text-[13.5px] text-[#555555] leading-[1.75]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BREADCRUMB STRIP */}
      <div className="bg-[#f5f3f3] border-t border-b border-[#e8e6e3] py-7 px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">PART OF</div>
          <a href="#services/ecommerce" className="font-display font-semibold text-base text-gray-950 flex items-center gap-2 hover:text-emerald-600 transition-colors">
            ← Shopify Development
          </a>
        </div>
        <div className="sm:text-right text-left max-w-md font-sans font-light text-xs sm:text-[13px] text-gray-500 leading-relaxed">
          "Speed optimization is one part of our Shopify practice. For custom theme builds, headless development, and app integration, see the full service."
        </div>
      </div>

      {/* SECTION 7 — SCOPING AND BOOKING FORMS */}
      <BookingSection 
        id="scoping-booking-speed" 
        serviceName="Shopify Speed Optimization" 
        accentColor="emerald" 
        ctaGradient="from-emerald-500 to-teal-500" 
      />

    </div>
  );
}
