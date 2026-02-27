/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoonRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoonRounded = React.forwardRef<SVGSVGElement, MoonRoundedProps>(
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
      <path d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13999C8.97009 5.83999 9.24009 4.60999 9.73009 3.48999C10.2701 2.24999 9.62009 1.65999 8.37009 2.18999C4.41009 3.85999 1.70009 7.84999 2.03009 12.42Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MoonRounded.displayName = "MoonRounded";
export const MoonRoundedMetadata = { 
  id: "moon_rounded", 
  baseId: "moon", 
  variant: "rounded", 
  name: "Moon", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoonRounded;
