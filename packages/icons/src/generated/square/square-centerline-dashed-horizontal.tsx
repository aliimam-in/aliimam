/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareCenterlineDashedHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareCenterlineDashedHorizontal = React.forwardRef<SVGSVGElement, SquareCenterlineDashedHorizontalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
  <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
  <path d="M12 20v2" />
  <path d="M12 14v2" />
  <path d="M12 8v2" />
  <path d="M12 2v2" />
    </svg>
  )
);
SquareCenterlineDashedHorizontal.displayName = "SquareCenterlineDashedHorizontal";
export const SquareCenterlineDashedHorizontalMetadata = { id: "square-centerline-dashed-horizontal", baseId: "square-centerline-dashed-horizontal", variant: "default", name: "Square Centerline Dashed Horizontal", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareCenterlineDashedHorizontal;
