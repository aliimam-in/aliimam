/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IndianRupeeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IndianRupee = React.forwardRef<SVGSVGElement, IndianRupeeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 3h12" />
  <path d="M6 8h12" />
  <path d="m6 13 8.5 8" />
  <path d="M6 13h3" />
  <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  )
);
IndianRupee.displayName = "IndianRupee";
export const IndianRupeeMetadata = { id: "indian-rupee", baseId: "indian-rupee", variant: "default", name: "Indian Rupee", category: "finance", tags: [], viewBox: "0 0 24 24" } as const;
export default IndianRupee;
