/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignHorizontalDistributeStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignHorizontalDistributeStart = React.forwardRef<SVGSVGElement, AlignHorizontalDistributeStartProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="6" height="14" x="4" y="5" rx="2" />
  <rect width="6" height="10" x="14" y="7" rx="2" />
  <path d="M4 2v20" />
  <path d="M14 2v20" />
    </svg>
  )
);
AlignHorizontalDistributeStart.displayName = "AlignHorizontalDistributeStart";
export const AlignHorizontalDistributeStartMetadata = { id: "align-horizontal-distribute-start", baseId: "align-horizontal-distribute-start", variant: "default", name: "Align Horizontal Distribute Start", category: "align", tags: [], viewBox: "0 0 24 24" } as const;
export default AlignHorizontalDistributeStart;
