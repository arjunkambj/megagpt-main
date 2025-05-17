import React from "react";

interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`w-full mx-auto px-4 my-8 sm:my-16 ${className}`}>
      <div className="relative">
        {/* Main gradient line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Subtle center accent with glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Glow effect */}
          <div className="absolute inset-0 w-28 h-[3px] bg-teal-500/20 blur-sm rounded-full" />

          {/* Main accent line */}
          <div className="relative w-28 h-[3px] bg-gradient-to-r from-teal-500/60 to-teal-400/60 rounded-full shadow-[0_0_5px_rgba(20,184,166,0.3)]" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
