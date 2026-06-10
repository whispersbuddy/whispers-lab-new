import React from "react";

export default function LiveWorkflow() {
  const timelineSteps = [
    { time: "0.0s", event: "User enters credit card & submits signup via Stripe Elements", done: true },
    { time: "0.4s", event: "Stripe secures payment & posts verified webhook trigger back to API", done: true },
    { time: "0.8s", event: "Next.js API route validates hook, updates subscription state, & scales tier limits", done: true },
    { time: "1.2s", event: "Supabase DB registers workspace instance, securing client rows via RLS", done: true },
    { time: "1.8s", event: "Resend API deploys onboarding suite & unique magic session tokens to inbox", done: true }
  ];

  return (
    <section id="mvp-live-example" className="border-b border-white/[0.04] bg-[#0c0c0e] relative z-10 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] items-stretch">
        
        {/* Left Column — Full-bleed image with overlay */}
        <div className="relative overflow-hidden min-h-[350px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90&fit=crop"
            alt="Product architecture with code and interface graphics running in parallel."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          {/* Overlay Stat */}
          <div className="absolute bottom-12 left-12 text-left">
            <div className="font-display font-medium text-7xl sm:text-8xl text-white leading-none tracking-[-0.04em]">
              1.8s
            </div>
            <div className="font-mono text-xs text-white/60 mt-2 uppercase tracking-wider font-extrabold">
              From checkout submit to fully provisioned tenant workspace
            </div>
          </div>
        </div>

        {/* Right Column — Narrative Story & Timeline */}
        <div className="p-8 sm:p-16 bg-[#0c0c0e] text-white flex flex-col justify-center text-left">
          
          <span className="font-mono text-[11px] text-purple-400 uppercase tracking-[0.14em] block font-bold">
            A real-time lifecycle event
          </span>

          <h2 className="font-display font-medium text-white text-[32px] sm:text-[48px] tracking-[-0.03em] leading-none my-6">
            A customer paid for your SaaS subscription.
          </h2>

          <p className="font-sans font-light text-[15px] sm:text-base text-white/60 leading-relaxed mb-8">
            Here's exactly what happens under the hood during our 1.8 second backend provision loop — with zero downtime, zero lag, and perfectly synced user rows.
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
                    {step.done ? '✓ execute success' : '● pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Log / Terminal mockup inline */}
          <div className="border border-white/[0.08] rounded-lg p-5 bg-[#040406] font-mono text-left space-y-3.5 max-w-lg select-none shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] text-white/40 font-semibold ml-2">saas-provisioning-logs</span>
              <span className="font-mono text-[9px] text-purple-400 ml-auto uppercase font-bold">LIVE STREAM</span>
            </div>

            {/* Message Body */}
            <div className="text-[12px] text-white/65 font-light leading-relaxed space-y-1">
              <p className="font-bold text-emerald-400">► [SYSTEM] WEBHOOK CAPTURED (Stripe Prod: ch_91x1e)</p>
              <p><span className="text-white/40">tenant_id:</span> t_9bb210f (VenturePartners LLC)</p>
              <p><span className="text-white/40">db_status:</span> RLS access locked successfully (Table: accounts)</p>
              <p><span className="text-white/40">emails:</span> Onboarding dispatches pushed to queue (Resend API)</p>
              <p className="text-white/20 pt-1">---------------</p>
              <p className="text-white/80 font-semibold">⚡ APP-SERVER-EDGE: COMPLETE PROVISIONING WITH STATUS 200 OK</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
