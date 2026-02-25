/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalDistributeCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalDistributeCenter = React.forwardRef<SVGSVGElement, AlignVerticalDistributeCenterProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M22 17h-3" />
  <path d="M22 7h-5" />
  <path d="M5 17H2" />
  <path d="M7 7H2" />
  <rect x="5" y="14" width="14" height="6" rx="2" />
  <rect x="7" y="4" width="10" height="6" rx="2" />
    </svg>
  )
);
AlignVerticalDistributeCenter.displayName = "AlignVerticalDistributeCenter";
export const AlignVerticalDistributeCenterMetadata = { id: "align-vertical-distribute-center", baseId: "align-vertical-distribute-center", variant: "default", name: "Align Vertical Distribute Center", category: "align", tags: [], viewBox: "0 0 24 24" } as const;
export default AlignVerticalDistributeCenter;
