import React from "react";

export default function LiveWorkflow() {
  const timelineSteps = [
    { time: "0.0s", event: "User submits order using one-click Apple Pay on headless React storefront", done: true },
    { time: "0.3s", event: "Serverless checkout parses Apple signature, secures payment, & generates Shopify inventory drafts", done: true },
    { time: "0.7s", event: "Postage & tax systems balance regional rates, validate shipping coordinates, & initialize routing slips", done: true },
    { time: "1.1s", event: "Postgres database logs transaction, decrements inventory records across all connected warehouses", done: true },
    { time: "1.6s", event: "System dispatches instant Klaviyo invoice confirmations & prints live physical pick slips on warehouse queues", done: true }
  ];

  return (
    <section id="eco-live-example" className="border-b border-white/[0.04] bg-[#0c0c0e] relative z-10 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] items-stretch">
        
        {/* Left Column — Full-bleed image with overlay */}
        <div className="relative overflow-hidden min-h-[350px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=90&fit=crop"
            alt="Physical warehouse dispatch and computer screens displaying live order streams in parallel."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          {/* Overlay Stat */}
          <div className="absolute bottom-12 left-12 text-left">
            <div className="font-display font-medium text-7xl sm:text-8xl text-white leading-none tracking-[-0.04em]">
              1.6s
            </div>
            <div className="font-mono text-xs text-white/60 mt-2 uppercase tracking-wider font-extrabold">
              From apple pay click to printed warehouse packing slips
            </div>
          </div>
        </div>

        {/* Right Column — Narrative Story & Timeline */}
        <div className="p-8 sm:p-16 bg-[#0c0c0e] text-white flex flex-col justify-center text-left">
          
          <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-[0.14em] block font-bold">
            Transactional event lifecycle
          </span>

          <h2 className="font-display font-medium text-white text-[32px] sm:text-[48px] tracking-[-0.03em] leading-none my-6">
            A customer checked out on your storefront.
          </h2>

          <p className="font-sans font-light text-[15px] sm:text-base text-white/60 leading-relaxed mb-8">
            Here's exactly what happens under the hood during our 1.6 second high-speed purchase pipeline — guaranteeing absolute zero buffer lag, zero stock errors, and seamless delivery.
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
                    {step.done ? '✓ pipeline complete' : '● pending'}
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
              <span className="text-[11px] text-white/40 font-semibold ml-2">ecommerce-checkout-logs</span>
              <span className="font-mono text-[9px] text-emerald-400 ml-auto uppercase font-bold">STABLE ASYNC</span>
            </div>

            {/* Message Body */}
            <div className="text-[12px] text-white/65 font-light leading-relaxed space-y-1">
              <p className="font-bold text-emerald-400">► [COMMERCE] ORDER DISPATCH INITIATED (Token: pay_09b8c)</p>
              <p><span className="text-white/40">checkout_rate:</span> 1.61s latency benchmark achieved</p>
              <p><span className="text-white/40">inventory_lock:</span> Inventory decremented successfully (Table: physical_sku)</p>
              <p><span className="text-white/40">marketing:</span> Klaviyo transactional flow active & dispatched successfully</p>
              <p className="text-white/20 pt-1">---------------</p>
              <p className="text-white/80 font-semibold">⚡ SERVICE_STATUS: ORDER PERSISTED & PRINTED ON WAREHOUSE 04 SPRINT LINE</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
