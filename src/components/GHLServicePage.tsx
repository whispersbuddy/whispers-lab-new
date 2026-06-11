import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import BookingSection from "./BookingSection";
import { Check, X, ArrowRight, Eye, Sparkles } from "lucide-react";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

interface GHLServicePageProps {
  handleNavigateHome: () => void;
}

export default function GHLServicePage({ handleNavigateHome }: GHLServicePageProps) {
  // Use core premium scroll animations
  useScrollAnimations();

  // Scroll to top instantly on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // GSAP custom cards trigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Problems stagger in on scroll
      gsap.fromTo('.ghl-frustration-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.ghl-frustration-grid',
            start: 'top 75%'
          }
        }
      );

      // 2. Who we build for cards trigger
      gsap.fromTo('.ghl-persona-card',
        { opacity: 0, scale: 0.96, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.ghl-persona-grid',
            start: 'top 75%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Trust Marquee branding logos
  const trustLogos = [
    { url: 'https://cdn.simpleicons.org/gohighlevel/F15A24', name: 'GoHighLevel' },
    { url: 'https://cdn.simpleicons.org/make/6D4AFF', name: 'Make.com' },
    { url: 'https://cdn.simpleicons.org/n8n/FF6C37', name: 'n8n' },
    { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
    { url: 'https://cdn.simpleicons.org/calendly/006BFF', name: 'Calendly' },
    { url: 'https://cdn.simpleicons.org/twilio/F22F46', name: 'Twilio' },
    { url: 'https://cdn.simpleicons.org/mailgun/E22526', name: 'Mailgun' },
    { url: 'https://cdn.simpleicons.org/zapier/FF4F00', name: 'Zapier' }
  ];

  const deliverables = [
    {
      number: "01",
      title: "CRM & Contact Structure",
      summary: "Your contacts organized the way your business actually works",
      details: [
        "Custom contact fields mapped to your sales process",
        "Smart list segmentation by source, stage, and behaviour",
        "Tag structure that makes sense — not 40 overlapping tags",
        "Duplicate contact rules and merge logic"
      ]
    },
    {
      number: "02",
      title: "Pipeline Architecture",
      summary: "Deal stages that reflect real buying behaviour",
      details: [
        "Pipeline stages mapped to your actual sales process",
        "Opportunity value and close probability configured",
        "Multiple pipelines if you have multiple services or products",
        "Automated stage movement triggers"
      ]
    },
    {
      number: "03",
      title: "Automation Workflows",
      summary: "The logic that runs your business while you sleep",
      details: [
        "Lead intake → CRM contact → owner assigned → follow-up started",
        "No-show workflows for missed appointments",
        "Nurture sequences for leads who went cold",
        "Internal team notification workflows",
        "Deal won/lost automations with next-step triggers"
      ]
    },
    {
      number: "04",
      title: "Email & SMS Sequences",
      summary: "Every touchpoint automated and on-brand",
      details: [
        "Welcome sequences for new leads",
        "Appointment reminder and confirmation sequences",
        "Post-appointment follow-up with review request",
        "Re-engagement sequence for inactive contacts",
        "All sequences written, configured, and tested"
      ]
    },
    {
      number: "05",
      title: "Calendar & Booking Setup",
      summary: "Booking that actually works across your whole team",
      details: [
        "Calendar connected to Google/Outlook and synced",
        "Round-robin booking for multi-person teams",
        "Pre-meeting questionnaires configured",
        "Automatic reminders reducing no-shows"
      ]
    },
    {
      number: "06",
      title: "Reporting & Dashboard",
      summary: "Numbers that tell you what's actually happening",
      details: [
        "Lead source reporting — where are conversions coming from",
        "Pipeline velocity — how long deals take to close",
        "Team activity reporting if applicable",
        "Weekly summary automation delivered to Slack or email"
      ]
    },
    {
      number: "07",
      title: "Snapshot & White-Label (for agencies)",
      summary: "Deploy your entire GHL setup to sub-accounts instantly",
      details: [
        "Snapshot of your complete GHL build packaged",
        "One-click deployment to new client sub-accounts",
        "White-label configuration — your brand, not GHL's",
        "Onboarding workflow for new sub-accounts automated"
      ]
    }
  ];

  const faqs = [
    {
      q: "Do you do GHL onboarding for new accounts?",
      a: "Yes — we can start from a blank GHL account and build everything from scratch, or work inside an existing account that needs restructuring. Both are common."
    },
    {
      q: "Can you migrate us from HubSpot or another CRM?",
      a: "Yes. We export your contacts, dales, and activity history, clean and map the data to GHL's structure, and import it. Migration projects add 3–5 days to the timeline."
    },
    {
      q: "Do you offer ongoing support after setup?",
      a: "Yes — monthly retainer from $400/month covers workflow updates, new automation builds, troubleshooting, and priority support. Most clients activate this after the initial build."
    },
    {
      q: "Can you build GHL for my clients if I'm an agency?",
      a: "Yes — white-label GHL builds for agencies are a significant part of our GHL work. We build the system, package it as a snapshot, and you deploy it to your clients."
    },
    {
      q: "How long does a full GHL setup take?",
      a: "Most full setups are 2–3 weeks. Snapshot builds for agencies take 3–4 weeks. We always provide a fixed timeline in the written scope before starting."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [openDelivIdx, setOpenDelivIdx] = useState<number | null>(null);

  // Before / After states for the interactive pipeline stage visualizer
  const [activeStage, setActiveStage] = useState<"before" | "after">("after");

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-[#ea580c]/10 relative">

      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="GoHighLevel Setup — Under Business Automation"
        headline="GoHighLevel, finally"
        headlineItalic="working the way you need it to."
        sub="Most GHL accounts are half-configured. Pipelines set up but not automated. Sequences built but not triggered. We build your entire GHL system from scratch — or fix what's already there."
        primaryCTA={{ label: "Set up my GHL →", href: "#ghl-scoping-booking" }}
        secondaryCTA={{ label: "See what's included ↗", href: "#whats-included" }}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=90&fit=crop"
        overlayStrength={0.65}
      />
      
      <TrustMarquee logos={trustLogos} />

      {/* SECTION 2 — THE PROBLEM (GHL specific) */}
      <section className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          
          <h2 className="font-sans font-bold text-[#111111] text-[36px] sm:text-[46px] md:text-[54px] lg:text-[58px] leading-[1.1] tracking-[-0.03em] max-w-[800px] text-left mb-12">
            You paid for GoHighLevel.<br />
            You're not using 60% of it.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ghl-frustration-grid mb-16">
            {[
              {
                icon: "📋",
                problem: "Pipelines with no automation",
                detail: "Your contacts move through stages manually. Someone has to drag the card. Nobody has time to drag the card."
              },
              {
                icon: "📧",
                problem: "Email sequences that never trigger",
                detail: "You built the sequence. You connected it to the wrong trigger. Leads fall through with no follow-up."
              },
              {
                icon: "📅",
                problem: "Booking that doesn't sync",
                detail: "GHL calendar, Google Calendar, and your team's availability are three different realities. Clients book slots that don't exist."
              },
              {
                icon: "🔁",
                problem: "Workflows running on the wrong contacts",
                detail: "Conditions misconfigured. The workflow fires on everyone, or nobody. GHL support can't help. You're stuck."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="ghl-frustration-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e6e3',
                  borderRadius: 12,
                  padding: '28px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  fontSize: 24,
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  background: '#f5f3f3',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: 8
                  }}>
                    {item.problem}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13.5,
                    fontWeight: 300,
                    color: '#888888',
                    lineHeight: 1.65,
                    margin: 0
                  }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 24,
            fontWeight: 500,
            color: '#555555',
            fontStyle: 'italic',
            lineHeight: 1.4,
            maxWidth: '750px',
            margin: '0 auto'
          }} className="text-center">
            "We've fixed every one of these. Dozens of times. We know exactly where GHL breaks."
          </div>

        </div>
      </section>

      {/* INTERACTIVE PIPELINE COMPARISON SECTION */}
      <section className="py-24 border-b border-[#e8e6e3] bg-[#faf9f9] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            color: '#ea580c',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            display: 'block',
            marginBottom: 16
          }}>
            Interactive Comparison
          </span>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: 12
          }}>
            Before & After Whispers Built GHL
          </h2>

          <p className="font-sans font-light text-sm text-[#888888] max-w-[500px] leading-relaxed mb-10">
            Toggle between the typical broken setup and our fully integrated GoHighLevel environment to see how we automate operations.
          </p>

          <div className="flex gap-2 mb-8 bg-neutral-200/50 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveStage("before")}
              className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                activeStage === "before" 
                  ? "bg-[#111111] text-white" 
                  : "text-gray-500 hover:text-black"
              }`}
            >
              The Before (Manual & Broken)
            </button>
            <button
              onClick={() => setActiveStage("after")}
              className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                activeStage === "after" 
                  ? "bg-[#ea580c] text-white" 
                  : "text-gray-500 hover:text-black"
              }`}
            >
              The After (Fully Automated)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visualizer Frame */}
            <div className="lg:col-span-8 bg-white border border-[#e8e6e3] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
              {activeStage === "before" ? (
                <div className="space-y-6 text-left w-full h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 items-center text-[#ef4444] font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-pulse" />
                      Gaps and Cold Sequences
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-gray-900 leading-tight">
                      Lead Enters and Nothing Happens
                    </h3>
                    <p className="text-gray-500 font-sans font-light text-sm mt-2 leading-relaxed">
                      A Facebook Ad lead or website booking lands in GHL, but gets siloed. There's no trigger. Staff has to manually lookup notifications, drag pipeline cards, and copy/paste initial SMS/emails.
                    </p>
                  </div>

                  {/* Manual Flow Steps Graph */}
                  <div className="grid grid-cols-4 gap-3 bg-neutral-50 p-4 rounded-xl border border-dashed border-red-200">
                    <div className="p-3 bg-white border border-red-100 rounded-lg text-center shadow-xs">
                      <span className="block font-mono text-[9px] text-[#ef4444]">STAGE 1</span>
                      <span className="block text-xs font-medium text-gray-700 mt-1">Manual Alert</span>
                      <span className="block text-[9px] text-gray-400 mt-1">Check email inbox</span>
                    </div>
                    <div className="p-3 bg-white border border-red-100 rounded-lg text-center shadow-xs">
                      <span className="block font-mono text-[9px] text-[#ef4444]">STAGE 2</span>
                      <span className="block text-xs font-medium text-gray-700 mt-1">Pipeline Card</span>
                      <span className="block text-[9px] text-gray-400 mt-1">Drag deal card manually</span>
                    </div>
                    <div className="p-3 bg-white border border-red-100 rounded-lg text-center shadow-xs opacity-50">
                      <span className="block font-mono text-[9px] text-[#666]">STAGE 3</span>
                      <span className="block text-xs font-medium text-gray-700 mt-1">Cold Wait</span>
                      <span className="block text-[9px] text-gray-400 mt-1">Leads forgotten</span>
                    </div>
                    <div className="p-3 bg-white border border-red-100 rounded-lg text-center shadow-xs opacity-50">
                      <span className="block font-mono text-[9px] text-[#666]">STAGE 4</span>
                      <span className="block text-xs font-medium text-gray-700 mt-1">No Show</span>
                      <span className="block text-[9px] text-gray-400 mt-1">Missed booking</span>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50/70 border border-red-100 rounded-xl flex items-center justify-between text-xs text-red-800">
                    <span>⚠️ Double bookings, slow speed-to-lead, and low client trust.</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-left w-full h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 items-center text-[#ea580c] font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-pulse" />
                      Live Autopilot Activated
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-gray-900 leading-tight">
                      Instantly Nurtured, Assigned, and Scheduled 
                    </h3>
                    <p className="text-gray-500 font-sans font-light text-sm mt-2 leading-relaxed">
                      Lead captured. Instant database mapping triggers. Round-robin calendar sends calendar invitations immediately. SMS welcome is shot out in &lt; 90 seconds. Pipeline board updates automatically.
                    </p>
                  </div>

                  {/* Automated visual steps */}
                  <div className="grid grid-cols-4 gap-3 bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <div className="p-3 bg-white border border-orange-100 rounded-lg text-center shadow-sm">
                      <span className="block font-mono text-[9px] text-[#ea580c]">TRIGGER</span>
                      <span className="block text-xs font-semibold text-gray-800 mt-1">New Lead</span>
                      <span className="block text-[9px] text-green-600 mt-1">Instant Zap/Webhook</span>
                    </div>
                    <div className="p-3 bg-white border border-orange-100 rounded-lg text-center shadow-sm">
                      <span className="block font-mono text-[9px] text-[#ea580c]">ACTION 2</span>
                      <span className="block text-xs font-semibold text-gray-800 mt-1">SMS Welcome</span>
                      <span className="block text-[9px] text-[#ea580c] mt-1">&lt;90 seconds trigger</span>
                    </div>
                    <div className="p-3 bg-white border border-orange-100 rounded-lg text-center shadow-sm">
                      <span className="block font-mono text-[9px] text-[#ea580c]">ACTION 3</span>
                      <span className="block text-xs font-semibold text-gray-800 mt-1">Pipeline Board</span>
                      <span className="block text-[9px] text-[#ea580c] mt-1">Auto card move</span>
                    </div>
                    <div className="p-3 bg-white border border-orange-100 rounded-lg text-center shadow-sm">
                      <span className="block font-mono text-[9px] text-[#ea580c]">ACTION 4</span>
                      <span className="block text-xs font-semibold text-gray-800 mt-1">Reminders</span>
                      <span className="block text-[9px] text-green-600 mt-1">Calendly synced</span>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-between text-xs text-emerald-800">
                    <span>✅ Flawless reliability. Low operational load. 100% data visibility.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick value indicators */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="p-6 bg-white border border-[#e8e6e3] rounded-2xl flex-1 text-left flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
                    Efficiency
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-gray-900">
                    Zero Duplicate Work
                  </h4>
                  <p className="font-sans font-light text-xs text-gray-500 mt-1 leading-relaxed">
                    No more copying contact details across four spreadsheets. GHL behaves as the source of truth for leads, invoices, bookings, and messaging.
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-4 flex justify-between items-center text-xs text-gray-400">
                  <span>Eliminated tasks</span>
                  <span className="font-mono font-bold text-gray-800">4hr/wk</span>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#e8e6e3] rounded-2xl flex-1 text-left flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] text-[#ea580c] uppercase tracking-widest block mb-1">
                    Client Value
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-gray-900">
                    Speed to Lead Is Alive
                  </h4>
                  <p className="font-sans font-light text-xs text-gray-500 mt-1 leading-relaxed">
                    Automations ensure incoming interest receives answers in minutes, maximizing the booking rate before competitors have even checked their email.
                  </p>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-4 flex justify-between items-center text-xs text-gray-400">
                  <span>Booking rate increase</span>
                  <span className="font-mono font-bold text-[#ea580c]">+110%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT'S INCLUDED */}
      <section id="whats-included" className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            color: '#ea580c',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            display: 'block',
            marginBottom: 16
          }}>
            What we build
          </span>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#111010',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: 44
          }}>
            Everything it takes to run your business in GHL.
          </h2>

          <div className="flex flex-col border-b border-[#e8e6e3]">
            {deliverables.map((item, idx) => {
              const isOpen = openDelivIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenDelivIdx(isOpen ? null : idx)}
                  style={{
                    borderTop: '1px solid #e8e6e3',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  className={`duration-200 ${isOpen ? 'bg-[#faf9f9]' : 'hover:bg-[#faf9f9]'}`}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr 24px',
                    gap: 20,
                    alignItems: 'center',
                    padding: '24px 16px'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#cccccc'
                    }}>
                      {item.number}
                    </span>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#111111',
                        marginBottom: 4
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13,
                        fontWeight: 300,
                        color: '#aaaaaa'
                      }}>
                        {item.summary}
                      </div>
                    </div>
                    <div style={{
                      width: 24,
                      height: 24,
                      border: '1px solid #e8e6e3',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      background: isOpen ? '#111111' : 'transparent',
                      borderColor: isOpen ? '#111111' : '#e8e6e3'
                    }}>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? '#ffffff' : '#999999'}
                        strokeWidth="2.5"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.3s'
                        }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>

                  {/* Transition body height */}
                  <div
                    className="transition-all duration-300 overflow-hidden text-left"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div style={{
                      padding: '0 16px 24px 84px'
                    }}>
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                      }}>
                        {item.details.map((d, i) => (
                          <li key={i} style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'flex-start',
                            fontFamily: 'var(--font-sans)',
                            fontSize: 14,
                            fontWeight: 300,
                            color: '#555555',
                            lineHeight: 1.5
                          }}>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="2.5"
                              style={{ flexShrink: 0, marginTop: 3 }}
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHO THIS IS FOR */}
      <section className="py-24 border-b border-[#e8e6e3] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            color: '#ea580c',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            display: 'block',
            marginBottom: 16
          }}>
            Who we build for
          </span>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#111010',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: 12
          }}>
            Three types of businesses. One platform.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ghl-persona-grid mt-12">
            {[
              {
                emoji: "🏢",
                type: "Marketing Agencies",
                desc: "You manage GHL for clients. You need a system that's repeatable, snapshotable, and deployable in under an hour per new client.",
                signals: ["White-label GHL", "Snapshot deployment", "Client sub-accounts"]
              },
              {
                emoji: "🎓",
                type: "Coaches & Consultants",
                desc: "You sell high-ticket services. Your follow-up is inconsistent. Bookings are manual. You need automation that feels personal, not robotic.",
                signals: ["Booking automation", "Nurture sequences", "Pipeline tracking"]
              },
              {
                emoji: "🏪",
                type: "Local Service Businesses",
                desc: "You're getting leads but losing them in follow-up. GHL can fix this — if someone sets it up properly for your specific workflow.",
                signals: ["Lead routing", "Review automation", "Appointment sequences"]
              }
            ].map((persona, i) => (
              <div 
                key={i} 
                className="ghl-persona-card text-left"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e6e3',
                  borderRadius: 16,
                  padding: '36px 32px',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(234,88,12,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e8e6e3';
                }}
              >
                <div style={{
                  fontSize: 32,
                  marginBottom: 20,
                  width: 52,
                  height: 52,
                  background: '#f5f3f3',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {persona.emoji}
                </div>
                
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#111111',
                  marginBottom: 12
                }}>
                  {persona.type}
                </h3>
                
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 300,
                  color: '#888888',
                  lineHeight: 1.75,
                  marginBottom: 20
                }}>
                  {persona.desc}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6
                }}>
                  {persona.signals.map((s, j) => (
                    <span key={j} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#ea580c',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6
                    }}>
                      <span style={{ color: '#cccccc' }}>→</span> {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="py-24 border-b border-[#e8e6e3] bg-[#ffffff] text-left" id="ghl-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-24 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-3">FAQ</span>
            <h2 className="font-sans font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Questions business builders ask.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[280px] leading-relaxed">
              Clear answers on migrations, sub-accounts, white-label setup, and ongoing operations.
            </p>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="flex flex-col w-full text-left">
            {faqs.map((faq, idx) => {
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
                    <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-[#ea580c] transition-colors">
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

      {/* SECTION 6 — BREADCRUMB CTA STRIP */}
      <div style={{
        background: '#f5f3f3',
        borderTop: '1px solid #e8e6e3',
        borderBottom: '1px solid #e8e6e3',
        padding: '28px 64px',
      }} className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: '#aaaaaa',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 6
          }}>
            Part of
          </div>
          <a href="#services/automation" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 600,
            color: '#111111',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            ← Business Automation
          </a>
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 300,
          color: '#888888',
          maxWidth: 400,
        }} className="sm:text-right text-left">
          GoHighLevel is one part of our automation practice. See the full service for n8n, Make.com, and multi-system pipeline work.
        </div>
      </div>

      {/* SECTION 7 — SCOPING AND BOOKING FORMS */}
      <BookingSection 
        id="ghl-scoping-booking" 
        serviceName="GoHighLevel Setup & Automation" 
        accentColor="automation" 
        ctaGradient="from-[#ea580c] to-[#f97316]" 
      />

    </div>
  );
}
