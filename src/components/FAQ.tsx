import { useState } from "react";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "What tech stack do you typically use?",
    a: "For SaaS MVPs: Next.js, Supabase, Stripe, Vercel. For automation: n8n, Make.com, GoHighLevel, ActiveCampaign. For Shopify: Liquid, Shopify 2.0, custom sections. For AI features: OpenAI API, Claude API, LangChain, pgvector. We use what's best for the job."
  },
  {
    q: "Who owns the code after the project?",
    a: "You do — 100%. Full repo, credentials, and documentation handed over at close. No lock-in, no dependency on us unless you want a retainer."
  },
  {
    q: "What's your pricing model?",
    a: "Fixed-scope for MVPs and one-off builds. Monthly retainer for automation maintenance and ongoing Shopify work. We share pricing ranges upfront — no vague 'contact us' games."
  },
  {
    q: "How do you handle scope changes?",
    a: "Small changes within the spirit of the scope get absorbed. Material changes are scoped separately, written up, and agreed before anything is built."
  },
  {
    q: "Do you work with US and Canada clients remotely?",
    a: "Yes. We're a distributed team with US timezone alignment. EST morning overlap has never been an issue for any client we've worked with."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, on request. Standard practice for us, especially on pre-launch products."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 border-b border-gray-200 bg-white text-left" id="faq">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
        
        {/* Left Column */}
        <div className="lg:sticky lg:top-24">
          <SectionHeader label="FAQ" />
          <h2 className="font-display font-bold text-[#111111] text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
            Questions US clients<br />actually ask.
          </h2>
        </div>

        {/* Right Column - Accordion Items */}
        <div className="flex flex-col w-full">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-t border-gray-200 last:border-b last:border-gray-200 overflow-hidden"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left py-6 flex justify-between items-center gap-6 focus:outline-none group"
                >
                  <span className="font-sans font-medium text-sm sm:text-[15px] text-[#111111] tracking-tight group-hover:text-black transition-colors">
                    {faq.q}
                  </span>
                  
                  {/* Plus/X circle helper */}
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

                {/* Answer Row (Smooth maxheight accordion styling) */}
                <div
                  className="faq-content-transition"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="pb-6 font-sans font-light text-[13.5px] text-gray-500 leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
