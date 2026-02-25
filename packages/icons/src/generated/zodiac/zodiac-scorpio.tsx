/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacScorpioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacScorpio = React.forwardRef<SVGSVGElement, ZodiacScorpioProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" />
  <path d="m22 19-3 3" />
  <path d="M5 19V5.5a1 1 0 0 1 5 0" />
  <path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" />
    </svg>
  )
);
ZodiacScorpio.displayName = "ZodiacScorpio";
export const ZodiacScorpioMetadata = { id: "zodiac-scorpio", baseId: "zodiac-scorpio", variant: "default", name: "Zodiac Scorpio", category: "zodiac", tags: [], viewBox: "0 0 24 24" } as const;
export default ZodiacScorpio;
