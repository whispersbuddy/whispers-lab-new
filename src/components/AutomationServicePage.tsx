import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PainSection from "./automation/PainSection";
import WhatWeAutomate from "./automation/WhatWeAutomate";
import LiveWorkflow from "./automation/LiveWorkflow";
import OurStack from "./automation/OurStack";
import ProcessSection from "./automation/ProcessSection";
import BookingSection from "./BookingSection";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function AutomationServicePage({ handleNavigateHome }: { handleNavigateHome: () => void }) {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  // Global premium scroll trigger animations
  useScrollAnimations();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 5 exact GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Pain items stagger in (already handled in PainSection.tsx, but wired here as triggers for robustness)
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
      document.querySelectorAll('.result-number').forEach(el => {
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

      // 5. Pinned process progress bar handled reactively/GSAP in ProcessSection.tsx

    });

    return () => ctx.revert();
  }, []);

  // List of platforms to repeat for infinite slow marquee scroll
  const automationLogos = [
    { url: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'n8n' },
    { url: 'https://cdn.simpleicons.org/make/6D00CC', name: 'Make.com' },
    { url: 'https://cdn.simpleicons.org/slack/4A154B', name: 'Slack' },
    { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
    { url: 'https://cdn.simpleicons.org/activecampaign/356AE6', name: 'ActiveCampaign' },
    { url: 'https://cdn.simpleicons.org/hubspot/FF7A59', name: 'HubSpot' },
    { url: 'https://cdn.simpleicons.org/airtable/2D7FF9', name: 'Airtable' },
    { url: 'https://cdn.simpleicons.org/googlesheets/34A853', name: 'Google Sheets' },
  ];

  const automationFAQs = [
    {
      q: "What software platforms do you work with?",
      a: "We create custom integrations across more than 400+ SaaS tools, including Slack, HubSpot, Salesforce, Airtable, DocuSign, Stripe, Shopify, and OpenAI, using state-of-the-art workflow engines like n8n and Make.com."
    },
    {
      q: "Do we have to pay recurring developer retainer fees?",
      a: "No, because we set up every workflow within your own company's platform accounts. You have full structural control on day one and only pay standard, low-tier workspace hosting costs directly to the tools of your choice."
    },
    {
      q: "What happens if a third-party API changes or fails?",
      a: "We build robust error handling directly into every pipeline. If an external system times out or fails, our self-healing retry logic takes over, and routes descriptive debugging alerts immediately to your Slack channel so nothing falls through the cracks."
    },
    {
      q: "Can our team adjust or expand the workflows later?",
      a: "Absolutely. Alongside complete flowchart documents, we configure live sandbox testing environments and record clear video documentation of every step. Your team will have 100% confidence to manage or expand operations indefinitely."
    },
    {
      q: "How fast will our leads and operations process?",
      a: "Our webhook-driven connections are designed for real-time operation. Standard contacts, invoices, or pipeline tasks sync cross-platform in less than 8 seconds, entirely removing manual copy-paste bottlenecks."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const results = [
    { number: "22 hours", rawValue: "22", prefix: "", suffix: " hours", label: "Recovered weekly across the team" },
    { number: "$4,800", rawValue: "4800", prefix: "$", suffix: "", label: "Monthly staff overhead eliminated" },
    { number: "8s", rawValue: "8", prefix: "", suffix: "s", label: "Inbound pipeline lead response velocity" },
    { number: "31%", rawValue: "31", prefix: "", suffix: "%", label: "Rep conversation close probability change" }
  ];

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-[#7c3aed]/10 relative select-none">
      
      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="Service — Business Automation"
        headline="Your team is doing work"
        headlineItalic="a machine should handle."
        sub="We build custom automation systems that eliminate manual, repetitive work — n8n, Make.com, GoHighLevel — architected properly, documented thoroughly, handed over to you."
        primaryCTA={{ label: "Start an automation project", href: "#scoping-booking" }}
        secondaryCTA={{ label: "See automation case study", href: "#use-cases" }}
        backgroundImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1800&q=90&fit=crop"
        overlayStrength={0.62}
      />
      <TrustMarquee logos={automationLogos} />

      {/* SECTION 2 — PAIN */}
      <PainSection />

      {/* SECTION 3 — BRIDGE (Transition back to light) */}
      <section className="py-[80px] px-[64px] bg-white text-center relative z-10 select-none">
        <div className="max-w-[680px] mx-auto">
          <p className="section-bridge-text font-display italic text-[22px] sm:text-[32px] text-[#555555] font-light leading-snug">
            "Every one of those has a fix. Here's what we replace them with."
          </p>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <WhatWeAutomate />

      {/* SECTION 5 — LIVE EXAMPLE */}
      <LiveWorkflow />

      {/* SECTION 6 — CASE STUDY */}
      <section id="case-study" className="py-[120px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          {/* Asymmetric Opening Headline Statement */}
          <h2 className="font-display font-bold text-[#111111] text-[48px] sm:text-[88px] tracking-[-0.04em] leading-[0.95] max-w-[1000px]">
            22 recovered <br />
            hours. Per week. <br />
            <span className="text-[#777777] italic font-normal font-display">Every week.</span>
          </h2>
          <div className="font-mono text-xs text-[#aaaaaa] mt-6 tracking-wide font-bold">
            Toronto marketing agency &middot; 12 people &middot; 3 weeks to build
          </div>

          {/* Thin separator */}
          <div className="w-full h-[1px] bg-[#e8e6e3] my-14" />

          {/* Asymmetric Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Narrative Column (2/3 width) */}
            <div className="lg:col-span-8 space-y-10 text-left">
              <p className="font-sans font-light text-[17px] text-[#333333] leading-[1.85]">
                Our client, a high-growth marketing team, was spending critical hours manually compiling lead reports, copying contact payloads across multiple platforms, and manually initializing fresh onboarding calendars every Monday morning.
              </p>
              
              <div className="font-display font-semibold italic text-[22px] sm:text-[32px] text-[#111111] border-l-[3px] border-[#111111] pl-6 my-10 max-w-[620px] leading-snug">
                "We were losing high-intent customers to slower reaction times. The automation suite solved our speed gap permanently."
              </div>

              <p className="font-sans font-light text-[17px] text-[#333333] leading-[1.85]">
                By building a bespoke, self-healing pipeline using programmatic webhooks and unified CRM triggers, raw contacts route smoothly in 8 seconds. Reps walk into meetings with complete context profiles, entirely removing physical data manipulation.
              </p>
            </div>

            {/* Right Results Column (1/3 width) */}
            <div className="lg:col-span-4 flex flex-col gap-0 border-t border-[#f0eeee]">
              {results.map((r, i) => (
                <div key={i} className="py-7 border-b border-[#f0eeee] text-left">
                  <div 
                    className="result-number font-display text-[56px] font-bold text-[#111111] leading-none tracking-[-0.04em]"
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
      <section className="py-24 border-b border-[#e8e6e3] bg-white text-left" id="automation-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#7c3aed] block mb-3">FAQ</span>
            <h2 className="font-display font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Business Automation<br />Questions Answered.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[285px] leading-relaxed">
              Find answers to core operational questions regarding systems integration, pricing, and infrastructure maintenance.
            </p>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="flex flex-col w-full">
            {automationFAQs.map((faq, idx) => {
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
                    <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-[#7c3aed] transition-colors">
                      {faq.q}
                    </span>
                    
                    {/* Plus/X element */}
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
        serviceName="Business Automation Systems" 
        accentColor="automation" 
        ctaGradient="from-[#7c3aed] to-[#0ea5e9]" 
      />

    </div>
  );
}
