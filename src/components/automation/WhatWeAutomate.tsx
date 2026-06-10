import React, { useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";

interface LogoInfo {
  url: string;
  name: string;
}

interface UseCaseCardProps {
  key?: React.Key;
  number: string;
  title: string;
  description: string;
  logos: LogoInfo[];
}

const UseCaseCard = ({ number, title, description, logos }: UseCaseCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="gsap-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? '#ffffff' : '#faf9f9',
        border: '1px solid',
        borderColor: hovered ? 'rgba(124,58,237,0.2)' : '#e8e6e3',
        borderRadius: 16,
        padding: '36px 32px',
        cursor: 'default',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle gradient reveal on hover — top edge only */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        borderRadius: '16px 16px 0 0'
      }} />

      {/* Card number — subtle, top right */}
      <div style={{
        position: 'absolute',
        top: 20,
        right: 24,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: '#ccc'
      }}>
        {number}
      </div>

      {/* Logo row — real platform logos, small */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 24
      }}>
        {logos.map((logo, i) => (
          <div key={i} style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: '#fff',
            border: '1px solid #e8e6e3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img
              src={logo.url}
              alt={logo.name}
              width={16}
              height={16}
              style={{ objectFit: 'contain' }}
              onError={e => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 19,
        fontWeight: 600,
        color: '#111',
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
        marginBottom: 12,
        textAlign: 'left'
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 300,
        color: '#888',
        lineHeight: 1.75,
        margin: 0,
        textAlign: 'left'
      }}>
        {description}
      </p>
    </div>
  );
};

const useCases = [
  {
    title: "Lead capture & routing",
    description: "Every inbound lead automatically lands in your CRM, gets assigned to a rep, and triggers the right sequence. No human in the loop.",
    logos: [
      { url: 'https://cdn.simpleicons.org/typeform/262627', name: 'Typeform' },
      { url: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'n8n' },
      { url: 'https://cdn.simpleicons.org/slack/4A154B', name: 'Slack' },
    ]
  },
  {
    title: "CRM updates & deal tracking",
    description: "Contacts update themselves based on behaviour. Deals move through stages. Tasks get created. Nobody touches a keyboard to make it happen.",
    logos: [
      { url: 'https://cdn.simpleicons.org/hubspot/FF7A59', name: 'HubSpot' },
      { url: 'https://cdn.simpleicons.org/make/6D00CC', name: 'Make' },
    ]
  },
  {
    title: "Client onboarding",
    description: "Contract signed → Slack channel created → welcome email sent → kickoff booked. The entire sequence runs in under 60 seconds.",
    logos: [
      { url: 'https://cdn.simpleicons.org/notion/000000', name: 'Notion' },
      { url: 'https://cdn.simpleicons.org/googlecalendar/4285F4', name: 'Calendar' },
      { url: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'n8n' },
    ]
  },
  {
    title: "Failed payment recovery",
    description: "Stripe fires a webhook. Your automation retries the charge, emails the customer, alerts your team, and pauses access if unresolved.",
    logos: [
      { url: 'https://cdn.simpleicons.org/stripe/635BFF', name: 'Stripe' },
      { url: 'https://cdn.simpleicons.org/activecampaign/356AE6', name: 'ActiveCampaign' },
    ]
  },
  {
    title: "Automated reporting",
    description: "Weekly numbers pulled from every tool, formatted, and delivered to Slack before your Monday standup. Nobody builds a spreadsheet.",
    logos: [
      { url: 'https://cdn.simpleicons.org/googlesheets/34A853', name: 'Sheets' },
      { url: 'https://cdn.simpleicons.org/airtable/2D7FF9', name: 'Airtable' },
      { url: 'https://cdn.simpleicons.org/slack/4A154B', name: 'Slack' },
    ]
  },
  {
    title: "Internal ops automation",
    description: "Approval workflows, invoice processing, hiring pipelines, team alerts. Your ops team handles exceptions — not routine tasks.",
    logos: [
      { url: 'https://cdn.simpleicons.org/notion/000000', name: 'Notion' },
      { url: 'https://cdn.simpleicons.org/slack/4A154B', name: 'Slack' },
      { url: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'n8n' },
    ]
  },
  {
    title: "E-commerce operations",
    description: "Order confirmations, fulfillment updates, review requests, abandoned cart recovery. All triggered at the right moment automatically.",
    logos: [
      { url: 'https://cdn.simpleicons.org/shopify/96BF48', name: 'Shopify' },
      { url: 'https://cdn.simpleicons.org/klaviyo/FFD900', name: 'Klaviyo' },
      { url: 'https://cdn.simpleicons.org/make/6D00CC', name: 'Make' },
    ]
  },
  {
    title: "AI-augmented workflows",
    description: "Emails classified and routed by AI. Leads scored before they hit your CRM. Support tickets triaged automatically. Intelligence in the pipeline.",
    logos: [
      { url: 'https://cdn.simpleicons.org/openai/412991', name: 'OpenAI' },
      { url: 'https://cdn.simpleicons.org/anthropic/CC785C', name: 'Claude' },
      { url: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'n8n' },
    ]
  },
  {
    title: "Custom API integrations",
    description: "Two tools that don't talk to each other natively. We build the bridge — authenticated, rate-limited, error-handled, monitored.",
    logos: [
      { url: 'https://cdn.simpleicons.org/github/181717', name: 'GitHub' },
      { url: 'https://cdn.simpleicons.org/postman/FF6C37', name: 'Postman' },
    ]
  },
];

export default function WhatWeAutomate() {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  return (
    <section id="use-cases" className="py-[100px] bg-white border-b border-[#e8e6e3] relative z-10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center">
        
        {/* Header content */}
        <div style={{ maxWidth: 720, margin: '0 auto 56px', textAlign: 'center' }}>
          <span className="font-mono text-xs text-[#7c3aed] font-bold uppercase tracking-widest block mb-3">
            Automation Ecosystems
          </span>
          <h2 className="gsap-headline font-display font-extrabold text-[#111111] text-[36px] sm:text-[48px] tracking-[-0.03em] leading-[1.1] mb-4">
            9 things your team stops doing.
          </h2>
          <p className="font-sans font-light text-[15px] text-gray-500 max-w-[480px] mx-auto leading-relaxed">
            Permanently. Starting within a month of working with us.
          </p>
        </div>

        {/* Dynamic Responsive Card Grid mapping */}
        <div
          className="gsap-card-group"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 56
          }}
        >
          {useCases.map((item, i) => (
            <UseCaseCard 
              key={i} 
              number={`0${i + 1}`} 
              title={item.title}
              description={item.description}
              logos={item.logos}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
