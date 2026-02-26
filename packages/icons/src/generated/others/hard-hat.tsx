/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HardHatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HardHat = React.forwardRef<SVGSVGElement, HardHatProps>(
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
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
  <path d="M14 6a6 6 0 0 1 6 6v3" />
  <path d="M4 15v-3a6 6 0 0 1 6-6" />
  <rect x="2" y="15" width="20" height="4" rx="1" />
    </svg>
  )
);
HardHat.displayName = "HardHat";
export const HardHatMetadata = { 
  id: "hard-hat", 
  baseId: "hard-hat", 
  variant: "default", 
  name: "Hard Hat", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HardHat;
