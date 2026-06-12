import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, Mail, Linkedin, X, Calendar, Clock, Sparkles, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Calendly Embed designed strictly within a modal
const CalendlyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[960px] h-[90vh] md:h-[80vh] rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden border border-black/10 z-10 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-black/[0.06] flex items-center justify-between bg-neutral-50 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#111]">
              Secure Scoping Scheduler
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 px-2.5 rounded-lg border border-black/[0.06] hover:bg-black/[0.04] text-neutral-500 hover:text-black font-mono text-[11px] transition-all flex items-center gap-1 cursor-pointer"
          >
            <X size={14} /> Close
          </button>
        </div>

        {/* Iframe content */}
        <div className="flex-1 w-full bg-white relative">
          <iframe
            src="https://calendly.com/mr-chadplus?hide_landing_page_details=1&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            title="WhispersLab Official Calendly Integration"
          />
        </div>

        {/* Footer info line */}
        <div className="px-6 py-3.5 border-t border-black/[0.04] bg-neutral-50 text-center flex-shrink-0">
          <p className="font-mono text-[10px] text-gray-400">
            No registration required · Access direct Calendly endpoints securely.
          </p>
        </div>
      </div>
    </div>
  );
};

// Contact Form component
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', projectType: '', message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full border border-black/[0.08] hover:border-black/[0.16] rounded-xl px-4 py-3 font-sans text-sm text-[#111] bg-[#faf9f9] outline-none transition-all focus:bg-white focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/20 block";
  const labelClass = "block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2 text-left";

  if (submitted) {
    return (
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-8 text-center animate-fadeIn">
        <div className="text-3xl mb-3 text-emerald-600">✓</div>
        <div className="font-display text-lg font-bold text-[#111] mb-2 text-center">
          Message received.
        </div>
        <div className="font-sans text-sm font-light text-gray-500 text-center">
          We have received your specifications and will respond within 24 hours.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      {/* Name */}
      <div>
        <label className={labelClass}>Your name</label>
        <input
          type="text"
          required
          placeholder="Alex Chen"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Work email</label>
        <input
          type="email"
          required
          placeholder="alex@company.com"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>

      {/* Project type */}
      <div>
        <label className={labelClass}>What do you need?</label>
        <select
          required
          value={form.projectType}
          onChange={e => setForm({ ...form, projectType: e.target.value })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>Select a service</option>
          <option value="saas-mvp">SaaS MVP Development</option>
          <option value="automation">Business Automation</option>
          <option value="gohighlevel">GoHighLevel Setup</option>
          <option value="n8n">n8n Automation</option>
          <option value="shopify">Shopify Development</option>
          <option value="shopify-speed">Shopify Speed Optimization</option>
          <option value="ai-integration">AI Feature Integration</option>
          <option value="other">Something else</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Tell us about your project</label>
        <textarea
          required
          rows={4}
          placeholder="What are you building, what's the problem you're solving, and what does success look like?"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-vertical min-h-[100px] leading-relaxed`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3.5 px-6 rounded-xl text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all hover:opacity-95 active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_14px_rgba(124,58,237,0.2)] bg-neutral-950"
      >
        {loading ? (
          <>
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              className="animate-spin text-white"
              fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <path d="M21 12a9 9 0 11-6.219-8.56" />
            </svg>
            Sending...
          </>
        ) : (
          <span>Send specifications &rarr;</span>
        )}
      </button>
    </form>
  );
};

interface ContactPageProps {
  handleNavigateHome: () => void;
}

export default function ContactPage({ handleNavigateHome }: ContactPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Page hero entrance
    const tl = gsap.timeline();
    tl.fromTo('.contact-eyebrow',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo('.contact-headline',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo('.contact-sub',
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.contact-deck-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.2'
    );

    // Steps fade in
    gsap.fromTo('.contact-step',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-steps',
          start: 'top 85%'
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="bg-[#faf9f9]" id="contact-view">
      
      {/* SECTION 1 — PAGE HERO (Minimal Header) */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-[#e8e6e3] bg-[#faf9f9] text-left">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          
          {/* Eyebrow */}
          <div className="contact-eyebrow font-mono text-[11px] text-gray-400 tracking-[0.14em] uppercase mb-6 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="contact-headline font-display text-[40px] sm:text-[56px] md:text-[68px] font-bold tracking-[-0.03em] leading-[1.02] text-[#111] mb-6 max-w-[800px]">
            Let's talk about{" "}
            <em className="not-italic text-gray-400 font-normal">
              what you're building.
            </em>
          </h1>

          {/* Sub */}
          <p className="contact-sub font-sans text-base md:text-[17px] font-light text-gray-500 leading-relaxed max-w-[550px]">
            Ready to design, scope, and engineer your product with elite speed. Choose whether you'd like to reserve an immediate technical mapping session or submit specifications directly.
          </p>

        </div>
      </section>

      {/* SECTION 2 — MAIN TWO-COLUMN LAYOUT */}
      <section className="py-16 md:py-24 bg-white text-left">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT — PREMIUM HIGH-CONTEST CTA BOOKING DECK */}
          <div className="contact-deck-card flex flex-col justify-between rounded-3xl bg-[#faf9f9] border border-black/5 p-8 md:p-10 relative overflow-hidden self-stretch shadow-sm">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="z-10 space-y-8">
              {/* Card Header Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-[#7c3aed] uppercase tracking-widest font-bold bg-[#7c3aed]/10 px-2.5 py-1 rounded">
                    Primary Route
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Booking open today
                  </div>
                </div>
                
                <h2 className="font-display text-3xl font-bold text-gray-950 tracking-tight leading-tight pt-2">
                  Book a Free 20-Min Scoping Call
                </h2>
                
                <p className="font-sans text-sm font-light text-gray-500 leading-relaxed max-w-[450px]">
                  Pick a slot that works for you. No initial documentation or forms required. We will map your exact requirements, architecture, and deliver plans.
                </p>
              </div>

              {/* Core Scoping Benchmarks / Guarantees */}
              <div className="space-y-4 pt-1">
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold border-b border-black/[0.04] pb-2">
                  What you get on the call
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Direct Architect Scope", desc: "Speak directly with senior engineers, not sales reps." },
                    { title: "Fixed Quote in 48h", desc: "No guesses. Transparent, locked and legal flat-rate quotes." },
                    { title: "Technical Drafting", desc: "Receive immediate schematic feedback on your stack." },
                    { title: "Zero Commitment", desc: "Totally risk-free conversation. If we aren't a fit, we'll guide you." },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 font-display text-[14px] font-bold text-gray-950">
                        <Check size={14} className="text-emerald-500 flex-shrink-0" />
                        {item.title}
                      </div>
                      <p className="font-sans text-[12px] font-light text-gray-500 pl-5 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Indicators */}
              <div className="grid grid-cols-3 gap-4 bg-white/60 backdrop-blur-sm border border-black/[0.03] p-4 rounded-xl">
                <div className="text-center">
                  <div className="font-mono text-[#7c3aed] text-lg font-bold">20m</div>
                  <div className="font-sans text-[9px] text-gray-400 font-medium">Session Length</div>
                </div>
                <div className="text-center border-x border-black/[0.04]">
                  <div className="font-mono text-gray-900 text-lg font-bold">100%</div>
                  <div className="font-sans text-[9px] text-gray-400 font-medium font-mono">Technical Reps</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-emerald-600 text-lg font-bold">&lt; 48h</div>
                  <div className="font-sans text-[9px] text-gray-400 font-medium">Quote Turnaround</div>
                </div>
              </div>
            </div>

            {/* Pulsing Booking Button Section */}
            <div className="mt-8 pt-4 border-t border-black/[0.04] z-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 px-6 rounded-2xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.98] shadow-[0_12px_24px_rgba(124,58,237,0.22)] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Calendar size={15} className="group-hover:rotate-12 transition-transform" />
                <span>Book Scoping Call &rarr;</span>
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-[11px] font-sans text-gray-400">
                <ShieldCheck size={13} className="text-emerald-500" />
                <span>Secure live sync · Calendly official portal integration</span>
              </div>
            </div>
          </div>

          {/* RIGHT — DIRECT SPECIFICATION SUBMISSION FORM */}
          <div className="flex flex-col justify-between self-stretch">
            
            <div className="space-y-6">
              <div className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.12em] font-bold">
                Or send a specifications message
              </div>
              
              <div className="border border-black/[0.06] rounded-3xl p-6 md:p-8 bg-white shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Direct Channel Anchors */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  platform: 'Email Directly',
                  desc: 'hello@whisperslab.com',
                  href: 'mailto:hello@whisperslab.com',
                  icon: <Mail size={16} className="text-[#ea4335]" />
                },
                {
                  platform: 'LinkedIn Hub',
                  desc: 'Whispers Lab updates',
                  href: 'https://linkedin.com',
                  icon: <Linkedin size={16} className="text-[#0a66c2]" />
                }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#faf9f9] border border-black/5 hover:bg-neutral-50 transition-all cursor-pointer text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.04] flex items-center justify-center flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-display text-[12.5px] font-bold text-[#111] leading-none">
                      {link.platform}
                    </div>
                    <div className="font-sans text-[11px] font-light text-gray-400 mt-1.5 leading-none overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] sm:max-w-none">
                      {link.desc}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ENGAGEMENT FLOW (What happens next) - Horizontal 3-steps */}
      <section className="py-16 md:py-20 bg-neutral-50 border-y border-black/[0.05] text-left">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 contact-steps">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.14em] font-bold mb-3.5">
                The Scopes Roadmap
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-950 tracking-tight">
                Process to launch in 3 steps
              </h3>
            </div>
            <p className="font-sans text-[13px] font-light text-gray-500 max-w-[320px]">
              No ambiguous consulting, unnecessary wait times, or surprise bills. Every engagement follows our standardized pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Reserve Scoping call',
                desc: 'Pick any time slot inside our secure Calendly modal. Zero preparation or paperwork needed.'
              },
              {
                n: '02',
                title: 'Formulate Technical spec',
                desc: "We discuss stack compatibility, deployment strategies, and project timeline requirements for 20 minutes."
              },
              {
                n: '03',
                title: 'Receive Locked fixed quote',
                desc: 'Within 48 hours, receive your formal specification proposal representing a guaranteed and transparent locked flat-rate price.'
              }
            ].map((step, i) => (
              <div key={i} className="contact-step rounded-2xl bg-white border border-black/5 p-6 hover:shadow-md transition-all flex flex-col justify-between min-h-[170px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-300 font-bold bg-[#faf9f9] border border-black/[0.04] px-2.5 py-1 rounded">
                      Step {step.n}
                    </span>
                    <Zap size={13} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[15px] text-[#111] mb-2">
                      {step.title}
                    </h4>
                    <p className="font-sans text-[12.5px] font-light text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — BOTTOM TRUST STRIP */}
      <section className="py-8 bg-[#faf9f9]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex items-center justify-center gap-x-12 gap-y-4 flex-wrap">
          {[
            'Replies within 24 hours',
            'Free scoping call — no commitment',
            'Fixed quote within 48 hours of call',
            '100% Client Satisfaction Guaranteed'
          ].map((fact, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-mono text-[11px] text-gray-500 font-bold tracking-tight">
                {fact}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Secure Modal Anchor Mount */}
      <CalendlyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
