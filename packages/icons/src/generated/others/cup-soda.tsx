/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CupSodaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CupSoda = React.forwardRef<SVGSVGElement, CupSodaProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
  <path d="M5 8h14" />
  <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
  <path d="m12 8 1-6h2" />
    </svg>
  )
);
CupSoda.displayName = "CupSoda";
export const CupSodaMetadata = { id: "cup-soda", baseId: "cup-soda", variant: "default", name: "Cup Soda", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default CupSoda;
