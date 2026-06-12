import SectionHeader from "./SectionHeader";

const TESTIMONIALS_DATA = [
  {
    quote: "Shipped our MVP in exactly 6 weeks. Clean codebase, thorough handoff. We raised a pre-seed round 3 months later.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face",
    author: "Alex M.",
    role: "Co-founder & CEO",
    meta: "B2B SaaS · Pre-seed → Seed funded"
  },
  {
    quote: "Cut our lead processing from 4 hours to 5 minutes. The n8n + GoHighLevel setup runs flawlessly in the background.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face",
    author: "Sarah K.",
    role: "COO",
    meta: "Marketing agency · $3M ARR"
  },
  {
    quote: "Shopify store went from 41 → 94 on PageSpeed. Organic revenue up 22% in the first month after launch.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop&crop=face",
    author: "James R.",
    role: "Head of E-commerce",
    meta: "DTC brand · $8M annual revenue"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 border-b border-gray-200 bg-white text-left">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex-1 text-left">
            <SectionHeader label="Recommendations" />
            <h2 className="font-display font-bold text-[#111111] text-[34px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] max-w-xl">
              What clients say after we ship.
            </h2>
          </div>
          <p className="font-mono text-[11px] text-gray-400 max-w-[200px] leading-relaxed md:text-right">
            via verified client profiles accordingly
          </p>
        </div>

        {/* 3 Testimonials columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between">
              
              {/* Card Quote */}
              <div className="text-left">
                <span className="font-display font-bold text-[80px] text-[#e8e4e4] leading-[0.3] block select-none mb-3">
                  “
                </span>
                <blockquote className="font-display text-gray-800 text-[16.5px] italic leading-[1.65]">
                  {item.quote}
                </blockquote>
              </div>

              {/* Card Author */}
              <div className="mt-8">
                <div className="h-[1px] bg-gray-100 mb-5"></div>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
                    alt={item.author}
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="text-sm font-semibold text-gray-900">
                      {item.author} <span className="font-sans font-light text-gray-400 text-xs">— {item.role}</span>
                    </p>
                    <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                      {item.meta}
                    </p>
                  </div>
                  <span className="font-mono text-[9px] text-[#7c3aed] bg-[#7c3aed]/5 border border-[#7c3aed]/10 rounded px-2.5 py-1 flex-shrink-0 font-bold">
                    Verified
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
