/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Circle = React.forwardRef<SVGSVGElement, CircleProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
);
Circle.displayName = "Circle";
export const CircleMetadata = { id: "circle", baseId: "circle", variant: "default", name: "Circle", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default Circle;
