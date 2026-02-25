/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp = React.forwardRef<SVGSVGElement, ArrowUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
    </svg>
  )
);
ArrowUp.displayName = "ArrowUp";
export const ArrowUpMetadata = { id: "arrow-up", baseId: "arrow-up", variant: "default", name: "Arrow Up", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowUp;
