/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GeminiRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GeminiRounded = React.forwardRef<SVGSVGElement, GeminiRoundedProps>(
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
      <path d="M2 2C8.16 5.69 15.84 5.69 22 2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 22C8.16 18.31 15.84 18.31 22 22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.30005 3.58002L5.43005 3.82001C8.17005 9.03001 8.12005 15.25 5.33005 20.41"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.67 20.41C15.89 15.25 15.84 9.03001 18.57 3.82001L18.7 3.58002"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GeminiRounded.displayName = "GeminiRounded";
export const GeminiRoundedMetadata = { 
  id: "gemini_rounded", 
  baseId: "gemini", 
  variant: "rounded", 
  name: "Gemini", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GeminiRounded;
