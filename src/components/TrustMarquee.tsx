import React from "react";

interface Logo {
  url: string;
  name: string;
}

interface TrustMarqueeProps {
  logos: Logo[];
}

export default function TrustMarquee({ logos }: TrustMarqueeProps) {
  return (
    <div 
      style={{
        borderBottom: '1px solid #e8e6e3',
        overflow: 'hidden',
        padding: '24px 0',
        background: '#ffffff',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Left fade */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 80,
        background: 'linear-gradient(to right, #ffffff, transparent)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* Repeating logos for a continuous seamless scroll */}
      <div style={{
        display: 'flex',
        animation: 'marqueeScroll 28s linear infinite',
        width: 'max-content'
      }}>
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 32px',
            borderRight: '1px solid #f0eeee',
            flexShrink: 0
          }}>
            <img
              src={logo.url}
              alt={logo.name}
              width={18}
              height={18}
              style={{
                objectFit: 'contain',
                opacity: 0.45,
                filter: 'grayscale(1)'
              }}
              onError={e => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
              referrerPolicy="no-referrer"
            />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: '#adadad',
              whiteSpace: 'nowrap',
              fontWeight: 400
            }}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* Right fade */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 80,
        background: 'linear-gradient(to left, #ffffff, transparent)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
      `}</style>
    </div>
  );
}
