import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "colorful";
  showText?: boolean;
}

export function WhispersLogo({ className = "", variant = "light", showText = true }: LogoProps) {
  const isDark = variant === "dark";
  const logoSrc = showText
    ? (isDark ? "/Whispers Lab Dark Logo.svg" : "/Whispers Lab Light Logo.svg")
    : "/Whispers Lab Brand Icon Logo.svg";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Whispers Lab Logo"
        className={showText ? "h-6 sm:h-7 w-auto object-contain" : "h-7 w-7 object-contain"}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export function WhispersFavicon() {
  return (
    <img
      src="/favicon.svg"
      alt="Whispers Lab Favicon"
      className="w-full h-full object-contain"
      referrerPolicy="no-referrer"
    />
  );
}

