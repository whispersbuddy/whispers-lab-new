import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_DATA = [
  {
    slug: 'nexus-logic-flow',
    name: 'Nexus Logic Flow',
    client: 'Growth-stage marketing agency · CA · 2023',
    service: 'Automation',
    category: 'automation',
    metric: '22 hrs',
    metricLabel: 'saved per week · replaced $4,800/mo manual process'
  },
  {
    slug: 'vanta-shop',
    name: 'Vanta Shop',
    client: 'DTC apparel brand · US · 2024',
    service: 'Commerce',
    category: 'shopify',
    metric: '+28%',
    metricLabel: 'conversion rate · Lighthouse 100 post-launch'
  },
  {
    slug: 'under-nda-fintech',
    name: 'Under NDA · Fintech',
    client: 'Pre-launch startup · US · 2025',
    service: 'SaaS MVP',
    category: 'saas',
    metric: 'Active',
    metricLabel: 'engagement · case study on request'
  },
  {
    slug: 'under-nda-healthtech',
    name: 'Under NDA · HealthTech',
    client: 'Series A startup · CA · 2025',
    service: 'AI Integration',
    category: 'ai',
    metric: 'Active',
    metricLabel: 'engagement · case study on request'
  }
];

interface WorkListItemProps {
  project: any;
  index: number;
  key?: string;
}

const WorkListItem = ({ project, index }: WorkListItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`#work/${project.slug}`}
      className="work-list-row border-b border-[#e8e6e3] text-decoration-none transition-colors duration-250 cursor-pointer block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#faf9f9' : 'transparent',
      }}
    >
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-[60px_1fr_200px_280px_120px] gap-8 items-center px-6 md:px-16 py-8">
        {/* Index number */}
        <span className="font-mono text-xs text-gray-300 font-bold">
          {String(index).padStart(2, '0')}
        </span>

        {/* Project name + client */}
        <div>
          <div 
            className="font-display text-xl font-bold tracking-tight mb-1 transition-colors duration-200"
            style={{ color: hovered ? '#7c3aed' : '#111' }}
          >
            {project.name}
          </div>
          <div className="font-sans text-[13px] font-light text-gray-400">
            {project.client}
          </div>
        </div>

        {/* Service tag */}
        <span className="font-mono text-[10px] text-gray-500 border border-[#e8e6e3] rounded-md px-3 py-1.5 w-fit uppercase tracking-wider bg-white shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-center">
          {project.service}
        </span>

        {/* Outcome */}
        <div className="font-sans text-[13px] font-light text-gray-600 leading-normal">
          <strong className="font-bold text-gray-950">
            {project.metric}
          </strong>
          {' '}{project.metricLabel}
        </div>

        {/* Arrow — appears on hover */}
        <div className="flex justify-end items-center">
          <ArrowRight 
            size={18}
            className="transition-all duration-200"
            style={{
              color: hovered ? '#7c3aed' : '#ccc',
              transform: hovered ? 'translateX(4px)' : 'none'
            }}
          />
        </div>
      </div>

      {/* Mobile Row Layout (collapse to 2 columns, hide index number + service tag) */}
      <div className="md:hidden flex items-center justify-between gap-4 px-5 py-6">
        <div className="flex-1 min-w-0">
          <div 
            className="font-display text-lg font-bold tracking-tight mb-0.5"
            style={{ color: hovered ? '#7c3aed' : '#111' }}
          >
            {project.name}
          </div>
          <div className="font-sans text-[11px] font-light text-gray-400 truncate">
            {project.client}
          </div>
        </div>

        <div className="text-right flex-shrink-0 max-w-[140px]">
          <div className="font-sans text-[12.5px] font-bold text-gray-950">
            {project.metric}
          </div>
          <div className="font-sans text-[10.5px] font-light text-gray-400 leading-tight mt-0.5">
            outcome achieved
          </div>
        </div>
      </div>
    </a>
  );
};

interface WorkPageProps {
  handleNavigateHome?: () => void;
}

export default function WorkPage({ handleNavigateHome }: WorkPageProps) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  useEffect(() => {
    // Page hero entrance
    const tl = gsap.timeline();
    tl.fromTo('.work-eyebrow',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo('.work-headline',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo('.work-stats',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    );

    // Featured project entrance
    gsap.fromTo('.featured-image',
      { opacity: 0, scale: 0.97 },
      {
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.featured-project',
          start: 'top 75%'
        }
      }
    );

    gsap.fromTo('.featured-content',
      { opacity: 0, x: 24 },
      {
        opacity: 1, 
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.featured-project',
          start: 'top 75%'
        }
      }
    );

    // Work list rows stagger
    gsap.fromTo('.work-list-row',
      { opacity: 0, y: 16 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.work-list',
          start: 'top 80%'
        }
      }
    );

    // Testimonial cards
    gsap.fromTo('.testimonial-card',
      { opacity: 0, y: 24 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-strip',
          start: 'top 80%'
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [filter]); // re-run when filter changes

  return (
    <div className="bg-[#faf9f9]" id="work-index-view">
      
      {/* SECTION 1 — PAGE HERO (Minimal) */}
      <section className="pt-24 pb-0 md:pt-32 md:pb-0 bg-[#faf9f9] border-b border-[#e8e6e3] text-left">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          
          {/* Top row — label + filter tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            
            {/* Left — headline */}
            <div className="space-y-4">
              <div className="work-eyebrow font-mono text-[11px] text-gray-400 tracking-[0.14em] uppercase">
                Selected work · {new Date().getFullYear()}
              </div>
              <h1 className="work-headline font-display text-[40px] sm:text-[56px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.0] text-[#111] max-w-[600px]">
                Products built.{" "}
                <em className="not-italic text-gray-400 font-normal">
                  Results measured.
                </em>
              </h1>
            </div>

            {/* Right — filter tabs */}
            <div className="flex gap-1.5 p-1 bg-white border border-[#e8e6e3] rounded-xl self-start md:self-end overflow-x-auto max-w-full">
              {[
                { val: 'all', label: 'All work' },
                { val: 'saas', label: 'SaaS' },
                { val: 'automation', label: 'Automation' },
                { val: 'shopify', label: 'Commerce' },
                { val: 'ai', label: 'AI' }
              ].map(tab => (
                <button
                  key={tab.val}
                  onClick={() => setFilter(tab.val)}
                  className={`px-4 py-2 rounded-lg font-mono text-[11px] font-bold transition-all whitespace-nowrap cursor-pointer`}
                  style={{
                    background: filter === tab.val ? '#111' : 'transparent',
                    color: filter === tab.val ? '#fff' : '#aaa'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="work-stats flex flex-wrap gap-8 sm:gap-12 md:gap-16 pb-10">
            {[
              { num: '50+', label: 'Projects delivered' },
              { num: '3', label: 'Core disciplines' },
              { num: '100%', label: 'Fixed-scope delivery' },
              { num: 'US/CA', label: 'Primary client markets' }
            ].map((stat, i) => (
              <div key={i} className="min-w-[120px]">
                <div className="font-display text-3xl font-extrabold text-gray-950 tracking-tight leading-none">
                  {stat.num}
                </div>
                <div className="font-mono text-[10px] text-gray-400 mt-1.5 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2 — FEATURED CASE STUDY (Top of work list) */}
      <section className="featured-project border-b border-[#e8e6e3] py-16 md:py-20 bg-white text-left">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          
          {/* Featured Label */}
          <div className="font-mono text-[11px] text-[#7c3aed] uppercase tracking-[0.14em] font-bold mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
            Featured project
          </div>

          {/* Responsive Two Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left — Image container */}
            <div className="featured-image relative rounded-2xl overflow-hidden h-[260px] sm:h-[350px] lg:h-[400px] bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&fit=crop"
                alt="Aether Dashboard — SaaS analytics product"
                className="w-full h-full object-cover block"
                onError={e => {
                  (e.target as HTMLElement).parentElement!.style.background = '#f5f3f3';
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              {/* Outcome Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md border border-[#e8e6e3] rounded-xl p-3 px-4 flex items-center gap-2.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-gray-600">
                  40% increase in user retention
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="featured-content space-y-6">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['SaaS MVP', 'Next.js', 'Supabase', '2024'].map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] rounded-md px-3 py-1 bg-white border tracking-wider font-bold"
                    style={{
                      color: i === 0 ? '#7c3aed' : '#aaa',
                      borderColor: i === 0 ? 'rgba(124,58,237,0.2)' : '#e8e6e3',
                      background: i === 0 ? 'rgba(124,58,237,0.06)' : 'transparent',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-950 tracking-tight leading-none">
                Aether Dashboard
              </h2>

              {/* Client Context */}
              <div className="font-mono text-[11px] text-gray-400 font-bold uppercase tracking-widest border-b border-black/[0.04] pb-2">
                Series A Fintech · US · Shipped in 7 weeks
              </div>

              {/* Description */}
              <p className="font-sans text-[15px] sm:text-[16px] font-light text-gray-500 leading-relaxed max-w-xl">
                A legacy banking analytics tool rebuilt from the ground up as a real-time reactive SaaS. The client had outgrown their existing system — it couldn't handle concurrent users, had no mobile support, and was costing them in manual reporting work every week.
              </p>

              {/* Outcome metrics */}
              <div className="grid grid-cols-3 gap-6 pt-5 border-t border-[#f0eeee]">
                {[
                  { num: '40%', label: 'User retention increase' },
                  { num: '7wk', label: 'Delivered in' },
                  { num: '99.9%', label: 'Uptime since launch' }
                ].map((m, i) => (
                  <div key={i}>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-none">
                      {m.num}
                    </div>
                    <div className="font-sans text-[11.5px] font-light text-gray-400 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Link CTA */}
              <div className="pt-4">
                <a
                  href="#work/aether-dashboard"
                  className="inline-flex items-center gap-2 font-mono text-[12px] font-bold text-gray-950 border-b-2 border-gray-950 pb-1 hover:text-[#7c3aed] hover:border-[#7c3aed] transition-colors duration-200"
                >
                  <span>Read the full case study</span>
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — WORK LIST (Curated Grid list) */}
      <section className="work-list py-0 bg-white border-b border-[#e8e6e3] text-left">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Column headers (Desktop only) */}
          <div className="hidden md:grid grid-cols-[60px_1fr_200px_280px_120px] gap-8 px-6 md:px-16 py-4 border-b border-[#e8e6e3] bg-[#faf9f9]">
            {['#', 'Project', 'Service', 'Outcome', ''].map((h, i) => (
              <span key={i} className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                {h}
              </span>
            ))}
          </div>

          {/* Work list items */}
          {filtered.map((project, i) => (
            <WorkListItem
              key={project.slug}
              project={project}
              index={i + 2} // starts at 02 since featured is 01
            />
          ))}

          {/* Empty state of filter */}
          {filtered.length === 0 && (
            <div className="py-20 px-5 text-center bg-[#faf9f9]/50">
              <p className="font-sans text-[15px] font-light text-gray-400 mb-2">
                No projects in this category yet.
              </p>
              <div className="font-mono text-xs">
                Check back soon or{" "}
                <a href="#contact" className="text-[#7c3aed] font-bold hover:underline">
                  get in touch directly.
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4 — NDA NOTE */}
      <section className="py-16 md:py-20 bg-[#faf9f9] border-b border-[#e8e6e3] text-left">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="space-y-4">
            <h2 className="font-display text-[32px] sm:text-[40px] font-black tracking-tight leading-tight text-gray-950">
              Most of our best work <br />
              <span className="text-gray-400 font-normal">is under NDA.</span>
            </h2>
            <p className="font-sans text-[15px] font-light text-gray-500 leading-relaxed max-w-lg">
              Pre-launch products, fintech clients, and healthcare applications often can't be shown publicly. If the work above isn't enough to evaluate us, book a call — we'll share relevant sanitized details under NDA.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              '3 active NDA engagements in 2025',
              'Fintech, HealthTech, and B2B SaaS',
              'Full case studies shared on request under NDA',
              'Reference calls with past clients available'
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#e8e6e3] shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-left">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-emerald-500 stroke-[3px]" />
                </span>
                <span className="font-sans text-[13.5px] font-medium text-gray-700">
                  {point}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — TESTIMONIALS STRIP */}
      <section className="testimonials-strip py-16 md:py-20 bg-white border-b border-[#e8e6e3] text-left">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          
          {/* Label Header */}
          <div className="font-mono text-[11px] text-gray-300 uppercase tracking-widest font-bold mb-12 flex items-center gap-4">
            <div className="h-px bg-gray-200 flex-1" />
            <span>What clients say</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Testimonial Column List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Shipped our SaaS MVP in exactly 6 weeks. Clean codebase, thorough handoff. We raised a pre-seed round 3 months later.",
                name: "Alex M.",
                role: "Co-founder & CEO",
                company: "B2B SaaS · Pre-seed → Seed funded",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face"
              },
              {
                quote: "Cut our lead processing from 4 hours to 5 minutes. The n8n + GoHighLevel setup runs flawlessly in the background.",
                name: "Sarah K.",
                role: "COO",
                company: "Marketing agency · $3M ARR",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face"
              },
              {
                quote: "Shopify store went from 41 to 94 on PageSpeed. Organic revenue up 22% in the first month after launch.",
                name: "James R.",
                role: "Head of E-commerce",
                company: "DTC brand · $8M annual revenue",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop&crop=face"
              }
            ].map((t, i) => (
              <div 
                key={i} 
                className="testimonial-card flex flex-col justify-between rounded-2xl bg-[#faf9f9] border border-black/5 p-6 md:p-8 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Styled blockquote symbol */}
                  <div className="font-display text-5xl font-black text-gray-200 select-none leading-none -mb-2">
                    “
                  </div>
                  <p className="font-display font-medium text-[15px] italic text-[#111] leading-relaxed mb-6">
                    {t.quote}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Subtle divider */}
                  <div className="h-px bg-gray-200/80" />

                  {/* Author Meta */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#e8e6e3] flex-shrink-0"
                      onError={e => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-sans text-[13px] font-bold text-[#111] truncate">
                        {t.name} — {t.role}
                      </div>
                      <div className="font-mono text-[9px] text-gray-400 mt-1 truncate">
                        {t.company}
                      </div>
                    </div>
                    {/* Replaced Upwork badge with generic verified high status indicator */}
                    <span className="font-mono text-[8px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/10 rounded px-2 py-0.5 flex-shrink-0">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-[#faf9f9] text-center">
        <div className="max-w-[640px] mx-auto px-5">
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-none mb-4">
            Want to see work <br className="hidden sm:inline" />
            <span className="text-gray-450 font-bold">relevant to your project?</span>
          </h2>
          
          <p className="font-sans text-[14.5px] sm:text-[15.5px] font-light text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
            Book a 20-minute call. We'll share the most relevant case studies for your specific situation — including NDA work where applicable.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all hover:opacity-90 active:scale-[0.98] shadow-md cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)'
              }}
            >
              <span>Book a scoping call &rarr;</span>
            </a>
            
            <a
              href="#services/automation"
              className="inline-flex items-center gap-2 py-3 px-5 rounded-xl border border-[#e8e6e3] text-gray-405 font-mono text-[11px] font-bold uppercase tracking-wider bg-white shadow-sm hover:border-[#7c3aed] hover:text-gray-950 transition-colors duration-200 cursor-pointer"
            >
              <span>See all services ↗</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
