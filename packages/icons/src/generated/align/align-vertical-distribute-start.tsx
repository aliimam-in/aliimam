/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalDistributeStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalDistributeStart = React.forwardRef<SVGSVGElement, AlignVerticalDistributeStartProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="14" height="6" x="5" y="14" rx="2" />
  <rect width="10" height="6" x="7" y="4" rx="2" />
  <path d="M2 14h20" />
  <path d="M2 4h20" />
    </svg>
  )
);
AlignVerticalDistributeStart.displayName = "AlignVerticalDistributeStart";
export const AlignVerticalDistributeStartMetadata = { id: "align-vertical-distribute-start", baseId: "align-vertical-distribute-start", variant: "default", name: "Align Vertical Distribute Start", category: "align", tags: [], viewBox: "0 0 24 24" } as const;
export default AlignVerticalDistributeStart;
