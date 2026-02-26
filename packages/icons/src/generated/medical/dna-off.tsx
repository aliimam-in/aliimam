/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DnaOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DnaOff = React.forwardRef<SVGSVGElement, DnaOffProps>(
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
      <path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
  <path d="m17 6-2.891-2.891" />
  <path d="M2 15c3.333-3 6.667-3 10-3" />
  <path d="m2 2 20 20" />
  <path d="m20 9 .891.891" />
  <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
  <path d="M3.109 14.109 4 15" />
  <path d="m6.5 12.5 1 1" />
  <path d="m7 18 2.891 2.891" />
  <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
    </svg>
  )
);
DnaOff.displayName = "DnaOff";
export const DnaOffMetadata = { 
  id: "dna-off", 
  baseId: "dna-off", 
  variant: "default", 
  name: "Dna Off", 
  category: "medical", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DnaOff;
