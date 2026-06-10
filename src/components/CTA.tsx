export default function CTA() {
  return (
    <section className="py-24 bg-[#faf9f9] text-center" id="cta">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Eyebrow */}
        <span className="font-mono text-[11px] text-gray-500 uppercase tracking-[0.12em] block mb-6 font-medium">
          START A PROJECT
        </span>

        {/* Display Header */}
        <h2 className="font-display font-bold text-[#111111] text-[40px] sm:text-[80px] leading-none tracking-[-0.04em] mb-6">
          Ready to engage <br />
          <span className="font-sans font-light italic text-[#555555]">
            a studio that ships?
          </span>
        </h2>

        {/* Muted Slogan Paragraph */}
        <p className="font-sans font-light text-[17px] text-gray-600 leading-[1.75] max-w-[460px] mx-auto mb-11">
          We run a structured intake: a 20-minute briefing call, a written scope document, and a fixed engagement price. No retainer traps. No hourly surprises. Just a team that builds.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-11">
          <a
            href="https://calendly.com"
            referrerPolicy="no-referrer"
            target="_blank"
            className="cta-gradient text-white font-mono text-[13px] font-medium leading-none px-8 py-4.5 rounded-lg active:scale-[0.98] transition-transform shadow-md"
          >
            Start a project →
          </a>
          <a
            href="#work"
            className="bg-transparent hover:bg-gray-100/80 border border-gray-300 text-gray-700 font-mono text-[13px] font-medium leading-none px-8 py-4.5 rounded-lg active:scale-[0.98] transition-all"
          >
            View case studies ↗
          </a>
        </div>

        {/* Trust Factors Checklist */}
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8 mt-4.5">
          {[
            "Free 20-min briefing call",
            "Fixed price, no surprises",
            "Full IP ownership, always"
          ].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <svg
                viewBox="0 0 14 11"
                className="w-3.5 h-3.5 text-green-500 stroke-current fill-none stroke-[2.5]"
              >
                <polyline points="2,5 6,9 12,2" />
              </svg>
              <span className="font-mono text-[11px] text-gray-500 font-medium whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Final Micro Text */}
        <p className="font-mono text-[11px] text-gray-400 mt-6 block">
          Structured intake · dedicated squad · US timezone aligned
        </p>

      </div>
    </section>
  );
}
