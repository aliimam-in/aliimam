/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CurrencyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Currency = React.forwardRef<SVGSVGElement, CurrencyProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="8" />
  <line x1="3" x2="6" y1="3" y2="6" />
  <line x1="21" x2="18" y1="3" y2="6" />
  <line x1="3" x2="6" y1="21" y2="18" />
  <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
);
Currency.displayName = "Currency";
export const CurrencyMetadata = { id: "currency", baseId: "currency", variant: "default", name: "Currency", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Currency;
