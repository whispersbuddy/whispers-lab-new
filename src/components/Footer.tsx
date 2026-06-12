import React, { useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { WhispersLogo } from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const width = useWindowWidth();
  const isMobile = width <= 768;

  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("scoping-booking");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-[#111111] border-t border-[#e8e6e3] relative z-20 pt-24 sm:pt-32 pb-8 overflow-hidden">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 md:gap-16 pb-20">

        {/* Column 1 — Brand */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <WhispersLogo variant="colorful" showText={true} />
          </div>

          {/* Descriptor */}
          <p className="font-sans text-[14.5px] font-light text-[#555555] leading-relaxed max-w-[280px]">
            A product engineering studio building SaaS products,
            automation systems, and AI features for companies
            in the US and Canada.
          </p>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-black/[0.06] rounded-lg bg-[#fafafc]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="font-mono text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
              Available for new projects
            </span>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <div className="font-mono text-[10px] text-gray-400 text-uppercase tracking-[0.14em] font-bold uppercase mb-6">
            What we build
          </div>
          <div className="space-y-3.5">
            {[
              { label: 'SaaS MVP Development', href: '#services/saas-mvp' },
              { label: 'Business Automation', href: '#services/automation' },
              { label: 'Commerce Engineering', href: '#services/ecommerce' },
              { label: 'AI Feature Integration', href: '#services/saas-mvp' },
            ].map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="block font-sans text-sm font-light text-[#555555] hover:text-black hover:font-normal transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 — Company */}
        <div>
          <div className="font-mono text-[10px] text-gray-400 text-uppercase tracking-[0.14em] font-bold uppercase mb-6">
            Company
          </div>
          <div className="space-y-3.5">
            {[
              { label: 'Work', href: '#work' },
              { label: 'About', href: '#scoping-booking' },
              { label: 'Blog', href: '#scoping-booking' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="block font-sans text-sm font-light text-[#555555] hover:text-black hover:font-normal transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 4 — Start a project */}
        <div className="space-y-5">
          <div className="font-mono text-[10px] text-gray-400 text-uppercase tracking-[0.14em] font-bold uppercase mb-1">
            Start a project
          </div>

          <p className="font-sans text-[14px] font-light text-[#555555] leading-relaxed">
            20-minute call. Fixed quote within 48 hours.
            No commitment required.
          </p>

          <a 
            href="#scoping-booking" 
            onClick={handleScrollToBooking} 
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider transition-opacity hover:opacity-90 shadow-md"
          >
            Book a briefing call &rarr;
          </a>

          {/* Trust line */}
          <div className="font-mono text-[10px] text-gray-400 font-medium">
            Since 2021 · 100% Client Satisfaction Guaranteed
          </div>
        </div>
      </div>

      {/* Bottom bar separator line */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="border-t border-black/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold order-2 md:order-1">
            © {currentYear} WhispersLab · All rights reserved.
          </span>

          {/* Links as in screenshot */}
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest order-1 md:order-2">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <span className="text-gray-250 font-normal">·</span>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <span className="text-gray-250 font-normal">·</span>
            <a href="mailto:hello@whisperslab.com" className="hover:text-black transition-colors">hello@whisperslab.com</a>
          </div>

        </div>
      </div>

      {/* Giant backdrop text at the bottom matching the screen-filling Denovers screenshot style */}
      <div className="w-full relative flex justify-center select-none overflow-hidden h-[100px] sm:h-[180px] md:h-[260px] lg:h-[300px] xl:h-[340px] pointer-events-none mt-16 -mb-6 sm:-mb-12">
        <h1 className="font-display font-bold text-[56px] sm:text-[110px] md:text-[170px] lg:text-[230px] xl:text-[290px] tracking-[-0.04em] leading-none text-[#fafafc] text-center select-none w-full absolute bottom-[-5%] sm:bottom-[-8%]">
          WhispersLab
        </h1>
      </div>
    </footer>
  );
}
