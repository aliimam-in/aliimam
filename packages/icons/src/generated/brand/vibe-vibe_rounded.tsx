/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VibeVibeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VibeVibeRounded = React.forwardRef<SVGSVGElement, VibeVibeRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M9.5 8.5L12 11.9L14.5 8.5H9.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10"/>
<path d="M17 10L12 17L7 10"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VibeVibeRounded.displayName = "VibeVibeRounded";
export const VibeVibeRoundedMetadata = { 
  id: "vibe-vibe_rounded", 
  baseId: "vibe-vibe", 
  variant: "rounded", 
  name: "Vibe Vibe", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VibeVibeRounded;
