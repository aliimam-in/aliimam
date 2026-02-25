/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BellDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BellDot = React.forwardRef<SVGSVGElement, BellDotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" />
  <circle cx="18" cy="5" r="3" />
    </svg>
  )
);
BellDot.displayName = "BellDot";
export const BellDotMetadata = { id: "bell-dot", baseId: "bell-dot", variant: "default", name: "Bell Dot", category: "notification", tags: [], viewBox: "0 0 24 24" } as const;
export default BellDot;
