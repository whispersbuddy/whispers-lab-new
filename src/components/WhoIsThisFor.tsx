import SectionHeader from "./SectionHeader";

const FIT_ITEMS = [
  "Early-stage SaaS founder needing an MVP shipped in weeks, not months",
  "E-commerce brand needing Shopify custom dev or serious speed work",
  "Agency or SMB drowning in manual ops who need automation that actually runs",
  "US / Canada client comfortable working async, US timezone aligned"
];

const MISFIT_ITEMS = [
  "You need a team embedded 9–5 with daily syncs in your timezone",
  "Your project has no defined scope, budget, or deadline"
];

export default function WhoIsThisFor() {
  return (
    <section className="py-24 border-b border-gray-200 bg-[#faf9f9] text-left">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        
        {/* Left Column */}
        <div>
          <SectionHeader label="Who we work with" />
          <h2 className="font-display font-bold text-[#111111] text-[34px] sm:text-[48px] leading-[1.1] tracking-[-0.02em]">
            Built for founders<br />who need to ship.
          </h2>
          <p className="font-sans font-light text-[15px] text-gray-400 mt-5 leading-relaxed max-w-[340px]">
            We work best with teams that have a validated concept, a clear scope, and a real deadline. Distributed team, US timezone aligned.
          </p>
        </div>

        {/* Right Column Checklist */}
        <div className="flex flex-col">
          {/* Fit Items (Yes) */}
          <div className="flex flex-col">
            {FIT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 items-start py-5 border-b border-gray-200 ${
                  idx === 0 ? "border-t border-gray-200" : ""
                }`}
              >
                {/* Tick Indicator */}
                <span className="w-[18px] h-[18px] rounded-full bg-[#111] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <svg
                    viewBox="0 0 14 11"
                    className="w-2 h-2 text-white stroke-current fill-none stroke-[2.5]"
                  >
                    <polyline points="2,5 6,9 12,2" />
                  </svg>
                </span>
                <span className="font-sans font-light text-sm text-gray-700 leading-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Divider with centered text */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#faf9f9] px-4 font-mono text-[11px] text-gray-400 uppercase tracking-wider">
                — probably not the right fit —
              </span>
            </div>
          </div>

          {/* Misfit Items (No) */}
          <div className="flex flex-col">
            {MISFIT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 items-start py-5 border-b border-gray-250 ${
                  idx === 0 ? "border-t border-gray-200" : ""
                }`}
              >
                {/* Cross Indicator */}
                <span className="w-[18px] h-[18px] rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5 bg-transparent">
                  <svg
                    viewBox="0 0 12 12"
                    className="w-1.5 h-1.5 text-gray-400 stroke-current fill-none stroke-[2.5]"
                  >
                    <path d="M2,2 L10,10 M10,2 L2,10" />
                  </svg>
                </span>
                <span className="font-sans font-light text-sm text-gray-400 leading-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
