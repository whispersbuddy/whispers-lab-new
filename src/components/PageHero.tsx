import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../hooks/useWindowWidth";

gsap.registerPlugin(ScrollTrigger);

interface CTAConfig {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  sub: string;
  primaryCTA: CTAConfig;
  secondaryCTA?: CTAConfig;
  backgroundImage: string;
  overlayStrength?: number;
}

export default function PageHero({
  eyebrow,
  headline,
  headlineItalic,
  sub,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlayStrength = 0.55
}: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();
  const isMobile = width <= 768;

  useEffect(() => {
    // Entrance animation
    const tl = gsap.timeline();
    tl.fromTo('.hero-eyebrow',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo('.hero-headline',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-sub',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.hero-ctas',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    );

    // Subtle parallax on scroll
    const bgImage = heroRef.current?.querySelector('.hero-bg-image');
    if (bgImage) {
      gsap.to(bgImage, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  // CTA navigation triggers
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: isMobile ? '100svh' : '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: isMobile ? '0 24px' : '0 40px',
        backgroundColor: '#0a0a0c'
      }}
    >
      {/* Background image */}
      <img
        className="hero-bg-image"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          top: '-7.5%',
          pointerEvents: 'none'
        }}
        onError={e => {
          const parent = (e.currentTarget as HTMLElement).parentElement;
          if (parent) parent.style.background = '#0a0a0c';
          (e.currentTarget as HTMLElement).style.display = 'none';
        }}
        referrerPolicy="no-referrer"
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `rgba(10, 10, 12, ${overlayStrength})`,
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Subtle grain texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        maxWidth: 860,
        margin: '0 auto',
        padding: '40px 0'
      }}>

        {/* Eyebrow */}
        {eyebrow && (
          <div
            className="hero-eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 28,
              opacity: 0 // GSAP animates this in
            }}
          >
            <div style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#22C55E',
              animation: 'pulse 2.2s ease-in-out infinite'
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase'
            }}>
              {eyebrow}
            </span>
          </div>
        )}

        {/* Headline */}
        <h1
          className="hero-headline"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(36px, 6vw, 84px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            color: '#ffffff',
            marginBottom: 28,
            opacity: 0 // GSAP animates this in
          }}
        >
          {headline}
          {headlineItalic && (
            <>
              <br />
              <em style={{
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.55)'
              }}>
                {headlineItalic}
              </em>
            </>
          )}
        </h1>

        {/* Sub */}
        <p
          className="hero-sub"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: isMobile ? '15px' : 'clamp(16px, 1.8vw, 19px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            maxWidth: 620,
            margin: '0 auto 40px',
            opacity: 0 // GSAP animates this in
          }}
        >
          {sub}
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            flexDirection: isMobile ? 'column' : 'row',
            opacity: 0 // GSAP animates this in
          }}
        >
          {/* Primary */}
          <a 
            href={primaryCTA.href} 
            onClick={(e) => handleCTAClick(e, primaryCTA.href)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '15px 32px',
              background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
              color: '#fff',
              borderRadius: 10,
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              letterSpacing: '0.01em',
              width: isMobile ? '100%' : 'auto'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {primaryCTA.label}
            <svg width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Secondary */}
          {secondaryCTA && (
            <a 
              href={secondaryCTA.href} 
              onClick={(e) => handleCTAClick(e, secondaryCTA.href)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '15px 28px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.75)',
                borderRadius: 10,
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                fontWeight: 400,
                textDecoration: 'none',
                transition: 'all 0.2s',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              {secondaryCTA.label}
              <svg width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>

        {/* Trust line — below CTAs, minimal */}
        <div style={{
          marginTop: 28,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.06em'
        }}>
          Fixed scope · US & Canada · Since 2021
        </div>
      </div>

      {/* Scroll indicator (hidden on mobile as requested) */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0.35
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: '#fff',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
            Scroll
          </span>
          <div style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #fff, transparent)',
            animation: 'scrollLine 1.8s ease-in-out infinite'
          }} />
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
