/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DnaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dna = React.forwardRef<SVGSVGElement, DnaProps>(
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
      <path d="m10 16 1.5 1.5" />
  <path d="m14 8-1.5-1.5" />
  <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
  <path d="m16.5 10.5 1 1" />
  <path d="m17 6-2.891-2.891" />
  <path d="M2 15c6.667-6 13.333 0 20-6" />
  <path d="m20 9 .891.891" />
  <path d="M3.109 14.109 4 15" />
  <path d="m6.5 12.5 1 1" />
  <path d="m7 18 2.891 2.891" />
  <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    </svg>
  )
);
Dna.displayName = "Dna";
export const DnaMetadata = { 
  id: "dna", 
  baseId: "dna", 
  variant: "default", 
  name: "Dna", 
  category: "medical", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dna;
