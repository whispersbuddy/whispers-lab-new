import React from "react";
import PageHero from "./PageHero";
import TrustMarquee from "./TrustMarquee";

const homeLogos = [
  { url: 'https://cdn.simpleicons.org/nextdotjs/000000', name: 'Next.js' },
  { url: 'https://cdn.simpleicons.org/supabase/3ECF8E', name: 'Supabase' },
  { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
  { url: 'https://cdn.simpleicons.org/openai/412991', name: 'OpenAI' },
  { url: 'https://cdn.simpleicons.org/shopify/96BF48', name: 'Shopify' },
  { url: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'n8n' },
  { url: 'https://cdn.simpleicons.org/vercel/000000', name: 'Vercel' },
  { url: 'https://cdn.simpleicons.org/make/6D00CC', name: 'Make.com' },
];

export default function Hero() {
  return (
    <>
      <PageHero
        eyebrow="Product Engineering Studio · US & Canada"
        headline="Your product team,"
        headlineItalic="without the overhead."
        sub="We embed with early-stage companies to design, build, and ship SaaS products, automation systems, and AI features — as a team, not a ticket queue."
        primaryCTA={{ label: "Start a project", href: "#scoping-booking" }}
        secondaryCTA={{ label: "See our work", href: "#use-cases" }}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=90&fit=crop"
        overlayStrength={0.58}
      />
      <TrustMarquee logos={homeLogos} />
    </>
  );
}
