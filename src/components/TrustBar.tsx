import React from "react";

const SYSTEM_DOMAINS = [
  "Apex Fintech",
  "Aegis Health",
  "Solis Commerce",
  "Pulse Marketing",
  "Terra PropTech",
  "Nova EdTech",
  "Helix SaaS"
];

export default function TrustBar() {
  return (
    <section className="py-16 border-b border-gray-200 bg-[#faf9f9]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[22%_78%] items-start gap-8 lg:gap-16">
        
        {/* Left Column Label */}
        <div className="text-left">
          <span className="font-label-scale block mb-1 text-gray-400">
            Trusted by teams in
          </span>
          <p className="font-sans font-light text-xs text-gray-500">
            Eminent engineering domains
          </p>
        </div>

        {/* Right Column Layout */}
        <div className="text-left">
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-6">
            {SYSTEM_DOMAINS.map((domain) => (
              <span
                key={domain}
                className="font-display font-medium text-[17px] text-gray-800 tracking-tight"
              >
                {domain}
              </span>
            ))}
          </div>
          <p className="font-sans font-light text-[13px] text-gray-500 leading-relaxed max-w-2xl">
            Many partners operate under high-security guidelines or strict NDAs — we respect that. Our focus is on delivering raw, scalable workspace code rather than decorative badges.
          </p>
        </div>

      </div>
    </section>
  );
}
