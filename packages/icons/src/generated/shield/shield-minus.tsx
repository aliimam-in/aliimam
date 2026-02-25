/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShieldMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShieldMinus = React.forwardRef<SVGSVGElement, ShieldMinusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="M9 12h6" />
    </svg>
  )
);
ShieldMinus.displayName = "ShieldMinus";
export const ShieldMinusMetadata = { id: "shield-minus", baseId: "shield-minus", variant: "default", name: "Shield Minus", category: "shield", tags: [], viewBox: "0 0 24 24" } as const;
export default ShieldMinus;
