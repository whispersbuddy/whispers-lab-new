import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";
import BookingSection from "./BookingSection";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

gsap.registerPlugin(ScrollTrigger);

interface AIIntegrationServicePageProps {
  handleNavigateHome: () => void;
}

export default function AIIntegrationServicePage({ handleNavigateHome }: AIIntegrationServicePageProps) {
  // Use scroll animations
  useScrollAnimations();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // GSAP Count up animations for stat highlights
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Demand Signal stat highlight count up (+178%)
      document.querySelectorAll('.result-number-ai').forEach(el => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            const targetStr = (el as HTMLElement).innerText.replace(/[^0-9.]/g, '');
            const targetVal = parseFloat(targetStr);
            if (!isNaN(targetVal)) {
              gsap.fromTo({ n: 0 }, { n: targetVal }, {
                duration: 1.8,
                ease: 'power2.out',
                onUpdate: function() {
                  const currentElement = el as HTMLElement;
                  const isPlus = el.innerHTML.includes('+');
                  const isPercent = el.innerHTML.includes('%');
                  currentElement.textContent = (isPlus ? '+' : '') + Math.round(this.targets()[0].n).toLocaleString() + (isPercent ? '%' : '');
                }
              });
            }
          }
        });
      });

      // 2. Custom card stagger-in animations
      gsap.fromTo('.gsap-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-card-grid',
            start: 'top 75%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Marquee logos
  const aiLogos = [
    { url: 'https://cdn.simpleicons.org/openai/412991', name: 'OpenAI' },
    { url: 'https://cdn.simpleicons.org/anthropic/CC785C', name: 'Anthropic' },
    { url: 'https://cdn.simpleicons.org/langchain/1C3C3C', name: 'LangChain' },
    { url: 'https://cdn.simpleicons.org/pinecone/000000', name: 'Pinecone' },
    { url: 'https://cdn.simpleicons.org/postgresql/4169E1', name: 'pgvector' },
    { url: 'https://cdn.simpleicons.org/python/3776AB', name: 'Python' },
    { url: 'https://cdn.simpleicons.org/supabase/3ECF8E', name: 'Supabase' },
    { url: 'https://cdn.simpleicons.org/vercel/000000', name: 'Vercel' }
  ];

  const aiFeatures = [
    {
      number: "01",
      title: "RAG — Retrieval Augmented Generation",
      description: "Connect your AI to your actual data. Documents, databases, support tickets, knowledge bases — the model answers from your content, not from general training.",
      useCases: [
        "AI search across your product's content library",
        "Support bot that answers from your actual docs",
        "Sales tool that pulls from your CRM and proposals"
      ],
      model: "GPT-4 / Claude 3",
      codePreview: "retriever.query(userInput, topK=5)"
    },
    {
      number: "02",
      title: "Co-pilot & In-app Assistant",
      description: "An AI layer embedded inside your product UI. Users describe what they want to do, the co-pilot helps them do it — without leaving the app.",
      useCases: [
        "Draft generation inside an editor or CRM",
        "Natural language query for complex filters",
        "Step-by-step guidance for onboarding flows"
      ],
      model: "GPT-4o / Claude 3.5",
      codePreview: "copilot.suggest(context, userIntent)"
    },
    {
      number: "03",
      title: "Classification & Routing",
      description: "Incoming data — emails, support tickets, leads, documents — classified, tagged, and routed automatically. No human reads every item to decide where it goes.",
      useCases: [
        "Support tickets triaged by urgency and type",
        "Inbound leads scored before hitting CRM",
        "Documents categorized on upload"
      ],
      model: "GPT-4o-mini / Fine-tuned",
      codePreview: "classifier.label(text, categories)"
    },
    {
      number: "04",
      title: "Summarization & Extraction",
      description: "Long documents, meeting transcripts, email threads — distilled into the information your users actually need. Structured output, not a wall of text.",
      useCases: [
        "Meeting notes summarized with action items",
        "Contract clause extraction for review",
        "Weekly report generation from raw data"
      ],
      model: "Claude 3 Haiku / GPT-4o",
      codePreview: "summarizer.extract(doc, schema)"
    }
  ];

  const faqs = [
    {
      q: "Can you add AI to my existing app?",
      a: "Yes — this is most of what we do. We don't need to rebuild your product. We scope the AI feature, identify the integration point in your existing codebase, build the feature, and ship it as a PR or a deployed update."
    },
    {
      q: "Which AI model should we use?",
      a: "Depends on the job. GPT-4o for complex reasoning and function calling. Claude 3.5 Sonnet for long documents and nuanced tasks. GPT-4o-mini or Claude Haiku when speed and cost matter more than capability. We'll recommend the right one during scoping — not the most expensive one."
    },
    {
      q: "What does API usage actually cost?",
      a: "We model this before we build. A typical RAG feature costs $0.001–0.005 per query depending on context length and model. We'll show you the cost curve at your expected usage volume before writing a line of code."
    },
    {
      q: "How do you handle AI output that's wrong?",
      a: "Every AI integration we build has output validation, confidence thresholds, and graceful fallback states. We never ship an AI feature that fails silently. If the model returns garbage, the user sees something useful — not an error or empty output."
    },
    {
      q: "Do you do fine-tuning?",
      a: "Rarely — fine-tuning is expensive and usually unnecessary. 95% of AI features are better solved with good prompting, RAG, and structured output than with fine-tuning. We'll tell you honestly if your use case actually needs it."
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#faf9f9] text-[#111111] font-sans antialiased selection:bg-purple-600/10 relative">
      
      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="AI Feature Integration — Under SaaS MVP"
        headline="Your product, now"
        headlineItalic="with AI inside it."
        sub="We integrate OpenAI, Claude, and custom AI pipelines into your existing SaaS — without rebuilding from scratch. RAG, co-pilots, classification, summarization — scoped, built, and shipped."
        primaryCTA={{ label: "Add AI to my product →", href: "#scoping-booking" }}
        secondaryCTA={{ label: "See how it works ↗", href: "#how-it-works" }}
        backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1800&q=90&fit=crop"
        overlayStrength={0.70}
      />
      <TrustMarquee logos={aiLogos} />

      {/* SECTION 2 — DEMAND SIGNAL (Unique to this page) */}
      <section className="py-[80px] border-b border-[#e8e6e3] bg-white relative z-10 select-none">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[80px] items-center">
            
            {/* Left Column — the stat */}
            <div className="text-left">
              <div 
                className="result-number-ai"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(80px, 11vw, 130px)',
                  fontWeight: 700,
                  letterSpacing: '-0.05em',
                  lineHeight: 0.9,
                  color: '#111',
                  marginBottom: 16
                }}
              >
                +178%
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                fontWeight: 600,
                color: '#aaaaaa',
                letterSpacing: '0.06em',
                marginBottom: 24,
                textTransform: 'uppercase'
              }}>
                YoY demand for AI integration on Upwork · 2024
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                fontWeight: 300,
                color: '#555555',
                lineHeight: 1.75,
                maxWidth: 400
              }}>
                Every SaaS product being built or evaluated right now has one question attached to it: does it have AI? We've been building AI features since before most agencies knew what RAG meant.
              </p>
            </div>

            {/* Right Column — 3 mini proof points */}
            <div className="flex flex-col justify-center divide-y divide-[#f0eeee]">
              {/* Row 1 */}
              <div className="py-5 text-left" style={{ borderTop: '1px solid #f0eeee' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#111',
                  lineHeight: 1
                }}>
                  12+
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#aaaaaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: 6
                }}>
                  AI integrations shipped in the last 12 months
                </div>
              </div>

              {/* Row 2 */}
              <div className="py-5 text-left">
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#111',
                  lineHeight: 1
                }}>
                  4
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#aaaaaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: 6
                }}>
                  AI models we work with regularly — GPT-4, Claude 3, Gemini, Llama
                </div>
              </div>

              {/* Row 3 */}
              <div className="py-5 text-left" style={{ borderBottom: '1px solid #f0eeee' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#111',
                  lineHeight: 1
                }}>
                  &lt; 3wk
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#aaaaaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: 6
                }}>
                  Typical delivery for a single AI feature integration
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE ACTUALLY BUILD */}
      <section id="how-it-works" className="py-24 border-b border-[#e8e6e3] relative z-10 select-none">
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
            What this covers
          </span>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 16,
            maxWidth: '650px'
          }}>
            Not "add AI." <br />
            Specific features, properly built.
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 300,
            color: '#888888',
            lineHeight: 1.75,
            maxWidth: 500,
            marginBottom: 56
          }}>
            Vague AI integrations fail silently or disappoint users. We scope exactly what the feature does, which model fits, what the cost implications are, and how it degrades gracefully when the API is slow.
          </p>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 gsap-card-grid">
            {aiFeatures.map((fc) => (
              <div 
                key={fc.number}
                className="gsap-card flex flex-col justify-between"
                style={{
                  background: '#faf9f9',
                  border: '1px solid #e8e6e3',
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e8e6e3';
                }}
              >
                {/* Top gradient bar — unique to this page's cards */}
                <div style={{
                  height: 3,
                  background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                  opacity: 0.6
                }} />

                <div style={{ padding: '32px 32px 28px' }}>
                  {/* Number + Model badge row */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#cccccc'
                    }}>
                      {fc.number}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      fontWeight: 600,
                      color: '#7c3aed',
                      background: 'rgba(124,58,237,0.08)',
                      border: '1px solid rgba(124,58,237,0.15)',
                      borderRadius: 6,
                      padding: '3px 10px'
                    }}>
                      {fc.model}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: 12,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2
                  }}>
                    {fc.title}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    fontWeight: 300,
                    color: '#888888',
                    lineHeight: 1.75,
                    marginBottom: 20
                  }}>
                    {fc.description}
                  </p>

                  {/* Use case list */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    marginBottom: 8
                  }}>
                    {fc.useCases.map((uc, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start'
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 10,
                          color: '#7c3aed',
                          marginTop: 3,
                          flexShrink: 0
                        }}>→</span>
                        <span style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13,
                          color: '#555555',
                          lineHeight: 1.5
                        }}>
                          {uc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code preview strip — dark bottom */}
                <div style={{
                  background: '#111111',
                  padding: '16px 32px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.35)',
                  lineHeight: 1.8
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>// example</span>
                  <br />
                  <span style={{ color: '#7c3aed' }}>const</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}> result </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>= await </span>
                  <span style={{ color: '#0ea5e9' }}>{fc.codePreview}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — HOW WE APPROACH AI INTEGRATION */}
      <section className="py-24 border-b border-[#e8e6e3] bg-white relative z-10 select-none">
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
            Our approach
          </span>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: '650px'
          }}>
            AI should make your product better. Not more complicated.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 1,
            background: '#e8e6e3',
            border: '1px solid #e8e6e3',
            borderRadius: 16,
            overflow: 'hidden',
            marginTop: 44
          }}>
            {[
              {
                step: "01",
                title: "Choose the right model",
                desc: "GPT-4o for complex reasoning. Claude for long context and nuance. Haiku or mini for speed and cost. We match the model to the job — not to the hype.",
                detail: "Most integrations don't need GPT-4. We'll tell you honestly when a smaller, faster, cheaper model does the job better."
              },
              {
                step: "02",
                title: "Architect for failure",
                desc: "AI APIs fail. They're slow. They return unexpected output. We build retry logic, fallback states, loading UX, and output validation into every integration.",
                detail: "A feature that breaks when the API is slow is not a shipped feature. We treat error states as first-class design requirements."
              },
              {
                step: "03",
                title: "Scope the cost before building",
                desc: "Token costs compound. A feature that costs $0.001 per use becomes $1,000/month at scale. We model the cost curve before writing a line.",
                detail: "You'll know the estimated API cost per user per month before we start — not after you get your first OpenAI bill."
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#faf9f9',
                padding: '40px 36px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#cccccc',
                  marginBottom: 20
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#111',
                  marginBottom: 12,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 300,
                  color: '#888888',
                  lineHeight: 1.75,
                  marginBottom: 16
                }}>
                  {item.desc}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 400,
                  color: '#aaaaaa',
                  lineHeight: 1.65,
                  borderTop: '1px solid #f0eeee',
                  paddingTop: 16
                }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — TECH WE USE */}
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
            The stack
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
            What we build with.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 12
          }}>
            {[
              {
                logo: 'https://cdn.simpleicons.org/openai/412991',
                name: 'OpenAI',
                models: 'GPT-4o · GPT-4o-mini · Embeddings',
                desc: 'Primary model for complex reasoning, function calling, and structured output.'
              },
              {
                logo: 'https://cdn.simpleicons.org/anthropic/CC785C',
                name: 'Anthropic Claude',
                models: 'Claude 3.5 · Claude 3 Haiku',
                desc: 'Long context, nuanced instruction following, and document analysis.'
              },
              {
                logo: 'https://cdn.simpleicons.org/langchain/1C3C3C',
                name: 'LangChain',
                models: 'Chains · Agents · RAG',
                desc: 'Orchestration layer for multi-step AI pipelines and agent workflows.'
              },
              {
                logo: 'https://cdn.simpleicons.org/pinecone/000000',
                name: 'Pinecone',
                models: 'Vector search · Namespaces',
                desc: 'Managed vector database for semantic search and RAG pipelines.'
              },
              {
                logo: 'https://cdn.simpleicons.org/postgresql/4169E1',
                name: 'pgvector',
                models: 'Supabase · PostgreSQL',
                desc: 'Vector search inside your existing Postgres DB — no extra infrastructure.'
              },
              {
                logo: 'https://cdn.simpleicons.org/python/3776AB',
                name: 'Python',
                models: 'FastAPI · LangChain · Scripts',
                desc: 'AI processing layer — API handlers, embedding pipelines, batch jobs.'
              },
              {
                logo: 'https://cdn.simpleicons.org/supabase/3ECF8E',
                name: 'Supabase',
                models: 'Edge Functions · pgvector',
                desc: 'Runs AI features at the edge — fast, scalable, no separate AI server.'
              },
              {
                logo: 'https://cdn.simpleicons.org/vercel/000000',
                name: 'Vercel AI SDK',
                models: 'Streaming · Edge runtime',
                desc: 'Streaming AI responses with proper loading states built in.'
              },
            ].map((tool, i) => (
              <div 
                key={i} 
                className="gsap-card" 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e6e3',
                  borderRadius: 12,
                  padding: '24px 20px',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e8e6e3';
                }}
              >
                <img 
                  src={tool.logo} 
                  width={28} 
                  height={28}
                  style={{ objectFit: 'contain', marginBottom: 14 }}
                  alt={tool.name}
                  onError={e => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#111111',
                  marginBottom: 4
                }}>
                  {tool.name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: '#aaaaaa',
                  marginBottom: 10
                }}>
                  {tool.models}
                </div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  fontWeight: 300,
                  color: '#888888',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-24 border-b border-[#e8e6e3] bg-[#ffffff] text-left" id="ai-faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 block mb-3">FAQ</span>
            <h2 className="font-display font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Questions technical founders ask.
            </h2>
            <p className="font-sans font-light text-sm text-[#888888] mt-3 max-w-[280px] leading-relaxed">
              Vetted answers on engineering specifications, pricing projections, modeling integrations, and support structures.
            </p>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="flex flex-col w-full">
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

      {/* SECTION 7 — BREADCRUMB CTA STRIP */}
      <div style={{
        background: '#f5f3f3',
        borderTop: '1px solid #e8e6e3',
        borderBottom: '1px solid #e8e6e3',
        padding: '28px 64px',
      }} className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
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
          <a href="#services/saas-mvp" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 600,
            color: '#111111',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            ← SaaS MVP Development
          </a>
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 300,
          color: '#888888',
          maxWidth: 400,
        }} className="sm:text-right">
          AI integration is one part of how we build SaaS products. See the full service for architecture, billing, and deployment.
        </div>
      </div>

      {/* SECTION 8 — SCOPING AND BOOKING FORMS */}
      <BookingSection 
        id="scoping-booking" 
        serviceName="AI Feature Integration" 
        accentColor="purple" 
        ctaGradient="from-purple-500 to-cyan-500" 
      />

    </div>
  );
}
