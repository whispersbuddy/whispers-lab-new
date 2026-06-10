import React from "react";

export default function OurStack() {
  const tools = [
    {
      name: "n8n",
      iconSlug: "n8n",
      brandColor: "EA4B71",
      percentage: "95%",
      filledCount: 5,
      desc: "Our core choice for building complex operating loops. Handles Javascript logic and high-volume triggers that crash simpler systems."
    },
    {
      name: "Make.com",
      iconSlug: "make",
      brandColor: "6D00CC",
      percentage: "90%",
      filledCount: 5,
      desc: "An incredible visual workspace mapper. Standard choice for pipelines where customer staff desire direct, post-handoff transparency."
    },
    {
      name: "GoHighLevel",
      isCustomGHL: true,
      percentage: "92%",
      filledCount: 5,
      desc: "Bespoke CRM mapping structure. We construct fail-safe client acquisition fields, calendar spawns, and payment trackers inside GHL."
    },
    {
      name: "ActiveCampaign",
      iconSlug: "activecampaign",
      brandColor: "356AE6",
      percentage: "85%",
      filledCount: 4,
      desc: "A powerhouse environment for behavioral marketing workflows. Delivers clean, segmented outreach sequences triggered automatically."
    },
    {
      name: "Zapier",
      iconSlug: "zapier",
      brandColor: "FF4A00",
      percentage: "80%",
      filledCount: 4,
      desc: "Kept strictly for lightweight, low-frequency, single-hop webhooks and connecting legacy tools without native direct integrations."
    },
    {
      name: "OpenAI",
      iconSlug: "openai",
      brandColor: "412991",
      percentage: "85%",
      filledCount: 4,
      desc: "Wires direct natural intelligence layers into pipelines. Scoring inbound briefs, classifying tickets, and drafting real-time client replies."
    },
    {
      name: "Slack",
      iconSlug: "slack",
      brandColor: "4A154B",
      percentage: "95%",
      filledCount: 5,
      desc: "The critical human checkpoint. Styled with custom alerts and prompt actions so your staff manages operations inside active chats."
    },
    {
      name: "Stripe",
      iconSlug: "stripe",
      brandColor: "635BFF",
      percentage: "90%",
      filledCount: 5,
      desc: "Flawless payment trigger handling. Syncs corporate cash registers with CRM databases, automatically alerting reps on billing errors."
    }
  ];

  return (
    <section id="tools" className="py-[100px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-left">
        
        {/* Table Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-[42px] sm:text-[64px] text-[#111111] tracking-[-0.03em] leading-[1.0]">
              Tools we know<br />
              deeply.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center h-full">
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#888888] max-w-[320px] leading-[1.75]">
              Not a list of tools we've used once. These are the platforms we've pushed to their limits — we know what they can do and when to use each one.
            </p>
          </div>
        </div>

        {/* Tools row tables */}
        <div className="tools-list flex flex-col gap-0 mt-14 border-t border-[#e8e6e3]">
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="tool-row group grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-6 md:gap-10 items-center py-[24px] border-b border-[#f0eeee] transition-all duration-300 hover:bg-[#faf9f9] hover:px-8 hover:mx-[-32px] md:hover:mx-[-64px] md:hover:px-[64px]"
            >
              
              {/* Col 1: Logo & Tool Name */}
              <div className="flex items-center gap-3">
                {tool.isCustomGHL ? (
                  <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#FC4E00] to-[#FF7A00] flex items-center justify-center shadow-xs shrink-0 select-none">
                    <span className="text-[7.5px] text-white font-mono font-black">GHL</span>
                  </div>
                ) : (
                  <img 
                    src={`https://cdn.simpleicons.org/${tool.iconSlug}/${tool.brandColor}`} 
                    alt={tool.name}
                    className="w-6 h-6 object-contain shrink-0"
                    onError={e => { e.currentTarget.style.display = "none"; }}
                  />
                )}
                <span className="font-display font-medium text-[16px] text-[#111111]">
                  {tool.name}
                </span>
              </div>

              {/* Col 2: Brief Description */}
              <div className="font-sans font-light text-[14px] text-[#888888] leading-[1.6]">
                {tool.desc}
              </div>

              {/* Col 3: Proficiency indicators */}
              <div className="flex items-center justify-between md:justify-end gap-4">
                <span className="font-mono text-[10px] text-[#999999] uppercase tracking-wide">
                  {tool.percentage}
                </span>
                
                {/* 5 small squares */}
                <div className="flex gap-1 shrink-0">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div 
                      key={i} 
                      className={`w-[5px] h-[5px] rounded-[1px] ${
                        i <= tool.filledCount 
                          ? 'bg-gradient-to-tr from-[#7c3aed] to-[#0ea5e9]'
                          : 'bg-[#e8e6e3]'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
