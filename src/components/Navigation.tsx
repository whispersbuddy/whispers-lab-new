import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { WhispersLogo } from "./Logo";

const SERVICES_DATA = [
  {
    title: "SaaS MVP Development",
    hash: "#services/saas-mvp",
    borderActive: "border-indigo-600/30",
    description: "Launch custom high-performance SaaS products securely. We handle full-stack React architectures, interactive client dashboards, database design, and subscription flows.",
    subservices: [
      { name: "SaaS MVP Core Build", hash: "#services/saas-mvp", desc: "Launch secure, high-performance web products with scalable React architectures." },
      { name: "AI Agent Integration", hash: "#services/saas-mvp/ai-integration", desc: "Infuse smart LLM capabilities, proprietary RAG pipelines, and semantic agents directly into your product." }
    ]
  },
  {
    title: "Automated Workflows",
    hash: "#services/automation",
    borderActive: "border-amber-600/30",
    description: "Eliminate manual overhead, orchestrate internal communication, and construct zero-maintenance automatic data translation pipelines.",
    subservices: [
      { name: "Workflow Architecture", hash: "#services/automation", desc: "Orchestrate private lightweight middleware to connect your apps." },
      { name: "n8n & Make Automations", hash: "#services/automation/n8n", desc: "Multi-step complex triggers, customizable payloads, and robust scheduler webhooks." },
      { name: "GoHighLevel CRM Setup", hash: "#services/automation/gohighlevel", desc: "Automate leads follow-ups, SMS triggers, and full sales funnel pipeline designs." }
    ]
  },
  {
    title: "Shopify & E-Commerce",
    hash: "#services/ecommerce",
    borderActive: "border-emerald-600/30",
    description: "Engineered for record-breaking speed, checkout fluidity, and premium conversion rates. Turn visitors into loyal, recurring transactions.",
    subservices: [
      { name: "E-Commerce Systems", hash: "#services/ecommerce", desc: "Bespoke Shopify custom stores designed for highly-optimized conversions." },
      { name: "Shopify Speed Optimization", hash: "#services/shopify/speed-optimization", desc: "Achieve Core Web Vitals max scores and under-1-second loading times." }
    ]
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeMobileSection, setActiveMobileSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeService = SERVICES_DATA[activeTab] || SERVICES_DATA[0];

  return (
    <header
      id="main-header"
      className={`site-navbar sticky top-0 z-55 w-full bg-[#faf9f9]/94 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "border-b border-gray-200 shadow-sm" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1280px] h-16 mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Left - Logo */}
        <a href="#" id="nav-logo" className="flex items-center gap-2 group">
          <WhispersLogo variant="colorful" />
        </a>

        {/* Center - Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 h-full">
          {/* Services with Hover Mega Menu */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <button
              id="desktop-services-trigger"
              className={`text-sm font-sans font-medium flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ${
                isMegaOpen ? "text-[#7c3aed] bg-[#f0eeee]" : "text-gray-600 hover:text-[#111111] hover:bg-[#f0eeee]"
              }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega Menu Overlay Dropdown with Premium Vertical Tab Layout - Full Width & Zero Border Radius */}
            {isMegaOpen && (
              <div 
                id="mega-menu-panel"
                className="absolute top-16 left-0 w-full bg-white border-b border-black/[0.08] shadow-[0_32px_54px_rgba(0,0,0,0.08)] flex overflow-hidden animate-fadeIn z-50 text-left"
              >
                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-16 flex overflow-hidden">
                  {/* Left side Categories Vertical Tabs (280px) */}
                  <div className="w-[280px] bg-[#faf9f9] border-r border-black/[0.04] p-5 py-8 flex flex-col gap-1.5 justify-between flex-shrink-0">
                    <div className="space-y-1.5 flex-1">
                      <div className="font-mono text-[9px] text-[#71717a] uppercase tracking-widest font-bold px-3 pb-2 border-b border-black/[0.02] mb-3">
                        Core Capabilities
                      </div>
                      {SERVICES_DATA.map((service, index) => {
                        const isActive = activeTab === index;
                        return (
                          <div
                            key={index}
                            onMouseEnter={() => setActiveTab(index)}
                            onClick={() => {
                              window.location.hash = service.hash;
                              setIsMegaOpen(false);
                            }}
                            className={`group/cat cursor-pointer flex items-center justify-between p-3.5 px-4 rounded-xl transition-all ${
                              isActive
                                ? `bg-white shadow-[0_3px_14px_rgba(0,0,0,0.03)] border border-black/[0.03] ${service.borderActive}`
                                : "hover:bg-black/[0.02] border border-transparent"
                            }`}
                          >
                            <span className={`font-sans text-[13px] font-medium leading-none transition-colors ${
                              isActive ? "text-gray-950 font-semibold" : "text-gray-600 group-hover/cat:text-gray-950"
                            }`}>
                              {service.title}
                            </span>
                            
                            {/* Active / Hover Arrow Indicator */}
                            <ArrowRight
                              size={14}
                              className={`transition-all duration-350 ${
                                isActive
                                  ? "opacity-100 translate-x-0 text-[#7c3aed]"
                                  : "opacity-0 -translate-x-2 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 text-gray-400"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Consultation Mini Promo */}
                    <div className="mt-8 p-4 bg-white/50 border border-black/[0.02]/40 rounded-2xl">
                      <p className="font-sans text-[11px] font-light text-gray-500 leading-normal mb-2">
                        Need custom engineering? We build tailored, production-ready full-stack tools.
                      </p>
                      <a
                        href="#contact"
                        onClick={() => setIsMegaOpen(false)}
                        className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#7c3aed] flex items-center gap-1 hover:underline"
                      >
                        Instant Scoping Page &rarr;
                      </a>
                    </div>
                  </div>

                  {/* Right side Dynamic Service Content (560px) */}
                  <div className="flex-1 p-6 py-8 flex flex-col justify-between bg-white min-h-[380px]">
                    <div>
                      {/* Header info */}
                      <div className="mb-6 pb-5 border-b border-black/[0.03]">
                        <span className="font-mono text-[9px] text-[#7c3aed] uppercase tracking-widest font-bold">
                          Service Overview
                        </span>
                        <h3 className="font-display font-bold text-[#111111] text-lg mt-1 tracking-tight">
                          {activeService.title}
                        </h3>
                        <p className="font-sans font-light text-[12.5px] text-gray-500 mt-2 leading-relaxed max-w-[480px]">
                          {activeService.description}
                        </p>
                      </div>

                      {/* Subservices 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {activeService.subservices.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            onClick={() => {
                              window.location.hash = sub.hash;
                              setIsMegaOpen(false);
                            }}
                            className="group/item cursor-pointer p-2.5 rounded-xl transition-all hover:bg-black/[0.015]/80 text-left border border-transparent hover:border-black/[0.02]"
                          >
                            <h4 className="font-sans font-medium text-[13px] text-gray-900 group-hover/item:text-[#7c3aed] transition-colors flex items-center gap-1.5 leading-snug">
                              {sub.name}
                              <ArrowRight size={12} className="opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#7c3aed]" />
                            </h4>
                            <p className="font-sans text-[11px] font-light text-gray-400 leading-relaxed mt-1 max-w-[220px]">
                              {sub.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mega Menu Footer CTA */}
                    <div className="pt-4 border-t border-black/[0.04] mt-6 flex items-center justify-between text-xs text-gray-500 font-sans">
                      <span className="font-sans text-[11px] font-light text-gray-400">
                        Standard timeframe: 2&ndash;4 weeks from kickoff
                      </span>
                      <a
                        href="#contact"
                        onClick={() => setIsMegaOpen(false)}
                        className="text-[#7c3aed] hover:underline font-bold font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5"
                      >
                        Book Free Consultation &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {["Work", "Process", "FAQ"].map((item) => (
            <a
              key={item}
              id={`nav-link-${item.toLowerCase()}`}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-sans font-medium text-gray-600 hover:text-[#111111] hover:bg-[#f0eeee] transition-all duration-200 px-4 py-2 rounded-md"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right - Desktop CTA */}
        <div className="hidden md:block">
          <a
            id="desktop-briefing-cta"
            href="#contact"
            className="inline-block bg-[#111111] hover:bg-neutral-800 hover:shadow-md hover:scale-[1.01] active:scale-[0.98] text-white font-mono text-[13px] font-medium leading-none px-5 py-3 rounded-lg transition-all text-center"
          >
            Book briefing call
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-black p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-nav-drawer" className="md:hidden absolute top-16 left-0 w-full bg-[#faf9f9]/98 backdrop-blur-lg border-b border-gray-200 px-6 py-6 flex flex-col gap-4 animate-fadeIn max-h-[85vh] overflow-y-auto">
          {/* Mobile Accordion for Services */}
          <div>
            <button
              onClick={() => setActiveMobileSection(activeMobileSection === 0 ? null : 0)}
              className="w-full flex items-center justify-between text-base font-sans font-medium text-gray-75 py-2 border-b border-gray-100 text-left"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${activeMobileSection === 0 ? "rotate-180 text-[#7c3aed]" : ""}`} />
            </button>
            
            {activeMobileSection === 0 && (
              <div className="pl-3 mt-3 grid grid-cols-1 gap-5 animate-fadeIn border-l border-black/[0.06] text-left">
                {SERVICES_DATA.map((service, sIndex) => (
                  <div key={sIndex} className="space-y-2">
                    <span className="text-[10px] uppercase font-mono text-[#7c3aed] tracking-wider font-bold block">{service.title}</span>
                    <ul className="space-y-1.5 pl-1 text-left">
                      {service.subservices.map((sub, subIdx) => (
                        <li 
                          key={subIdx} 
                          onClick={() => {
                            window.location.hash = sub.hash;
                            setIsOpen(false);
                          }}
                          className="cursor-pointer py-0.5"
                        >
                          <span className="font-sans text-[12.5px] font-light text-gray-650 hover:text-black hover:underline transition-colors">
                            {sub.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {["Work", "Process", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-base font-sans font-medium text-[#444] hover:text-black hover:bg-[#f0eeee] px-3 py-2 rounded-md transition-all border-b border-gray-100 pb-2 text-left"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[#111111] hover:bg-neutral-800 text-white text-center font-mono text-sm font-medium py-3 rounded-lg mt-2"
          >
            Book briefing call
          </a>
        </div>
      )}
    </header>
  );
}
