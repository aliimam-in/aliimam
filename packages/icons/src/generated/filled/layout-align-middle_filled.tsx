/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutAlignMiddleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutAlignMiddleFilled = React.forwardRef<SVGSVGElement, LayoutAlignMiddleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3h-4a1 1 0 0 1 0 -2h4v-3a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
LayoutAlignMiddleFilled.displayName = "LayoutAlignMiddleFilled";
export const LayoutAlignMiddleFilledMetadata = { id: "layout-align-middle_filled", baseId: "layout-align-middle", variant: "filled", name: "Layout Align Middle", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default LayoutAlignMiddleFilled;
