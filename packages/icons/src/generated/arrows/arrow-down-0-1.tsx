/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDown01Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDown01 = React.forwardRef<SVGSVGElement, ArrowDown01Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <rect x="15" y="4" width="4" height="6" ry="2" />
  <path d="M17 20v-6h-2" />
  <path d="M15 20h4" />
    </svg>
  )
);
ArrowDown01.displayName = "ArrowDown01";
export const ArrowDown01Metadata = { id: "arrow-down-0-1", baseId: "arrow-down-0-1", variant: "default", name: "Arrow Down 0 1", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowDown01;
