import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PainSection from "./ecommerce/PainSection";
import WhatWeBuild from "./ecommerce/WhatWeBuild";
import LiveWorkflow from "./ecommerce/LiveWorkflow";
import OurStack from "./ecommerce/OurStack";
import ProcessSection from "./ecommerce/ProcessSection";
import BookingSection from "./BookingSection";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function EcommerceServicePage({ handleNavigateHome }: { handleNavigateHome: () => void }) {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  // Global premium scroll animations
  useScrollAnimations();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // GSAP animations for interactive metrics and states
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Pain elements entrance stagger
      gsap.fromTo('.pain-item-eco',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.pain-list-eco', start: 'top 65%' }
        }
      );

      // 2. Results metrics counting animations
      document.querySelectorAll('.result-number-eco').forEach(el => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            const target = (el as HTMLElement).dataset.value;
            if (target) {
              gsap.fromTo({ n: 0 }, { n: parseFloat(target) }, {
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: function() {
                  const currentElement = el as HTMLElement;
                  const prefix = currentElement.dataset.prefix || "";
                  const suffix = currentElement.dataset.suffix || "";
                  currentElement.textContent = prefix + 
                    Math.round(this.targets()[0].n).toLocaleString() + 
                    suffix;
                }
              });
            }
          }
        });
      });

      // 3. Stack layers slides
      gsap.fromTo('.tool-row',
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.tools-list', start: 'top 70%' }
        }
      );

      // 4. Section bridge line animations
      gsap.fromTo('.eco-bridge-text',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: { trigger: '.eco-bridge-text', start: 'top 80%' }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const commerceLogos = [
    { url: 'https://cdn.simpleicons.org/shopify/96BF48', name: 'Shopify' },
    { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
    { url: 'https://cdn.simpleicons.org/klaviyo/FFD900', name: 'Klaviyo' },
    { url: 'https://cdn.simpleicons.org/react/61DAFB', name: 'React' },
    { url: 'https://cdn.simpleicons.org/javascript/F7DF1E', name: 'JavaScript' },
    { url: 'https://cdn.simpleicons.org/googleanalytics/E37400', name: 'Analytics' },
    { url: 'https://cdn.simpleicons.org/vercel/000000', name: 'Vercel' },
    { url: 'https://cdn.simpleicons.org/make/6D00CC', name: 'Make.com' },
  ];

  const ecommerceFAQs = [
    {
      q: "Do you build custom Shopify themes or use standard templates?",
      a: "We develop exclusively high-performance custom sections using Shopify 2.0 Liquid, fully tailored to your aesthetic identity. This maintains ultra-fast performance score ratings (often 96+) with zero bloated layouts."
    },
    {
      q: "How do you ensure zero customer downtime during migrations?",
      a: "We construct secure duplicate database environments to pre-validate catalog schemas, customer tags, and legacy order receipts. Complete DNS switches are scheduled at lowest-traffic block hours, guaranteeing continuous checkout access."
    },
    {
      q: "What inventory or third-party CRM systems can you sync?",
      a: "We write robust connections linking Shopify with major external CRMs and ERPs like HubSpot, Salesforce, NetSuite, Klaviyo, and 3PL shipping partners. Your stocks remain accurate down to the single unit."
    },
    {
      q: "How do you optimize site performance for high customer traffic spikes?",
      a: "We design with static component rendering, optimized vector icons, and lazy-loading media files. By eliminating heavy third-party app scripts, we prevent checkout slowdowns during major sales events or promotions."
    },
    {
      q: "Whom do we contact for catalog or template updates after launch?",
      a: "We bundle complete training video guides showing you how to manage and modify content blocks. Since we develop using Shopify's native visual page editor, your team can update photos and prices safely."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const results = [
    { number: "78%", rawValue: "78", prefix: "", suffix: "%", label: "Lift in mobile checkout conversion rate" },
    { number: "1.1s", rawValue: "1.1", prefix: "", suffix: "s", label: "Average Core Web Vital load speed benchmark" },
    { number: "$1.2M+", rawValue: "1200000", prefix: "$", suffix: "+", label: "Physical catalog sales processed in 4 weeks" },
    { number: "0% apps", rawValue: "0", prefix: "", suffix: "% app code", label: "Zero reliance on heavy or slowing Shopify plugins" }
  ];

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-emerald-600/10 relative select-none animate-fadeIn">
      
      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="Service — Commerce Engineering"
        headline="A Shopify store built"
        headlineItalic="to actually convert."
        sub="Custom Liquid theme architecture, speed optimization, and app integration. Built for DTC brands that need more than a template and a plugin."
        primaryCTA={{ label: "Start a commerce project", href: "#scoping-booking" }}
        secondaryCTA={{ label: "See commerce work", href: "#use-cases" }}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=90&fit=crop"
        overlayStrength={0.55}
      />
      <TrustMarquee logos={commerceLogos} />

      {/* SECTION 2 — PAIN */}
      <PainSection />

      {/* SECTION 3 — BRIDGE (Transition back to light) */}
      <section className="py-[80px] px-[64px] bg-white text-center relative z-10 select-none">
        <div className="max-w-[680px] mx-auto">
          <p className="eco-bridge-text font-display italic text-[22px] sm:text-[32px] text-[#555555] font-light leading-snug">
            "We strip out heavy slow apps and rebuild your purchase loops with clean, atomic code structures."
          </p>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <WhatWeBuild />

      {/* SECTION 5 — LIVE EXAMPLE */}
      <LiveWorkflow />

      {/* SECTION 6 — CASE STUDY */}
      <section id="eco-case-study" className="py-[120px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          {/* Asymmetric Opening Headline Statement */}
          <h2 className="font-display font-bold text-[#111111] text-[48px] sm:text-[88px] tracking-[-0.04em] leading-[0.95] max-w-[1000px]">
            78% lift in checkout rate. <br />
            24 working days. <br />
            <span className="text-emerald-600 italic font-normal font-display">In production.</span>
          </h2>
          <div className="font-mono text-xs text-[#aaaaaa] mt-6 tracking-wide font-bold">
            High-Growth Lifestyle Apparel Co &middot; 4-week full custom theme redevelopment
          </div>

          {/* Thin separator */}
          <div className="w-full h-[1px] bg-[#e8e6e3] my-14" />

          {/* Asymmetric Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Narrative Column (2/3 width) */}
            <div className="lg:col-span-8 space-y-10 text-left">
              <p className="font-sans font-light text-[17px] text-[#333333] leading-[1.85]">
                Our client's marketing campaign was burning high ad buys on mobile traffic, but visitors faced slow theme rendering speeds, collapsing grids, and endless form validation loops on standard shipping checkout fields.
              </p>
              
              <div className="font-display font-semibold italic text-[22px] sm:text-[32px] text-[#111111] border-l-[3px] border-emerald-500 pl-6 my-10 max-w-[620px] leading-snug">
                "Our previous drag-and-drop template theme took over 4 seconds to load product media. WhispersLab coded a clean customized Liquid system from scratch, optimizing load times to sub-seconds."
              </div>

              <p className="font-sans font-light text-[17px] text-[#333333] leading-[1.85]">
                By cleaning heavy unrequested javascript plugins, re-indexing search trees via light Algolia autocomplete APIs, and restructuring checkout routes with elegant mobile spacing grids, abandonment plummeted by 78% in the first week.
              </p>
            </div>

            {/* Right Results Column (1/3 width) */}
            <div className="lg:col-span-4 flex flex-col gap-0 border-t border-[#f0eeee]">
              {results.map((r, i) => (
                <div key={i} className="py-7 border-b border-[#f0eeee] text-left">
                  <div 
                    className="result-number-eco font-display text-[56px] font-bold text-[#111111] leading-none tracking-[-0.04em]"
                    data-value={r.rawValue}
                    data-prefix={r.prefix}
                    data-suffix={r.suffix}
                  >
                    {r.number}
                  </div>
                  <div className="font-sans font-light text-sm text-[#888888] mt-2 leading-relaxed">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7 — TOOLS */}
      <OurStack />

      {/* SECTION 8 — PROCESS */}
      <ProcessSection />

      {/* SECTION 9 — DEDICATED FAQ ACCORDION */}
      <section className="py-24 border-b border-[#e8e6e3] bg-white text-left" id="ecommerce-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-3">FAQ</span>
            <h2 className="font-display font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Shopify OS 2.0 &amp; Custom Storefront<br />Questions Answered.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[285px] leading-relaxed">
              Find answers regarding custom migrations, performance optimization spikes, dynamic custom features, and ownership handover procedures.
            </p>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="flex flex-col w-full">
            {ecommerceFAQs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border-t border-[#e8e6e3] last:border-b border-[#e8e6e3] overflow-hidden"
                >
                  {/* Trigger Row */}
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left py-6 flex justify-between items-center gap-6 focus:outline-none group cursor-pointer"
                  >
                    <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-emerald-600 transition-colors">
                      {faq.q}
                    </span>
                    
                    {/* Plus/X icon symbol */}
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

                  {/* Answer Row (Smooth maxheight accordion styling with transition) */}
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

      {/* SECTION 10 — SCoping and booking forms */}
      <BookingSection 
        id="scoping-booking" 
        serviceName="High-Growth E-Commerce Systems" 
        accentColor="emerald" 
        ctaGradient="from-emerald-500 to-teal-500" 
      />

    </div>
  );
}
