/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutAlignTopFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutAlignTopFilled = React.forwardRef<SVGSVGElement, LayoutAlignTopFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" />
  <path d="M13 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
LayoutAlignTopFilled.displayName = "LayoutAlignTopFilled";
export const LayoutAlignTopFilledMetadata = { id: "layout-align-top_filled", baseId: "layout-align-top", variant: "filled", name: "Layout Align Top", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default LayoutAlignTopFilled;
