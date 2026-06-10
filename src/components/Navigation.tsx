import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, Layers, Cpu, ArrowRight, Zap, ShoppingBag } from "lucide-react";
import { WhispersLogo } from "./Logo";

const SERVICES_DATA = [
  {
    title: "SaaS MVP Development",
    number: "01",
    icon: Layers,
    color: "from-[#4f46e5] to-[#6366f1]",
    hash: "#services/saas-mvp",
    subservices: [
      "Custom SaaS MVPs",
      "Database & Engine Design",
      "Stripe Subscriptions",
      "Secure Auth & API Setup"
    ]
  },
  {
    title: "Automated Workflows",
    number: "02",
    icon: Zap,
    color: "from-[#ea580c] to-[#f97316]",
    hash: "#services/automation",
    subservices: [
      "n8n & Make Automations",
      "CRM Pipeline Setup",
      "Custom Middleware APIs",
      "Interactive Slack Apps"
    ]
  },
  {
    title: "E-Commerce Systems",
    number: "03",
    icon: ShoppingBag,
    color: "from-[#059669] to-[#10b981]",
    hash: "#services/ecommerce",
    subservices: [
      "Headless Shopify Stores",
      "Core Web Vitals Max",
      "ERP & Logistics Systems",
      "Conversion Optimization"
    ]
  },
  {
    title: "AI & LLM Services",
    number: "04",
    icon: Cpu,
    color: "from-[#7c3aed] to-[#8b5cf6]",
    hash: "#services/saas-mvp",
    subservices: [
      "Autonomous AI Agents",
      "Proprietary RAG Setup",
      "OpenAI & Claude Pipelines",
      "Vector Search & DBs"
    ]
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <button
              id="desktop-services-trigger"
              className={`text-sm font-sans font-medium flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-200 ${
                isMegaOpen ? "text-[#7c3aed] bg-[#f0eeee]" : "text-gray-600 hover:text-[#111111] hover:bg-[#f0eeee]"
              }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega Menu Overlay Dropdown */}
            {isMegaOpen && (
              <div 
                id="mega-menu-panel"
                className="absolute top-14 left-1/2 -translate-x-[40%] w-[900px] bg-white border border border-black/[0.06] rounded-2xl shadow-[0_32px_54px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5 animate-fadeIn z-50"
              >
                <div className="grid grid-cols-4 gap-6">
                  {SERVICES_DATA.map((service, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-3">
                        <div 
                          onClick={() => {
                            window.location.hash = service.hash;
                            setIsMegaOpen(false);
                          }}
                          className="cursor-pointer group/title text-left"
                        >
                          <h4 className="font-sans font-semibold text-[13.5px] text-gray-900 group-hover/title:text-[#7c3aed] transition-colors leading-none">
                            {service.title}
                          </h4>
                        </div>
                        
                        <ul className="space-y-1.5 mt-1 text-left">
                          {service.subservices.map((sub, sIdx) => (
                            <li 
                              key={sIdx} 
                              onClick={() => {
                                window.location.hash = service.hash;
                                setIsMegaOpen(false);
                              }}
                              className="group/item cursor-pointer flex items-center py-0.5 transition-all"
                            >
                              <span className="font-sans text-[12px] text-gray-500 group-hover/item:text-black transition-colors leading-normal font-light">
                                {sub}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom line CTA panel */}
                <div className="mt-1 pt-4 border-t border-black/[0.04] flex items-center justify-end text-xs text-gray-500 font-sans">
                  <a href="#cta" onClick={() => setIsMegaOpen(false)} className="text-[#7c3aed] hover:underline font-bold font-mono text-[9px] uppercase tracking-widest flex items-center gap-1">
                    Book briefing consultation &rarr;
                  </a>
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
            href="#cta"
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
                            window.location.hash = service.hash;
                            setIsOpen(false);
                          }}
                          className="cursor-pointer py-0.5"
                        >
                          <span className="font-sans text-[12.5px] font-light text-gray-650 hover:text-black hover:underline transition-colors">
                            {sub}
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
            href="#cta"
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
