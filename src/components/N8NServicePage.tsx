import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import BookingSection from "./BookingSection";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

interface N8NServicePageProps {
  handleNavigateHome: () => void;
}

export default function N8NServicePage({ handleNavigateHome }: N8NServicePageProps) {
  // Activate global high-end scroll animations
  useScrollAnimations();

  // Instantly scroll to the top of the viewport on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Set up GSAP scroll triggers for table rows and cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Technical use cases rows slide upwards slightly on scroll
      gsap.fromTo('.gsap-row-n8n',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.n8n-usecases-grid',
            start: 'top 80%'
          }
        }
      );

      // 2. Deployment options stagger in
      gsap.fromTo('.gsap-deploy-card',
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.n8n-deploy-section',
            start: 'top 75%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Marquee Integration stack logos (custom color branding)
  const n8nLogos = [
    { url: 'https://cdn.simpleicons.org/n8n/FF6C37', name: 'n8n' },
    { url: 'https://cdn.simpleicons.org/gohighlevel/F15A24', name: 'GoHighLevel' },
    { url: 'https://cdn.simpleicons.org/openai/412991', name: 'OpenAI' },
    { url: 'https://cdn.simpleicons.org/slack/4A154B', name: 'Slack' },
    { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
    { url: 'https://cdn.simpleicons.org/airtable/185ADB', name: 'Airtable' },
    { url: 'https://cdn.simpleicons.org/postgresql/4169E1', name: 'PostgreSQL' },
    { url: 'https://cdn.simpleicons.org/webhooks/1F2937', name: 'Webhooks' }
  ];

  const useCases = [
    {
      n: "01",
      title: "Multi-source lead intake",
      desc: "Typeform, Facebook Lead Ads, and direct email all feeding one unified n8n router. Lead scored by OpenAI, contact created in GHL, owner assigned by territory rules, Slack notification sent — in 8 seconds.",
      tags: ["n8n", "GoHighLevel", "OpenAI", "Slack"]
    },
    {
      n: "02",
      title: "AI email classification & routing",
      desc: "Inbound support emails classified by type and urgency using GPT-4o-mini. Urgent issues create Slack alerts. Standard issues create Zendesk tickets. Billing issues route to finance.",
      tags: ["n8n", "OpenAI", "Slack", "Zendesk"]
    },
    {
      n: "03",
      title: "Failed payment recovery pipeline",
      desc: "Stripe webhook → n8n → retry logic → customer email sequence → Slack alert to team → access pause if unresolved after 5 days. Zero manual intervention.",
      tags: ["n8n", "Stripe", "ActiveCampaign", "Slack"]
    },
    {
      n: "04",
      title: "Client onboarding orchestration",
      desc: "Contract signed → n8n fires → Slack channel created, Notion workspace cloned, welcome email sent, kickoff calendar invite sent, CRM deal moved to active. 60 seconds.",
      tags: ["n8n", "Slack", "Notion", "Google Calendar"]
    },
    {
      n: "05",
      title: "Weekly automated reporting",
      desc: "n8n pulls metrics from 4 sources every Monday at 7am, builds a structured report, formats it as HTML, and emails it to 3 stakeholders. Nobody builds a spreadsheet.",
      tags: ["n8n", "Google Sheets", "Airtable", "Email"]
    },
    {
      n: "06",
      title: "AI-augmented lead enrichment",
      desc: "New CRM contact → n8n → Clearbit enrichment → LinkedIn scrape → OpenAI generates ICP score and outreach talking points → updates contact record automatically.",
      tags: ["n8n", "Clearbit", "OpenAI", "HubSpot"]
    }
  ];

  const faqs = [
    {
      q: "Self-hosted or n8n cloud — which do you recommend?",
      a: "Self-hosted for almost everyone. It costs $7–15/month on Railway or Render, gives you unlimited executions, and keeps your data on your infrastructure. We handle the setup, monitoring, and backups. Cloud n8n makes sense if your team will self-manage the platform and prefers not to think about servers."
    },
    {
      q: "Can you maintain the workflows after building them?",
      a: "Yes. Monthly retainer from $400/month covers monitoring, updates, new workflow additions, and priority support when something breaks. We include 2 weeks of post-launch support in every project regardless."
    },
    {
      q: "Do you integrate n8n with GoHighLevel?",
      a: "Yes — n8n + GHL is one of our most common combinations. n8n handles the complex routing logic and data processing that GHL's native workflows can't do. GHL handles the CRM, sequences, and client-facing communication."
    },
    {
      q: "Can n8n handle high-volume workflows?",
      a: "Yes — self-hosted n8n with proper server sizing handles thousands of executions per day without issue. We configure queue mode and concurrency settings for high-volume deployments."
    },
    {
      q: "What if we need a workflow updated after handoff?",
      a: "You own the n8n instance and all workflows. You can edit them directly. If you want us to handle changes, the monthly retainer covers that. We also document every workflow so your team understands the logic."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-purple-600/10 relative">

      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="n8n Automation — Under Business Automation"
        headline="Custom n8n workflows"
        headlineItalic="built to run your stack."
        sub="Self-hosted or cloud. AI-in-the-loop or pure logic. Simple triggers or 40-node pipelines connecting your entire infrastructure. We design, build, and document n8n systems that your team can actually maintain."
        primaryCTA={{ label: "Build my n8n system →", href: "#n8n-scoping-booking" }}
        secondaryCTA={{ label: "Why n8n? ↗", href: "#why-n8n" }}
        backgroundImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=90&fit=crop"
        overlayStrength={0.68}
      />

      <TrustMarquee logos={n8nLogos} />

      {/* SECTION 2 — WHY N8N (Unique section, direct technical comparison table) */}
      <section id="why-n8n" className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            color: '#7c3aed',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            display: 'block',
            marginBottom: 16
          }}>
            Why n8n
          </span>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            color: '#111111',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: 16,
            maxWidth: '650px'
          }}>
            Zapier breaks at scale. <br />n8n doesn't.
          </h2>

          <div style={{
            marginTop: 48,
            border: '1px solid #e8e6e3',
            borderRadius: 16,
            overflow: 'hidden'
          }}>
            {/* Table Header Row */}
            <div className="grid grid-cols-4 bg-[#faf9f9] border-b border-[#e8e6e3]">
              {['Feature', 'Zapier', 'Make.com', 'n8n'].map((h, i) => (
                <div 
                  key={i} 
                  style={{
                    padding: '16px 20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11, 
                    fontWeight: 600,
                    color: i === 3 ? '#7c3aed' : '#aaaaaa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRight: i < 3 ? '1px solid #e8e6e3' : 'none',
                    background: i === 3 ? 'rgba(124,58,237,0.04)' : 'transparent'
                  }}
                  className="text-left"
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {[
              ['Pricing model', 'Per task', 'Per operation', 'Self-hosted = free'],
              ['Task/operation limits', 'Hard limits', 'Hard limits', 'Unlimited'],
              ['Self-hostable', '✗', '✗', '✓'],
              ['Code execution', 'Limited', 'Limited', 'Full JS/Python'],
              ['AI agent support', 'Basic', 'Moderate', 'Native + advanced'],
              ['Custom HTTP requests', 'Limited', 'Good', 'Full control'],
              ['Error handling', 'Basic', 'Moderate', 'Complete'],
              ['Complexity ceiling', 'Low', 'Medium', 'Very high'],
            ].map((row, i) => (
              <div 
                key={i} 
                className="grid grid-cols-4 border-b border-[#f0eeee] last:border-none"
              >
                {row.map((cell, j) => {
                  let cellColor = '#555555';
                  let cellFontWeight = 400;
                  if (j === 3) {
                    cellFontWeight = 500;
                    if (cell === '✓') cellColor = '#22c55e';
                    else if (cell === '✗') cellColor = '#ef4444';
                    else cellColor = '#7c3aed';
                  } else if (j === 1 || j === 2) {
                    if (cell === '✗') cellColor = '#ef4444';
                    else if (cell === '✓') cellColor = '#22c55e';
                    else cellColor = '#999999';
                  }

                  return (
                    <div 
                      key={j} 
                      style={{
                        padding: '14px 20px',
                        fontFamily: j === 0 ? 'var(--font-sans)' : 'var(--font-mono)',
                        fontSize: j === 0 ? 14 : 12.5,
                        fontWeight: j === 0 ? 400 : cellFontWeight,
                        color: cellColor,
                        borderRight: j < 3 ? '1px solid #f0eeee' : 'none',
                        background: j === 3 ? 'rgba(124,58,237,0.02)' : 'transparent'
                      }}
                      className="text-left"
                    >
                      {cell}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13.5,
            fontWeight: 300,
            color: '#aaaaaa',
            marginTop: 20,
            lineHeight: 1.6
          }}>
            We use Make.com when clients want visual, self-manageable workflows. We use n8n when complexity, cost, or control requirements exceed what Make handles well. We'll tell you which fits during scoping.
          </p>

        </div>
      </section>

      {/* SECTION 3 — WHAT WE BUILD WITH N8N */}
      <section className="py-24 border-b border-[#e8e6e3] relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            color: '#7c3aed',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            display: 'block',
            marginBottom: 16
          }}>
            Use cases
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
            What we've actually built.
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 300,
            color: '#888888',
            maxWidth: '550px',
            marginBottom: 44,
            lineHeight: 1.6
          }}>
            Not hypothetical workflows. These are real systems running in production for clients right now.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-2 n8n-usecases-grid">
            {useCases.map((item, i) => (
              <div 
                key={i} 
                className="gsap-row-n8n text-left" 
                style={{
                  padding: '24px 0',
                  borderTop: '1px solid #f0eeee'
                }}
              >
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#cccccc',
                    flexShrink: 0,
                    paddingTop: 3,
                    minWidth: 24
                  }}>
                    {item.n}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#111111',
                      marginBottom: 8,
                      letterSpacing: '-0.01em'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13.5,
                      fontWeight: 300,
                      color: '#666666',
                      lineHeight: 1.7,
                      marginBottom: 12
                    }}>
                      {item.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {item.tags.map((tag, j) => (
                        <span 
                          key={j} 
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 10,
                            color: '#888888',
                            border: '1px solid #e8e6e3',
                            borderRadius: 5,
                            padding: '3px 9px',
                            background: '#ffffff'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — SELF-HOSTED VS CLOUD */}
      <section className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none n8n-deploy-section">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
          
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            color: '#7c3aed',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            display: 'block',
            marginBottom: 16
          }}>
            Deployment
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
            Self-hosted or cloud — we handle both.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 1,
            background: '#e8e6e3',
            border: '1px solid #e8e6e3',
            borderRadius: 16,
            overflow: 'hidden'
          }}>
            {[
              {
                type: "Self-hosted n8n",
                badge: "Recommended for most",
                badgeColor: '#22c55e',
                pros: [
                  "Zero per-execution cost — unlimited workflows",
                  "Full data control — stays on your infrastructure",
                  "No vendor lock-in",
                  "Can run private network integrations",
                  "Custom code nodes, any npm package"
                ],
                cons: [
                  "Requires a server (Railway, Render, VPS — ~$10/mo)",
                  "You own the uptime (we set up monitoring)"
                ],
                setup: "We deploy on Railway or Render, configure auth, set up backups, and monitor uptime. Typically $7–15/month hosting."
              },
              {
                type: "n8n Cloud",
                badge: "Best for non-technical teams",
                badgeColor: '#0ea5e9',
                pros: [
                  "No server to manage — n8n handles infrastructure",
                  "Automatic updates and backups",
                  "Works immediately — no setup overhead",
                  "Good for teams who will self-manage later"
                ],
                cons: [
                  "Execution limits on lower tiers",
                  "$20–50/month depending on executions",
                  "Data leaves your infrastructure"
                ],
                setup: "We configure your n8n Cloud account, build all workflows, and hand over with full documentation."
              }
            ].map((option, i) => (
              <div 
                key={i} 
                className="gsap-deploy-card flex flex-col justify-between"
                style={{
                  background: '#faf9f9',
                  padding: '40px 36px'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 24,
                    flexWrap: 'wrap'
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#111010'
                    }}>
                      {option.type}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      fontWeight: 600,
                      color: '#ffffff',
                      background: option.badgeColor,
                      borderRadius: 6,
                      padding: '3px 10px'
                    }}>
                      {option.badge}
                    </span>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#22c55e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 10,
                      fontWeight: 600
                    }}>
                      Advantages
                    </div>
                    {option.pros.map((p, j) => (
                      <div key={j} style={{
                        display: 'flex',
                        gap: 10,
                        padding: '6px 0',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13.5,
                        fontWeight: 300,
                        color: '#555555',
                        lineHeight: 1.5,
                        alignItems: 'flex-start'
                      }}>
                        <svg width="13" height="13" viewBox="0 0 24 24"
                          fill="none" stroke="#22c55e" strokeWidth="2.5"
                          style={{ flexShrink: 0, marginTop: 4 }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#f59e0b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 10,
                      fontWeight: 600
                    }}>
                      Trade-offs
                    </div>
                    {option.cons.map((c, j) => (
                      <div key={j} style={{
                        display: 'flex',
                        gap: 10,
                        padding: '6px 0',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13.5,
                        fontWeight: 300,
                        color: '#aaaaaa',
                        lineHeight: 1.5,
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ color: '#f59e0b', flexShrink: 0, fontWeight: 'bold' }}>~</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e8e6e3',
                  borderRadius: 8,
                  padding: '14px 16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 300,
                  color: '#666666',
                  lineHeight: 1.65,
                  marginTop: 16
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#aaaaaa',
                    display: 'block',
                    marginBottom: 6
                  }}>
                    HOW WE SET IT UP
                  </span>
                  {option.setup}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="py-24 border-b border-[#e8e6e3] bg-[#ffffff] text-left" id="n8n-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-24 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#7c3aed] block mb-3">FAQ</span>
            <h2 className="font-sans font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Questions technical systems builders ask.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[280px] leading-relaxed">
              Specific, hard details regarding executions, infrastructure pricing models, SLA policies, and long-term stack governance.
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
                    <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-[#7c3aed] transition-colors">
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
          n8n is one tool in our automation practice. For GoHighLevel, Make.com, and multi-system pipelines, see the full service.
        </div>
      </div>

      {/* SECTION 7 — SCOPING AND BOOKING FORMS */}
      <BookingSection 
        id="n8n-scoping-booking" 
        serviceName="n8n Custom Automation Workflows" 
        accentColor="automation" 
        ctaGradient="from-[#ea580c] to-[#f97316]" 
      />

    </div>
  );
}
