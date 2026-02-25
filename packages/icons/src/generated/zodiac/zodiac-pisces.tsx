/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacPiscesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacPisces = React.forwardRef<SVGSVGElement, ZodiacPiscesProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 21a15 15 0 0 1 0-18" />
  <path d="M20 12H4" />
  <path d="M5 3a15 15 0 0 1 0 18" />
    </svg>
  )
);
ZodiacPisces.displayName = "ZodiacPisces";
export const ZodiacPiscesMetadata = { id: "zodiac-pisces", baseId: "zodiac-pisces", variant: "default", name: "Zodiac Pisces", category: "zodiac", tags: [], viewBox: "0 0 24 24" } as const;
export default ZodiacPisces;
