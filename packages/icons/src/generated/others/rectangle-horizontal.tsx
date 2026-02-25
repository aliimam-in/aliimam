/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleHorizontal = React.forwardRef<SVGSVGElement, RectangleHorizontalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
);
RectangleHorizontal.displayName = "RectangleHorizontal";
export const RectangleHorizontalMetadata = { id: "rectangle-horizontal", baseId: "rectangle-horizontal", variant: "default", name: "Rectangle Horizontal", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default RectangleHorizontal;
