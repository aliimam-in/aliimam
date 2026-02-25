/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AArrowUp = React.forwardRef<SVGSVGElement, AArrowUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m14 11 4-4 4 4" />
  <path d="M18 16V7" />
  <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
  <path d="M3.304 13h6.392" />
    </svg>
  )
);
AArrowUp.displayName = "AArrowUp";
export const AArrowUpMetadata = { id: "a-arrow-up", baseId: "a-arrow-up", variant: "default", name: "A Arrow Up", category: "letter", tags: [], viewBox: "0 0 24 24" } as const;
export default AArrowUp;
