/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutDistributeHorizontalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutDistributeHorizontalFilled = React.forwardRef<SVGSVGElement, LayoutDistributeHorizontalFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" />
  <path d="M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" />
  <path d="M16 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
LayoutDistributeHorizontalFilled.displayName = "LayoutDistributeHorizontalFilled";
export const LayoutDistributeHorizontalFilledMetadata = { id: "layout-distribute-horizontal_filled", baseId: "layout-distribute-horizontal", variant: "filled", name: "Layout Distribute Horizontal", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default LayoutDistributeHorizontalFilled;
