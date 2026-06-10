import React from "react";

export default function LiveWorkflow() {
  const timelineSteps = [
    { time: "6:47:00 PM", event: "Inbound lead processed via direct webhook trigger", done: true },
    { time: "6:47:02 PM", event: "OpenAI scores intent and drafts briefing payload", done: true },
    { time: "6:47:04 PM", event: "HubSpot contact spawned and assigned to territory rep", done: true },
    { time: "6:47:08 PM", event: "Interactive Slack rich block pushed to sales channel", done: true }
  ];

  return (
    <section id="live-example" className="border-b border-white/[0.04] bg-[#0c0c0e] relative z-10 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] items-stretch">
        
        {/* Left Column — Full-bleed image with overlay */}
        <div className="relative overflow-hidden min-h-[350px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90&fit=crop"
            alt="Automation workflow running in datacenter"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          {/* Overlay Stat */}
          <div className="absolute bottom-12 left-12 text-left">
            <div className="font-display font-medium text-7xl sm:text-8xl text-white leading-none tracking-[-0.04em]">
              8s
            </div>
            <div className="font-mono text-xs text-white/60 mt-2 uppercase tracking-wider font-extrabold">
              from form submit to rep notified
            </div>
          </div>
        </div>

        {/* Right Column — Narrative Story & Timeline */}
        <div className="p-8 sm:p-16 bg-[#0c0c0e] text-white flex flex-col justify-center text-left">
          
          <span className="font-mono text-[11px] text-[#7c3aed] uppercase tracking-[0.14em] block font-bold">
            A real pipeline
          </span>

          <h2 className="font-display font-medium text-white text-[32px] sm:text-[48px] tracking-[-0.03em] leading-none my-6">
            A lead came in at 6:47pm on a Thursday.
          </h2>

          <p className="font-sans font-light text-[15px] sm:text-base text-white/60 leading-relaxed mb-8">
            Here's exactly what happened in the next 8 seconds — and why the rep had everything they needed before opening their laptop Friday morning.
          </p>

          {/* Timeline steps */}
          <div className="space-y-0 mb-8 border-b border-white/[0.06]">
            {timelineSteps.map((step, i) => (
              <div 
                key={i} 
                className="flex gap-4 items-start py-3 border-t border-white/[0.06]"
              >
                <div className="font-mono text-[11px] text-white/40 min-w-[80px] pt-1.5 font-semibold">
                  {step.time}
                </div>
                <div className="space-y-1">
                  <div className="font-sans text-[14px] font-medium text-white/80 leading-snug">
                    {step.event}
                  </div>
                  <div className={`font-mono text-[10px] uppercase font-bold tracking-wider ${step.done ? 'text-emerald-400' : 'text-gray-500'}`}>
                    {step.done ? '✓ complete' : '● trigger'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slack notification mockup inline */}
          <div className="border border-white/[0.08] rounded-lg p-5 bg-[#040406] font-sans text-left space-y-3.5 max-w-lg select-none shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2">
              <div className="w-5 h-5 rounded bg-purple-900 flex items-center justify-center font-bold text-white text-[10px]">
                #
              </div>
              <span className="text-[13px] font-bold text-white/90">ops-leads-alert</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
              <span className="font-mono text-[10px] text-white/30 ml-auto uppercase font-bold">APP</span>
            </div>

            {/* Message Body */}
            <div className="flex gap-3 pt-1">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center font-bold text-white text-[12px] shrink-0 font-mono">
                WL
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[13px] font-extrabold text-white">WhispersLab Ingestion Engine</span>
                  <span className="font-mono text-[9px] text-white/40">6:47:08 PM</span>
                </div>
                
                <div className="text-[13px] text-white/70 font-light leading-relaxed space-y-1">
                  <p className="font-bold text-white">⚡ HIGH INTENT INBOUND DEAL DETECTED</p>
                  <p><span className="font-mono text-[11px] font-semibold text-white/40">Client:</span> VenturePartners AG (SaaS Startup)</p>
                  <p><span className="font-mono text-[11px] font-semibold text-white/40">Contract Value:</span> $12,500/mo (Est.)</p>
                  <p><span className="font-mono text-[11px] font-semibold text-white/40">OpenAI Classification:</span> Highly qualified, ready to pilot in Q3.</p>
                </div>

                {/* Simulated action row */}
                <div className="flex gap-2 pt-1">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider bg-purple-950/40 text-[#a78bfa] border border-purple-900/55 rounded px-2.5 py-1 select-none">
                    CRM Synced (ID: vp_71b)
                  </span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider bg-emerald-950/40 text-emerald-400 border border-emerald-900/55 rounded px-2.5 py-1 select-none">
                    Rep Notified (Sarah K.)
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
