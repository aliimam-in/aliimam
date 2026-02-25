/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Grid3x2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grid3x2 = React.forwardRef<SVGSVGElement, Grid3x2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M15 3v18" />
  <path d="M3 12h18" />
  <path d="M9 3v18" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);
Grid3x2.displayName = "Grid3x2";
export const Grid3x2Metadata = { id: "grid-3x2", baseId: "grid-3x2", variant: "default", name: "Grid 3x2", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default Grid3x2;
