/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpDown = React.forwardRef<SVGSVGElement, ArrowUpDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m21 16-4 4-4-4" />
  <path d="M17 20V4" />
  <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
    </svg>
  )
);
ArrowUpDown.displayName = "ArrowUpDown";
export const ArrowUpDownMetadata = { id: "arrow-up-down", baseId: "arrow-up-down", variant: "default", name: "Arrow Up Down", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowUpDown;
