/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UtensilsCrossedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UtensilsCrossed = React.forwardRef<SVGSVGElement, UtensilsCrossedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
  <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
  <path d="m2.1 21.8 6.4-6.3" />
  <path d="m19 5-7 7" />
    </svg>
  )
);
UtensilsCrossed.displayName = "UtensilsCrossed";
export const UtensilsCrossedMetadata = { id: "utensils-crossed", baseId: "utensils-crossed", variant: "default", name: "Utensils Crossed", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default UtensilsCrossed;
