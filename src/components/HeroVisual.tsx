import React, { useEffect } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { gsap } from "gsap";

const heroVisuals = {
  home: {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&fit=crop",
    alt: "Product engineering team collaborating",
    overlayTitle: "Active engagement",
    overlayValue: "6 engineers & specialists",
    stat: { value: "50+", label: "Products shipped" },
    tag: "Product Engineering Studio"
  },
  automation: {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90&fit=crop",
    alt: "Automation workflow running on screen",
    overlayTitle: "Processing now",
    overlayValue: "8 sec avg · zero human input",
    stat: { value: "4 hrs", label: "Saved daily, per client" },
    tag: "Business Automation"
  },
  saas: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&fit=crop",
    alt: "SaaS dashboard on laptop screen",
    overlayTitle: "Latest ship",
    overlayValue: "Aether Dashboard · 7 weeks",
    stat: { value: "6–8wk", label: "Avg. MVP delivery" },
    tag: "SaaS MVP Development"
  },
  shopify: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90&fit=crop",
    alt: "E-commerce analytics dashboard",
    overlayTitle: "Post-launch",
    overlayValue: "+28% conversion · Lighthouse 100",
    stat: { value: "120%", label: "YoY revenue growth" },
    tag: "Commerce Engineering"
  }
};

const heroLogoStrips = {
  home:       ['nextdotjs', 'supabase', 'stripe', 'openai'],
  automation: ['n8n', 'make', 'slack', 'stripe'],
  saas:       ['nextdotjs', 'supabase', 'stripe', 'vercel'],
  shopify:    ['shopify', 'stripe', 'javascript', 'vercel'],
};

interface HeroVisualProps {
  page: "home" | "automation" | "saas" | "shopify";
}

export default function HeroVisual({ page }: HeroVisualProps) {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  const v = heroVisuals[page] || heroVisuals.home;
  const logos = heroLogoStrips[page] || heroLogoStrips.home;

  useEffect(() => {
    // GSAP entrance animation for HeroVisual as requested
    gsap.fromTo('.hero-visual-panel',
      { opacity: 0, scale: 0.97, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2
      }
    );
  }, [page]);

  return (
    <div 
      className="hero-visual-panel hero-visual" 
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        height: isMobile ? 280 : 520,
        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
        border: '1px solid #e8e6e3',
        width: '100%'
      }}
    >
      {/* Main image with parallax class */}
      <img
        className="gsap-parallax"
        src={v.image}
        alt={v.alt}
        style={{
          width: '100%',
          height: '115%',
          objectFit: 'cover',
          display: 'block',
          transform: 'translateY(-7.5%)'
        }}
        onError={e => {
          (e.currentTarget as HTMLImageElement).style.background = '#f0eeee';
        }}
        referrerPolicy="no-referrer"
      />

      {/* Gradient overlay — subtle, bottom-weighted */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Top-left page tag */}
      <div style={{
        position: 'absolute',
        top: isMobile ? 12 : 20,
        left: isMobile ? 12 : 20,
        background: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 8,
        padding: '6px 12px',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'rgba(255,255,255,0.9)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        zIndex: 10
      }}>
        {v.tag}
      </div>

      {/* Center stat — large, confident */}
      <div style={{
        position: 'absolute',
        top: '46%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 10
      }}>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: isMobile ? 48 : 72,
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          textShadow: '0 2px 24px rgba(0,0,0,0.35)'
        }}>
          {v.stat.value}
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'rgba(255,255,255,0.8)',
          marginTop: 8,
          letterSpacing: '0.06em',
          textShadow: '0 1px 4px rgba(0,0,0,0.4)'
        }}>
          {v.stat.label}
        </div>
      </div>

      {/* Bottom overlay card */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(16px)',
        padding: isMobile ? '12px 16px' : '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        zIndex: 10
      }}>
        {/* Left — live indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <div style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#22C55E',
            flexShrink: 0,
            boxShadow: '0 0 6px #22C55E'
          }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: isMobile ? 10 : 11,
              color: '#333',
              fontWeight: 600
            }}>
              {v.overlayTitle}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: '#888',
              marginTop: 2
            }}>
              {v.overlayValue}
            </div>
          </div>
        </div>

        {/* Right — small logo strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }}>
          {logos.slice(0, isMobile ? 2 : 3).map(slug => (
            <div key={slug} style={{
              width: 24,
              height: 24,
              borderRadius: 5,
              background: '#f5f3f3',
              border: '1px solid #e8e6e3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <img
                src={`https://cdn.simpleicons.org/${slug}/555555`}
                width={13}
                height={13}
                alt={slug}
                onError={e => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          {!isMobile && (
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: '#aaa',
              marginLeft: 4
            }}>
              +more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
