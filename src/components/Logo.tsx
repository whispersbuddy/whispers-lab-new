import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function WhispersLogo({ 
  className = "", 
  variant = "light",
  size = "md"
}: LogoProps) {
  const isDark = variant === "dark";

  // These control the visible container size
  const containerSizes = {
    sm:  { height: "32px",  width: "120px" },
    md:  { height: "44px",  width: "160px" },
    lg:  { height: "56px",  width: "200px" },
  };

  // The SVG renders much larger to counteract internal whitespace
  // Adjust the scale multiplier (3, 4, 5) until it looks right
  const svgScales = {
    sm:  { height: "128px", width: "480px" },
    md:  { height: "176px", width: "640px" },
    lg:  { height: "224px", width: "800px" },
  };

  return (
    <div 
      className={`flex items-center select-none overflow-hidden ${className}`}
      style={{
        height: containerSizes[size].height,
        width: containerSizes[size].width,
        position: "relative",
      }}
    >
      <img
        src={isDark ? "/logo-dark.svg" : "/logo-light.svg"}
        alt="Whispers Lab"
        style={{
          height: svgScales[size].height,
          width: svgScales[size].width,
          objectFit: "contain",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "none", // Override any Tailwind max-width
          display: "block",
        }}
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = document.createElement("div");
          fallback.style.cssText = `
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            font-size: 17px;
            letter-spacing: -0.02em;
            color: ${isDark ? "#111111" : "#ffffff"};
          `;
          fallback.innerHTML = `
            <div style="
              width: 28px; height: 28px;
              background: linear-gradient(135deg, #7c3aed, #0ea5e9);
              border-radius: 6px;
              display: flex; align-items: center; justify-content: center;
              flex-shrink: 0;
            ">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" 
                stroke="white" stroke-width="1.5">
                <path d="M8 2L14 8L8 14L2 8Z"/>
              </svg>
            </div>
            <span>Whispers Lab</span>
          `;
          target.parentElement?.appendChild(fallback);
        }}
      />
    </div>
  );
}

export function WhispersFavicon() {
  return (
    <img
      src="/favicon.svg"
      alt="Whispers Lab Favicon"
      className="w-full h-full object-contain block"
      referrerPolicy="no-referrer"
    />
  );
}