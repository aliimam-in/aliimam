/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacCapricornProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacCapricorn = React.forwardRef<SVGSVGElement, ZodiacCapricornProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" />
  <path d="M7 19V6a3 3 0 0 0-3-3h0" />
  <circle cx="17" cy="17" r="3" />
    </svg>
  )
);
ZodiacCapricorn.displayName = "ZodiacCapricorn";
export const ZodiacCapricornMetadata = { id: "zodiac-capricorn", baseId: "zodiac-capricorn", variant: "default", name: "Zodiac Capricorn", category: "zodiac", tags: [], viewBox: "0 0 24 24" } as const;
export default ZodiacCapricorn;
