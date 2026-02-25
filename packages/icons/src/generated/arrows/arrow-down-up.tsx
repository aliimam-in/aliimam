/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownUp = React.forwardRef<SVGSVGElement, ArrowDownUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <path d="m21 8-4-4-4 4" />
  <path d="M17 4v16" />
    </svg>
  )
);
ArrowDownUp.displayName = "ArrowDownUp";
export const ArrowDownUpMetadata = { id: "arrow-down-up", baseId: "arrow-down-up", variant: "default", name: "Arrow Down Up", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowDownUp;
