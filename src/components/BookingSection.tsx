import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, MessageSquare, Check, X, ArrowRight, Zap } from "lucide-react";
import { WhispersLogo } from "./Logo";

interface BookingSectionProps {
  serviceName: string;
  accentColor: "purple" | "emerald" | "automation";
  ctaGradient: string;
  id?: string;
}

export default function BookingSection({ serviceName, accentColor, ctaGradient, id = "scoping-booking" }: BookingSectionProps) {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [timeline, setTimeline] = useState("ASAP");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal State
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Accent Colors Mapping
  const glowAccentColor = 
    accentColor === "purple" ? "rgba(168, 85, 247, 0.25)" :
    accentColor === "emerald" ? "rgba(16, 185, 129, 0.25)" :
    "rgba(124, 58, 237, 0.25)";

  const ringAccentClass = 
    accentColor === "purple" ? "focus:ring-purple-500/15 focus:border-purple-600" :
    accentColor === "emerald" ? "focus:ring-emerald-500/15 focus:border-emerald-600" :
    "focus:ring-indigo-500/15 focus:border-[#7c3aed]";

  const bannerTextAccent = 
    accentColor === "purple" ? "text-purple-600" :
    accentColor === "emerald" ? "text-emerald-600" :
    "text-[#7c3aed]";

  // Dynamic Service Typography based on requested intent
  const labelText = "Replies within one business day";
  let headingText = "Building AI? Let’s talk.";
  let descriptionText = "Tell us what you’re building and we’ll get back with a scoped sprint.";

  if (serviceName.includes("SaaS MVP")) {
    headingText = "Building SaaS? Let’s talk.";
    descriptionText = "Tell us what you’re building and we’ll get back with a scoped sprint.";
  } else if (serviceName.includes("Automation")) {
    headingText = "Building Automation? Let’s talk.";
    descriptionText = "Tell us what you’re automating and we’ll get back with a completed flowchart and scoped sprint.";
  } else if (serviceName.includes("E-Commerce") || serviceName.includes("Ecommerce")) {
    headingText = "Building Storefronts? Let’s talk.";
    descriptionText = "Tell us about your custom store or migration goals and we’ll get back with a performance-first scoped sprint.";
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormSubmitted(true);
    }, 1100);
  };

  return (
    <div id={id} className="relative select-none">
      
      {/* SECTION 1: ATTRACTIVE, SIMPLIFIED, CENTRED & BORDERLESS FORM COMPONENT */}
      <section className="py-24 sm:py-32 bg-[#fafafc] text-[#111111] border-b border-[#e8e6e3] relative overflow-hidden text-center">
        {/* Beautiful high-tech grid backdrop pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e3e3e8_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        
        {/* Centered intense blur element in the background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-[0.35] pointer-events-none" 
          style={{ backgroundColor: glowAccentColor }}
        />

        <div className="max-w-[620px] mx-auto px-6 relative z-10 space-y-10">
          
          {/* Custom Header Text Block */}
          <div className="space-y-4">
            <span className={`font-mono text-xs font-bold uppercase tracking-widest ${bannerTextAccent} block`}>
              {labelText}
            </span>
            <h2 className="font-display font-medium text-[#111111] text-[36px] sm:text-[48px] leading-[1.05] tracking-[-0.03em]">
              {headingText}
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-[465px] mx-auto">
              {descriptionText}
            </p>
          </div>

          {/* Luxury high-contrast elevated white glass Briefing Card */}
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] text-left border border-black/[0.04]">
            
            <AnimatePresence mode="wait">
              {!isFormSubmitted ? (
                <motion.form
                  key="dark-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -15 }}
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[9px] text-[#888888] uppercase tracking-widest font-bold">
                      Your Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        <User size={14} />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Mercer"
                        className={`w-full bg-[#fafafc] border border-[#e8e6e3] rounded-xl pl-10 pr-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 transition-all outline-hidden ${ringAccentClass}`}
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[9px] text-[#888888] uppercase tracking-widest font-bold">
                      Business Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={14} />
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className={`w-full bg-[#fafafc] border border-[#e8e6e3] rounded-xl pl-10 pr-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 transition-all outline-hidden ${ringAccentClass}`}
                      />
                    </div>
                  </div>

                  {/* Describe field */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[9px] text-[#888888] uppercase tracking-widest font-bold">
                      Tell us what you're building
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-5 text-gray-400">
                        <MessageSquare size={14} />
                      </span>
                      <textarea
                        rows={3}
                        required
                        value={brief}
                        onChange={(e) => setBrief(e.target.value)}
                        placeholder="Describe your core business logic, database integrations, or migration targets..."
                        className={`w-full bg-[#fafafc] border border-[#e8e6e3] rounded-xl pl-10 pr-4 py-3.5 text-sm text-[#111111] placeholder:text-gray-400 transition-all outline-hidden resize-none ${ringAccentClass}`}
                      />
                    </div>
                  </div>

                  {/* Target Launch timeline */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[9px] text-[#888888] uppercase tracking-widest font-bold">
                      Target Launch Window
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["ASAP", "1–2 Months", "3–6 Months", "Flexible"].map((windowOpt) => {
                        const isSelected = timeline === windowOpt;
                        return (
                          <button
                            key={windowOpt}
                            type="button"
                            onClick={() => setTimeline(windowOpt)}
                            className={`py-2 text-[11px] font-mono font-bold rounded-lg text-center transition-all border cursor-pointer outline-hidden ${
                              isSelected
                                ? "bg-[#111111] text-white border-[#111111]"
                                : "bg-[#fafafc] text-gray-500 border-black/[0.04] hover:text-black hover:border-black/20"
                            }`}
                          >
                            {windowOpt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Centered submit button with proper arrow icon */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#111111] hover:bg-black text-white font-mono text-[11px] font-bold uppercase py-4 rounded-xl text-center tracking-wider transition-all select-none duration-150 relative active:scale-[0.98] flex items-center justify-center gap-2 ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : "cursor-pointer shadow-[0_12px_24px_-10px_rgba(0,0,0,0.15)]"
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Preparing scoped sprint...</span>
                      ) : (
                        <>
                          <span>Submit Project Specifications</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Simple alternative routing bottom line */}
                  <div className="pt-3.5 border-t border-black/[0.05] text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-sans text-xs text-gray-400">
                    <p>
                      Or reach us directly at{" "}
                      <a 
                        href="mailto:hello@whisperslab.com" 
                        className="text-black hover:underline transition-all font-medium"
                      >
                        hello@whisperslab.com
                      </a>
                    </p>
                    <span className="hidden sm:inline text-black/10">|</span>
                    <button
                      type="button"
                      onClick={() => setIsCalendlyOpen(true)}
                      className="text-black hover:underline font-medium transition-all cursor-pointer"
                    >
                      Book 20-min Briefing &rarr;
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="dark-form-success"
                  className="py-10 text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-150">
                    <Check size={26} className="stroke-[3]" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-medium text-[#111111] text-xl">Specs Transmitted Successfully!</h3>
                    <p className="font-sans font-light text-[13.5px] text-gray-500 max-w-[440px] mx-auto leading-relaxed">
                      Thank you {name}. We have synchronized your layout specifications. Our lead engineer will translate this brief and reach out to you at <strong className="text-black font-medium">{email}</strong> within one business day.
                    </p>
                    <div className="pt-2 animate-pulse">
                      <button
                        type="button"
                        onClick={() => setIsCalendlyOpen(true)}
                        className={`bg-gradient-to-r ${ctaGradient} text-white font-mono text-[10px] font-bold uppercase py-3 px-6 rounded-xl transition-all tracking-wider hover:opacity-95 active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg`}
                      >
                        <span>Schedule Meeting Right Away</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsFormSubmitted(false);
                        setName("");
                        setEmail("");
                        setBrief("");
                      }}
                      className="font-mono text-[9px] text-gray-400 hover:text-black uppercase tracking-widest font-bold underline cursor-pointer"
                    >
                      Submit another project briefing
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* MODAL WINDOW LOADING OFFICIAL EMBEDDED CALENDLY */}
      <AnimatePresence>
        {isCalendlyOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCalendlyOpen(false)}
          >
            {/* Modal Card wrapper */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-150 shadow-2xl w-full max-w-4xl h-[650px] relative overflow-hidden cursor-default flex flex-col"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar controls */}
              <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between bg-[#faf9f9]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-gray-550 font-bold uppercase tracking-widest">
                    WhispersLab live scheduler
                  </span>
                </div>
                <button
                  onClick={() => setIsCalendlyOpen(false)}
                  className="text-gray-400 hover:text-black hover:bg-gray-100 p-1.5 rounded-lg transition-colors flex items-center gap-1 font-mono text-[10px] uppercase font-bold cursor-pointer"
                >
                  Close <X size={15} />
                </button>
              </div>

              {/* Iframe displaying the authentic embedded Calendly widget */}
              <div className="flex-1 w-full h-full bg-white relative">
                {/* Official embedded frame format */}
                <iframe
                  src="https://calendly.com/mr-chadplus?hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="WhispersLab Official Calendly Integration"
                />
              </div>

              {/* Mini footer */}
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-3.5 flex justify-between items-center text-left">
                <span className="font-sans text-xs text-gray-400 font-light flex items-center gap-1.5 flex-1">
                  <Zap size={13} className="text-purple-500 flex-shrink-0" /> Integrated securely via standard Calendly widgets.
                </span>
                <span className="font-mono text-[9px] text-[#999] flex-shrink-0">EST Timezone Window</span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
