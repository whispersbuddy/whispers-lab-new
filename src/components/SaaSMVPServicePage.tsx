import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PainSection from "./mvp/PainSection";
import WhatWeBuild from "./mvp/WhatWeBuild";
import LiveWorkflow from "./mvp/LiveWorkflow";
import OurStack from "./mvp/OurStack";
import ProcessSection from "./mvp/ProcessSection";
import BookingSection from "./BookingSection";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function SaaSMVPServicePage({ handleNavigateHome }: { handleNavigateHome: () => void }) {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  // Global premium scroll animations
  useScrollAnimations();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 5 exact GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Pain items stagger in
      gsap.fromTo('.pain-item',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.pain-list', start: 'top 65%' }
        }
      );

      // 2. Case study numbers count up
      document.querySelectorAll('.result-number-mvp').forEach(el => {
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

      // 3. Tool rows slide in from left
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

      // 4. Section bridges fade
      gsap.fromTo('.section-bridge-text',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: { trigger: '.section-bridge-text', start: 'top 80%' }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  // List of platforms to repeat for infinite slow marquee scroll
  const saasLogos = [
    { url: 'https://cdn.simpleicons.org/nextdotjs/000000', name: 'Next.js' },
    { url: 'https://cdn.simpleicons.org/supabase/3ECF8E', name: 'Supabase' },
    { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
    { url: 'https://cdn.simpleicons.org/vercel/000000', name: 'Vercel' },
    { url: 'https://cdn.simpleicons.org/openai/412991', name: 'OpenAI' },
    { url: 'https://cdn.simpleicons.org/postgresql/4169E1', name: 'PostgreSQL' },
    { url: 'https://cdn.simpleicons.org/typescript/3178C6', name: 'TypeScript' },
    { url: 'https://cdn.simpleicons.org/react/61DAFB', name: 'React' },
  ];

  const mvpFAQs = [
    {
      q: "How long does the 6-week sprint actually take?",
      a: "Exactly 30 business days from our kickoff alignment call to deployment. We commit to structured weekly deliverables, delivering an actionable staging version every Friday so you're always in the loop."
    },
    {
      q: "Who owns the intellectual property and code?",
      a: "You own 100% of everything we build. Upon final milestone sign-off, we transfer full GitHub repository administration, third-party accounts, credentials, and deployment pipelines directly to your team."
    },
    {
      q: "What database and server frameworks do you use?",
      a: "We develop exclusively with Next.js/React for the front-facing stack, paired with Supabase (PostgreSQL) for a secure, fast data layer, and Stripe for payments. This guarantees robust security and ultra-fast page speed index scores."
    },
    {
      q: "Can we add features or change design directions during the sprint?",
      a: "To hit your guaranteed six-week launch, we lock in a robust, optimized database specification during our Week 1 mapping call. Additional feature concepts are logged and easily queued for post-launch sprint phases."
    },
    {
      q: "What happens when the 6 weeks end?",
      a: "You get a working, production-ready product live in the market. We provide detailed video training walkthroughs of every system route and include 14 days of complimentary technical support to solve any initial user edge-cases."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const results = [
    { number: "25 days", rawValue: "25", prefix: "", suffix: " days", label: "From strategy to production-grade deployment" },
    { number: "$12,400", rawValue: "12400", prefix: "$", suffix: "", label: "Average recurring checkout revenue on Week 1" },
    { number: "100%", rawValue: "100", prefix: "", suffix: "%", label: "Intellectual property and complete repository ownership" },
    { number: "95+", rawValue: "95", prefix: "", suffix: "+", label: "Desktop & mobile core web vitals speed index mark" }
  ];

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-purple-600/10 relative select-none">
      
      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="Service — SaaS MVP Development"
        headline="From validated idea"
        headlineItalic="to shipped product."
        sub="We take your concept and build it into a real, deployed SaaS product in 6–8 weeks. Next.js, Supabase, Stripe — built to launch, designed to scale, handed over completely."
        primaryCTA={{ label: "Start your MVP", href: "#scoping-booking" }}
        secondaryCTA={{ label: "See MVP case studies", href: "#use-cases" }}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=90&fit=crop"
        overlayStrength={0.60}
      />
      <TrustMarquee logos={saasLogos} />

      {/* SECTION 2 — PAIN */}
      <PainSection />

      {/* SECTION 3 — BRIDGE (Transition back to light) */}
      <section className="py-[80px] px-[64px] bg-white text-center relative z-10 select-none">
        <div className="max-w-[680px] mx-auto">
          <p className="section-bridge-text font-display italic text-[22px] sm:text-[32px] text-[#555555] font-light leading-snug">
            "Your launch shouldn't be a gamble. We replace code spaghetti with production-grade engineering structures."
          </p>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <WhatWeBuild />

      {/* SECTION 5 — LIVE EXAMPLE */}
      <LiveWorkflow />

      {/* SECTION 6 — CASE STUDY */}
      <section id="mvp-case-study" className="py-[120px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          {/* Asymmetric Opening Headline Statement */}
          <h2 className="font-display font-bold text-[#111111] text-[48px] sm:text-[88px] tracking-[-0.04em] leading-[0.95] max-w-[1000px]">
            Fully shipped. <br />
            25 working days. <br />
            <span className="text-purple-600 italic font-normal font-display">In production.</span>
          </h2>
          <div className="font-mono text-xs text-[#aaaaaa] mt-6 tracking-wide font-bold">
            Delaware AI Analytics SaaS &middot; 3-person core &middot; 5 weeks build-to-ship
          </div>

          {/* Thin separator */}
          <div className="w-full h-[1px] bg-[#e8e6e3] my-14" />

          {/* Asymmetric Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Narrative Column (2/3 width) */}
            <div className="lg:col-span-8 space-y-10 text-left">
              <p className="font-sans font-light text-[17px] text-[#333333] leading-[1.85]">
                Our clients had spent several weeks writing loose briefs, interviewing expensive developer hires, and arguing with junior offshore agencies who kept pushing back deadlines.
              </p>
              
              <div className="font-display font-semibold italic text-[22px] sm:text-[32px] text-[#111111] border-l-[3px] border-[#7c3aed] pl-6 my-10 max-w-[620px] leading-snug">
                "We were burning through our pre-seed runway without any shipped code. WhispersLab took our spec designs, cleaned our model paths, and shipped our entire interface inside 25 days."
              </div>

              <p className="font-sans font-light text-[17px] text-[#333333] leading-[1.85]">
                By setting up secure Row-Level Security schemes in postgres tables, linking serverless subscription endpoints, and wrapping dashboard states in ultra-fast Next.js layouts, their initial users processed payments without a single glitch on Launch Day.
              </p>
            </div>

            {/* Right Results Column (1/3 width) */}
            <div className="lg:col-span-4 flex flex-col gap-0 border-t border-[#f0eeee]">
              {results.map((r, i) => (
                <div key={i} className="py-7 border-b border-[#f0eeee] text-left">
                  <div 
                    className="result-number-mvp font-display text-[56px] font-bold text-[#111111] leading-none tracking-[-0.04em]"
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
      <section className="py-24 border-b border-[#e8e6e3] bg-white text-left" id="mvp-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 block mb-3">FAQ</span>
            <h2 className="font-display font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              SaaS MVP Development<br />Questions Answered.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[280px] leading-relaxed">
              Everything you need to know about our structured 6-week product cycles.
            </p>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="flex flex-col w-full">
            {mvpFAQs.map((faq, idx) => {
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
                    <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-purple-600 transition-colors">
                      {faq.q}
                    </span>
                    
                    {/* Plus/X circle loader */}
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
        serviceName="SaaS MVP Development" 
        accentColor="purple" 
        ctaGradient="from-purple-500 to-cyan-500" 
      />

    </div>
  );
}
